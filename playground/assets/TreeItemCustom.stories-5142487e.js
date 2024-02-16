import{x as r}from"./lit-element-c5a2b594.js";import{o as i}from"./unsafe-html-0ddd83da.js";import{l as t}from"./if-defined-c29cffe1.js";const c={additionalTextState:{control:"select",options:["None","Success","Warning","Error","Information"]},type:{control:"select",options:["Inactive","Active","Detail","Navigation"]},content:{control:{type:"text"},table:{type:{summary:"Array<HTMLElement>"}}},default:{control:{type:"text"},table:{type:{summary:"Array<TreeItemBase>"}}},deleteButton:{control:{type:"text"},table:{type:{summary:"Array<IButton>"}}},toggle:{description:"Call this method to manually switch the <code>expanded</code> state of a tree item.",table:{category:"methods"},UI5CustomData:{returnValue:{type:{text:"void"}}}}},y={package:"@ui5/webcomponents",since:"1.9.2",tagName:"ui5-tree-item-custom",showDefaultStoryOnly:!0},d={title:"Main/Tree/Tree Item Custom",component:"TreeItemCustom",argTypes:c},l=e=>r`<ui5-tree>
    <ui5-tree-item-custom
        hide-selection-element="${t(e.hideSelectionElement)}"
        accessible-name="${t(e.accessibleName)}"
        additional-text-state="${t(e.additionalTextState)}"
        expanded="${t(e.expanded)}"
        has-children="${t(e.hasChildren)}"
        icon="${t(e.icon)}"
        indeterminate="${t(e.indeterminate)}"
        accessibility-attributes="${t(e.accessibilityAttributes)}"
        navigated="${t(e.navigated)}"
        type="${t(e.type)}"
        selected="${t(e.selected)}"
    >
        ${i(e.content)}
        ${i(e.default)}
        ${i(e.deleteButton)}
    </ui5-tree-item-custom>
</ui5-tree>`,n=l.bind({});n.tags=["_hidden_"];n.args={expanded:!0,content:'<ui5-button slot="content">Level 1</ui5-button>',default:`<ui5-tree-item-custom>
    <ui5-button slot="content">Level 2</ui5-button>
    <ui5-tree-item-custom>
        <ui5-button slot="content">Level 3</ui5-button>
    </ui5-tree-item-custom>
</ui5-tree-item-custom>`};var o,a,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`args => html\`<ui5-tree>
    <ui5-tree-item-custom
        hide-selection-element="\${ifDefined(args.hideSelectionElement)}"
        accessible-name="\${ifDefined(args.accessibleName)}"
        additional-text-state="\${ifDefined(args.additionalTextState)}"
        expanded="\${ifDefined(args.expanded)}"
        has-children="\${ifDefined(args.hasChildren)}"
        icon="\${ifDefined(args.icon)}"
        indeterminate="\${ifDefined(args.indeterminate)}"
        accessibility-attributes="\${ifDefined(args.accessibilityAttributes)}"
        navigated="\${ifDefined(args.navigated)}"
        type="\${ifDefined(args.type)}"
        selected="\${ifDefined(args.selected)}"
    >
        \${unsafeHTML(args.content)}
        \${unsafeHTML(args.default)}
        \${unsafeHTML(args.deleteButton)}
    </ui5-tree-item-custom>
</ui5-tree>\``,...(s=(a=n.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const u=["Basic"],$=Object.freeze(Object.defineProperty({__proto__:null,Basic:n,__namedExportsOrder:u,default:d},Symbol.toStringTag,{value:"Module"}));export{$ as C,y as c};
