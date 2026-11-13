import{s as H,n as R}from"../chunks/CVhLxNSM.js";import{S as J,i as K,c as h,b as v,m as y,t as w,a as C,d as b,s as T,e as F,f as i,g as l,h as x,j as G,k as g,l as L,n as V}from"../chunks/DvSB8R1X.js";import{L as Q,S as j,M as I}from"../chunks/ByTZAYyp.js";import{L as U}from"../chunks/xLaKUPuM.js";import{D as W}from"../chunks/CkoZ7XGi.js";import{s as X}from"../chunks/Bw3t_506.js";function Y(r){let e=E`
			\frac{dy}{dx} = \frac{f(x)}{g(y)} \quad \text{or} \quad f(x)dx + g(y)dy = 0
		`+"",s;return{c(){s=x(e)},l(t){s=g(t,e)},m(t,a){i(t,s,a)},p:R,d(t){t&&l(s)}}}function Z(r){let e=E`
			f(x)dx = g(y)dy
		`+"",s;return{c(){s=x(e)},l(t){s=g(t,e)},m(t,a){i(t,s,a)},p:R,d(t){t&&l(s)}}}function tt(r){let e=E`
			\int f(x)dx = \int g(y)dy
		`+"",s;return{c(){s=x(e)},l(t){s=g(t,e)},m(t,a){i(t,s,a)},p:R,d(t){t&&l(s)}}}function et(r){let e,s,t,a,o,_,$,p,c,d;return o=new I({props:{displayMode:!0,$$slots:{default:[Y]},$$scope:{ctx:r}}}),$=new I({props:{displayMode:!0,$$slots:{default:[Z]},$$scope:{ctx:r}}}),c=new I({props:{displayMode:!0,$$slots:{default:[tt]},$$scope:{ctx:r}}}),{c(){e=x(`Integrating equations comprised of multiple variables is difficult. Separation of Variables is the technique of separating the variables in a differential equation to simplify the integration.
		`),s=G("br"),t=G("br"),a=x(`In other words, we take equations of either of the two forms:
		`),h(o.$$.fragment),_=x(`
		Convert them to the form:
		`),h($.$$.fragment),p=x(`
		And integrate
		`),h(c.$$.fragment)},l(f){e=g(f,`Integrating equations comprised of multiple variables is difficult. Separation of Variables is the technique of separating the variables in a differential equation to simplify the integration.
		`),s=L(f,"BR",{}),t=L(f,"BR",{}),a=g(f,`In other words, we take equations of either of the two forms:
		`),v(o.$$.fragment,f),_=g(f,`
		Convert them to the form:
		`),v($.$$.fragment,f),p=g(f,`
		And integrate
		`),v(c.$$.fragment,f)},m(f,u){i(f,e,u),i(f,s,u),i(f,t,u),i(f,a,u),y(o,f,u),i(f,_,u),y($,f,u),i(f,p,u),y(c,f,u),d=!0},p(f,u){const q={};u&4&&(q.$$scope={dirty:u,ctx:f}),o.$set(q);const M={};u&4&&(M.$$scope={dirty:u,ctx:f}),$.$set(M);const k={};u&4&&(k.$$scope={dirty:u,ctx:f}),c.$set(k)},i(f){d||(w(o.$$.fragment,f),w($.$$.fragment,f),w(c.$$.fragment,f),d=!0)},o(f){C(o.$$.fragment,f),C($.$$.fragment,f),C(c.$$.fragment,f),d=!1},d(f){f&&(l(e),l(s),l(t),l(a),l(_),l(p)),b(o,f),b($,f),b(c,f)}}}function nt(r){let e=E`
			\frac{dy}{dx} = kx \\ \text{} \\
			dy = kx \, dx \\ \text{} \\
			\int dy = \int kx \, dx \\ \text{} \\
			y = \frac{kx^2}{2} + C
		`+"",s;return{c(){s=x(e)},l(t){s=g(t,e)},m(t,a){i(t,s,a)},p:R,d(t){t&&l(s)}}}function st(r){let e=E`
			\frac{dy}{dx} = -\frac{x}{y} \\ \text{} \\
			y \, dy = -x \, dx \\ \text{} \\
			\int y \, dy = \int -x \, dx \\ \text{} \\
			\frac{y^2}{2} = -\frac{x^2}{2} + C \\ \text{} \\
			\frac{y^2}{2} + \frac{x^2}{2} = C \\ \text{} \\
			y^2 + x^2 = C \\ \text{} \\
		`+"",s;return{c(){s=x(e)},l(t){s=g(t,e)},m(t,a){i(t,s,a)},p:R,d(t){t&&l(s)}}}function ft(r){let e=E`-x/y`+"",s;return{c(){s=x(e)},l(t){s=g(t,e)},m(t,a){i(t,s,a)},p:R,d(t){t&&l(s)}}}function $t(r){let e=E`
			\begin{align*}
			x^2 \, dx + \sin(y) \, dy &= 0 \\ \text{} \\
			x^2 \, dx &= -\sin(y) \, dy \\ \text{} \\
			\int x^2 \, dx &= \int -\sin(y) \, dy \\ \text{} \\
			\frac{x^3}{3} &= \cos(y) + C \\ \text{} \\
			\end{align*}		
		`+"",s;return{c(){s=x(e)},l(t){s=g(t,e)},m(t,a){i(t,s,a)},p:R,d(t){t&&l(s)}}}function at(r){let e,s="Example #1:",t,a,o,_,$="Example #2:",p,c,d,f,u,q,M,k,z="Example #3:",N,S,O;return a=new I({props:{displayMode:!0,$$slots:{default:[nt]},$$scope:{ctx:r}}}),c=new I({props:{displayMode:!0,$$slots:{default:[st]},$$scope:{ctx:r}}}),f=new I({props:{$$slots:{default:[ft]},$$scope:{ctx:r}}}),q=new W({props:{sketch:X,sketchParameters:{plotFunction:r[0],slopeField:{active:!0,density:15,function:it},dimensions:[-3.2,3.2,-3.2,3.2],axesColor:"#666666",axesNumbering:!0,bonusFunctions:[[r[1],"initialColor"]],click:["plotFunction","bonusFunctions"]}}}),S=new I({props:{displayMode:!0,$$slots:{default:[$t]},$$scope:{ctx:r}}}),{c(){e=G("strong"),e.textContent=s,t=T(),h(a.$$.fragment),o=T(),_=G("strong"),_.textContent=$,p=T(),h(c.$$.fragment),d=x(`
		(The slope of a circle is `),h(f.$$.fragment),u=x(`.)
		`),h(q.$$.fragment),M=T(),k=G("strong"),k.textContent=z,N=T(),h(S.$$.fragment)},l(n){e=L(n,"STRONG",{"data-svelte-h":!0}),V(e)!=="svelte-141f4a6"&&(e.textContent=s),t=F(n),v(a.$$.fragment,n),o=F(n),_=L(n,"STRONG",{"data-svelte-h":!0}),V(_)!=="svelte-zns08z"&&(_.textContent=$),p=F(n),v(c.$$.fragment,n),d=g(n,`
		(The slope of a circle is `),v(f.$$.fragment,n),u=g(n,`.)
		`),v(q.$$.fragment,n),M=F(n),k=L(n,"STRONG",{"data-svelte-h":!0}),V(k)!=="svelte-3xc4s8"&&(k.textContent=z),N=F(n),v(S.$$.fragment,n)},m(n,m){i(n,e,m),i(n,t,m),y(a,n,m),i(n,o,m),i(n,_,m),i(n,p,m),y(c,n,m),i(n,d,m),y(f,n,m),i(n,u,m),y(q,n,m),i(n,M,m),i(n,k,m),i(n,N,m),y(S,n,m),O=!0},p(n,m){const A={};m&4&&(A.$$scope={dirty:m,ctx:n}),a.$set(A);const B={};m&4&&(B.$$scope={dirty:m,ctx:n}),c.$set(B);const D={};m&4&&(D.$$scope={dirty:m,ctx:n}),f.$set(D);const P={};m&4&&(P.$$scope={dirty:m,ctx:n}),S.$set(P)},i(n){O||(w(a.$$.fragment,n),w(c.$$.fragment,n),w(f.$$.fragment,n),w(q.$$.fragment,n),w(S.$$.fragment,n),O=!0)},o(n){C(a.$$.fragment,n),C(c.$$.fragment,n),C(f.$$.fragment,n),C(q.$$.fragment,n),C(S.$$.fragment,n),O=!1},d(n){n&&(l(e),l(t),l(o),l(_),l(p),l(d),l(u),l(M),l(k),l(N)),b(a,n),b(c,n),b(f,n),b(q,n),b(S,n)}}}function rt(r){let e,s,t,a,o,_;return e=new U({props:{heading:"Separation of Variables"}}),t=new j({props:{heading:"Introduction",$$slots:{default:[et]},$$scope:{ctx:r}}}),o=new j({props:{heading:"Examples",$$slots:{default:[at]},$$scope:{ctx:r}}}),{c(){h(e.$$.fragment),s=T(),h(t.$$.fragment),a=T(),h(o.$$.fragment)},l($){v(e.$$.fragment,$),s=F($),v(t.$$.fragment,$),a=F($),v(o.$$.fragment,$)},m($,p){y(e,$,p),i($,s,p),y(t,$,p),i($,a,p),y(o,$,p),_=!0},p($,p){const c={};p&4&&(c.$$scope={dirty:p,ctx:$}),t.$set(c);const d={};p&4&&(d.$$scope={dirty:p,ctx:$}),o.$set(d)},i($){_||(w(e.$$.fragment,$),w(t.$$.fragment,$),w(o.$$.fragment,$),_=!0)},o($){C(e.$$.fragment,$),C(t.$$.fragment,$),C(o.$$.fragment,$),_=!1},d($){$&&(l(s),l(a)),b(e,$),b(t,$),b(o,$)}}}function ot(r){let e,s;return e=new Q({props:{$$slots:{default:[rt]},$$scope:{ctx:r}}}),{c(){h(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,a){y(e,t,a),s=!0},p(t,[a]){const o={};a&4&&(o.$$scope={dirty:a,ctx:t}),e.$set(o)},i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){C(e.$$.fragment,t),s=!1},d(t){b(e,t)}}}function E(r){return r.raw[0]}const it=(r,e)=>-r/e;function lt(r){return[t=>Math.sqrt(10.240000000000002-t**2),t=>0-Math.sqrt(10.240000000000002-t**2)]}class gt extends J{constructor(e){super(),K(this,e,lt,ot,H,{})}}export{gt as component};
