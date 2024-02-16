export default {
    "sortItems": {
        "control": {
            "type": "text"
        },
        "table": {
            "type": {
                "summary": "Array<SortItem>"
            }
        }
    },
    "filterItems": {
        "control": {
            "type": "text"
        },
        "table": {
            "type": {
                "summary": "Array<FilterItem>"
            }
        }
    },
    "show": {
        "description": "Shows the dialog.",
        "table": {
            "category": "methods"
        },
        "UI5CustomData": {
            "returnValue": {
                "type": {
                    "text": "void"
                }
            }
        }
    },
    "setConfirmedSettings": {
        "description": "Sets a JavaScript object, as settings to the <code>ui5-view-settings-dialog</code>.\nThis method can be used after the dialog is initially open, as the dialog needs\nto set its initial settings.<br>\nThe <code>ui5-view-settings-dialog</code> throws an event called \"before-open\",\nwhich can be used as a trigger point.<br>\nThe object should have the following format:<br>\n<pre>\n{\nsortOrder: \"Ascending\",\nsortBy: \"Name\",\nfilters: [\n\t{\"Filter 1\": [\"Some filter 1\", \"Some filter 2\"]},\n\t{\"Filter 2\": [\"Some filter 4\"]},\n]\n}\n</pre>",
        "table": {
            "category": "methods"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "settings",
                    "type": {
                        "text": "VSDSettings",
                        "references": [
                            {
                                "name": "VSDSettings",
                                "package": "@ui5/webcomponents-fiori",
                                "module": "dist/ViewSettingsDialog.js"
                            }
                        ]
                    },
                    "description": "predefined settings.",
                    "_ui5privacy": "public"
                }
            ],
            "returnValue": {
                "type": {
                    "text": "void"
                }
            }
        }
    },
    "confirm": {
        "description": "Fired when confirmation button is activated.",
        "control": {
            "type": false
        },
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "type": {
                        "text": "String"
                    },
                    "name": "sortOrder",
                    "_ui5privacy": "public",
                    "description": "The current sort order selected."
                },
                {
                    "type": {
                        "text": "String"
                    },
                    "name": "sortBy",
                    "_ui5privacy": "public",
                    "description": "The currently selected <code>ui5-sort-item</code> text attribute."
                },
                {
                    "type": {
                        "text": "HTMLElement"
                    },
                    "name": "sortByItem",
                    "_ui5privacy": "public",
                    "description": "The currently selected <code>ui5-sort-item</code>."
                },
                {
                    "type": {
                        "text": "Boolean"
                    },
                    "name": "sortDescending",
                    "_ui5privacy": "public",
                    "description": "The selected sort order (true = descending, false = ascending)."
                },
                {
                    "type": {
                        "text": "Array"
                    },
                    "name": "filters",
                    "_ui5privacy": "public",
                    "description": "The selected filters items."
                }
            ]
        }
    },
    "cancel": {
        "description": "Fired when cancel button is activated.",
        "control": {
            "type": false
        },
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "type": {
                        "text": "String"
                    },
                    "name": "sortOrder",
                    "_ui5privacy": "public",
                    "description": "The current sort order selected."
                },
                {
                    "type": {
                        "text": "String"
                    },
                    "name": "sortBy",
                    "_ui5privacy": "public",
                    "description": "The currently selected <code>ui5-sort-item</code> text attribute."
                },
                {
                    "type": {
                        "text": "HTMLElement"
                    },
                    "name": "sortByItem",
                    "_ui5privacy": "public",
                    "description": "The currently selected <code>ui5-sort-item</code>."
                },
                {
                    "type": {
                        "text": "Boolean"
                    },
                    "name": "sortDescending",
                    "_ui5privacy": "public",
                    "description": "The selected sort order (true = descending, false = ascending)."
                },
                {
                    "type": {
                        "text": "Array"
                    },
                    "name": "filters",
                    "_ui5privacy": "public",
                    "description": "The selected filters items."
                }
            ]
        }
    }
};
export const componentInfo = {
    "package": "@ui5/webcomponents-fiori",
    "since": "1.0.0-rc.16",
    "tagName": "ui5-view-settings-dialog"
};
//# sourceMappingURL=argTypes.js.map