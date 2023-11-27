//fclass tree, peak, spring
const naturcolors = ["green", "blue", "brown", "black"];
const naturSymbol = {
    type: "simple-marker",
    size: "6px",
    outline: { 
        color: "white",
        width: .4
      }
};

export const naturRenderer = {
    type: "unique-value",
    field: "fclass",
    defaultSymbol: {
        type: "simple-marker", size: "3px", color: naturcolors[3], outline: {
            color: "white",
            width: .4
        }
    },
    uniqueValueInfos: [{
        value: "tree",
        symbol: {
            ...naturSymbol,
            color: naturcolors[0]
        }
    },{
        value: "peak",
        symbol: {
            ...naturSymbol,
            color: naturcolors[1]
        }
    },{
        value: "spring",
        symbol: {
            ...naturSymbol,
            color: naturcolors[2],
        }
    }]
};

// StromPowerObjects Symbol & Renderer
//fclass tower, station, transformer, substation, pole
const imageUri = ["src/images/strommast.png", "src/images/station.png", "src/images/transformer.png", "src/images/substation.png", "src/images/pole.png", "src/images/energy.png"]

const stromMast = {
    type: "picture-marker",
    url: imageUri[0],
    width: 10,
    height: 10
};

const stromStation = {
    type: "picture-marker",
    url: imageUri[1],
    width: 14,
    height: 14
};

const stromTransformer = {
    type: "picture-marker",
    url: imageUri[2],
    width: 12,
    height: 12
};

const stromSubstation = {
    type: "picture-marker",
    url: imageUri[3],
    width: 12,
    height: 12
};

const stromPole = {
    type: "picture-marker",
    url: imageUri[4],
    width: 10,
    height: 10
};


export const stromRenderer = {
    type: "unique-value",
    legendOptions: {
        title: "Infrastructure"
    },
    field: "fclass",
    defaultSymbol: {
        type: "picture-marker", url: imageUri[5], width: 10, height: 10
    },
    uniqueValueInfos: [{
        value: "tower",
        symbol: stromMast,
        label: "Tower"
    }, {
        value: "station",
        symbol: stromStation,
        label: "Station"
    }, {
        value: "transformer",
        symbol: stromTransformer,
        label: "Transormer"
    }, {
        value: "substation",
        symbol: stromSubstation,
        label: "Substation"
    }, {
        value: "pole",
        symbol: stromPole,
        label: "Pole"
    }]
};

// Stromline Symbol & Renderer
// field - operator, DB_Energie,ENSO Strom AG, ENSO Netz, ENSO
// Esri color ramps - Purple and Orange 1
// #ff5000,#9333ff
const stromColors = ["#ff5000", "#9333ff"];

let stromLine = {
    type: "simple-line",
    style: "long-dash-dot",
    width: 1,
    // color: [32, 11, 213, 0.7]
};

const dbEnergyLine = {
    ...stromLine,
    color: stromColors[0]
};

const ensoLine = {
    ...stromLine,
    color: stromColors[1]
}

export const stromLineRenderer = {
    type: "unique-value",
    legendOptions: {
        title: "Network"
    },
    valueExpression: "When($feature.operator == 'DB_Energie', 'db', $feature.operator == 'ENSO Strom AG' || $feature.operator == 'ENSO Netz' || $feature.operator == 'ENSO', 'enso', 'other')",
    uniqueValueInfos: [
        {
            value: 'db',
            symbol: dbEnergyLine,
            label: 'DB Energy'
        },{
            value: 'enso',
            symbol: ensoLine,
            label: 'ENSO Strom AG'
        }
    ]
};


// Roads Symbol & Renderer
// field - maxspeed, 130 - 120, 100 - 80, 70 - 50, 50 - 30, 30 - 0, field - name
// Esri color ramps - Moonstones
// const colors = ["#a0c8dd", "#84a3b3", "#7e8daa", "#7878a2", "#726299", "#524573"];
const roadColors = ["#524573", "#726299", "#7878a2", "#7e8daa", "#84a3b3", "#a0c8dd"];

const roadLine = {
    type: "simple-line",
    style: "solid",
    cap: "square"
  };
const autobahnLinie = {
    ...roadLine,
    color: roadColors[0],
    width: 2
};

const schnellLinie = {
    ...roadLine,
    color: roadColors[1],
    width: 1.5
};

const stadtLinie = {
    ...roadLine,
    color: roadColors[2],
    width: 1
};

