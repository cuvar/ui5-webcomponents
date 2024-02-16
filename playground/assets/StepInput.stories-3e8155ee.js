import{x as l}from"./lit-element-c5a2b594.js";import{l as i}from"./if-defined-c29cffe1.js";import{o as M}from"./unsafe-html-0ddd83da.js";const N={valueState:{control:"select",options:["None","Success","Warning","Error","Information"]},valueStateMessage:{control:{type:"text"},table:{type:{summary:"Array<HTMLElement>"}}}},L={package:"@ui5/webcomponents",since:"1.0.0-rc.13",tagName:"ui5-step-input"},w={title:"Main/StepInput",component:"StepInput",argTypes:N},d=e=>l`
<div style="max-width: 13rem">
    <ui5-step-input
        value="${i(e.value)}"
        value-state="${i(e.valueState)}"
        value-precision="${i(e.valuePrecision)}"
        min="${i(e.min)}"
        max="${i(e.max)}"
        step="${i(e.step)}"
        ?required="${i(e.required)}"
        ?readonly="${i(e.readonly)}"
        ?disabled="${i(e.disabled)}"
        placeholder="${i(e.placeholder)}"
        name="${i(e.name)}"
        accessible-name="${i(e.accessibleName)}"
        accessible-name-ref="${i(e.accessibleNameRef)}"
        id="${i(e.id)}"
        style="${i(e.style)}"
    >
        ${M(e.valueStateMessage)}
    </ui5-step-input>
</div>`,s=d.bind({});s.args={value:5};const r=()=>l`
    <div style="max-width: 13rem"> <ui5-step-input value-state="Success" value="5"></ui5-step-input> </div> <br>
    <div style="max-width: 13rem"> <ui5-step-input value-state="Warning" value="5"></ui5-step-input> </div> <br>
    <div style="max-width: 13rem"> <ui5-step-input value-state="Error" value="5"></ui5-step-input> </div> <br>
    <div style="max-width: 13rem"> <ui5-step-input value-state="Information" value="5"></ui5-step-input> </div> <br>
`,n=d.bind({});n.storyName="Min/Max and Step Values";n.args={value:0,min:-50,max:50,step:10};const t=d.bind({});t.args={value:5,min:0,max:10,step:.5,valuePrecision:1};const a=d.bind({});a.storyName="With Text Alignment";a.args={id:"myStepInput",style:"text-align: left",placeholder:"Enter your Number",required:!0};a.decorators=[e=>l`<ui5-label class="samples-big-margin-right" for="myStepInput">Number is left-aligned</ui5-label>
    ${e()}`];var u,f,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`args => html\`
<div style="max-width: 13rem">
    <ui5-step-input
        value="\${ifDefined(args.value)}"
        value-state="\${ifDefined(args.valueState)}"
        value-precision="\${ifDefined(args.valuePrecision)}"
        min="\${ifDefined(args.min)}"
        max="\${ifDefined(args.max)}"
        step="\${ifDefined(args.step)}"
        ?required="\${ifDefined(args.required)}"
        ?readonly="\${ifDefined(args.readonly)}"
        ?disabled="\${ifDefined(args.disabled)}"
        placeholder="\${ifDefined(args.placeholder)}"
        name="\${ifDefined(args.name)}"
        accessible-name="\${ifDefined(args.accessibleName)}"
        accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
        id="\${ifDefined(args.id)}"
        style="\${ifDefined(args.style)}"
    >
        \${unsafeHTML(args.valueStateMessage)}
    </ui5-step-input>
</div>\``,...(m=(f=s.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};var p,o,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => html\`
    <div style="max-width: 13rem"> <ui5-step-input value-state="Success" value="5"></ui5-step-input> </div> <br>
    <div style="max-width: 13rem"> <ui5-step-input value-state="Warning" value="5"></ui5-step-input> </div> <br>
    <div style="max-width: 13rem"> <ui5-step-input value-state="Error" value="5"></ui5-step-input> </div> <br>
    <div style="max-width: 13rem"> <ui5-step-input value-state="Information" value="5"></ui5-step-input> </div> <br>
\``,...(c=(o=r.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var v,g,$;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`args => html\`
<div style="max-width: 13rem">
    <ui5-step-input
        value="\${ifDefined(args.value)}"
        value-state="\${ifDefined(args.valueState)}"
        value-precision="\${ifDefined(args.valuePrecision)}"
        min="\${ifDefined(args.min)}"
        max="\${ifDefined(args.max)}"
        step="\${ifDefined(args.step)}"
        ?required="\${ifDefined(args.required)}"
        ?readonly="\${ifDefined(args.readonly)}"
        ?disabled="\${ifDefined(args.disabled)}"
        placeholder="\${ifDefined(args.placeholder)}"
        name="\${ifDefined(args.name)}"
        accessible-name="\${ifDefined(args.accessibleName)}"
        accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
        id="\${ifDefined(args.id)}"
        style="\${ifDefined(args.style)}"
    >
        \${unsafeHTML(args.valueStateMessage)}
    </ui5-step-input>
</div>\``,...($=(g=n.parameters)==null?void 0:g.docs)==null?void 0:$.source}}};var D,b,y;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`args => html\`
<div style="max-width: 13rem">
    <ui5-step-input
        value="\${ifDefined(args.value)}"
        value-state="\${ifDefined(args.valueState)}"
        value-precision="\${ifDefined(args.valuePrecision)}"
        min="\${ifDefined(args.min)}"
        max="\${ifDefined(args.max)}"
        step="\${ifDefined(args.step)}"
        ?required="\${ifDefined(args.required)}"
        ?readonly="\${ifDefined(args.readonly)}"
        ?disabled="\${ifDefined(args.disabled)}"
        placeholder="\${ifDefined(args.placeholder)}"
        name="\${ifDefined(args.name)}"
        accessible-name="\${ifDefined(args.accessibleName)}"
        accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
        id="\${ifDefined(args.id)}"
        style="\${ifDefined(args.style)}"
    >
        \${unsafeHTML(args.valueStateMessage)}
    </ui5-step-input>
</div>\``,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var x,h,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`args => html\`
<div style="max-width: 13rem">
    <ui5-step-input
        value="\${ifDefined(args.value)}"
        value-state="\${ifDefined(args.valueState)}"
        value-precision="\${ifDefined(args.valuePrecision)}"
        min="\${ifDefined(args.min)}"
        max="\${ifDefined(args.max)}"
        step="\${ifDefined(args.step)}"
        ?required="\${ifDefined(args.required)}"
        ?readonly="\${ifDefined(args.readonly)}"
        ?disabled="\${ifDefined(args.disabled)}"
        placeholder="\${ifDefined(args.placeholder)}"
        name="\${ifDefined(args.name)}"
        accessible-name="\${ifDefined(args.accessibleName)}"
        accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
        id="\${ifDefined(args.id)}"
        style="\${ifDefined(args.style)}"
    >
        \${unsafeHTML(args.valueStateMessage)}
    </ui5-step-input>
</div>\``,...(S=(h=a.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const q=["Basic","DifferentValueStates","MinMax","ValuePrecision","Label"],_=Object.freeze(Object.defineProperty({__proto__:null,Basic:s,DifferentValueStates:r,Label:a,MinMax:n,ValuePrecision:t,__namedExportsOrder:q,default:w},Symbol.toStringTag,{value:"Module"}));export{_ as C,L as c};
