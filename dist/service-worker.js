if(!self.define){let e,s={};const i=(i,t)=>(i=new URL(i+".js",t).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(t,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let r={};const c=e=>i(e,o),f={module:{uri:o},exports:r,require:c};s[o]=Promise.all(t.map((e=>f[e]||c(e)))).then((e=>(n(...e),r)))}}define(["./workbox-b41f8fb8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"main.css",revision:"4f01dc1c7af9714f297c87da64a5bfd7"},{url:"main.js",revision:"236ad1a7765ca5788042b9de24396909"}],{})}));
