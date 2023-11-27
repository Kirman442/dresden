async function defineActions(event) {
    const item = event.item;
    await item.layer.when();

    if (item.title === "All Group Layers") {

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