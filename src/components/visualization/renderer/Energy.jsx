import WebStyleSymbol from "@arcgis/core/symbols/WebStyleSymbol.js";
import { towerImage, strommastImg, stationImg, powerplantImg, transformerImg, substationImg, poleImg, energyImg } from '../images'

// Stromline Symbol & Renderer
// field - operator, DB_Energie,ENSO Strom AG, ENSO Netz, ENSO
// field - fclass, line, minor_line, cable,
const stromColors = ["#0051f2", "#377cf6", "#6da7fb", "#ffd173", "#d9963a", "#b35a00", "#92a1a3", "#24455f"];

// const stromColors = ["#ff5000", "#9333ff"];
// style: "long-dash-dot",


let stromLine = {
    type: "simple-line",
    width: 1,
};

export const stromLineRenderer = {
    type: "unique-value",
    legendOptions: {
        title: "Network"
    },
    valueExpression: `var fc = $feature.fclass; var op = $feature.operator; When(op == 'DB_Energie' && fc =='line', 'dbLine', (op == 'ENSO Strom AG' || op == 'ENSO Netz' || op == 'ENSO') && fc =='line', 'ensoLine', (op == 'ENSO Strom AG' || op == 'ENSO Netz' || op == 'ENSO') && fc =='minor_line', 'ensoMinorline', (op == 'ENSO Strom AG' || op == 'ENSO Netz' || op == 'ENSO') && fc =='cable', 'ensoCable', fc =='line', 'otherLine', fc =='minor_line', 'otherMinorline', fc =='cable', 'otherCable','other')`,
    uniqueValueInfos: [
        {
            value: 'dbLine',
            symbol: { ...stromLine, style: "long-dash-dot", color: stromColors[0] },
            label: 'DB Energy - Line'
        }, {
            value: 'ensoLine',
            symbol: { ...stromLine, style: "long-dash-dot", color: stromColors[1] },
            label: 'ENSO Strom AG - Line'
        }, {
            value: 'ensoMinorline',
            symbol: { ...stromLine, style: "short-dash-dot", color: stromColors[2] },
            label: 'ENSO Strom AG - Minor line'
        }, {
            value: 'ensoCable',
            symbol: { ...stromLine, style: "short-dot", color: stromColors[3] },
            label: 'ENSO Strom AG - Cable'
        }, {
            value: 'otherLine',
            symbol: { ...stromLine, style: "long-dash-dot", color: stromColors[4] },
            label: 'Other supplier - Line'
        }, {
            value: 'otherMinorline',
            symbol: { ...stromLine, style: "short-dash-dot", color: stromColors[5] },
            label: 'Other supplier - Minor line'
        }, {
            value: 'otherCable',
            symbol: { ...stromLine, style: "short-dot", color: stromColors[6] },
            label: 'Other supplier - Cable'
        }
    ]
};

// material: { color: "#a382cc" }

let symbolLayersParams = {
    type: 'path',
    profile: 'quad',
    width: 2,
    height: 15,
    cap: 'square',
    anchor: 'bottom',
    join: 'round',
    profileRotation: 'heading'
}

export const stromLineRenderer3D = {
    type: "unique-value",
    legendOptions: {
        title: "Network"
    },
    valueExpression: `var fc = $feature.fclass; var op = $feature.operator; When(op == 'DB_Energie' && fc =='line', 'dbLine', (op == 'ENSO Strom AG' || op == 'ENSO Netz' || op == 'ENSO') && fc =='line', 'ensoLine', (op == 'ENSO Strom AG' || op == 'ENSO Netz' || op == 'ENSO') && fc =='minor_line', 'ensoMinorline', (op == 'ENSO Strom AG' || op == 'ENSO Netz' || op == 'ENSO') && fc =='cable', 'ensoCable', fc =='line', 'otherLine', fc =='minor_line', 'otherMinorline', fc =='cable', 'otherCable','other')`,
    uniqueValueInfos: [
        {
            value: 'dbLine',
            symbol: {
                type: 'line-3d', symbolLayers: {
                    ...symbolLayersParams,
                    material: {
                        color: stromColors[0]
                    }
                }
            },
            label: 'DB Energy - Line'
        }, {
            value: 'ensoLine',
            symbol: {
                type: 'line-3d', symbolLayers: {
                    ...symbolLayersParams,
                    material: {
                        color: stromColors[1]
                    }
                }
            },
            label: 'ENSO Strom AG - Line'
        }, {
            value: 'ensoMinorline',
            symbol: {
                type: 'line-3d', symbolLayers: {
                    ...symbolLayersParams,
                    material: {
                        color: stromColors[2]
                    }
                }
            },
            label: 'ENSO Strom AG - Minor line'
        }, {
            value: 'ensoCable',
            symbol: {
                type: 'line-3d', symbolLayers: {
                    ...symbolLayersParams,
                    material: {
                        color: stromColors[3]
                    }
                }
            },
            label: 'ENSO Strom AG - Cable'
        }, {
            value: 'otherLine',
            symbol: {
                type: 'line-3d', symbolLayers: {
                    ...symbolLayersParams,
                    material: {
                        color: stromColors[4]
                    }
                }
            },
            label: 'Other supplier - Line'
        }, {
            value: 'otherMinorline',
            symbol: {
                type: 'line-3d', symbolLayers: {
                    ...symbolLayersParams,
                    material: {
                        color: stromColors[5]
                    }
                }
            },
            label: 'Other supplier - Minor line'
        }, {
            value: 'otherCable',
            symbol: {
                type: 'line-3d', symbolLayers: {
                    ...symbolLayersParams,
                    material: {
                        color: stromColors[6]
                    }
                }
            },
            label: 'Other supplier - Cable'
        }
    ]
};

