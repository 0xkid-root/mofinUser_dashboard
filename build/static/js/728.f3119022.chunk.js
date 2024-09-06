"use strict";(self.webpackChunkmofin=self.webpackChunkmofin||[]).push([[728],{6728:(e,a,t)=>{t.d(a,{offchainLookup:()=>g,offchainLookupSignature:()=>m});var r=t(339),s=t(7494),n=t(596),o=t(9681);class c extends n.C{constructor(e){let{callbackSelector:a,cause:t,data:r,extraData:s,sender:n,urls:c}=e;super(t.shortMessage||"An error occurred while fetching for an offchain result.",{cause:t,metaMessages:[...t.metaMessages||[],t.metaMessages?.length?"":[],"Offchain Gateway Call:",c&&["  Gateway URL(s):",...c.map((e=>`    ${(0,o.ID)(e)}`))],`  Sender: ${n}`,`  Data: ${r}`,`  Callback selector: ${a}`,`  Extra data: ${s}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class l extends n.C{constructor(e){let{result:a,url:t}=e;super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${(0,o.ID)(t)}`,`Response: ${(0,s.A)(a)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class d extends n.C{constructor(e){let{sender:a,to:t}=e;super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${t}`,`OffchainLookup sender address: ${a}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}var u=t(8308),i=t(4395),f=t(5510),h=t(4525),p=t(9010);var b=t(6954),w=t(4137);const m="0x556f1830",y={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function g(e,a){let{blockNumber:t,blockTag:n,data:o,to:m}=a;const{args:g}=(0,i.W)({data:o,abi:[y]}),[k,C,O,x,L]=g;try{if(!function(e,a){if(!(0,p.P)(e,{strict:!1}))throw new h.M({address:e});if(!(0,p.P)(a,{strict:!1}))throw new h.M({address:a});return e.toLowerCase()===a.toLowerCase()}(m,k))throw new d({sender:k,to:m});const a=await async function(e){let{data:a,sender:t,urls:r}=e,n=new Error("An unknown error occurred.");for(let c=0;c<r.length;c++){const e=r[c],d=e.includes("{data}")?"GET":"POST",i="POST"===d?{data:a,sender:t}:void 0;try{const r=await fetch(e.replace("{sender}",t).replace("{data}",a),{body:JSON.stringify(i),method:d});let o;if(o=r.headers.get("Content-Type")?.startsWith("application/json")?(await r.json()).data:await r.text(),!r.ok){n=new u.Ci({body:i,details:o?.error?(0,s.A)(o.error):r.statusText,headers:r.headers,status:r.status,url:e});continue}if(!(0,w.q)(o)){n=new l({result:o,url:e});continue}return o}catch(o){n=new u.Ci({body:i,details:o.message,url:e})}}throw n}({data:O,sender:k,urls:C}),{data:o}=await(0,r.T1)(e,{blockNumber:t,blockTag:n,data:(0,b.xW)([x,(0,f.h)([{type:"bytes"},{type:"bytes"}],[a,L])]),to:m});return o}catch(M){throw new c({callbackSelector:x,cause:M,data:o,extraData:L,sender:k,urls:C})}}}}]);
//# sourceMappingURL=728.f3119022.chunk.js.map