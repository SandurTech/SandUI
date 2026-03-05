import{j as f}from"./jsx-runtime-u17CrQMm.js";import{r as t}from"./index-CqIc3cxq.js";import{P as d}from"./index-CbwltWip.js";const l=t.createContext({theme:"light",toggleTheme:()=>{},setTheme:()=>{}});function c({children:o,defaultTheme:u="light",persist:r=!0}){const[n,a]=t.useState(()=>{if(r&&typeof window<"u"){const e=localStorage.getItem("sandui-theme");if(e==="light"||e==="dark")return e}return typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":u});t.useEffect(()=>{document.documentElement.setAttribute("data-theme",n),r&&localStorage.setItem("sandui-theme",n)},[n,r]),t.useEffect(()=>{if(typeof window>"u"||!window.matchMedia)return;const e=window.matchMedia("(prefers-color-scheme: dark)"),m=p=>{r&&localStorage.getItem("sandui-theme")||a(p.matches?"dark":"light")};return e.addEventListener("change",m),()=>e.removeEventListener("change",m)},[r]);const i=t.useCallback(e=>{(e==="light"||e==="dark")&&a(e)},[]),s=t.useCallback(()=>{a(e=>e==="light"?"dark":"light")},[]),h=t.useMemo(()=>({theme:n,toggleTheme:s,setTheme:i}),[n,s,i]);return f.jsx(l.Provider,{value:h,children:o})}c.propTypes={children:d.node.isRequired,defaultTheme:d.oneOf(["light","dark"]),persist:d.bool};function T(){const o=t.useContext(l);if(!o)throw new Error("useSandTheme must be used within a <SandThemeProvider>");return o}c.__docgenInfo={description:`SandThemeProvider

Wraps your app and provides the current theme + a toggle function.
All SandUI CSS-variable based tokens respond to \`data-theme\` on <html>,
so this context controls the entire color scheme.

@component
@param {Object} props
@param {React.ReactNode} props.children - The child components to wrap.
@param {string} [props.defaultTheme='light'] - 'light' | 'dark'
@param {boolean} [props.persist=true] - Save preference to localStorage
@returns {React.ReactElement} The provider component.

@example
return (
  <SandThemeProvider defaultTheme="light">
    <App />
  </SandThemeProvider>
)`,methods:[],displayName:"SandThemeProvider",props:{defaultTheme:{defaultValue:{value:"'light'",computed:!1},description:"",type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]},required:!1},persist:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},children:{description:"",type:{name:"node"},required:!0}}};export{c as S,T as u};
