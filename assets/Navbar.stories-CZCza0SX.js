import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./index-CqIc3cxq.js";import{S as i}from"./Navbar-CDRB59sj.js";import{S as c}from"./Button-DW8W7Trf.js";import{u as m}from"./SandThemeContext-B-0_jwSK.js";import"./index-CbwltWip.js";const l=({name:r,style:d})=>e.jsx("span",{className:"material-symbols-rounded",style:{fontSize:18,...d},children:r}),v={title:"04. Organisms/SandNavbar",component:i,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{title:{control:"text",description:"Brand title."},logo:{control:"text",description:"Logo image URL."},fixed:{control:"boolean",description:"Fixed positioning."}}},a={args:{title:"SandurTech"}},o={args:{title:"SandurTech",logo:"https://sandurtech.vercel.app/images/SandurTech-Logo-SVG.svg"}},t={args:{title:"SandurTech"},render:r=>e.jsxs(i,{...r,children:[e.jsx("a",{href:"#",style:{color:"var(--sandui-secondary)",textDecoration:"none",fontSize:"14px"},children:"About"}),e.jsx("a",{href:"#",style:{color:"var(--sandui-secondary)",textDecoration:"none",fontSize:"14px"},children:"Tools"}),e.jsxs(c,{variant:"primary",children:[e.jsx(l,{name:"arrow_forward"})," Get Started"]})]})},s={name:"Glassmorphism Demo",render:()=>e.jsxs("div",{style:{backgroundImage:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",minHeight:"400px"},children:[e.jsx(i,{title:"SandurTech",children:e.jsxs(c,{variant:"ghost",style:{color:"#fff",borderColor:"rgba(255,255,255,0.3)"},children:[e.jsx(l,{name:"login"})," Sign In"]})}),e.jsxs("div",{style:{padding:"48px 16px",color:"#fff",fontFamily:"Inter, sans-serif"},children:[e.jsx("h2",{style:{marginBottom:"8px"},children:"Glassmorphism"}),e.jsx("p",{style:{opacity:.8},children:"backdrop-filter: blur(12px) with rgba(255, 255, 255, 0.1) border."})]})]})};function p(){const{theme:r,toggleTheme:d}=m();return e.jsxs("div",{children:[e.jsx(i,{title:"SandurTech",children:e.jsx(c,{variant:"primary",onClick:d,children:e.jsx(l,{name:r==="light"?"dark_mode":"light_mode"})})}),e.jsxs("div",{style:{padding:"48px 16px",background:"var(--theme-bg)",color:"var(--theme-text)",minHeight:"300px",transition:"all 0.3s ease"},children:[e.jsxs("h2",{children:["Theme: ",r]}),e.jsx("p",{style:{color:"var(--theme-text-muted)",marginTop:"8px"},children:"Navbar and content respond to the data-theme attribute."})]})]})}const n={name:"Theme Toggle",render:()=>e.jsx(p,{})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'SandurTech'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'SandurTech',
    logo: 'https://sandurtech.vercel.app/images/SandurTech-Logo-SVG.svg'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'SandurTech'
  },
  render: args => <SandNavbar {...args}>
      <a href="#" style={{
      color: 'var(--sandui-secondary)',
      textDecoration: 'none',
      fontSize: '14px'
    }}>About</a>
      <a href="#" style={{
      color: 'var(--sandui-secondary)',
      textDecoration: 'none',
      fontSize: '14px'
    }}>Tools</a>
      <SandButton variant="primary"><Icon name="arrow_forward" /> Get Started</SandButton>
    </SandNavbar>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Glassmorphism Demo',
  render: () => <div style={{
    backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    minHeight: '400px'
  }}>
      <SandNavbar title="SandurTech">
        <SandButton variant="ghost" style={{
        color: '#fff',
        borderColor: 'rgba(255,255,255,0.3)'
      }}>
          <Icon name="login" /> Sign In
        </SandButton>
      </SandNavbar>
      <div style={{
      padding: '48px 16px',
      color: '#fff',
      fontFamily: 'Inter, sans-serif'
    }}>
        <h2 style={{
        marginBottom: '8px'
      }}>Glassmorphism</h2>
        <p style={{
        opacity: 0.8
      }}>
          backdrop-filter: blur(12px) with rgba(255, 255, 255, 0.1) border.
        </p>
      </div>
    </div>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Theme Toggle',
  render: () => <NavbarThemeToggle />
}`,...n.parameters?.docs?.source}}};const b=["Default","WithLogo","WithActions","Glassmorphism","ThemeToggle"];export{a as Default,s as Glassmorphism,n as ThemeToggle,t as WithActions,o as WithLogo,b as __namedExportsOrder,v as default};
