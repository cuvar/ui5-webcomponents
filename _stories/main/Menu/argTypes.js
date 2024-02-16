export default {
    "default": {
        "control": {
            "type": "text"
        },
        "table": {
            "type": {
                "summary": "Array<MenuItem>"
            }
        }
    },
    "showAt": {
        "description": "Shows the Menu near the opener element.",
        "table": {
            "category": "methods"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "opener",
                    "type": {
                        "text": "HTMLElement"
                    },
                    "description": "the element that the popover is shown at",
                    "_ui5privacy": "public"
                }
            ],
            "returnValue": {
                "type": {
                    "text": "Promise<void>"
                }
            }
        }
    },
    "close": {
        "description": "Closes the Menu.",
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
    "item-click": {
        "description": "Fired when an item is being clicked.\n<br />\n<b>Note:</b> Since 1.17.0 the event is preventable, allowing the menu to remain open after an item is pressed.",
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
                    "description": "The currently clicked menu item."
                },
                {
                    "type": {
                        "text": "string"
                    },
                    "name": "text",
                    "_ui5privacy": "public",
                    "description": "The text of the currently clicked menu item."
                }
            ]
        }
    },
    "before-open": {
        "description": "Fired before the menu is opened. This event can be cancelled, which will prevent the menu from opening. <b>This event does not bubble.</b>\n<br />\n<b>Note:</b> Since 1.14.0 the event is also fired before a sub-menu opens.",
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
                    "description": "The <code>ui5-menu-item</code> that triggers opening of the sub-menu or undefined when fired upon root menu opening. <b>Note:</b> available since 1.14.0."
                }
            ]
        }
    },
    "before-close": {
        "description": "Fired before the menu is closed. This event can be cancelled, which will prevent the menu from closing. <b>This event does not bubble.</b>",
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
                        "text": "boolean"
                    },
                    "name": "escPressed",
                    "_ui5privacy": "public",
                    "description": "Indicates that <code>ESC</code> key has triggered the event."
                }
            ]
        }
    }
};
export const componentInfo = {
    "package": "@ui5/webcomponents",
    "since": "1.3.0",
    "tagName": "ui5-menu"
};
//# sourceMappingURL=argTypes.js.map