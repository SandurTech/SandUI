import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r}from"./index-CqIc3cxq.js";import{P as a}from"./index-CbwltWip.js";import{S as _}from"./Icon-yTymsffE.js";const T="_toast_oq8z7_1",b="_slideIn_oq8z7_1",j="_message_oq8z7_13",I="_close_oq8z7_17",z="_info_oq8z7_30",C="_success_oq8z7_37",N="_warning_oq8z7_44",k="_error_oq8z7_51",n={toast:T,slideIn:b,message:j,close:I,info:z,success:C,warning:N,error:k},s=({className:x,variant:g="info",message:S,duration:m=4e3,visible:u=!0,onClose:f,...y})=>{const[d,v]=r.useState(u);r.useEffect(()=>{v(u)},[u]);const p=r.useCallback(()=>{v(!1),f?.()},[f]);if(r.useEffect(()=>{if(d&&m>0){const q=setTimeout(p,m);return()=>clearTimeout(q)}},[d,m,p]),!d)return null;const w={info:"info",success:"check_circle",warning:"warning",error:"error"},h=[n.toast,n[g],x||""].filter(Boolean).join(" ");return e.jsxs("div",{className:h,role:"alert",...y,children:[e.jsx(_,{name:w[g],size:18}),e.jsx("span",{className:n.message,children:S}),e.jsx("button",{className:n.close,onClick:p,"aria-label":"Dismiss",children:e.jsx(_,{name:"close",size:16})})]})};s.propTypes={className:a.string,variant:a.oneOf(["info","success","warning","error"]),message:a.string.isRequired,duration:a.number,visible:a.bool,onClose:a.func};s.displayName="SandToast";s.__docgenInfo={description:`SandToast - A temporary notification message.
@param {string} variant - 'info' | 'success' | 'warning' | 'error'.
@param {string} message - Toast message text.
@param {number} duration - Auto-dismiss time in ms (default: 4000, 0 = sticky).
@param {boolean} visible - Controls visibility.
@param {function} onClose - Callback when toast is dismissed.
@param {string} className - Additional CSS class for overrides.`,methods:[],displayName:"SandToast",props:{variant:{defaultValue:{value:"'info'",computed:!1},description:"",type:{name:"enum",value:[{value:"'info'",computed:!1},{value:"'success'",computed:!1},{value:"'warning'",computed:!1},{value:"'error'",computed:!1}]},required:!1},duration:{defaultValue:{value:"4000",computed:!1},description:"",type:{name:"number"},required:!1},visible:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},className:{description:"",type:{name:"string"},required:!1},message:{description:"",type:{name:"string"},required:!0},onClose:{description:"",type:{name:"func"},required:!1}}};const P={title:"03. Molecules/SandToast",component:s,tags:["autodocs"],argTypes:{variant:{control:"select",options:["info","success","warning","error"]},message:{control:"text"},duration:{control:"number"}}},o={args:{variant:"info",message:"Build completed successfully.",duration:0}},t={args:{variant:"success",message:"File saved.",duration:0}},i={args:{variant:"warning",message:"API rate limit approaching.",duration:0}},c={args:{variant:"error",message:"Network request failed.",duration:0}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"440px"},children:[e.jsx(s,{variant:"info",message:"Informational message.",duration:0}),e.jsx(s,{variant:"success",message:"Operation completed.",duration:0}),e.jsx(s,{variant:"warning",message:"Check your input.",duration:0}),e.jsx(s,{variant:"error",message:"Something went wrong.",duration:0})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    message: 'Build completed successfully.',
    duration: 0
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    message: 'File saved.',
    duration: 0
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    message: 'API rate limit approaching.',
    duration: 0
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    message: 'Network request failed.',
    duration: 0
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    maxWidth: '440px'
  }}>
      <SandToast variant="info" message="Informational message." duration={0} />
      <SandToast variant="success" message="Operation completed." duration={0} />
      <SandToast variant="warning" message="Check your input." duration={0} />
      <SandToast variant="error" message="Something went wrong." duration={0} />
    </div>
}`,...l.parameters?.docs?.source}}};const W=["Info","Success","Warning","Error","AllVariants"];export{l as AllVariants,c as Error,o as Info,t as Success,i as Warning,W as __namedExportsOrder,P as default};
