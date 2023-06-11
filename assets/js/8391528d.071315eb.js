"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[633],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>k});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),i=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=i(t.components);return n.createElement(s.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),p=i(r),m=a,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(k,l(l({ref:e},u),{},{components:r})):n.createElement(k,l({ref:e},u))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=m;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c[p]="string"==typeof t?t:a,l[1]=c;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2595:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={id:"use-contract-write",title:"useContractWrite",sidebar_position:10},l=void 0,c={unversionedId:"hooks/use-contract-write",id:"hooks/use-contract-write",title:"useContractWrite",description:"Returns a function to execute a state mutating function on a contract.",source:"@site/docs/hooks/use-contract-write.md",sourceDirName:"hooks",slug:"/hooks/use-contract-write",permalink:"/react-ethooks/hooks/use-contract-write",draft:!1,editUrl:"https://github.com/incirLabs/react-ethooks/blob/main/docs/docs/hooks/use-contract-write.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"use-contract-write",title:"useContractWrite",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"useContractRead",permalink:"/react-ethooks/hooks/use-contract-read"},next:{title:"useEnsAddress",permalink:"/react-ethooks/hooks/use-ens-address"}},s={},i=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"contract",id:"contract",level:3},{value:"method",id:"method",level:3},{value:"defaultArgs",id:"defaultargs",level:3},{value:"Returns",id:"returns",level:2}],u={toc:i},p="wrapper";function d(t){let{components:e,...r}=t;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Returns a function to execute a state mutating function on a contract."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import {useContract, useContractWrite} from '@incirlabs/react-ethooks';\n\nexport default function MyComponent() {\n  const MyContract = useContract('0x00', MyContractABI);\n  const transfer = useContractWrite(MyContract, 'transfer');\n\n  const onSomeAction = async () => {\n    const result = await transfer(['0xfrom', '0xto', '1000']);\n\n    if (result.status) {\n      console.log(`Result: ${result.data}`);\n    } else {\n      console.log(`Error: ${result.error.message}`);\n    }\n  };\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("h3",{id:"contract"},"contract"),(0,a.kt)("p",null,"Contract instance returned from ",(0,a.kt)("a",{parentName:"p",href:"./use-contract"},(0,a.kt)("inlineCode",{parentName:"a"},"useContract"))," or ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ethers.org/v5/api/contract/contract/"},(0,a.kt)("inlineCode",{parentName:"a"},"ethers.Contract"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://docs.ethers.org/v5/api/contract/contract/"},(0,a.kt)("inlineCode",{parentName:"a"},"ethers.Contract"))),(0,a.kt)("td",{parentName:"tr",align:null},"Required")))),(0,a.kt)("h3",{id:"method"},"method"),(0,a.kt)("p",null,"State Mutating Function name to call on the contract instance."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")))),(0,a.kt)("h3",{id:"defaultargs"},"defaultArgs"),(0,a.kt)("p",null,"Default arguments to pass to the view function."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"(string ","|"," number)[]"),(0,a.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("p",null,"Function to execute the view function on the contract instance."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"(args: (string ","|"," number)[]) => Promise","<",(0,a.kt)("a",{parentName:"td",href:"../types#contractresult"},"ContractResult"),">")))))}d.isMDXComponent=!0}}]);