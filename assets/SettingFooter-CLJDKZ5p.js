import{v as b,u as x,z as h,b as M,s as B,y as p,aV as T,aW as v,aX as V,c as A,H as D,_ as F}from"./entry/index-BSEuDrNE.js";import{c as N}from"./copyTextToClipboard-BllMYU0b.js";import{b3 as O,aD as d}from"./antd-_31jc7HV.js";import{d as P,U as R,V as W,k as o,Z as n,Y as j,u as e,S as w,G as c,X as l}from"./vue-oIE3a0W0.js";const z=P({name:"SettingFooter",__name:"SettingFooter",setup(G){const g=b(),{prefixCls:m}=x("setting-footer"),{t}=A(),{createSuccessModal:S,createMessage:i}=D(),f=h(),_=M(),a=B();function y(){N(JSON.stringify(e(a.getProjectConfig),null,2),null).then(()=>{S({title:t("layout.setting.operatingTitle"),content:t("layout.setting.operatingContent")})})}function C(){try{a.setProjectConfig(p);const{colorWeak:s,grayMode:u}=p;T(),v(s),V(u),i.success(t("layout.setting.resetSuccess"))}catch(s){i.error(s)}}function k(){localStorage.clear(),a.resetAllState(),g.resetState(),f.resetState(),_.resetState(),location.reload()}return(s,u)=>{const r=w("a-button");return R(),W("div",{class:j(e(m))},[o(r,{type:"primary",block:"",onClick:y},{default:n(()=>[o(e(O),{class:"mr-2"}),c(" "+l(e(t)("layout.setting.copyBtn")),1)]),_:1}),o(r,{color:"warning",block:"",onClick:C,class:"my-3"},{default:n(()=>[o(e(d),{class:"mr-2"}),c(" "+l(e(t)("common.resetText")),1)]),_:1}),o(r,{color:"error",block:"",onClick:k},{default:n(()=>[o(e(d),{class:"mr-2"}),c(" "+l(e(t)("layout.setting.clearBtn")),1)]),_:1})],2)}}}),H=F(z,[["__scopeId","data-v-e923ed59"]]);export{H as default};
