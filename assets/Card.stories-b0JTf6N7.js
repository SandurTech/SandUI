import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./index-CqIc3cxq.js";import{S as n}from"./Card-BIORmNpu.js";import{S as s}from"./Button-DW8W7Trf.js";import"./index-CbwltWip.js";const p={title:"03. Molecules/SandCard",component:n,tags:["autodocs"],argTypes:{children:{control:"text",description:"Card content."}}},r={args:{children:"A clean, hoverable card container from the SandUI design system."}},a={name:"Rich Content",render:()=>e.jsxs(n,{children:[e.jsx("h3",{style:{marginBottom:"8px",color:"var(--theme-text)",fontFamily:"Outfit, sans-serif"},children:"QuickCalc"}),e.jsx("p",{style:{color:"var(--theme-text-muted)",marginBottom:"16px",fontSize:"14px"},children:"A niche calculator tool by SandurTech. Simple, fast, and remarkably clean."}),e.jsx(s,{variant:"primary",children:"Explore →"})]})},t={name:"Card Grid",render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:"16px",padding:"16px"},children:["QuickCalc","ColorForge","MarkdownLab"].map(o=>e.jsxs(n,{children:[e.jsx("h3",{style:{marginBottom:"8px",color:"var(--theme-text)"},children:o}),e.jsx("p",{style:{color:"var(--theme-text-muted)",fontSize:"14px"},children:"A handcrafted microservice from SandurTech."})]},o))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'A clean, hoverable card container from the SandUI design system.'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const h=["Default","RichContent","Grid"];export{r as Default,t as Grid,a as RichContent,h as __namedExportsOrder,p as default};
