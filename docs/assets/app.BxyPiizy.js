import{R as p}from"./chunks/theme.uDsLwGZa.js";import{U as o,b7 as u,b8 as c,b9 as l,ba as f,bb as d,bc as b,bd as m,be as h,bf as g,bg as A,d as y,u as P,k as v,y as w,bh as C,bi as R,bj as E,aE as S}from"./chunks/framework.DjTIwazY.js";function i(e){if(e.extends){const t=i(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const s=i(p),T=y({name:"VitePressApp",setup(){const{site:e,lang:t,dir:a}=P();return v(()=>{w(()=>{document.documentElement.lang=t.value,document.documentElement.dir=a.value})}),e.value.router.prefetchLinks&&C(),R(),E(),s.setup&&s.setup(),()=>S(s.Layout)}});async function j(){globalThis.__VITEPRESS__=!0;const e=_(),t=D();t.provide(c,e);const a=l(e.route);return t.provide(f,a),t.component("Content",d),t.component("ClientOnly",b),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:m}),{app:t,router:e,data:a}}function D(){return h(T)}function _(){let e=o,t;return g(a=>{let n=A(a),r=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&j().then(({app:e,router:t,data:a})=>{t.go().then(()=>{u(t.route,a.site),e.mount("#app")})});export{j as createApp};
