export default {
    "mode": {
        "control": "select",
        "options": [
            "None",
            "SingleSelect",
            "SingleSelectBegin",
            "SingleSelectEnd",
            "SingleSelectAuto",
            "MultiSelect",
            "Delete"
        ]
    },
    "separators": {
        "control": "select",
        "options": [
            "All",
            "Inner",
            "None"
        ]
    },
    "growing": {
        "control": "select",
        "options": [
            "Button",
            "Scroll",
            "None"
        ]
    },
    "default": {
        "control": {
            "type": "text"
        },
        "table": {
            "type": {
                "summary": "Array<ListItemBase>"
            }
        }
    },
    "header": {
        "control": {
            "type": "text"
        },
        "table": {
            "type": {
                "summary": "Array<HTMLElement>"
            }
        }
    },
    "item-click": {
        "description": "Fired when an item is activated, unless the item's <code>type</code> property\nis set to <code>Inactive</code>.",
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
                        "text": "HTMLElement"
                    },
                    "name": "item",
                    "_ui5privacy": "public",
                    "description": "The clicked item."
                }
            ]
        }
    },
    "item-close": {
        "description": "Fired when the <code>Close</code> button of any item is clicked\n<br><br>\n<b>Note:</b> This event is only applicable to list items that can be closed (such as notification list items),\nnot to be confused with <code>item-delete</code>.",
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
                        "text": "HTMLElement"
                    },
                    "name": "item",
                    "_ui5privacy": "public",
                    "description": "the item about to be closed."
                }
            ]
        }
    },
    "item-toggle": {
        "description": "Fired when the <code>Toggle</code> button of any item is clicked.\n<br><br>\n<b>Note:</b> This event is only applicable to list items that can be toggled (such as notification group list items).",
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
                        "text": "HTMLElement"
                    },
                    "name": "item",
                    "_ui5privacy": "public",
                    "description": "the toggled item."
                }
            ]
        }
    },
    "item-delete": {
        "description": "Fired when the Delete button of any item is pressed.\n<br><br>\n<b>Note:</b> A Delete button is displayed on each item,\nwhen the component <code>mode</code> property is set to <code>Delete</code>.",
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
                        "text": "HTMLElement"
                    },
                    "name": "item",
                    "_ui5privacy": "public",
                    "description": "the deleted item."
                }
            ]
        }
    },
    "selection-change": {
        "description": "Fired when selection is changed by user interaction\nin <code>SingleSelect</code>, <code>SingleSelectBegin</code>, <code>SingleSelectEnd</code> and <code>MultiSelect</code> modes.",
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
                        "text": "Array<ListItemBase>",
                        "references": [
                            {
                                "name": "ListItemBase",
                                "package": "@ui5/webcomponents",
                                "module": "dist/ListItemBase.js"
                            }
                        ]
                    },
                    "name": "selectedItems",
                    "_ui5privacy": "public",
                    "description": "An array of the selected items."
                },
                {
                    "type": {
                        "text": "Array<ListItemBase>",
                        "references": [
                            {
                                "name": "ListItemBase",
                                "package": "@ui5/webcomponents",
                                "module": "dist/ListItemBase.js"
                            }
                        ]
                    },
                    "name": "previouslySelectedItems",
                    "_ui5privacy": "public",
                    "description": "An array of the previously selected items."
                }
            ]
        }
    }
};
export const componentInfo = {
    "package": "@ui5/webcomponents",
    "tagName": "ui5-list"
};
//# sourceMappingURL=argTypes.js.map