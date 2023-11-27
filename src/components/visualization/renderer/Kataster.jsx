//Buildings
// field - type, house, shed, garage, garages, residential, apartments, construction, roof, industrial, silo, 
// summer_house, hut, church, kindergarten, shelter, railway, public, barn, retail
// Esri color ramps - Galaxy Berries
// rgba(0, 64, 191, 1),rgba(163, 204, 82, 1),rgba(185, 160, 135, 1),rgba(160, 31, 204, 1),rgba(91, 182, 152, 1)
// + Olive Harmony - "rgba(67, 122, 117, 1)"

const katasterColors = ["rgba(0, 64, 191, .5)", "rgba(163, 204, 82, .5)", "rgba(185, 160, 135, .5)", "rgba(160, 31, 204, .5)", "rgba(91, 182, 152, .5)", "rgba(67, 122, 117, 1)"];

const katasterSimplyFill = {
    type: "simple-fill",
    outline: { width: .5, color: [101, 99, 99, 1] },
};

export const katasterBuildingRenderer = {
    type: "unique-value",
    defaultSymbol: { ...katasterSimplyFill, color: katasterColors[5] },
    legendOptions: {
        title: "Buildings"
    },
    // field: "type",
    valueExpression: `var ft = $feature.type; When(ft == 'residential' || ft == 'apartments' || ft == 'house' || ft == 'summer_house', '1', ft == 'barn' || ft == 'shed' || ft == 'silo' || ft == 'hut', '2', ft == 'garage' || ft == 'garages', '3', ft == 'construction' || ft == 'industrial' || ft == 'retail' || ft == 'railway', '4', ft == 'public' || ft == 'church' || ft == 'kindergarten' || ft == 'shelter', '5','other')`,
    uniqueValueInfos: [
        {
            value: '1',
            symbol: { ...katasterSimplyFill, color: katasterColors[0] },
            label: 'Houses'
        }, {
            value: '2',
            symbol: { ...katasterSimplyFill, color: katasterColors[1] },
            label: 'Farm buildings'
        }, {
            value: '3',
            symbol: { ...katasterSimplyFill, color: katasterColors[2] },
            label: 'Garage'
        }, {
            value: '4',
            symbol: { ...katasterSimplyFill, color: katasterColors[3] },
            label: 'Industrial'
        }, {
            value: '5',
            symbol: { ...katasterSimplyFill, color: katasterColors[4] },
            label: 'Public'
        }
    ]
};
//Land
// field - fclass,  farm, cemetery, park, meadow, forest, scrub, grass, residential, commercial, allotments, nature_reserve, 
// industrial,orchard, heath, vineyard, quarry, recreation_ground, retail
// Esri color ramps - Pastel Dreams
const landuseColors = ["rgba(253, 127, 111, .5)", "rgba(126, 176, 213, .5)", "rgba(178, 224, 97, .5)", "rgba(189, 126, 190, .5)", "rgba(255, 181, 90, 1)", "rgba(255, 238, 101, .5)", "rgba(190, 185, 219, .5)", "rgba(253, 204, 229, .5)", "rgba(139, 211, 199, .5)"];


export const katasterLanduseRenderer = {
    type: "unique-value",
    defaultSymbol: { ...katasterSimplyFill, color: landuseColors[8] },
    legendOptions: {
        title: "Land use"
    },
    // field: "type",
    valueExpression: `var fc = $feature.fclass; When(fc == 'park' || fc == 'meadow' || fc == 'forest' || fc == 'scrub' || fc == 'grass' || fc == 'recreation_ground', '1', fc == 'orchard' || fc == 'vineyard' || fc == 'heath', '2', fc == 'retail' || fc == 'commercial', '3', fc == 'industrial' || fc == 'quarry', '4', fc == 'residential' || fc == 'allotments', '5', fc == 'cemetery', '6', fc == 'farm', '7', fc == 'nature_reserve', '8','other')`,
    uniqueValueInfos: [
        {
            value: '1',
            symbol: { ...katasterSimplyFill, color: landuseColors[0] },
            label: 'Recreation'
        }, {
            value: '2',
            symbol: { ...katasterSimplyFill, color: landuseColors[1] },
            label: 'Gardens'
        }, {
            value: '3',
            symbol: { ...katasterSimplyFill, color: landuseColors[2] },
            label: 'Commercial'
        }, {
            value: '4',
            symbol: { ...katasterSimplyFill, color: landuseColors[3] },
            label: 'Industrial'
        }, {
            value: '5',
            symbol: { ...katasterSimplyFill, color: landuseColors[4] },
            label: 'Residential'
        }, {
            value: '6',
            symbol: { ...katasterSimplyFill, color: landuseColors[5] },
            label: 'Cemetery'
        }, {
            value: '7',
            symbol: { ...katasterSimplyFill, color: landuseColors[6] },
            label: 'Farms'
        }, {
            value: '8',
            symbol: { ...katasterSimplyFill, color: landuseColors[7] },
            label: 'Nature reserve'
        }
    ]
};