// StromPowerObjects Symbol & Renderer
//fclass tower, station, transformer, substation, pole
const imageUri = ["src/images/strommast.png", "src/images/station.png", "src/images/transformer.png", "src/images/substation.png", "src/images/pole.png", "src/images/energy.png"]

const rendererConfig2D = {
    visualVariablesPole: [{
        type: "size",
        field: "Hohe",
        valueUnit: "meters",
        legendOptions: {
            title: "Objects height",
            showLegend: false
        },
        // normalizationField: 'fclass',
        stops: [
            { value: 45, size: 17, label: "45 Meter" },
            { value: 35, size: 15, label: "35 Meter" },
            { value: 8, size: 12 },
            { value: 5, size: 12 },
            { value: 3, size: 12 }
        ]
    }
    ]
}

export const stromRenderer = {
    type: "unique-value",
    legendOptions: {
        title: "Infrastructure"
    },
    field: "fclass",
    defaultSymbol: {
        type: "picture-marker", url: energyImg, width: 10, height: 10
    },
    uniqueValueInfos: [{
        value: "tower",
        symbol: { type: "picture-marker", url: strommastImg },
        label: "Tower"
    }, {
        value: "pole",
        symbol: { type: "picture-marker", url: poleImg },
        label: "Pole"
    }, {
        value: "station",
        symbol: { type: "picture-marker", url: stationImg },
        label: "Station"
    }, {
        value: "transformer",
        symbol: { type: "picture-marker", url: transformerImg },
        label: "Transormer"
    }, {
        value: "substation",
        symbol: { type: "picture-marker", url: substationImg },
        label: "Substation"
    }],
    visualVariables: rendererConfig2D.visualVariablesPole
};


const webStyleSymbolPole = new WebStyleSymbol({
    name: "Powerline_Pole",
    portal: { url: "https://www.arcgis.com" },
    styleName: "EsriInfrastructureStyle"
});

const webStyleSymbolMeter = new WebStyleSymbol({
    name: "Electricity_Meter",
    portal: { url: "https://www.arcgis.com" },
    styleName: "EsriInfrastructureStyle"
});

const webStyleSymbolBox = new WebStyleSymbol({
    name: "Electricity_Box",
    portal: { url: "https://www.arcgis.com" },
    styleName: "EsriInfrastructureStyle"
});

const webStyleSymbolAntena = new WebStyleSymbol({
    name: "Cell_Phone_Antenna",
    portal: { url: "https://www.arcgis.com" },
    styleName: "EsriInfrastructureStyle"
});

const rendererConfig3D = {
    visualVariablesPole: [{
        type: "size",
        field: "Hohe",
        valueUnit: "meters",
        // normalizationField: 'Hohe',
        stops: [
            { value: 45, size: 45 },
            { value: 35, size: 35 },
            { value: 8, size: 8 },
            { value: 5, size: 5 },
            { value: 3, size: 3 }
        ]
    }
    ]
}

export const stromRenderer3D = {
    type: "unique-value",
    legendOptions: {
        title: "Infrastructure"
    },
    field: "fclass",
    defaultSymbol: {
        type: "picture-marker", url: energyImg, width: 10, height: 10
    },
    uniqueValueInfos: [{
        value: "tower",
        symbol: webStyleSymbolAntena,
        label: "Tower"
    }, {
        value: "station",
        symbol: webStyleSymbolMeter,
        label: "Station"
    }, {
        value: "transformer",
        symbol: webStyleSymbolBox,
        label: "Transormer"
    }, {
        value: "substation",
        symbol: webStyleSymbolBox,
        label: "Substation"
    }, {
        value: "pole",
        symbol: webStyleSymbolPole,
        label: "Pole"
    }],
    visualVariables: rendererConfig3D.visualVariablesPole
};