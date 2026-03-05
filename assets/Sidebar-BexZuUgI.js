import{j as r}from"./jsx-runtime-u17CrQMm.js";import{R as m}from"./index-CqIc3cxq.js";import{P as e}from"./index-CbwltWip.js";import{S as p}from"./Icon-DPzMwpZZ.js";const b="_sidebar_12xgb_1",f="_item_12xgb_10",g="_active_12xgb_25",n={sidebar:b,item:f,active:g},s=m.forwardRef(({className:i,items:t=[],children:o,...d},c)=>r.jsxs("aside",{ref:c,className:`${n.sidebar} sandui-globals ${i||""}`,...d,children:[r.jsx("nav",{children:t.map((a,l)=>r.jsxs("a",{href:a.href||"#",className:`${n.item} ${a.active?n.active:""}`,children:[a.icon&&r.jsx(p,{name:a.icon,size:18}),r.jsx("span",{children:a.label})]},l))}),o]}));s.propTypes={className:e.string,items:e.arrayOf(e.shape({icon:e.string,label:e.string.isRequired,href:e.string,active:e.bool})),children:e.node};s.displayName="SandSidebar";s.__docgenInfo={description:`SandSidebar - A vertical navigation organism.

@component
@param {Object} props
@param {string} [props.className] - Additional CSS class for overrides.
@param {Array<{icon?: string, label: string, href?: string, active?: boolean}>} [props.items=[]] - Array of sidebar items.
@param {React.ReactNode} [props.children] - Additional sidebar content.
@returns {React.ReactElement} The rendered sidebar component.

@example
return (
  <SandSidebar
    items={[
      { label: 'Dashboard', icon: 'dashboard', active: true },
      { label: 'Settings', icon: 'settings' }
    ]}
  />
)`,methods:[],displayName:"SandSidebar",props:{items:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{icon:{name:"string",required:!1},label:{name:"string",required:!0},href:{name:"string",required:!1},active:{name:"bool",required:!1}}}},required:!1},className:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1}}};export{s as S};
