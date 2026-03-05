import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./index-CqIc3cxq.js";import{S as t}from"./Input-DTci7br5.js";import"./index-CbwltWip.js";const m={title:"03. Molecules/SandInputGroup",component:t,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text above the input."},placeholder:{control:"text"},error:{control:"text",description:"Error message displayed below."},disabled:{control:"boolean"},type:{control:"select",options:["text","email","password","number"]}}},r={args:{label:"Email Address",placeholder:"you@sandurtech.com"}},a={args:{label:"Email Address",placeholder:"you@sandurtech.com",autoFocus:!0}},s={name:"With Error",args:{label:"Email Address",placeholder:"you@sandurtech.com",error:"Please enter a valid email address."}},o={args:{label:"Username",placeholder:"sandurtech",disabled:!0}},l={name:"Form Example",render:()=>e.jsxs("div",{style:{maxWidth:"400px",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{label:"Full Name",placeholder:"Amogha Raj Sandur"}),e.jsx(t,{label:"Email",placeholder:"hello@sandurtech.com",type:"email"}),e.jsx(t,{label:"Password",placeholder:"••••••••",type:"password"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    placeholder: 'you@sandurtech.com'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    placeholder: 'you@sandurtech.com',
    autoFocus: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'With Error',
  args: {
    label: 'Email Address',
    placeholder: 'you@sandurtech.com',
    error: 'Please enter a valid email address.'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const i=["Default","Active","WithError","Disabled","FormExample"];export{a as Active,r as Default,o as Disabled,l as FormExample,s as WithError,i as __namedExportsOrder,m as default};
