import{x as d}from"./lit-element-c5a2b594.js";import{l as t}from"./if-defined-c29cffe1.js";import{o as n}from"./unsafe-html-0ddd83da.js";const r={additionalTextState:{control:"select",options:["None","Success","Warning","Error","Information"]},type:{control:"select",options:["Inactive","Active","Detail","Navigation"]},default:{control:{type:"text"},table:{type:{summary:"Array<Node>"}}},imageContent:{control:{type:"text"},table:{type:{summary:"Array<HTMLElement>"}}},deleteButton:{control:{type:"text"},table:{type:{summary:"Array<IButton>"}}}},$={package:"@ui5/webcomponents",tagName:"ui5-li",showDefaultStoryOnly:!0},c={title:"Main/List/Standard List Item",component:"StandardListItem",argTypes:r},l=e=>d` <ui5-list>
  <ui5-li
    icon="${t(e.icon)}"
    description="${t(e.description)}"
    additional-text="${t(e.additionalText)}"
    additional-text-state="${t(e.additionalTextState)}"
    accessible-name="${t(e.accessibleName)}"
    ?icon-end="${t(e.iconEnd)}"
    image="${t(e.image)}"
    accessibility-attributes="${t(e.accessibilityAttributes)}"
    ?navigated="${t(e.navigated)}"
    type="${t(e.type)}"
    ?selected="${t(e.selected)}"
  >
    ${n(e.default)}
    ${n(e.imageContent)}
    ${n(e.deleteButton)}
  </ui5-li>
  </ui5-list>`,i=l.bind({});i.tags=["_hidden_"];i.args={default:"Pineapple",icon:"nutrition-activity",description:"Tropical plant with an edible fruit",additionalText:"In-stock",additionalTextState:"Success"};var a,o,s;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  return html\` <ui5-list>
  <ui5-li
    icon="\${ifDefined(args.icon)}"
    description="\${ifDefined(args.description)}"
    additional-text="\${ifDefined(args.additionalText)}"
    additional-text-state="\${ifDefined(args.additionalTextState)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    ?icon-end="\${ifDefined(args.iconEnd)}"
    image="\${ifDefined(args.image)}"
    accessibility-attributes="\${ifDefined(args.accessibilityAttributes)}"
    ?navigated="\${ifDefined(args.navigated)}"
    type="\${ifDefined(args.type)}"
    ?selected="\${ifDefined(args.selected)}"
  >
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.imageContent)}
    \${unsafeHTML(args.deleteButton)}
  </ui5-li>
  </ui5-list>\`;
}`,...(s=(o=i.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const u=["Basic"],y=Object.freeze(Object.defineProperty({__proto__:null,Basic:i,__namedExportsOrder:u,default:c},Symbol.toStringTag,{value:"Module"}));export{y as C,$ as c};
