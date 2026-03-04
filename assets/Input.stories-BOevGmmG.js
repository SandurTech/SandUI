import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./index-CqIc3cxq.js";import{S as s}from"./Input-DTnwM0iD.js";import"./index-CbwltWip.js";const p={title:"03. Molecules/SandInputGroup",component:s,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text above the input."},placeholder:{control:"text"},error:{control:"text",description:"Error message displayed below."},disabled:{control:"boolean"},type:{control:"select",options:["text","email","password","number"]}}},r={args:{label:"Email Address",placeholder:"you@sandurtech.com"}},a={name:"With Error",args:{label:"Email Address",placeholder:"you@sandurtech.com",error:"Please enter a valid email address."}},o={args:{label:"Username",placeholder:"sandurtech",disabled:!0}},l={name:"Form Example",render:()=>e.jsxs("div",{style:{maxWidth:"400px",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(s,{label:"Full Name",placeholder:"Amogha Raj Sandur"}),e.jsx(s,{label:"Email",placeholder:"hello@sandurtech.com",type:"email"}),e.jsx(s,{label:"Password",placeholder:"••••••••",type:"password"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    placeholder: 'you@sandurtech.com'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'With Error',
  args: {
    label: 'Email Address',
    placeholder: 'you@sandurtech.com',
    error: 'Please enter a valid email address.'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'sandurtech',
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Form Example',
  render: () => <div style={{
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <SandInput label="Full Name" placeholder="Amogha Raj Sandur" />
      <SandInput label="Email" placeholder="hello@sandurtech.com" type="email" />
      <SandInput label="Password" placeholder="••••••••" type="password" />
    </div>
}`,...l.parameters?.docs?.source}}};const m=["Default","WithError","Disabled","FormExample"];export{r as Default,o as Disabled,l as FormExample,a as WithError,m as __namedExportsOrder,p as default};
