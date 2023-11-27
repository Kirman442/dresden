view.when(() => {
    // Create the Editor with the specified layer and a list of field configurations
    editorKataster = new Editor({
        view: view,
        // Hide the snapping controls
        visibleElements: {
            snappingControls: false
        },
        container: document.createElement("div"),
        layerInfos: [{
            layer: landuse,
            formTemplate: {
                // autocasts to FormTemplate
                elements: [
                    // autocasts to FieldElement
                    {
                        type: "field",
                        fieldName: "fclass",
                        label: "Field type",
                        hint: "Please select the correct type"
                    }
                ]
            },
            geometryUpdatesEnabled: false
        }]
    });

    // Execute each time the "Edit feature" action is clicked
    function editThisKataster() {
        // If the Editor's activeWorkflow is null, make the popup not visible
        if (!editorKataster.activeWorkFlow) {
            view.popup.visible = false;
            // Call the Editor update feature edit workflow

            editorKataster.startUpdateWorkflowAtFeatureEdit(
                view.popup.selectedFeature
            );
            view.ui.add(editorKataster, "top-right");
        }

        // Remove the editor widget from the display when the state of the editor's viewModel is "ready" and re-add the popup. Ready state indicates that the initial editor panel displays and is ready for editing.

        // The editor displays a panel to select a feature to update if the user "backs" out of the current edit workflow. This is not needed in this specific workflow as the feature is already selected from the popup. The "ready" state indicates that this initial editor panel is active and was activated via the "back" button. In this example, we remove the editor from the view and replace it with the popup.

        reactiveUtils.when(
            () => editorKataster.viewModel.state === "ready",
            () => {
                // Remove the editor and open the popup again
                view.ui.remove(editorKataster);
                view.popup.open({
                    fetchFeatures: true,
                    shouldFocus: true
                });
            }
        );
    }

    // Event handler that fires each time an action is clicked
    view.popup.on("trigger-action", (event) => {
        if (event.action.id === "edit-this-kataster") {
            editThisKataster();
        }
    });
});

// Watch when the popup is visible
view.popup.watch("visible", (event) => {
    // Check the Editor's viewModel state, if it is currently open and editing existing features, disable popups
    if (editorKataster.viewModel.state === "editing-existing-feature") {
        view.popup.close();
    } else {
        // Grab the features of the popup
        features = view.popup.features;
    }
});

landuse.on("apply-edits", () => {
    // Once edits are applied to the layer, remove the Editor from the UI
    view.ui.remove(editorKataster);

    // Iterate through the features
    features.forEach((feature) => {
        // Reset the template for the feature if it was edited
        feature.popupTemplate = landusePopup;
    });

    // Open the popup again and reset its content after updates were made on the feature
    if (features) {
        view.popup.open({
            features: features
        });
    }

    // Cancel the workflow so that once edits are applied, a new popup can be displayed
    editorKataster.viewModel.cancelWorkflow();
});
