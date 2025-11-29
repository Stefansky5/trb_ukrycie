const { addonBuilder } = require("stremio-addon-sdk");

const addon = new addonBuilder({
    id: "org.hide.trb.ui",
    version: "1.0.0",
    name: "UI Override – Hide TRB",
    description: "Hides TRB Watchlist and Featured rows from Stremio.",
    resources: ["uiOverride"],
    types: ["movie", "series"],
    catalogs: []
});

addon.defineUIOverrideHandler(() => {
    return {
        remove: [
            "TRB Watchlist –Movie",
            "TRB Watchlist –Series",
            "Featured –Movie",
            "Featured –Series",
            "Continue Watching –Movie",
            "Continue Watching –Series",
            "TRB Continue –Movie",
            "TRB Continue –Series",
            "EmptyContent"
        ]
    };
});

module.exports = addon.getInterface();