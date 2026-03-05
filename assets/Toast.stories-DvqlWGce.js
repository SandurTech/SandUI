import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r}from"./index-CqIc3cxq.js";import{P as a}from"./index-CbwltWip.js";import{S}from"./Icon-DPzMwpZZ.js";const N="_toast_oq8z7_1",I="_slideIn_oq8z7_1",z="_message_oq8z7_13",C="_close_oq8z7_17",k="_info_oq8z7_30",A="_success_oq8z7_37",E="_warning_oq8z7_44",D="_error_oq8z7_51",o={toast:N,slideIn:I,message:z,close:C,info:k,success:A,warning:E,error:D},s=({className:w,variant:y="info",message:T,duration:p=4e3,visible:g=!0,onClose:_,...b})=>{const[f,x]=r.useState(g);r.useEffect(()=>{x(g)},[g]);const v=r.useCallback(()=>{x(!1),_?.()},[_]);if(r.useEffect(()=>{if(f&&p>0){const j=setTimeout(v,p);return()=>clearTimeout(j)}},[f,p,v]),!f)return null;const h={info:"info",success:"check_circle",warning:"warning",error:"error"},q=[o.toast,o[y],w||""].filter(Boolean).join(" ");return e.jsxs("div",{className:q,role:"alert",...b,children:[e.jsx(S,{name:h[y],size:18}),e.jsx("span",{className:o.message,children:T}),e.jsx("button",{className:o.close,onClick:v,"aria-label":"Dismiss",children:e.jsx(S,{name:"close",size:16})})]})};s.propTypes={className:a.string,variant:a.oneOf(["info","success","warning","error"]),message:a.string.isRequired,duration:a.number,visible:a.bool,onClose:a.func};s.displayName="SandToast";s.__docgenInfo={description:`SandToast - A temporary notification message.

@component
@param {Object} props
@param {string} [props.className] - Additional CSS class for overrides.
@param {string} [props.variant='info'] - Visual style: 'info', 'success', 'warning', or 'error'.
@param {string} props.message - Toast message text.
@param {number} [props.duration=4000] - Auto-dismiss time in ms (0 = sticky).
@param {boolean} [props.visible=true] - Controls visibility.
@param {function} [props.onClose] - Callback when toast is dismissed.
@returns {React.ReactElement|null} The rendered toast component or null if not visible.

@example
return (
  <SandToast variant="success" message="Operation successful!" duration={3000} />
)`,methods:[],displayName:"SandToast",props:{variant:{defaultValue:{value:"'info'",computed:!1},description:"",type:{name:"enum",value:[{value:"'info'",computed:!1},{value:"'success'",computed:!1},{value:"'warning'",computed:!1},{value:"'error'",computed:!1}]},required:!1},duration:{defaultValue:{value:"4000",computed:!1},description:"",type:{name:"number"},required:!1},visible:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},className:{description:"",type:{name:"string"},required:!1},message:{description:"",type:{name:"string"},required:!0},onClose:{description:"",type:{name:"func"},required:!1}}};const R={title:"03. Molecules/SandToast",component:s,tags:["autodocs"],argTypes:{variant:{control:"select",options:["info","success","warning","error"]},message:{control:"text"},duration:{control:"number"}}},n={args:{variant:"info",message:"Build completed successfully.",duration:0}},t={args:{variant:"success",message:"Toast active state.",duration:0,className:"active"}},i={args:{variant:"info",message:"Toast disabled state.",duration:0,style:{opacity:.5}}},c={args:{variant:"info",message:"Build completed successfully.",duration:0}},l={args:{variant:"success",message:"File saved.",duration:0}},u={args:{variant:"warning",message:"API rate limit approaching.",duration:0}},m={args:{variant:"error",message:"Network request failed.",duration:0}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"440px"},children:[e.jsx(s,{variant:"info",message:"Informational message.",duration:0}),e.jsx(s,{variant:"success",message:"Operation completed.",duration:0}),e.jsx(s,{variant:"warning",message:"Check your input.",duration:0}),e.jsx(s,{variant:"error",message:"Something went wrong.",duration:0})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    message: 'Build completed successfully.',
    duration: 0
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    message: 'Toast active state.',
    duration: 0,
    className: 'active'
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    message: 'Toast disabled state.',
    duration: 0,
    style: {
      opacity: 0.5
    }
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    message: 'Build completed successfully.',
    duration: 0
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    message: 'File saved.',
    duration: 0
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    message: 'API rate limit approaching.',
    duration: 0
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    message: 'Network request failed.',
    duration: 0
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const W=["Default","Active","Disabled","Info","Success","Warning","Error","AllVariants"];export{t as Active,d as AllVariants,n as Default,i as Disabled,m as Error,c as Info,l as Success,u as Warning,W as __namedExportsOrder,R as default};
