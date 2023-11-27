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