const LandUseInfosEditorPopup = {
    layer: landuse,
    formTemplate: {
        // autocasts to FormTemplate
        elements: [
            // autocasts to FieldElement
            {
                type: "field",
                fieldName: "fclass",
                label: "Field type",
                hint: "Select the correct land type"
            }
        ]
    },
    geometryUpdatesEnabled: false
};

export default {LandUseInfosEditorPopup}