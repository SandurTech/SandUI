import{j as Q}from"./jsx-runtime-u17CrQMm.js";import{g as je}from"./index-CqIc3cxq.js";import{S as Ee}from"./SandThemeContext-POLRXX96.js";import{_ as X}from"./index-Cj_otjQe.js";import"./index-CbwltWip.js";var Be=Object.defineProperty,o=(e,r)=>Be(e,"name",{value:r,configurable:!0});function h(){return h=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)({}).hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},h.apply(null,arguments)}o(h,"_extends");function ue(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}o(ue,"_assertThisInitialized");function y(e,r){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,a){return t.__proto__=a,t},y(e,r)}o(y,"_setPrototypeOf");function fe(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,y(e,r)}o(fe,"_inheritsLoose");function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},I(e)}o(I,"_getPrototypeOf");function pe(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch{return typeof e=="function"}}o(pe,"_isNativeFunction");function G(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(G=o(function(){return!!e},"_isNativeReflectConstruct"))()}o(G,"_isNativeReflectConstruct");function de(e,r,t){if(G())return Reflect.construct.apply(null,arguments);var a=[null];a.push.apply(a,r);var n=new(e.bind.apply(e,a));return t&&y(n,t.prototype),n}o(de,"_construct");function P(e){var r=typeof Map=="function"?new Map:void 0;return P=o(function(t){if(t===null||!pe(t))return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(t))return r.get(t);r.set(t,a)}function a(){return de(t,arguments,I(this).constructor)}return o(a,"Wrapper"),a.prototype=Object.create(t.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),y(a,t)},"_wrapNativeSuper"),P(e)}o(P,"_wrapNativeSuper");var Re={1:`Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,2:`Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,3:`Passed an incorrect argument to a color function, please pass a string representation of a color.

`,4:`Couldn't generate valid rgb string from %s, it returned %s.

`,5:`Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,6:`Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,7:`Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,8:`Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,9:`Please provide a number of steps to the modularScale helper.

`,10:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,11:`Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,12:`Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,13:`Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,14:`Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,15:`Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,16:`You must provide a template to this method.

`,17:`You passed an unsupported selector state to this method.

`,18:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,19:`fromSize and toSize must be provided as stringified numbers with the same units.

`,20:`expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:`fontFace expects a name of a font-family.

`,24:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,25:`fontFace expects localFonts to be an array.

`,26:`fontFace expects fileFormats to be an array.

`,27:`radialGradient requries at least 2 color-stops to properly render.

`,28:`Please supply a filename to retinaImage() as the first argument.

`,29:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,32:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,33:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,34:`borderRadius expects a radius value as a string or number as the second argument.

`,35:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,36:`Property must be a string value.

`,37:`Syntax Error at %s.

`,38:`Formula contains a function that needs parentheses at %s.

`,39:`Formula is missing closing parenthesis at %s.

`,40:`Formula has too many closing parentheses at %s.

`,41:`All values in a formula must have the same unit or be unitless.

`,42:`Please provide a number of steps to the modularScale helper.

`,43:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,44:`Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,45:`Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,46:`Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,47:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,48:`fromSize and toSize must be provided as stringified numbers with the same units.

`,49:`Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,50:`Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,51:`Expects the first argument object to have the properties prop, fromSize, and toSize.

`,52:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,53:`fontFace expects localFonts to be an array.

`,54:`fontFace expects fileFormats to be an array.

`,55:`fontFace expects a name of a font-family.

`,56:`linearGradient requries at least 2 color-stops to properly render.

`,57:`radialGradient requries at least 2 color-stops to properly render.

`,58:`Please supply a filename to retinaImage() as the first argument.

`,59:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:`Property must be a string value.

`,62:`borderRadius expects a radius value as a string or number as the second argument.

`,63:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,64:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,65:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,66:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,67:`You must provide a template to this method.

`,68:`You passed an unsupported selector state to this method.

`,69:`Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,70:`Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,71:`Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,72:`Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,73:`Please provide a valid CSS variable.

`,74:`CSS variable not found and no default was provided.

`,75:`important requires a valid style object, got a %s instead.

`,76:`fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,77:`remToPx expects a value in "rem" but you provided it in "%s".

`,78:`base must be set in "px" or "%" but you set it in "%s".
`};function ce(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var a=r[0],n=[],s;for(s=1;s<r.length;s+=1)n.push(r[s]);return n.forEach(function(i){a=a.replace(/%[a-z]/,i)}),a}o(ce,"format");var c=(function(e){fe(r,e);function r(t){for(var a,n=arguments.length,s=new Array(n>1?n-1:0),i=1;i<n;i++)s[i-1]=arguments[i];return a=e.call(this,ce.apply(void 0,[Re[t]].concat(s)))||this,ue(a)}return o(r,"PolishedError"),r})(P(Error));function O(e){return Math.round(e*255)}o(O,"colorToInt");function ge(e,r,t){return O(e)+","+O(r)+","+O(t)}o(ge,"convertToInt");function v(e,r,t,a){if(a===void 0&&(a=ge),r===0)return a(t,t,t);var n=(e%360+360)%360/60,s=(1-Math.abs(2*t-1))*r,i=s*(1-Math.abs(n%2-1)),u=0,f=0,p=0;n>=0&&n<1?(u=s,f=i):n>=1&&n<2?(u=i,f=s):n>=2&&n<3?(f=s,p=i):n>=3&&n<4?(f=i,p=s):n>=4&&n<5?(u=i,p=s):n>=5&&n<6&&(u=s,p=i);var d=t-s/2,g=u+d,b=f+d,M=p+d;return a(g,b,M)}o(v,"hslToRgb");var Z={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function be(e){if(typeof e!="string")return e;var r=e.toLowerCase();return Z[r]?"#"+Z[r]:e}o(be,"nameToHex");var Ae=/^#[a-fA-F0-9]{6}$/,Me=/^#[a-fA-F0-9]{8}$/,De=/^#[a-fA-F0-9]{3}$/,He=/^#[a-fA-F0-9]{4}$/,D=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,ze=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,qe=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,$e=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function B(e){if(typeof e!="string")throw new c(3);var r=be(e);if(r.match(Ae))return{red:parseInt(""+r[1]+r[2],16),green:parseInt(""+r[3]+r[4],16),blue:parseInt(""+r[5]+r[6],16)};if(r.match(Me)){var t=parseFloat((parseInt(""+r[7]+r[8],16)/255).toFixed(2));return{red:parseInt(""+r[1]+r[2],16),green:parseInt(""+r[3]+r[4],16),blue:parseInt(""+r[5]+r[6],16),alpha:t}}if(r.match(De))return{red:parseInt(""+r[1]+r[1],16),green:parseInt(""+r[2]+r[2],16),blue:parseInt(""+r[3]+r[3],16)};if(r.match(He)){var a=parseFloat((parseInt(""+r[4]+r[4],16)/255).toFixed(2));return{red:parseInt(""+r[1]+r[1],16),green:parseInt(""+r[2]+r[2],16),blue:parseInt(""+r[3]+r[3],16),alpha:a}}var n=D.exec(r);if(n)return{red:parseInt(""+n[1],10),green:parseInt(""+n[2],10),blue:parseInt(""+n[3],10)};var s=ze.exec(r.substring(0,50));if(s)return{red:parseInt(""+s[1],10),green:parseInt(""+s[2],10),blue:parseInt(""+s[3],10),alpha:parseFloat(""+s[4])>1?parseFloat(""+s[4])/100:parseFloat(""+s[4])};var i=qe.exec(r);if(i){var u=parseInt(""+i[1],10),f=parseInt(""+i[2],10)/100,p=parseInt(""+i[3],10)/100,d="rgb("+v(u,f,p)+")",g=D.exec(d);if(!g)throw new c(4,r,d);return{red:parseInt(""+g[1],10),green:parseInt(""+g[2],10),blue:parseInt(""+g[3],10)}}var b=$e.exec(r.substring(0,50));if(b){var M=parseInt(""+b[1],10),Pe=parseInt(""+b[2],10)/100,_e=parseInt(""+b[3],10)/100,W="rgb("+v(M,Pe,_e)+")",C=D.exec(W);if(!C)throw new c(4,r,W);return{red:parseInt(""+C[1],10),green:parseInt(""+C[2],10),blue:parseInt(""+C[3],10),alpha:parseFloat(""+b[4])>1?parseFloat(""+b[4])/100:parseFloat(""+b[4])}}throw new c(5)}o(B,"parseToRgb");function me(e){var r=e.red/255,t=e.green/255,a=e.blue/255,n=Math.max(r,t,a),s=Math.min(r,t,a),i=(n+s)/2;if(n===s)return e.alpha!==void 0?{hue:0,saturation:0,lightness:i,alpha:e.alpha}:{hue:0,saturation:0,lightness:i};var u,f=n-s,p=i>.5?f/(2-n-s):f/(n+s);switch(n){case r:u=(t-a)/f+(t<a?6:0);break;case t:u=(a-r)/f+2;break;default:u=(r-t)/f+4;break}return u*=60,e.alpha!==void 0?{hue:u,saturation:p,lightness:i,alpha:e.alpha}:{hue:u,saturation:p,lightness:i}}o(me,"rgbToHsl");function K(e){return me(B(e))}o(K,"parseToHsl");var Ne=o(function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},"reduceHexValue"),L=Ne;function m(e){var r=e.toString(16);return r.length===1?"0"+r:r}o(m,"numberToHex");function T(e){return m(Math.round(e*255))}o(T,"colorToHex");function he(e,r,t){return L("#"+T(e)+T(r)+T(t))}o(he,"convertToHex");function S(e,r,t){return v(e,r,t,he)}o(S,"hslToHex");function ye(e,r,t){if(typeof e=="number"&&typeof r=="number"&&typeof t=="number")return S(e,r,t);if(typeof e=="object"&&r===void 0&&t===void 0)return S(e.hue,e.saturation,e.lightness);throw new c(1)}o(ye,"hsl");function ve(e,r,t,a){if(typeof e=="number"&&typeof r=="number"&&typeof t=="number"&&typeof a=="number")return a>=1?S(e,r,t):"rgba("+v(e,r,t)+","+a+")";if(typeof e=="object"&&r===void 0&&t===void 0&&a===void 0)return e.alpha>=1?S(e.hue,e.saturation,e.lightness):"rgba("+v(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new c(2)}o(ve,"hsla");function _(e,r,t){if(typeof e=="number"&&typeof r=="number"&&typeof t=="number")return L("#"+m(e)+m(r)+m(t));if(typeof e=="object"&&r===void 0&&t===void 0)return L("#"+m(e.red)+m(e.green)+m(e.blue));throw new c(6)}o(_,"rgb");function F(e,r,t,a){if(typeof e=="string"&&typeof r=="number"){var n=B(e);return"rgba("+n.red+","+n.green+","+n.blue+","+r+")"}else{if(typeof e=="number"&&typeof r=="number"&&typeof t=="number"&&typeof a=="number")return a>=1?_(e,r,t):"rgba("+e+","+r+","+t+","+a+")";if(typeof e=="object"&&r===void 0&&t===void 0&&a===void 0)return e.alpha>=1?_(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new c(7)}o(F,"rgba");var Le=o(function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},"isRgb"),Ue=o(function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&typeof e.alpha=="number"},"isRgba"),Ye=o(function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},"isHsl"),Ge=o(function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&typeof e.alpha=="number"},"isHsla");function V(e){if(typeof e!="object")throw new c(8);if(Ue(e))return F(e);if(Le(e))return _(e);if(Ge(e))return ve(e);if(Ye(e))return ye(e);throw new c(8)}o(V,"toColorString");function J(e,r,t){return o(function(){var a=t.concat(Array.prototype.slice.call(arguments));return a.length>=r?e.apply(this,a):J(e,r,a)},"fn")}o(J,"curried");function R(e){return J(e,e.length,[])}o(R,"curry");function A(e,r,t){return Math.max(e,Math.min(r,t))}o(A,"guard");function Se(e,r){if(r==="transparent")return r;var t=K(r);return V(h({},t,{lightness:A(0,1,t.lightness-parseFloat(e))}))}o(Se,"darken");var Ke=R(Se),Ve=Ke;function Fe(e,r){if(r==="transparent")return r;var t=K(r);return V(h({},t,{lightness:A(0,1,t.lightness+parseFloat(e))}))}o(Fe,"lighten");var Je=R(Fe),We=Je;function we(e,r){if(r==="transparent")return r;var t=B(r),a=typeof t.alpha=="number"?t.alpha:1,n=h({},t,{alpha:A(0,1,+(a*100-parseFloat(e)*100).toFixed(2)/100)});return F(n)}o(we,"transparentize");var Qe=R(we),Xe=Qe,l={secondary:"#029CFD",lightest:"#FFFFFF",mediumlight:"#ECF4F9",medium:"#D9E8F2",mediumdark:"#73828C",dark:"#5C6870",darkest:"#2E3438",border:"hsla(203, 50%, 30%, 0.15)"},ee={app:"#F6F9FC",hoverable:Xe(.9,l.secondary)},j={fonts:{base:['"Nunito Sans"',"-apple-system",'".SFNSText-Regular"','"San Francisco"',"BlinkMacSystemFont",'"Segoe UI"','"Helvetica Neue"',"Helvetica","Arial","sans-serif"].join(", "),mono:["ui-monospace","Menlo","Monaco",'"Roboto Mono"','"Oxygen Mono"','"Ubuntu Monospace"','"Source Code Pro"','"Droid Sans Mono"','"Courier New"',"monospace"].join(", ")}},Ze={base:"dark",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:"#222425",appContentBg:"#1B1C1D",appPreviewBg:l.lightest,appBorderColor:"rgba(255,255,255,.1)",appBorderRadius:4,fontBase:j.fonts.base,fontCode:j.fonts.mono,textColor:"#C9CDCF",textInverseColor:"#222425",textMutedColor:"#798186",barTextColor:l.mediumdark,barHoverColor:l.secondary,barSelectedColor:l.secondary,barBg:"#292C2E",buttonBg:"#222425",buttonBorder:"rgba(255,255,255,.1)",booleanBg:"#222425",booleanSelectedBg:"#2E3438",inputBg:"#1B1C1D",inputBorder:"rgba(255,255,255,.1)",inputTextColor:l.lightest,inputBorderRadius:4},er=Ze,rr={base:"light",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:ee.app,appContentBg:l.lightest,appPreviewBg:l.lightest,appBorderColor:l.border,appBorderRadius:4,fontBase:j.fonts.base,fontCode:j.fonts.mono,textColor:l.darkest,textInverseColor:l.lightest,textMutedColor:l.dark,barTextColor:l.mediumdark,barHoverColor:l.secondary,barSelectedColor:l.secondary,barBg:l.lightest,buttonBg:ee.app,buttonBorder:l.medium,booleanBg:l.mediumlight,booleanSelectedBg:l.lightest,inputBg:l.lightest,inputBorder:l.border,inputTextColor:l.darkest,inputBorderRadius:4},re=rr,tr=(()=>{let e;return typeof window<"u"?e=window:typeof globalThis<"u"?e=globalThis:typeof global<"u"?e=global:typeof self<"u"?e=self:e={},e})();const{logger:ar}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var{window:H}=tr,nr=o(e=>typeof e!="string"?(ar.warn(`Color passed to theme object should be a string. Instead ${e}(${typeof e}) was passed.`),!1):!0,"isColorString"),or=o(e=>!/(gradient|var|calc)/.test(e),"isValidColorForPolished"),sr=o((e,r)=>e==="darken"?F(`${Ve(1,r)}`,.95):e==="lighten"?F(`${We(1,r)}`,.95):r,"applyPolished"),Ce=o(e=>r=>{if(!nr(r)||!or(r))return r;try{return sr(e,r)}catch{return r}},"colorFactory");Ce("lighten");Ce("darken");var ir=o(()=>!H||!H.matchMedia?"light":H.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light","getPreferredColorScheme"),z={light:re,dark:er,normal:re},q=ir(),xe=o((e={base:q},r)=>{let t={...z[q],...z[e.base]||{},...e,base:z[e.base]?e.base:q};return{...r,...t,barSelectedColor:e.barSelectedColor||t.colorSecondary}},"create");const ke={brandTitle:"SandurTech | SandUI",brandUrl:"https://sandurtech.vercel.app/",brandTarget:"_blank",fontBase:'"Inter", system-ui, -apple-system, sans-serif',fontCode:'"JetBrains Mono", "Fira Code", monospace',colorPrimary:"orange",appBorderRadius:8,inputBorderRadius:6},lr=xe({...ke,base:"light",colorSecondary:"orange",appBg:"#F2F2F2",appContentBg:"#FFFFFF",appBorderColor:"rgba(38, 38, 38, 0.12)",textColor:"#262626",textInverseColor:"#FFFFFF",textMutedColor:"rgba(38, 38, 38, 0.65)",barTextColor:"rgba(38, 38, 38, 0.65)",barSelectedColor:"orange",barHoverColor:"#262626",barBg:"#FFFFFF",inputBg:"#FFFFFF",inputBorder:"rgba(38, 38, 38, 0.12)",inputTextColor:"#262626"}),ur=xe({...ke,base:"dark",colorSecondary:"orange",appBg:"#111111",appContentBg:"#262626",appBorderColor:"rgba(255, 255, 255, 0.1)",textColor:"#FFFFFF",textInverseColor:"#262626",textMutedColor:"rgba(255, 255, 255, 0.6)",barTextColor:"rgba(255, 255, 255, 0.6)",barSelectedColor:"orange",barHoverColor:"#FFFFFF",barBg:"#262626",inputBg:"rgba(0, 0, 0, 0.2)",inputBorder:"rgba(255, 255, 255, 0.1)",inputTextColor:"#FFFFFF"});var te="DARK_MODE",$,ae;function fr(){return ae||(ae=1,$=function e(r,t){if(r===t)return!0;if(r&&t&&typeof r=="object"&&typeof t=="object"){if(r.constructor!==t.constructor)return!1;var a,n,s;if(Array.isArray(r)){if(a=r.length,a!=t.length)return!1;for(n=a;n--!==0;)if(!e(r[n],t[n]))return!1;return!0}if(r.constructor===RegExp)return r.source===t.source&&r.flags===t.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===t.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===t.toString();if(s=Object.keys(r),a=s.length,a!==Object.keys(t).length)return!1;for(n=a;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,s[n]))return!1;for(n=a;n--!==0;){var i=s[n];if(!e(r[i],t[i]))return!1}return!0}return r!==r&&t!==t}),$}var pr=fr();const ne=je(pr);function w(e){"@babel/helpers - typeof";return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},w(e)}var N;function oe(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,a)}return t}function se(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?oe(Object(t),!0).forEach(function(a){dr(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):oe(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function dr(e,r,t){return r=cr(r),r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function cr(e){var r=gr(e,"string");return w(r)==="symbol"?r:String(r)}function gr(e,r){if(w(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var a=t.call(e,r);if(w(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function x(e){return yr(e)||hr(e)||mr(e)||br()}function br(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mr(e,r){if(e){if(typeof e=="string")return U(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return U(e,r)}}function hr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function yr(e){if(Array.isArray(e))return U(e)}function U(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}const{global:vr}=__STORYBOOK_MODULE_GLOBAL__,{STORY_CHANGED:Dr,SET_STORIES:Hr,DOCS_RENDERED:zr}=__STORYBOOK_MODULE_CORE_EVENTS__;var Oe=vr,Sr=Oe.document,E=Oe.window,Te="sb-addon-themes-3";(N=E.matchMedia)===null||N===void 0||N.call(E,"(prefers-color-scheme: dark)");var Y={classTarget:"body",dark:X.dark,darkClass:["dark"],light:X.light,lightClass:["light"],stylePreview:!1,userHasExplicitlySetTheTheme:!1},ie=function(r){E.localStorage.setItem(Te,JSON.stringify(r))},Fr=function(r,t){var a=t.current,n=t.darkClass,s=n===void 0?Y.darkClass:n,i=t.lightClass,u=i===void 0?Y.lightClass:i;if(a==="dark"){var f,p;(f=r.classList).remove.apply(f,x(k(u))),(p=r.classList).add.apply(p,x(k(s)))}else{var d,g;(d=r.classList).remove.apply(d,x(k(s))),(g=r.classList).add.apply(g,x(k(u)))}},k=function(r){var t=[];return t.concat(r).map(function(a){return a})},wr=function(r){var t=Sr.querySelector(r.classTarget);t&&Fr(t,r)},Ie=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=E.localStorage.getItem(Te);if(typeof t=="string"){var a=JSON.parse(t);return r&&(r.dark&&!ne(a.dark,r.dark)&&(a.dark=r.dark,ie(a)),r.light&&!ne(a.light,r.light)&&(a.light=r.light,ie(a))),a}return se(se({},Y),r)};wr(Ie());function Cr(e,r){return Tr(e)||Or(e,r)||kr(e,r)||xr()}function xr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kr(e,r){if(e){if(typeof e=="string")return le(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return le(e,r)}}function le(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}function Or(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var a,n,s,i,u=[],f=!0,p=!1;try{if(s=(t=t.call(e)).next,r!==0)for(;!(f=(a=s.call(t)).done)&&(u.push(a.value),u.length!==r);f=!0);}catch(d){p=!0,n=d}finally{try{if(!f&&t.return!=null&&(i=t.return(),Object(i)!==i))return}finally{if(p)throw n}}return u}}function Tr(e){if(Array.isArray(e))return e}const{addons:Ir,useState:Pr,useEffect:_r}=__STORYBOOK_MODULE_PREVIEW_API__;function jr(){var e=Pr(Ie().current==="dark"),r=Cr(e,2),t=r[0],a=r[1];return _r(function(){var n=Ir.getChannel();return n.on(te,a),function(){return n.off(te,a)}},[]),t}const qr={parameters:{darkMode:{dark:ur,light:lr,current:"dark"},docs:{},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},options:{storySort:{order:["Introduction","01. Foundations",["Colors","Typography","Spacing","Shadows","Theme"],"02. Atoms",["SandButton","SandLink","SandBadge","SandIcon"],"03. Molecules",["SandInputGroup","SandCard","SandToast","SandBox"],"04. Organisms",["SandNavbar","SandSidebar","SandFooter"],"05. Templates",["StandardLayout","AuthLayout"]]}}},decorators:[e=>{const r=jr();return Q.jsx(Ee,{defaultTheme:r?"dark":"light",persist:!1,children:Q.jsx(e,{})})}]};export{qr as default};
