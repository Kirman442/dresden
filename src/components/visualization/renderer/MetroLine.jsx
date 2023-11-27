import WebStyleSymbol from "@arcgis/core/symbols/WebStyleSymbol.js";

const metroLineColors = ["#52b447", "#FF3300", "#15AC99", "#FFCD00", "#7D533D", "#8070B7", "#0B9ADA", "#055A99", "#FF7300"];

const routeMetroLine = {
    type: "simple-line",
    style: "solid",
    cap: "square",
    width: 4
};

export const metroLineRenderer = {
    type: "unique-value",
    valueExpression: `var fcl = $feature.colour; When(fcl == '#52B447', 'U1', fcl == '#FF3300', 'U2', fcl == '#15AC99', 'U3', fcl == '#FFCD00', 'U4',fcl == '#7D533D', 'U5',fcl == '#8070B7', 'U6',fcl == '#0B9ADA', 'U7',fcl == '#055A99', 'U8',fcl == '#FF7300', 'U9','other')`,
    uniqueValueInfos: [
        {
            value: 'U1',
            symbol: { ...routeMetroLine, color: metroLineColors[0] },
            label: "U1"
        }, {
            value: 'U2',
            symbol: { ...routeMetroLine, color: metroLineColors[1] },
            label: "U2"
        }, {
            value: 'U3',
            symbol: { ...routeMetroLine, color: metroLineColors[2] },
            label: "U3"
        }, {
            value: 'U4',
            symbol: { ...routeMetroLine, color: metroLineColors[3] },
            label: "U4"
        }, {
            value: 'U5',
            symbol: { ...routeMetroLine, color: metroLineColors[4] },
            label: "U5"
        }, {
            value: 'U6',
            symbol: { ...routeMetroLine, color: metroLineColors[5] },
            label: "U6"
        }, {
            value: 'U7',
            symbol: { ...routeMetroLine, color: metroLineColors[6] },
            label: "U7"
        }, {
            value: 'U8',
            symbol: { ...routeMetroLine, color: metroLineColors[7] },
            label: "U8"
        }, {
            value: 'U9',
            symbol: { ...routeMetroLine, color: metroLineColors[8] },
            label: "U9"
        }
    ]
};


// const uBahnSymbol = new WebStyleSymbol({
//     name: "subway-station",
//     portal: { url: "https://www.arcgis.com" },
//     styleName: "Esri2DPointSymbolsStyle"
//   });


const uBahnSymbol = {
    type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
    size: 5,
    outline: {
        color: [250, 250, 250, 0.7],
        width: 1.5
    },
    color: [255, 51, 0],
};


// export const stationRenderer = {
//     type: "simple",
//     symbol: { ...uBahnSymbol }
// }

export const stationRenderer = {
    type: "unique-value",
    valueExpression: `var fcl = $feature.linie; When(fcl == 'U1', 'U1', fcl == 'U2', 'U2', fcl == 'U3', 'U3', fcl == 'U4', 'U4',fcl == 'U5', 'U5',fcl == 'U6', 'U6',fcl == 'U7', 'U7',fcl == 'U8', 'U8',fcl == 'U9', 'U9','other')`,
    uniqueValueInfos: [
        {
            value: 'U1',
            symbol: { ...uBahnSymbol, color: metroLineColors[0] },
            label: "U1"
        }, {
            value: 'U2',
            symbol: { ...uBahnSymbol, color: metroLineColors[1] },
            label: "U2"
        }, {
            value: 'U3',
            symbol: { ...uBahnSymbol, color: metroLineColors[2] },
            label: "U3"
        }, {
            value: 'U4',
            symbol: { ...uBahnSymbol, color: metroLineColors[3] },
            label: "U4"
        }, {
            value: 'U5',
            symbol: { ...uBahnSymbol, color: metroLineColors[4] },
            label: "U5"
        }, {
            value: 'U6',
            symbol: { ...uBahnSymbol, color: metroLineColors[5] },
            label: "U6"
        }, {
            value: 'U7',
            symbol: { ...uBahnSymbol, color: metroLineColors[6] },
            label: "U7"
        }, {
            value: 'U8',
            symbol: { ...uBahnSymbol, color: metroLineColors[7] },
            label: "U8"
        }, {
            value: 'U9',
            symbol: { ...uBahnSymbol, color: metroLineColors[8] },
            label: "U9"
        }
    ]
};