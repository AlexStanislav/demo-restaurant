import{o as u,c as v,a,K as h,w as _,L as p,y as t,p as i,M as d,b as f,N as l,P as b,Q as g}from"./index-0956b529.js";const w=(o,e)=>{const m=o.__vccOpts||o;for(const[r,s]of e)m[r]=s;return m},n=o=>(b("data-v-8d4c664e"),o=o(),g(),o),x={class:"contact"},P=n(()=>a("div",{class:"contact-bg"},null,-1)),I={class:"contact-form-wrapper"},y={class:"contact-form"},S=n(()=>a("h1",null,"Contact Us",-1)),V=["onSubmit"],k={class:"form-field"},M=n(()=>a("label",{for:"name"},"Name:",-1)),N={class:"form-field"},U=n(()=>a("label",{for:"email"},"Email:",-1)),C={class:"form-field"},q=n(()=>a("label",{for:"message"},"Message:",-1)),A=n(()=>a("button",{type:"submit"},"Submit",-1)),B={class:"address-wrapper"},E=f("<h1 data-v-8d4c664e>Don&#39;t hesitate to contact us!</h1><ul data-v-8d4c664e><li data-v-8d4c664e><span data-v-8d4c664e>Address:</span> 123 Main St, Anytown, USA 12345</li><li data-v-8d4c664e><span data-v-8d4c664e>Phone:</span> (555) 123-4567</li><li data-v-8d4c664e><span data-v-8d4c664e>Fax:</span> (555) 123-4568</li><li data-v-8d4c664e><span data-v-8d4c664e>Email:</span> info@example.com</li><li data-v-8d4c664e><span data-v-8d4c664e>Twitter:</span> @example</li><li data-v-8d4c664e><span data-v-8d4c664e>Facebook:</span> /example</li><li data-v-8d4c664e><span data-v-8d4c664e>Instagram:</span> @example_company</li></ul>",2),F={class:"contact-icons"},D={__name:"ContactView",setup(o){let e={name:"",email:"",message:""};function m(){console.log(this.form)}return(r,s)=>(u(),v("div",x,[P,a("div",I,[a("div",y,[S,a("form",{onSubmit:h(m,["prevent"])},[a("div",k,[M,_(a("input",{type:"text",id:"name",name:"name","onUpdate:modelValue":s[0]||(s[0]=c=>t(e).name=c),required:""},null,512),[[p,t(e).name]])]),a("div",N,[U,_(a("input",{type:"email",id:"email",name:"email","onUpdate:modelValue":s[1]||(s[1]=c=>t(e).email=c),required:""},null,512),[[p,t(e).email]])]),a("div",C,[q,_(a("textarea",{id:"message",name:"message","onUpdate:modelValue":s[2]||(s[2]=c=>t(e).message=c),required:""},null,512),[[p,t(e).message]])]),A],40,V)])]),a("div",B,[E,a("div",F,[i(d,{class:"contact-icon",iconPath:t(l).facebookIcon},null,8,["iconPath"]),i(d,{class:"contact-icon",iconPath:t(l).twitterIcon},null,8,["iconPath"]),i(d,{class:"contact-icon",iconPath:t(l).mailIcon},null,8,["iconPath"]),i(d,{class:"contact-icon",iconPath:t(l).phoneIcon},null,8,["iconPath"]),i(d,{class:"contact-icon",iconPath:t(l).instagramIcon},null,8,["iconPath"])])])]))}},K=w(D,[["__scopeId","data-v-8d4c664e"]]);export{K as default};