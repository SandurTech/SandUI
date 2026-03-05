import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./index-CqIc3cxq.js";import{S as s}from"./Card-dT27Pkbc.js";import{S as i}from"./Button-t0QF1ika.js";import"./index-CbwltWip.js";const u={title:"03. Molecules/SandCard",component:s,tags:["autodocs"],argTypes:{children:{control:"text",description:"Card content."}}},r={args:{children:"A clean, hoverable card container from the SandUI design system."}},a={args:{children:"Active card state.",className:"active"}},t={args:{children:"Disabled card state.",style:{opacity:.5,pointerEvents:"none"}}},n={name:"Rich Content",render:()=>e.jsxs(s,{children:[e.jsx("h3",{style:{marginBottom:"8px",color:"var(--theme-text)",fontFamily:"Outfit, sans-serif"},children:"QuickCalc"}),e.jsx("p",{style:{color:"var(--theme-text-muted)",marginBottom:"16px",fontSize:"14px"},children:"A niche calculator tool by SandurTech. Simple, fast, and remarkably clean."}),e.jsx(i,{variant:"primary",children:"Explore →"})]})},o={name:"Card Grid",render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:"16px",padding:"16px"},children:["QuickCalc","ColorForge","MarkdownLab"].map(c=>e.jsxs(s,{children:[e.jsx("h3",{style:{marginBottom:"8px",color:"var(--theme-text)"},children:c}),e.jsx("p",{style:{color:"var(--theme-text-muted)",fontSize:"14px"},children:"A handcrafted microservice from SandurTech."})]},c))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'A clean, hoverable card container from the SandUI design system.'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Active card state.',
    className: 'active'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled card state.',
    style: {
      opacity: 0.5,
      pointerEvents: 'none'
    }
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Rich Content',
  render: () => <SandCard>
      <h3 style={{
      marginBottom: '8px',
      color: 'var(--theme-text)',
      fontFamily: 'Outfit, sans-serif'
    }}>
        QuickCalc
      </h3>
      <p style={{
      color: 'var(--theme-text-muted)',
      marginBottom: '16px',
      fontSize: '14px'
    }}>
        A niche calculator tool by SandurTech. Simple, fast, and remarkably clean.
      </p>
      <SandButton variant="primary">Explore →</SandButton>
    </SandCard>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Card Grid',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '16px',
    padding: '16px'
  }}>
      {['QuickCalc', 'ColorForge', 'MarkdownLab'].map(tool => <SandCard key={tool}>
          <h3 style={{
        marginBottom: '8px',
        color: 'var(--theme-text)'
      }}>{tool}</h3>
          <p style={{
        color: 'var(--theme-text-muted)',
        fontSize: '14px'
      }}>
            A handcrafted microservice from SandurTech.
          </p>
        </SandCard>)}
    </div>
}`,...o.parameters?.docs?.source}}};const x=["Default","Active","Disabled","RichContent","Grid"];export{a as Active,r as Default,t as Disabled,o as Grid,n as RichContent,x as __namedExportsOrder,u as default};
