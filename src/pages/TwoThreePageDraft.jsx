// import { Outlet, Link } from 'react-router-dom';
import React, { useRef, useEffect } from "react";
import esriConfig from '@arcgis/core/config'
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import GroupLayer from "@arcgis/core/layers/GroupLayer";
import LayerList from "@arcgis/core/widgets/LayerList";
import SceneView from "@arcgis/core/views/SceneView";
import Compass from "@arcgis/core/widgets/Compass";
// import WebMap from "@arcgis/core/WebMap";
// import WebScene from "@arcgis/core/WebScene";
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery'
import Basemap from "@arcgis/core/Basemap";
import Expand from "@arcgis/core/widgets/Expand";
import Slider from "@arcgis/core/widgets/Slider";
// import TextContent from "@arcgis/core/popup/content/TextContent.js";
import UpdateWorkflowData from "@arcgis/core/widgets/Editor/UpdateWorkflowData.js";

import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";
import Editor from "@arcgis/core/widgets/Editor.js";

import { transportCodedValues, powerCodedValues, landuseCodedValues } from '../components/editfeatures/EditorLayerInfos'
import { landusePopup, transportPopup, powerObjectPopup, powerLinePopup } from '../components/popup/layersPopup'
import { stromRenderer3D, stromLineRenderer3D } from '../components/visualization/renderer/Energy'

import constants from '../components/layers/AppLayers'
// import { powerlines, power, transport, landuse } from '../components/layers/AppLayers'
// import constants from '../components/popup/layersPopup'

import { katasterBuildingRenderer, katasterLanduseRenderer } from '../components/visualization/renderer/Kataster'
// import { myappid } from '../oauth';
import "../App.css";
import "../custom.css";