const zone30Linie = {
    ...roadLine,
    color: roadColors[4],
    width: .5
};
const otherLinie = {
    ...roadLine,
    color: roadColors[5],
    width: .3
};

export const roadRenderer = {
    type: "unique-value",
    legendOptions: {
        title: "Roads Type"
    },
    valueExpression: "When($feature.maxspeed >= 100, 'autobahn', $feature.maxspeed < 100 && $feature.maxspeed >=70, 'schnell', $feature.maxspeed < 70 && $feature.maxspeed >=30, 'stadtLinie', $feature.maxspeed < 30 && $feature.maxspeed >=10, 'zone30','other')",
    // valueExpression: `let autobahn = "$feature.maxspeed > 120"; return Decode autobahn, 'autobahn'`,
    uniqueValueInfos: [
        {
            value: "autobahn",
            symbol: autobahnLinie,
            label: "Autobahn"
        }, {
            value: "schnell",
            symbol: schnellLinie,
            label: "Schnell"
        }, {
            value: "stadtLinie",
            symbol: stadtLinie,
            label: "Stadt"
        }, {
            value: "zone30",
            symbol: zone30Linie,
            label: "Zone 30"
        }, {
            value: "other",
            symbol: otherLinie,
            label: "Other"
        }
    ]
};


// Dresden Routes
// table - fclass, fields - hiking, bicycle_route
// Esri color ramps - Stone and Gravel
// const routeColors = ["#e6dada", "#b4c9d2"];
// Esri color ramps - Rainforest Frogs
const routeColors = ["#dc4b00", "#3c6ccc"];

const routeLine = {
    type: "simple-line",
    style: "solid",
    cap: "square"
  };
const hikingLinie = {
    ...routeLine,
    color: routeColors[0],
    width: 1
};

const bicycleLinie = {
    ...routeLine,
    color: routeColors[1],
    width: 1
};

export const routeRenderer = {
    type: "unique-value",
    legendOptions: {
        title: "Routes Type"
    },
    valueExpression: "When($feature.fclass == 'hiking', 'hi', $feature.fclass == 'bicycle_route', 'bi', 'other')",
    uniqueValueInfos: [
        {
            value: 'hi',
            symbol: hikingLinie,
            label: "Hiking"
        }, {
            value: 'bi',
            symbol: bicycleLinie,
            label: "Bicycle"
        }
    ]
};

// Dresden Transport
// fclass: bus_stop, railway_halt, tram_stop, taxi, helipad
// Esri color ramps - Flower Field
// #e60049,#0bb4ff,#50e991,#e6d800,#9b19f5
const transportColors = ["#e60049", "#0bb4ff", "#50e991", "#e6d800", "#9b19f5", "#cd76d6"];

const transportImages = ["src/images/transport/bus.png", "src/images/transport/train-stop_1.png", "src/images/transport/tram-stop.png", "src/images/transport/taxi-stop.png", "src/images/transport/helipad_1.png"]

const transportSymbol = {
    type: "simple-marker",
    size: 6,
    outline: { 
        color: "white",
        width: .4
      }
};

export const transportRenderer = {
    type: "unique-value",
    legendOptions: {
        title: "Stops Type" 
    },
    valueExpression: "When($feature.fclass == 'bus_stop', 'bus', $feature.fclass == 'railway_halt', 'rlw', $feature.fclass == 'tram_stop', 'tram', \
    $feature.fclass == 'helipad', 'hlpd', 'other')", // dont work - $feature.fclass == 'taxi', 'taxi, Error in the database??
    uniqueValueInfos: [
        {
            value: "bus",
            symbol: {
                ...transportSymbol,
                color: transportColors[0]
            },
            label: "Bus"
        },
        {
            value: "rlw",
            symbol: {
                ...transportSymbol,
                color: transportColors[1]
            },
            label: "Railway"
        },
        {
            value: "tram",
            symbol: {
                ...transportSymbol,
                color: transportColors[2]
            },
            label: "Tram"
        },
        // {
        //     value: "taxi",
        //     symbol: {
        //         ...transportSymbol,
        //         color: transportColors[3]
        //     },
        //     label: "Taxi"
        // },
        {
            value: "hlpd",
            symbol: {
                ...transportSymbol,
                color: transportColors[4]
            },
            label: "Helipad"
        }, {
            value: "other",
            symbol: {
                ...transportSymbol,
                color: transportColors[5]
            },
            label: "Taxi"
        }
    ]
};


