export const stationPopup = {
    title: "U-Bahn Station",
    lastEditInfoEnabled: false,
    content: [{
        type: "fields",
        fieldInfos: [
            {
                fieldName: "name",
                label: "Name der U-Bahnstation"
            },
            {
                fieldName: "expression/convert_date",
                label: "Geoffnet"
            },
            {
                fieldName: "linie",
                label: "Linie"
            }
        ]
    }],
    expressionInfos: {
        name: 'convert_date',
        title: "Geoffnet",
        expression: `Text(ToUTC($feature.start_date), 'DD-MM-Y')`
    },
};

export const liniePopup ={
    title: "U-Bahn",
    content: [{
        type: "fields",
        fieldInfos: [
            {
                fieldName: "ref",
                label: "U-Bahn Linie"
            },
            {
                fieldName: "route",
                label: "Ein Teil der U-Bahn"
            },
            {
                fieldName: "expression/convert_date",
                label: "Eröffnungsdatum"
            }
        ]
    }],
    expressionInfos: {
        name: 'convert_date',
        title: "Eröffnungsdatum",
        expression: `Text(ToUTC($feature.start_date), 'DD-MM-Y')`
    },
}


// export const landusePopup = {
//     title: "Land Use Kataster",
//     lastEditInfoEnabled: false,
//     content: [{
//         type: "fields",
//         fieldInfos: [
//             {
//                 fieldName: "fclass",
//                 label: "Land type"
//             }
//         ]
//     },
//     {
//         type: "attachments",
//         displayType: "list"
//     }],
//     actions: [editThisKatasterAction]
// };

// // Create a popupTemplate for the featurelayer and pass in a function to set its content and specify an action to handle editing the selected feature
// export const transportPopup = {
//     title: "Transport",
//     lastEditInfoEnabled: false,
//     content: [{
//         type: "fields",
//         fieldInfos: [{
//             fieldName: "expression/transportStopObject",
//             label: "Transport"
//         }, {
//             fieldName: "name",
//             label: "Street name",
//         }]
//     },
//     // AttachmentsContentElement
//     {
//         type: "attachments",
//         displayType: "list"
//     }],
//     expressionInfos: {
//         name: 'transportStopObject',
//         title: 'Transport type',
//         expression: 'Proper(Replace($feature.fclass, "_", " "), "firstword")'
//     },
//     actions: [editThisTransportAction]
// };

// export const powerObjectPopup = {
//     title: "Power object",
//     lastEditInfoEnabled: false,
//     content: [{
//         type: "fields",
//         fieldInfos: [
//             {
//                 fieldName: "expression/powerObject_Type",
//                 label: "Object type"
//             },
//             {
//                 fieldName: "expression/nameObject_Name",
//                 label: "Object name"
//             },
//             {
//                 fieldName: "expression/nameObject_Height",
//                 label: "Object height"
//             }
//         ]
//     },
//     // AttachmentsContentElement
//     {
//         type: "attachments",
//         displayType: "list"
//     }],
//     // Expression for the field
//     expressionInfos: [{
//         name: 'powerObject_Type',
//         title: 'Type',
//         expression: 'Proper($feature.fclass, "firstword")'
//     }, {
//         name: 'nameObject_Name',
//         title: 'Name',
//         expression: `IIF(Count($feature.name) == 1, 'No description', Proper($feature.name, 'firstword'))`
//     }, {
//         name: 'nameObject_Height',
//         title: 'Height',
//         expression: `$feature.Hohe + ' m'`
//     }],
//     actions: [editThisPowerObjectAction]
// };

// export const powerLinePopup = {
//     title: "Power Line",
//     lastEditInfoEnabled: false,
//     content: [{
//         type: "fields",
//         fieldInfos: [{
//             fieldName: "expression/powerLineObject_Type",
//             label: "Line type"
//         }, {
//             fieldName: "expression/powerLineObject_Name",
//             label: "Operator",
//         }]
//     },
//     // AttachmentsContentElement
//     {
//         type: "attachments",
//         displayType: "list"
//     }],
//     expressionInfos: [{
//         name: 'powerLineObject_Type',
//         title: 'Line type 222',
//         expression: 'Proper(Replace($feature.fclass, "_", " "), "firstword")'
//     }, {
//         name: 'powerLineObject_Name',
//         title: 'Operator name 333',
//         // expression: `IIF(Count($feature.operator) < 2, '', Replace($feature.operator, "_", " "))`
//         // expression: `IIF(Count($feature.operator) > 1, Replace($feature.operator, "_", " "), IsEmpty)`
//         expression: `Decode(Count($feature.operator), 1, 'No description', Replace($feature.operator, "_", " "))`
//     }]   
// };


// let validFields = Filter(Map(fields, getNames), filterValidFields);