const TwoThreePageDraft = () => {

  const viewDiv = useRef(null);
  const mapViewHook = useRef(null);
  const sceneViewHook = useRef(null);
  const activeViewHook = useRef(null);

  useEffect(() => {
    if (viewDiv.current) {
      /**
       * Initialize application
       */
      esriConfig.apiKey = "AAPTxy8BH1VEsoebNVZXo8HurJQZlWkb1rBQ_BTUXswT6kGz6PtR396fgKsp5EsNB1FY_XoJ6OoCR9o96w1T8rYLpJCpdI_Wy7BWZg_1wx4QK7gLhJ8jCherIpVE23IbieDU3X5opw6KKJl1dkg49oPwfg3wXE3pkqJfnLTnwUEamkJIjB1oBw0kjg_ZMCjOfln3eQAM9ZquGzl6pfUWKGX3IMfV5StjR1tDt_xT_SJ_HtZNMoS3vuo-3JT4YmoCqraXAT1_mde67ubh";

      let editor;
      let features = undefined || []; // changed from  - let features

      const switchButton = document.getElementById("switch-btn");

      const appConfig = {
        mapView: mapViewHook, //null
        sceneView: sceneViewHook, //null
        activeView: activeViewHook, //null
        container: viewDiv.current, // use same container for views
        center: [13.627912, 51.046149],
        zoom: 15,
        navigation: {
          mouseWheelZoomEnabled: false,
          browserTouchPanEnabled: true
        },
        camera: {
          position: [13.627912, 51.046149, 5000], //Position for the 3D view model
          tilt: 25
        },
        environment: {
          lighting: {
            directShadowsEnabled: true
          }
        },
        popup: {
          dockEnabled: true,
          dockOptions: {
            breakpoint: false
          }
        }
      };

      const initialViewParams = {
        zoom: appConfig.zoom,
        center: appConfig.center,
        container: appConfig.container,
        navigation: appConfig.navigation,
        camera: appConfig.camera,
        environment: appConfig.environment,
        popup: appConfig.popup
      };

      const map = new Map({
        basemap: "topo-vector",
        ground: "world-elevation"
      });

      const allGroupLayers = new GroupLayer({
        title: "Dresden Infrastructure",
        visible: true,
        visibilityMode: "independent",
        layers: [constants.landuseGroupLayer, constants.transportGroupLayer, constants.naturGroupLayer, constants.powerGroupLayer],
        opacity: 1
      });
      map.layers.addMany([allGroupLayers]); //map.layers.add(constants.powerGroupLayer);


      async function defineActions(event) {
        const item = event.item;
        await item.layer.when();

        if (item.title === "Dresden Infrastructure") {

          item.actionsSections = [
            [
              {
                title: "Go to full extent",
                className: "esri-icon-zoom-out-fixed",
                id: "full-extent"
              }
            ],
            [
              {
                title: "Increase opacity",
                className: "esri-icon-up",
                id: "increase-opacity"
              },
              {
                title: "Decrease opacity",
                className: "esri-icon-down",
                id: "decrease-opacity"
              }
            ]
          ];
        }
        // Adds a slider for updating a group layer's opacity
        if (item.children.length > 1 && item.parent) {
          const slider = new Slider({
            min: 0,
            max: 1,
            precision: 2,
            values: [1],
            visibleElements: {
              labels: true,
              rangeLabels: true
            }
          });

          item.panel = {
            content: slider,
            className: "esri-icon-sliders-horizontal",
            title: "Change layer opacity"
          };

          slider.on("thumb-drag", (event) => {
            const {
              value
            } = event;
            item.layer.opacity = value;
          });
        }
        // Adds a slider for updating a single layer's opacity
        if (parent.length === 1) {
          const slider = new Slider({
            min: 0,
            max: 1,
            precision: 2,
            values: [1],
            visibleElements: {
              labels: true,
              rangeLabels: true
            }
          });

          item.panel = {
            content: slider,
            className: "esri-icon-sliders-horizontal",
            title: "Change layer opacity"
          };

          slider.on("thumb-drag", (event) => {
            const {
              value
            } = event;
            item.layer.opacity = value;
          });
        }
      }

      // create 2D view and and set active
      appConfig.mapView = createView(initialViewParams, "2d");
      appConfig.mapView.map = map;
      appConfig.activeView = appConfig.mapView;
      appConfig.mapView.when(() => {
        appConfig.injuryPowerLayerRend2D = constants.power.renderer; //stromRenderer
        appConfig.injuryPowerlinesLayerRend2D = constants.powerlines.renderer;
      })

      // create 3D view, won't initialize until container is set
      initialViewParams.container = null;
      initialViewParams.map = map;
      appConfig.sceneView = createView(initialViewParams, "3d");

      // switch the view between 2D and 3D each time the button is clicked
      switchButton.addEventListener("click", () => {
        switchView();
      });

      // Switches the view from 2D to 3D and vice versa
      function switchView() {
        const is3D = appConfig.activeView.type === "3d";
        const activeViewpoint = appConfig.activeView.viewpoint.clone();

        // remove the reference to the container for the previous view
        appConfig.activeView.container = null;

        if (is3D) {
          // if the input view is a SceneView, set the viewpoint on the
          // mapView instance. Set the container on the mapView and flag
          // it as the active view
          constants.power.renderer = appConfig.injuryPowerLayerRend2D;
          constants.powerlines.renderer = appConfig.injuryPowerlinesLayerRend2D;
          appConfig.mapView.viewpoint = activeViewpoint;
          appConfig.mapView.container = appConfig.container;
          appConfig.activeView = appConfig.mapView;
          switchButton.value = "3D"
        } else {
          appConfig.sceneView.viewpoint = activeViewpoint;
          appConfig.sceneView.container = appConfig.container;
          appConfig.activeView = appConfig.sceneView;
          switchButton.value = "2D";
          constants.power.renderer = stromRenderer3D;
          constants.powerlines.renderer = stromLineRenderer3D
        }
      }

      // convenience function for creating either a 2D or 3D view dependant on the type parameter
      function createView(params, type) {
        let view;
        if (type === "2d") {
          view = new MapView(params);
          // {
          //   container: appConfig.container,
          //   map: map,
          //   center: appConfig.center,
          //   zoom: appConfig.zoom,
          //   navigation: appConfig.navigation
          // }

          view.when(() => {
            // Create the LayerList widget with the associated actions
            // and add it to the top-right corner of the view.
            const layerList = new LayerList({
              view: view,
              // executes for each ListItem in the LayerList
              listItemCreatedFunction: defineActions
            });

            // Event listener that fires each time an action is triggered
            layerList.on("trigger-action", (event) => {
              // The layer visible in the view at the time of the trigger.
              const visibleLayer = constants.landuse.visible ? constants.landuse : constants.buildings;  //power, powerlines

              // Capture the action id.
              const id = event.action.id;

              if (id === "full-extent") {
                view.goTo(visibleLayer.fullExtent).catch((error) => {
                  if (error.name != "AbortError") {
                    console.error(error);
                  }
                });
              } else if (id === "increase-opacity") {
                // increase the opacity of the GroupLayer by 0.25
                if (allGroupLayers.opacity < 1) {
                  allGroupLayers.opacity += 0.20;
                }
              } else if (id === "decrease-opacity") {
                // decrease the opacity of the GroupLayer by 0.25
                if (allGroupLayers.opacity > 0) {
                  allGroupLayers.opacity -= 0.20;
                }
              }
            });
            view.ui.add(layerList, "top-right");
          });

          view.when(() => {
            // Create the Editor with the specified layer and a list of field configurations
            editor = new Editor({
              view: view,
              // Hide the snapping controls
              visibleElements: {
                snappingControls: false
              },
              container: document.createElement("div"),
              layerInfos: [
                {
                  layer: constants.landuse,
                  formTemplate: {
                    // autocasts to FormTemplate
                    elements: [
                      // autocasts to FieldElement
                      {
                        type: "field",
                        fieldName: "fclass",
                        label: "Field type",
                        hint: "Select the correct land type",
                        domain: {
                          codedValues: landuseCodedValues,
                          type: "coded-value"
                        },
                      }
                    ]
                  },
                  geometryUpdatesEnabled: false
                },
                {
                  layer: constants.transport,
                  formTemplate: {
                    elements: [
                      {
                        type: "field",
                        fieldName: "fclass",
                        label: "Field type",
                        hint: "Select the correct transport type",
                        domain: {
                          codedValues: transportCodedValues, //landuseCodedValues
                          type: "coded-value"
                        },
                      },
                    ]
                  },
                  geometryUpdatesEnabled: false
                },
                {
                  layer: constants.power,
                  formTemplate: {
                    elements: [
                      {
                        type: "field",
                        fieldName: "fclass",
                        label: "Object type",
                        hint: "Select the correct Power object type",
                        domain: {
                          codedValues: powerCodedValues,
                          type: "coded-value"
                        }
                      },
                      {
                        type: "field",
                        fieldName: "name",
                        label: "Object name",
                        hint: "Input Power object name"
                      }
                    ]
                  },
                  geometryUpdatesEnabled: false
                }
              ]
            });

            // Execute each time the "Edit feature" action is clicked
            function editThisLayer() {
              // If the Editor's activeWorkflow is null, make the popup not visible
              if (!editor.activeWorkFlow) {
                view.popup.visible = false;
                // Call the Editor update feature edit workflow

                editor.startUpdateWorkflowAtFeatureEdit(
                  view.popup.selectedFeature
                );
                view.ui.add(editor, "top-right");
              }

              // Remove the editor widget from the display when the state of the editor's viewModel is "ready" and re-add the popup. Ready state indicates that the initial editor panel displays and is ready for editing.

              // The editor displays a panel to select a feature to update if the user "backs" out of the current edit workflow. This is not needed in this specific workflow as the feature is already selected from the popup. The "ready" state indicates that this initial editor panel is active and was activated via the "back" button. In this example, we remove the editor from the view and replace it with the popup.

              // reactiveUtils.when(
              //   () => editor.viewModel.state === "ready",
              //   () => {
              //     // Remove the editor and open the popup again
              //     view.ui.remove(editor);
              //     view.popup.open({
              //       fetchFeatures: true,
              //       shouldFocus: true
              //     });
              //   }
              // );
              // }
              reactiveUtils.when(
                () => editor.viewModel.state === "ready",
                () => {
                  // Remove the editor and open the popup again
                  view.ui.remove(editor);
                  view.openPopup({
                    fetchFeatures: true,
                    shouldFocus: true
                  });
                }
              );
            }


            // Event handler that fires each time an action is clicked
            reactiveUtils.on(
              () => view.popup,
              "trigger-action",
              (event) => {
                if (event.action.id === "edit-this-kataster") {
                  editThisLayer();
                } else if (event.action.id === "edit-this-transport") {
                  editThisLayer();
                } else if (event.action.id === "edit-this-powerline")
                  editThisLayer();
              }
            );
          });

          reactiveUtils.watch(
            () => view.popup?.visible,
            (event) => {
              if (editor.viewModel.state === "editing-existing-feature") {
                view.closePopup();
              } else {
                features = view.popup.features;
              }
            }
          );


          constants.landuse.on("apply-edits", () => {
            // Once edits are applied to the layer, remove the Editor from the UI
            view.ui.remove(editor);
            // Iterate through the features
            features.forEach((feature) => {
              // console.log(element);
              // Reset the template for the feature if it was edited
              feature.popupTemplate = landusePopup;
            });
            // Open the popup again and reset its content after updates were made on the feature
            if (features) {
              view.openPopup({
                features: features
              });
            }
            // Cancel the workflow so that once edits are applied, a new popup can be displayed
            editor.viewModel.cancelWorkflow();
          });

          constants.transport.on("apply-edits", () => {
            view.ui.remove(editor);
            // Iterate through the features
            features.forEach((feature) => {
              feature.popupTemplate = transportPopup;
            });
            if (features) {
              view.openPopup({
                features: features
              });
            }
            editor.viewModel.cancelWorkflow();
          });

          constants.power.on("apply-edits", () => {
            view.ui.remove(editor);
            // Iterate through the features
            features.forEach((feature) => {
              feature.popupTemplate = powerObjectPopup;
            });
            if (features) {
              view.openPopup({
                features: features
              });
            }
            editor.viewModel.cancelWorkflow();
          });

          let basemapGallery = new BasemapGallery({
            view: view,
            source: [Basemap.fromId("topo-vector"), Basemap.fromId("arcgis-nova"), Basemap.fromId("arcgis-colored-pencil")],
            disabled: false
          });

          let compass = new Compass({
            view: view
          });

          const bgExpand = new Expand({
            view: view,
            content: basemapGallery,
            autoCollapse: true
          });

          view.ui.add([compass, bgExpand], "top-left");
          return view;
        }
        else {
          view = new SceneView(params);
          view.navigation = {
            mouseWheelZoomEnabled: true,
            browserTouchPanEnabled: true
          };

          view.when(() => {
            // Create the LayerList widget with the associated actions
            // and add it to the top-right corner of the view.
            const layerList = new LayerList({
              view: view,
              // executes for each ListItem in the LayerList
              listItemCreatedFunction: defineActions
            });

            // Event listener that fires each time an action is triggered
            layerList.on("trigger-action", (event) => {
              // The layer visible in the view at the time of the trigger.
              const visibleLayer = constants.landuse.visible ? constants.landuse : constants.buildings;  //power, powerlines

              // Capture the action id.
              const id = event.action.id;

              if (id === "full-extent") {
                view.goTo(visibleLayer.fullExtent).catch((error) => {
                  if (error.name != "AbortError") {
                    console.error(error);
                  }
                });
              } else if (id === "increase-opacity") {
                // increase the opacity of the GroupLayer by 0.25
                if (allGroupLayers.opacity < 1) {
                  allGroupLayers.opacity += 0.20;
                }
              } else if (id === "decrease-opacity") {
                // decrease the opacity of the GroupLayer by 0.25
                if (allGroupLayers.opacity > 0) {
                  allGroupLayers.opacity -= 0.20;
                }
              }
            });
            view.ui.add(layerList, "top-right");
          });

          let basemapGallery = new BasemapGallery({
            view: view,
            source: [Basemap.fromId("topo-vector"), Basemap.fromId("arcgis-nova"), Basemap.fromId("arcgis-colored-pencil")],
            disabled: false
          });

          const bgExpand = new Expand({
            view: view,
            content: basemapGallery,
            autoCollapse: true
          });

          // Buttons and function block for the custom 3D navigation
          // Register events to control

          let rotateClockwise = document.createElement('button');
          rotateClockwise.className = "esri-component esri-widget--button esri-widget esri-interactive rotateClockwise"; //esri-icon-rotate
          rotateClockwise.id = "buttonsDiv";
          rotateClockwise.title = "Rotate Clockwise 90°";
          rotateClockwise.addEventListener("click", () => {
            rotateView(-1);
          });

          let rotateAntiClockwise = document.createElement('button');
          rotateAntiClockwise.className = "esri-component esri-widget--button esri-widget esri-interactive rotateAntiClockwise";
          rotateAntiClockwise.id = "buttonsDiv";
          rotateAntiClockwise.title = "Rotate AntiClockwise 90°";
          rotateAntiClockwise.addEventListener("click", () => {
            rotateView(1);
          });

          let rotateIndicator = document.createElement('button');
          rotateIndicator.className = "esri-component esri-widget--button esri-widget esri-interactive rotateIndicator";
          rotateIndicator.id = "buttonsDiv";
          rotateIndicator.title = "Change view"
          rotateIndicator.addEventListener("click", tiltView);

          view.ui.add([bgExpand], "top-left");
          view.ui.add([rotateClockwise, rotateIndicator, rotateAntiClockwise], "top-left");

          // Watch the change on view.camera
          view.watch("camera", updateIndicator);

          function rotateView(direction) {
            let heading = view.camera.heading;

            // Set the heading of the view to the closest multiple of 90 degrees,
            // depending on the direction of rotation
            if (direction > 0) {
              heading = Math.floor((heading + 1e-3) / 90) * 90 + 90;
            } else {
              heading = Math.ceil((heading - 1e-3) / 90) * 90 - 90;
            }

            view
              .goTo({
                heading: heading
              })
              .catch((error) => {
                if (error.name != "AbortError") {
                  console.error(error);
                }
              });
          };

          function tiltView() {
            // Get the camera tilt and add a small number for numerical inaccuracies
            let tilt = view.camera.tilt + 1e-3;

            // Switch between 3 levels of tilt
            if (tilt >= 80) {
              tilt = 0;
            } else if (tilt >= 40) {
              tilt = 80;
            } else {
              tilt = 40;
            }

            view
              .goTo({
                tilt: tilt
              })
              .catch((error) => {
                if (error.name != "AbortError") {
                  console.error(error);
                }
              });
          };

          function updateIndicator(camera) {
            let tilt = camera.tilt;
            let heading = camera.heading;

            // Update the indicator to reflect the current tilt/heading using
            // css transforms.

            const transform = `rotateX(${0.8 * tilt}deg) rotateY(0) rotateZ(0)`;
            rotateIndicator.style["transform"] = transform;
            rotateIndicator.style["-webkit-transform"] = transform; // Solution for Safari
          };



        }
        return view;
      }
    }
  }, []);
  return (
    <>
      <div className="viewDiv" ref={viewDiv}></div>
      <div id="infoDiv">
        <input
          className="esri-component esri-widget--button esri-widget esri-interactive"
          type="button"
          id="switch-btn"
          value="3D"
        />
      </div>
    </>
  )
}

export { TwoThreePageDraft }