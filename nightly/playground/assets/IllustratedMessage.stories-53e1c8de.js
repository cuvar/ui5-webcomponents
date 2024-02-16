import{x as $}from"./lit-element-c5a2b594.js";import{l as t}from"./if-defined-c29cffe1.js";import{o as a}from"./unsafe-html-0ddd83da.js";import{I as y}from"./IllustrationMessageType-f0f4890b.js";const x={size:{control:"select",options:["Auto","Base","Spot","Dialog","Scene"]},titleLevel:{control:"select",options:["H1","H2","H3","H4","H5","H6"]},title:{control:{type:"text"},table:{type:{summary:"Array<HTMLElement> & string"}}},subtitle:{control:{type:"text"},table:{type:{summary:"Array<HTMLElement>"}}},default:{control:{type:"text"},table:{type:{summary:"Array<IButton>"}}}},I={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.15",tagName:"ui5-illustrated-message"};var l=Object.freeze,v=Object.defineProperty,h=(e,T)=>l(v(e,"raw",{value:l(T||e.slice())})),s;const B={title:"Fiori/Illustrated Message",component:"IllustratedMessage",argTypes:x},D=e=>$` <ui5-illustrated-message
    name="${t(e.name)}"
    size="${t(e.size)}"
    subtitle-text="${t(e.subtitleText)}"
    title-text="${t(e.titleText)}"
    accessible-name-ref="${t(e.accessibleNameRef)}"
    title-level="${t(e.titleLevel)}"
>
    ${a(e.title)}
    ${a(e.subtitle)}
    ${a(e.default)}
</ui5-illustrated-message>`,n=D.bind({});n.args={name:y.UnableToUpload,default:`
    <ui5-button design="Emphasized">Action 1</ui5-button>
    <ui5-button>Action 2</ui5-button>
    `};const o=()=>$(s||(s=h([`
    <ui5-button id="openDialogButton">Open Dialog</ui5-button>
    <ui5-dialog id="hello-dialog" header-text="Error">
        <ui5-illustrated-message name="UnableToLoad"></ui5-illustrated-message>
        <ui5-bar design="Footer" slot="footer">
            <ui5-button
                id="closeDialogButton"
                design="Emphasized"
                slot="endContent"
                >Close</ui5-button
            >
        </ui5-bar>
    </ui5-dialog>
    <script>
        const dialogOpener = document.getElementById("openDialogButton");
        const dialog = document.getElementById("hello-dialog");
        const dialogCloser = document.getElementById("closeDialogButton");
        dialogOpener.addEventListener("click", function () {
            dialog.show();
        });
        dialogCloser.addEventListener("click", function () {
            dialog.close();
        });
    <\/script>
`]))),i=D.bind({});i.args={name:y.UnableToUpload,title:`
    <ui5-title slot="title" level="H1">Something went wrong</ui5-title>
    `,subtitle:`
    <div slot="subtitle">
        Please try again or contact us at
        <ui5-link>example@example.com</ui5-link>
    </div>
    `,default:`
    <ui5-button icon="refresh">Try again</ui5-button>`};var r,u,d;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:'args => html` <ui5-illustrated-message\n    name="${ifDefined(args.name)}"\n    size="${ifDefined(args.size)}"\n    subtitle-text="${ifDefined(args.subtitleText)}"\n    title-text="${ifDefined(args.titleText)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    title-level="${ifDefined(args.titleLevel)}"\n>\n    ${unsafeHTML(args.title)}\n    ${unsafeHTML(args.subtitle)}\n    ${unsafeHTML(args.default)}\n</ui5-illustrated-message>`',...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var c,g,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => html\`
    <ui5-button id="openDialogButton">Open Dialog</ui5-button>
    <ui5-dialog id="hello-dialog" header-text="Error">
        <ui5-illustrated-message name="UnableToLoad"></ui5-illustrated-message>
        <ui5-bar design="Footer" slot="footer">
            <ui5-button
                id="closeDialogButton"
                design="Emphasized"
                slot="endContent"
                >Close</ui5-button
            >
        </ui5-bar>
    </ui5-dialog>
    <script>
        const dialogOpener = document.getElementById("openDialogButton");
        const dialog = document.getElementById("hello-dialog");
        const dialogCloser = document.getElementById("closeDialogButton");
        dialogOpener.addEventListener("click", function () {
            dialog.show();
        });
        dialogCloser.addEventListener("click", function () {
            dialog.close();
        });
    <\/script>
\``,...(m=(g=o.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var f,p,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:'args => html` <ui5-illustrated-message\n    name="${ifDefined(args.name)}"\n    size="${ifDefined(args.size)}"\n    subtitle-text="${ifDefined(args.subtitleText)}"\n    title-text="${ifDefined(args.titleText)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    title-level="${ifDefined(args.titleLevel)}"\n>\n    ${unsafeHTML(args.title)}\n    ${unsafeHTML(args.subtitle)}\n    ${unsafeHTML(args.default)}\n</ui5-illustrated-message>`',...(b=(p=i.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};const E=["Basic","WithADialog","CustomTitle"],M=Object.freeze(Object.defineProperty({__proto__:null,Basic:n,CustomTitle:i,WithADialog:o,__namedExportsOrder:E,default:B},Symbol.toStringTag,{value:"Module"}));export{M as C,I as c};
