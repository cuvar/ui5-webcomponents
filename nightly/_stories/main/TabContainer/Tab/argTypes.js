export default {
    "design": {
        "control": "select",
        "options": [
            "Default",
            "Positive",
            "Negative",
            "Critical",
            "Neutral"
        ]
    },
    "default": {
        "control": {
            "type": "text"
        },
        "table": {
            "type": {
                "summary": "Array<Node>"
            }
        }
    },
    "subTabs": {
        "control": {
            "type": "text"
        },
        "table": {
            "type": {
                "summary": "Array<ITab>"
            }
        }
    },
    "getTabInStripDomRef": {
        "description": "Returns the DOM reference of the tab that is placed in the header.\n<b>Note:</b> Tabs, placed in the <code>subTabs</code> slot of other tabs are not shown in the header. Calling this method on such tabs will return <code>null</code>.\n<b>Note:</b> If you need a DOM ref to the tab content please use the <code>getDomRef</code> method.",
        "table": {
            "category": "methods"
        },
        "UI5CustomData": {
            "returnValue": {
                "type": {
                    "text": "ITab | null",
                    "references": [
                        {
                            "name": "ITab",
                            "package": "@ui5/webcomponents",
                            "module": "dist/TabContainer.js"
                        }
                    ]
                }
            }
        }
    }
};
export const componentInfo = {
    "package": "@ui5/webcomponents",
    "tagName": "ui5-tab",
    "showDefaultStoryOnly": true
};
//# sourceMappingURL=argTypes.js.map