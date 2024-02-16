import{x as h}from"./lit-element-c5a2b594.js";import{l as c}from"./if-defined-c29cffe1.js";import{W as m}from"./WrappingType-b81e595a.js";const f={valueState:{control:"select",options:["None","Success","Warning","Error","Information"]},wrappingType:{control:"select",options:["None","Normal"]}},S={package:"@ui5/webcomponents",tagName:"ui5-checkbox"},p={title:"Main/Check Box",component:"CheckBox",argTypes:f},k=e=>h`<ui5-checkbox
        accessible-name-ref="${c(e.accessibleNameRef)}"
        accessible-name="${c(e.accessibleName)}"
        ?disabled="${c(e.disabled)}"
        ?readonly="${c(e.readonly)}"
        ?required="${c(e.required)}"
        ?indeterminate="${c(e.indeterminate)}"
        ?checked="${c(e.checked)}"
        text="${c(e.text)}"
        value-state="${c(e.valueState)}"
        wrapping-type="${c(e.wrappingType)}"
        name="${c(e.name)}"
        style="${c(e.style)}"
    >
    </ui5-checkbox>`,n=k.bind({});n.args={text:"Basic"};const t=k.bind({});t.args={text:"ui5-checkbox with 'wrapping-type=Normal' set and some long text.",wrappingType:m.Normal,style:"width:200px",indeterminate:!0,checked:!0};const a=()=>h`
    <ui5-checkbox text="Success" value-state="Success"></ui5-checkbox>
    <ui5-checkbox text="Error" value-state="Error"></ui5-checkbox>
    <ui5-checkbox text="Warning" value-state="Warning"></ui5-checkbox>
    <ui5-checkbox text="Information" value-state="Information"></ui5-checkbox>
    <ui5-checkbox text="Disabled" disabled="" checked=""></ui5-checkbox>
    <ui5-checkbox text="Readonly" readonly="" checked=""></ui5-checkbox>
    <ui5-checkbox
        text="Success disabled"
        disabled=""
        value-state="Success"
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Error disabled"
        disabled=""
        value-state="Error"
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Warning disabled "
        disabled=""
        value-state="Warning"
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Information disabled "
        disabled=""
        value-state="Information"
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Success readonly"
        readonly=""
        value-state="Success"
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Error readonly"
        readonly=""
        value-state="Error"
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Warning readonly"
        readonly=""
        value-state="Warning"
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Information readonly"
        readonly=""
        value-state="Information"
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Success indeterminate"
        value-state="Success"
        indeterminate=""
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Error indeterminate"
        value-state="Error"
        indeterminate=""
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Warning indeterminate"
        value-state="Warning"
        indeterminate=""
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Information indeterminate"
        value-state="Information"
        indeterminate=""
        checked=""
    ></ui5-checkbox>
`;var i,r,o;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:'args => html`<ui5-checkbox\n        accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n        accessible-name="${ifDefined(args.accessibleName)}"\n        ?disabled="${ifDefined(args.disabled)}"\n        ?readonly="${ifDefined(args.readonly)}"\n        ?required="${ifDefined(args.required)}"\n        ?indeterminate="${ifDefined(args.indeterminate)}"\n        ?checked="${ifDefined(args.checked)}"\n        text="${ifDefined(args.text)}"\n        value-state="${ifDefined(args.valueState)}"\n        wrapping-type="${ifDefined(args.wrappingType)}"\n        name="${ifDefined(args.name)}"\n        style="${ifDefined(args.style)}"\n    >\n    </ui5-checkbox>`',...(o=(r=n.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var s,d,u;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:'args => html`<ui5-checkbox\n        accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n        accessible-name="${ifDefined(args.accessibleName)}"\n        ?disabled="${ifDefined(args.disabled)}"\n        ?readonly="${ifDefined(args.readonly)}"\n        ?required="${ifDefined(args.required)}"\n        ?indeterminate="${ifDefined(args.indeterminate)}"\n        ?checked="${ifDefined(args.checked)}"\n        text="${ifDefined(args.text)}"\n        value-state="${ifDefined(args.valueState)}"\n        wrapping-type="${ifDefined(args.wrappingType)}"\n        name="${ifDefined(args.name)}"\n        style="${ifDefined(args.style)}"\n    >\n    </ui5-checkbox>`',...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var l,x,b;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`() => html\`
    <ui5-checkbox text="Success" value-state="Success"></ui5-checkbox>
    <ui5-checkbox text="Error" value-state="Error"></ui5-checkbox>
    <ui5-checkbox text="Warning" value-state="Warning"></ui5-checkbox>
    <ui5-checkbox text="Information" value-state="Information"></ui5-checkbox>
    <ui5-checkbox text="Disabled" disabled="" checked=""></ui5-checkbox>
    <ui5-checkbox text="Readonly" readonly="" checked=""></ui5-checkbox>
    <ui5-checkbox
        text="Success disabled"
        disabled=""
        value-state="Success"
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Error disabled"
        disabled=""
        value-state="Error"
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Warning disabled "
        disabled=""
        value-state="Warning"
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Information disabled "
        disabled=""
        value-state="Information"
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Success readonly"
        readonly=""
        value-state="Success"
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Error readonly"
        readonly=""
        value-state="Error"
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Warning readonly"
        readonly=""
        value-state="Warning"
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Information readonly"
        readonly=""
        value-state="Information"
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Success indeterminate"
        value-state="Success"
        indeterminate=""
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Error indeterminate"
        value-state="Error"
        indeterminate=""
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Warning indeterminate"
        value-state="Warning"
        indeterminate=""
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Information indeterminate"
        value-state="Information"
        indeterminate=""
        checked=""
    ></ui5-checkbox>
\``,...(b=(x=a.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const g=["Basic","Wrapping","States"],D=Object.freeze(Object.defineProperty({__proto__:null,Basic:n,States:a,Wrapping:t,__namedExportsOrder:g,default:p},Symbol.toStringTag,{value:"Module"}));export{D as C,S as c};
