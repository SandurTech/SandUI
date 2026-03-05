import{j as c}from"./jsx-runtime-u17CrQMm.js";import{R as u}from"./index-CqIc3cxq.js";import{P as e}from"./index-CbwltWip.js";const m="_link_1xqus_1",f="_muted_1xqus_21",x="_accent_1xqus_28",t={link:m,default:"_default_1xqus_17",muted:f,accent:x},a=u.forwardRef(({className:n,variant:r="default",external:s=!1,children:o,...l},i)=>{const p=[t.link,t[r],n||""].filter(Boolean).join(" "),d=s?{target:"_blank",rel:"noopener noreferrer"}:{};return c.jsx("a",{ref:i,className:p,...d,...l,children:o})});a.propTypes={className:e.string,variant:e.oneOf(["default","muted","accent"]),external:e.bool,href:e.string,children:e.node.isRequired};a.displayName="SandLink";a.__docgenInfo={description:`SandLink - A styled anchor element.

@component
@param {Object} props
@param {string} [props.className] - Additional CSS class for overrides.
@param {string} [props.href] - Destination URL.
@param {string} [props.variant='default'] - Visual style: 'default', 'muted', or 'accent'.
@param {boolean} [props.external=false] - Opens in new tab when true.
@param {React.ReactNode} props.children - Link text or content.
@returns {React.ReactElement} The rendered link component.

@example
return (
  <SandLink href="https://example.com" external variant="accent">
    Visit Example
  </SandLink>
)`,methods:[],displayName:"SandLink",props:{variant:{defaultValue:{value:"'default'",computed:!1},description:"",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'muted'",computed:!1},{value:"'accent'",computed:!1}]},required:!1},external:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},className:{description:"",type:{name:"string"},required:!1},href:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!0}}};export{a as S};
