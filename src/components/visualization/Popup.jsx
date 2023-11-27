export const erdkabelStationierungPopup = {
    title: "Erdkabel Stationierung",
    content: [{
        type: "fields",
        fieldInfos: [{
            fieldName: "laufmeter",
            label: "Laufmeter"
        }, {
            fieldName: "bau_km",
            label: "Bau, km",
        }, {
            fieldName: "bau_m",
            label: "Bau, m"
        }]
    }]
};

export const maststandortePopup = {
    title: "Maststandorte",
    content: [{
        type: "fields",
        fieldInfos: [{
            fieldName: "mast",
            label: "Mast Label"
        }, {
            fieldName: "nb_rb",
            label: "Mast Art",
        }, {
            fieldName: "schluessel",
            label: "Mast Schlüssel"
        }]
    },
    // AttachmentsContentElement
    {
        type: "attachments",
        displayType: "list"
    }
    ]
};