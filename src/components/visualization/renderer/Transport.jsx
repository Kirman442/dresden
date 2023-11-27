// Dresden Transport
// fclass: bus_stop, railway_halt, tram_stop, taxi, helipad
// Esri color ramps - Flower Field
// #e60049,#0bb4ff,#50e991,#e6d800,#9b19f5
const transportColors = ["#e60049", "#0bb4ff", "#50e991", "#e6d800", "#9b19f5", "#cd76d6"];

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
    valueExpression: `var fc =$feature.fclass; When(fc == 'bus_stop', 'bus', fc == 'railway_halt', 'rlw', fc == 'tram_stop', 'tram', \
    fc == 'helipad', 'hlpd', 'other')`, // dont work - $feature.fclass == 'taxi', 'taxi, Error in the database??
    uniqueValueInfos: [
        {
            value: "bus",
            symbol: { ...transportSymbol, color: transportColors[0] },
            label: "Bus"
        },
        {
            value: "rlw",
            symbol: { ...transportSymbol, color: transportColors[1] },
            label: "Railway"
        },
        {
            value: "tram",
            symbol: { ...transportSymbol, color: transportColors[2] },
            label: "Tram"
        },
        {
            value: "taxi",
            symbol: { ...transportSymbol, color: transportColors[3] },
            label: "Taxi"
        },
        {
            value: "hlpd",
            symbol: { ...transportSymbol, color: transportColors[4] },
            label: "Helipad"
        }, {
            value: "other",
            symbol: { ...transportSymbol, color: transportColors[5] },
            label: "Other"
        }
    ]
};

// Dresden Routes
// table - fclass, fields - hiking, bicycle_route
// Esri color ramps - Rainforest Frogs
// #dc4b00,#3c6ccc
const routeColors = ["#dc4b00", "#3c6ccc"];

const routeLine = {
    type: "simple-line",
    style: "solid",
    cap: "square",
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
            symbol: { ...routeLine, color: routeColors[0] },
            label: "Hiking"
        }, {
            value: 'bi',
            symbol: { ...routeLine, color: routeColors[1] },
            label: "Bicycle"
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

export const roadRenderer = {
    type: "unique-value",
    legendOptions: {
        title: "Roads Type"
    },
    valueExpression: `var ms = $feature.maxspeed; When(ms >= 100, 'autobahn', ms < 100 && ms >=70, 'schnell', ms < 70 && ms >=30, 'stadtLinie', ms < 30 && ms >=10, 'zone30','other')`,
    // valueExpression: `let autobahn = "$feature.maxspeed > 120"; return Decode autobahn, 'autobahn'`,
    uniqueValueInfos: [
        {
            value: "autobahn",
            symbol: { ...roadLine, color: roadColors[0], width: 2 },
            label: "Autobahn"
        }, {
            value: "schnell",
            symbol: { ...roadLine, color: roadColors[1], width: 1.5 },
            label: "Schnell"
        }, {
            value: "stadtLinie",
            symbol: { ...roadLine, color: roadColors[2], width: 1 },
            label: "Stadt"
        }, {
            value: "zone30",
            symbol: { ...roadLine, color: roadColors[4], width: .5 },
            label: "Zone30"
        }, {
            value: "other",
            symbol: { ...roadLine, color: roadColors[5], width: .3 },
            label: "Other"
        }
    ]
};
