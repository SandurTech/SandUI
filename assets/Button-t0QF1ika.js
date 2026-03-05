import{j as d}from"./jsx-runtime-u17CrQMm.js";import{R as l}from"./index-CqIc3cxq.js";import{P as e}from"./index-CbwltWip.js";const c="_button_1vhs7_51",m="_primary_1vhs7_81",u="_secondary_1vhs7_92",y="_ghost_1vhs7_103",t={button:c,primary:m,secondary:u,ghost:y},a=l.forwardRef(({className:r,variant:s="primary",children:n,...o},i)=>{const p=[t.button,t[s],"sandui-globals",r||""].filter(Boolean).join(" ");return d.jsx("button",{ref:i,className:p,...o,children:n})});a.propTypes={className:e.string,variant:e.oneOf(["primary","secondary","ghost"]),children:e.node.isRequired,disabled:e.bool};a.displayName="SandButton";a.__docgenInfo={description:`SandButton - The primary interactive element in SandUI.

Supports three visual variants and an active press animation (scale 0.98).
All buttons use the Inter font and follow the 8px spacing grid.

@component
@param {Object} props
@param {string} [props.className] - Additional CSS class for external overrides.
@param {string} [props.variant='primary'] - Visual style: 'primary', 'secondary', or 'ghost'.
@param {React.ReactNode} props.children - Button content.
@param {boolean} [props.disabled=false] - Disables interaction and reduces opacity.
@returns {React.ReactElement} The rendered button component.

@example
return (
  <SandButton variant="primary" disabled={false}>
    Click Me
  </SandButton>
)`,methods:[],displayName:"SandButton",props:{variant:{defaultValue:{value:"'primary'",computed:!1},description:"Visual style variant",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'ghost'",computed:!1}]},required:!1},className:{description:"Additional CSS class for external overrides",type:{name:"string"},required:!1},children:{description:"Button content",type:{name:"node"},required:!0},disabled:{description:"Disables the button",type:{name:"bool"},required:!1}}};export{a as S};
