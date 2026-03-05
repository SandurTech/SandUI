import{j as p}from"./jsx-runtime-u17CrQMm.js";import{R as d}from"./index-CqIc3cxq.js";import{P as e}from"./index-CbwltWip.js";const a=d.forwardRef(({name:s,size:r=20,filled:n=!0,className:t,style:i,...o},l)=>p.jsx("span",{ref:l,className:`material-symbols-rounded ${t||""}`,style:{fontSize:r,fontVariationSettings:`'FILL' ${n?1:0}, 'wght' 400, 'GRAD' 0, 'opsz' ${r}`,verticalAlign:"middle",lineHeight:1,...i},...o,children:s}));a.propTypes={name:e.string.isRequired,size:e.number,filled:e.bool,className:e.string,style:e.object};a.displayName="SandIcon";a.__docgenInfo={description:`SandIcon - Renders a Google Material Symbols Rounded icon.

@component
@param {Object} props
@param {string} props.name - Material icon name (e.g. 'settings', 'dark_mode').
@param {number} [props.size=20] - Icon size in px.
@param {boolean} [props.filled=true] - Use filled variant.
@param {string} [props.className] - Additional CSS class for overrides.
@param {Object} [props.style] - Additional inline styles.
@returns {React.ReactElement} The rendered icon component.

@example
return (
  <SandIcon name="settings" size={24} filled={false} />
)`,methods:[],displayName:"SandIcon",props:{size:{defaultValue:{value:"20",computed:!1},description:"",type:{name:"number"},required:!1},filled:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},name:{description:"",type:{name:"string"},required:!0},className:{description:"",type:{name:"string"},required:!1},style:{description:"",type:{name:"object"},required:!1}}};export{a as S};
