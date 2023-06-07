"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[194],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={id:"use-erc20-balance",title:"useERC20Balance",sidebar_position:15},l=void 0,i={unversionedId:"hooks/use-erc20-balance",id:"hooks/use-erc20-balance",title:"useERC20Balance",description:"Returns the balance of the currently connected account or the given address for the ERC20 token.",source:"@site/docs/hooks/use-erc20-balance.md",sourceDirName:"hooks",slug:"/hooks/use-erc20-balance",permalink:"/react-ethooks/hooks/use-erc20-balance",draft:!1,editUrl:"https://github.com/incirLabs/react-ethooks/blob/main/docs/docs/hooks/use-erc20-balance.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{id:"use-erc20-balance",title:"useERC20Balance",sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"useERC20",permalink:"/react-ethooks/hooks/use-erc20"},next:{title:"useNetwork",permalink:"/react-ethooks/hooks/use-network"}},p={},s=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"contract",id:"contract",level:3},{value:"address",id:"address",level:3},{value:"format",id:"format",level:3},{value:"Returns",id:"returns",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Returns the ",(0,r.kt)("strong",{parentName:"p"},"balance")," of the currently ",(0,r.kt)("strong",{parentName:"p"},"connected account")," or the ",(0,r.kt)("strong",{parentName:"p"},"given address")," for the ERC20 token."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If ",(0,r.kt)("a",{parentName:"p",href:"#format"},(0,r.kt)("inlineCode",{parentName:"a"},"format"))," is ",(0,r.kt)("strong",{parentName:"p"},"provided"),", this hook will return the balance as a ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),". If ",(0,r.kt)("strong",{parentName:"p"},"not provided"),", it will return ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),".")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import {useERC20, useERC20Balance} from '@incirlabs/react-ethooks';\n\nexport default function MyComponent() {\n  const erc20Token = useERC20();\n  const balance = useERC20Balance(erc20Token.contract, undefined, 'ether');\n\n  return (\n    <div>\n      <p>Balance: {balance}</p>\n    </div>\n  );\n}\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("h3",{id:"contract"},"contract"),(0,r.kt)("p",null,"Contract instance for the ERC20 token returned from ",(0,r.kt)("a",{parentName:"p",href:"./use-contract"},(0,r.kt)("inlineCode",{parentName:"a"},"useContract"))," or ",(0,r.kt)("a",{parentName:"p",href:"./use-erc20"},(0,r.kt)("inlineCode",{parentName:"a"},"useERC20"))," or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ethers.org/v5/api/contract/contract/"},(0,r.kt)("inlineCode",{parentName:"a"},"ethers.Contract"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.ethers.org/v5/api/contract/contract/"},(0,r.kt)("inlineCode",{parentName:"a"},"ethers.Contract"))),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h3",{id:"address"},"address"),(0,r.kt)("p",null,"Address to get the balance of. If not given, currently connected account is used."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string ","|"," undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,r.kt)("h3",{id:"format"},"format"),(0,r.kt)("p",null,"Unit name or decimal to format the balance with. If not given, no formatting is applied."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../types#units"},"FormatUnitsName")," ","|"," undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("p",null,"If the ",(0,r.kt)("a",{parentName:"p",href:"#address"},(0,r.kt)("inlineCode",{parentName:"a"},"address"))," is ",(0,r.kt)("strong",{parentName:"p"},"provided"),", the balance of the given address.\nIf ",(0,r.kt)("strong",{parentName:"p"},"not provided")," or is ",(0,r.kt)("strong",{parentName:"p"},"undefined"),", the balance of the currently connected account."),(0,r.kt)("p",null,"If ",(0,r.kt)("a",{parentName:"p",href:"#format"},(0,r.kt)("inlineCode",{parentName:"a"},"format"))," is ",(0,r.kt)("strong",{parentName:"p"},"provided"),", the balance is a ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),".\nIf ",(0,r.kt)("strong",{parentName:"p"},"not provided"),", the balance is a ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#format"},"Format")," extends undefined")," ? ",(0,r.kt)("strong",{parentName:"td"},"BigNumber")," : ",(0,r.kt)("strong",{parentName:"td"},"string"))))))}u.isMDXComponent=!0}}]);