import{j as t}from"./jsx-runtime-u17CrQMm.js";import{R as o}from"./index-CqIc3cxq.js";import{P as e}from"./index-CbwltWip.js";const c="_wrapper_cf5v8_51",m="_label_cf5v8_59",u="_input_cf5v8_67",f="_error_cf5v8_98",b="_errorText_cf5v8_105",r={wrapper:c,label:m,input:u,error:f,errorText:b},a=o.forwardRef(({className:l,label:p,error:s,...i},d)=>{const n=o.useId();return t.jsxs("div",{className:`${r.wrapper} sandui-globals ${l||""}`,children:[p&&t.jsx("label",{htmlFor:n,className:r.label,children:p}),t.jsx("input",{id:n,ref:d,className:`${r.input} ${s?r.error:""}`,...i}),s&&t.jsx("span",{className:r.errorText,children:s})]})});a.propTypes={className:e.string,label:e.string,error:e.string,placeholder:e.string,type:e.string,disabled:e.bool};a.displayName="SandInput";a.__docgenInfo={description:`SandInput - A controlled or uncontrolled text input component.

@component
@param {Object} props
@param {string} [props.className] - Additional CSS class for external overrides.
@param {string} [props.label] - Label text displayed above the input.
@param {string} [props.error] - Error message displayed below the input.
@param {string} [props.placeholder] - Placeholder text for the input.
@param {string} [props.type='text'] - Type of the input element.
@param {boolean} [props.disabled=false] - Disables the input.
@returns {React.ReactElement} The rendered input component.

@example
return (
  <SandInput
    label="Username"
    placeholder="Enter your username"
  />
)`,methods:[],displayName:"SandInput",props:{className:{description:"",type:{name:"string"},required:!1},label:{description:"",type:{name:"string"},required:!1},error:{description:"",type:{name:"string"},required:!1},placeholder:{description:"",type:{name:"string"},required:!1},type:{description:"",type:{name:"string"},required:!1},disabled:{description:"",type:{name:"bool"},required:!1}}};export{a as S};
