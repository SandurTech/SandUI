import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as m}from"./index-CqIc3cxq.js";import{P as a}from"./index-CbwltWip.js";const f="_navbar_fpxv0_51",g="_fixed_fpxv0_66",v="_logo_fpxv0_71",r={navbar:f,fixed:g,logo:v},o=m.forwardRef(({className:t,title:n,logo:s,fixed:i=!1,children:l,...p},d)=>{const c=[r.navbar,i?r.fixed:"","sandui-globals",t||""].filter(Boolean).join(" ");return e.jsxs("nav",{ref:d,className:c,...p,children:[e.jsxs("div",{className:r.logo,children:[s&&e.jsx("img",{src:s,alt:`${n||"SandUI"} logo`}),n&&e.jsx("h1",{children:n})]}),e.jsx("div",{children:l})]})});o.propTypes={className:a.string,title:a.string,logo:a.string,fixed:a.bool,children:a.node};o.displayName="SandNavbar";o.__docgenInfo={description:`SandNavbar - A top navigation bar component.

@component
@param {Object} props
@param {string} [props.className] - Additional CSS class for external overrides.
@param {string} [props.title] - Navbar title text.
@param {string} [props.logo] - URL to the logo image.
@param {boolean} [props.fixed=false] - Fixes the navbar to the top of the viewport.
@param {React.ReactNode} [props.children] - Additional navbar content (e.g., links).
@returns {React.ReactElement} The rendered navbar component.

@example
return (
  <SandNavbar title="SandUI" fixed={true}>
    <a href="/login">Login</a>
  </SandNavbar>
)`,methods:[],displayName:"SandNavbar",props:{fixed:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},className:{description:"",type:{name:"string"},required:!1},title:{description:"",type:{name:"string"},required:!1},logo:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1}}};export{o as S};
