"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[185],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),s=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(i.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),p=s(n),m=a,k=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(k,l(l({ref:e},u),{},{components:n})):r.createElement(k,l({ref:e},u))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c[p]="string"==typeof t?t:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7442:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={id:"use-contract-read",title:"useContractRead",sidebar_position:8},l=void 0,c={unversionedId:"hooks/use-contract-read",id:"hooks/use-contract-read",title:"useContractRead",description:"Returns a function to execute a view function on a contract.",source:"@site/docs/hooks/use-contract-read.md",sourceDirName:"hooks",slug:"/hooks/use-contract-read",permalink:"/react-ethooks/hooks/use-contract-read",draft:!1,editUrl:"https://github.com/incirLabs/react-ethooks/blob/main/docs/docs/hooks/use-contract-read.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"use-contract-read",title:"useContractRead",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"useContractEvent",permalink:"/react-ethooks/hooks/use-contract-event"},next:{title:"useContractWrite",permalink:"/react-ethooks/hooks/use-contract-write"}},i={},s=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"contract",id:"contract",level:3},{value:"method",id:"method",level:3},{value:"defaultArgs",id:"defaultargs",level:3},{value:"Returns",id:"returns",level:2}],u={toc:s},p="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Returns a function to execute a view function on a contract."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import {useContract, useContractRead} from '@incirlabs/react-ethooks';\n\nexport default function MyComponent() {\n  const MyContract = useContract('0x00', MyContractABI);\n  const readBalanceOf = useContractRead(MyContract, 'balanceOf');\n\n  const onSomeAction = async () => {\n    const result = await readBalanceOf(['0x123']);\n\n    if (result.status) {\n      console.log(`Balance: ${result.data}`);\n    } else {\n      console.log(`Error: ${result.error.message}`);\n    }\n  };\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("h3",{id:"contract"},"contract"),(0,a.kt)("p",null,"Contract instance returned from ",(0,a.kt)("a",{parentName:"p",href:"./use-contract"},(0,a.kt)("inlineCode",{parentName:"a"},"useContract"))," or ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ethers.org/v5/api/contract/contract/"},(0,a.kt)("inlineCode",{parentName:"a"},"ethers.Contract"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://docs.ethers.org/v5/api/contract/contract/"},(0,a.kt)("inlineCode",{parentName:"a"},"ethers.Contract"))),(0,a.kt)("td",{parentName:"tr",align:null},"Required")))),(0,a.kt)("h3",{id:"method"},"method"),(0,a.kt)("p",null,"View Function name to call on the contract instance."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")))),(0,a.kt)("h3",{id:"defaultargs"},"defaultArgs"),(0,a.kt)("p",null,"Default arguments to pass to the view function."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"(string ","|"," number)[]"),(0,a.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("p",null,"Function to execute the view function on the contract instance."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"(args: (string ","|"," number)[]) => Promise","<",(0,a.kt)("a",{parentName:"td",href:"../types#contractresult"},"ContractResult"),">")))))}d.isMDXComponent=!0}}]);