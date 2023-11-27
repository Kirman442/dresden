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
      const visibleLayer = maststandorteLayer.visible ? freileitungTrassenbandTrasseAchsenLayer : freileitungTrassenbandTrasseLayer;
  
      // Capture the action id.
      const id = event.action.id;
  
      if (id === "full-extent") {
        // if the full-extent action is triggered then navigate
        // to the full extent of the visible layer
        view.goTo(visibleLayer.fullExtent).catch((error) => {
          if (error.name != "AbortError") {
            console.error(error);
          }
        });
      } else if (id === "increase-opacity") {
        // if the increase-opacity action is triggered, then
        // increase the opacity of the GroupLayer by 0.25
  
        if (freileitungsGroupLayer.opacity < 1) {
          allGroupLayer.opacity += 0.20;
        }
      } else if (id === "decrease-opacity") {
        // if the decrease-opacity action is triggered, then
        // decrease the opacity of the GroupLayer by 0.25
  
        if (freileitungsGroupLayer.opacity > 0) {
          allGroupLayer.opacity -= 0.20;
        }
      }
    });
  
    // Add widget to the top right corner of the view
    view.ui.add(layerList, "top-right");
  });