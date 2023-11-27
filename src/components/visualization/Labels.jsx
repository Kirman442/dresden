export const maststandorteLabelClass = {
    labelExpressionInfo: {
        expression: "$feature.mast + ' ' + $feature.nb_rb" //TextFormatting.NewLine
    },
    labelPlacement: "always-horizontal",
    maxScale: 1000,
    minScale: 50000,
    symbol: {
        type: "text",
        color: "red",
        haloSize: 2,
        haloColor: "white",
        font: {
            family: "Arial",
            size: 11,
            // weight: "bold"
        },
        size: 11,
    }
};