import{s as y,n as q}from"../chunks/CVhLxNSM.js";import{S as H,i as k,c as o,b as l,m as c,t as u,a as g,d as m,s as C,e as I,f as p,g as d,h,k as w}from"../chunks/DvSB8R1X.js";import{L as B,S as M,M as b}from"../chunks/ByTZAYyp.js";import{L as T}from"../chunks/xLaKUPuM.js";function j($){let e=v`
			\begin{align*}
			\frac{d}{dx}[fg] &= fg' + f'g \\ \text{} \\
			\frac{d}{dx}[fg] - f'g &= fg' \\ \text{} \\
			\int \frac{d}{dx}[fg] dx - \int f'g dx &= \int fg' dx \\ \text{} \\
			fg - \int f'g dx &= \int fg' dx
			\end{align*}
		`+"",n;return{c(){n=h(e)},l(t){n=w(t,e)},m(t,s){p(t,n,s)},p:q,d(t){t&&d(n)}}}function z($){let e=v`
			\int x e^x dx \\ \text{} \\
			f(x) = x \quad g'(x) = e^x \\ \text{} \\
			f'(x) = 1 \quad g(x) = e^x \\ \text{} \\
			\begin{align*}
			\int fg' \,dx &= fg - \int f'g \,dx \\ \text{} \\
			\int xe^x \,dx &= xe^x - \int e^x \,dx \\ \text{} \\
			&= xe^x - e^x + C \\ \text{} \\
			&= e^x(x - 1) + C
			\end{align*}
		`+"",n;return{c(){n=h(e)},l(t){n=w(t,e)},m(t,s){p(t,n,s)},p:q,d(t){t&&d(n)}}}function A($){let e,n,t,s,f;return n=new b({props:{displayMode:!0,$$slots:{default:[j]},$$scope:{ctx:$}}}),s=new b({props:{displayMode:!0,$$slots:{default:[z]},$$scope:{ctx:$}}}),{c(){e=h(`Integration by Parts is the reverse of the product rule:
		`),o(n.$$.fragment),t=h(`
		Here is an example of applying Integration by Parts:
		`),o(s.$$.fragment)},l(r){e=w(r,`Integration by Parts is the reverse of the product rule:
		`),l(n.$$.fragment,r),t=w(r,`
		Here is an example of applying Integration by Parts:
		`),l(s.$$.fragment,r)},m(r,x){p(r,e,x),c(n,r,x),p(r,t,x),c(s,r,x),f=!0},p(r,x){const _={};x&1&&(_.$$scope={dirty:x,ctx:r}),n.$set(_);const a={};x&1&&(a.$$scope={dirty:x,ctx:r}),s.$set(a)},i(r){f||(u(n.$$.fragment,r),u(s.$$.fragment,r),f=!0)},o(r){g(n.$$.fragment,r),g(s.$$.fragment,r),f=!1},d(r){r&&(d(e),d(t)),m(n,r),m(s,r)}}}function D($){let e=v`
			\int \arctan(x) \,dx \\ \text{} \\
			f(x) = \arctan(x) \quad g'(x) = 1 \\ \text{} \\
			f'(x) = \frac{1}{1 + x^2} \quad g(x) = x \\ \text{} \\
			\begin{align*}
			\int fg' \,dx &= fg - \int f'g \,dx \\ \text{} \\
			\int \arctan(x) \,dx &= x\arctan(x) - \int \frac{x \, dx}{1+x^2} \\ \text{} \\
			u = 1 + x^2 &\quad \frac{1}{2}du = x \, dx \\ \text{} \\
			\int \arctan(x) \,dx &= x\arctan(x) - \int \frac{du}{2u} \\ \text{} \\
			&= x\arctan(x) - \frac{1}{2}\ln|u| + C \\ \text{} \\
			&= x\arctan(x) - \frac{1}{2}\ln|1 + x^2| + C
			\end{align*}
		`+"",n;return{c(){n=h(e)},l(t){n=w(t,e)},m(t,s){p(t,n,s)},p:q,d(t){t&&d(n)}}}function E($){let e,n;return e=new b({props:{displayMode:!0,$$slots:{default:[D]},$$scope:{ctx:$}}}),{c(){o(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,s){c(e,t,s),n=!0},p(t,s){const f={};s&1&&(f.$$scope={dirty:s,ctx:t}),e.$set(f)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){m(e,t)}}}function F($){let e=v`
			\int x\sin(x) \,dx \\ \text{} \\
			f(x) = x \quad g'(x) = \sin(x) \\ \text{} \\
			f'(x) = 1 \quad g(x) = -\cos(x) \\ \text{} \\
			\begin{align*}
			\int fg' \,dx &= fg - \int f'g \,dx \\ \text{} \\
			\int x\sin(x) \,dx &= -x\cos(x) - \int -\cos(x) \,dx \\ \text{} \\
			&= -x\cos(x) + \sin(x) + C
			\end{align*}
		`+"",n;return{c(){n=h(e)},l(t){n=w(t,e)},m(t,s){p(t,n,s)},p:q,d(t){t&&d(n)}}}function G($){let e,n;return e=new b({props:{displayMode:!0,$$slots:{default:[F]},$$scope:{ctx:$}}}),{c(){o(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,s){c(e,t,s),n=!0},p(t,s){const f={};s&1&&(f.$$scope={dirty:s,ctx:t}),e.$set(f)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){m(e,t)}}}function J($){let e,n,t,s,f,r,x,_;return e=new T({props:{heading:"By Parts"}}),t=new M({props:{heading:"Introduction",$$slots:{default:[A]},$$scope:{ctx:$}}}),f=new M({props:{heading:"Integrating arctan",$$slots:{default:[E]},$$scope:{ctx:$}}}),x=new M({props:{heading:"Integrating xsin",$$slots:{default:[G]},$$scope:{ctx:$}}}),{c(){o(e.$$.fragment),n=C(),o(t.$$.fragment),s=C(),o(f.$$.fragment),r=C(),o(x.$$.fragment)},l(a){l(e.$$.fragment,a),n=I(a),l(t.$$.fragment,a),s=I(a),l(f.$$.fragment,a),r=I(a),l(x.$$.fragment,a)},m(a,i){c(e,a,i),p(a,n,i),c(t,a,i),p(a,s,i),c(f,a,i),p(a,r,i),c(x,a,i),_=!0},p(a,i){const P={};i&1&&(P.$$scope={dirty:i,ctx:a}),t.$set(P);const L={};i&1&&(L.$$scope={dirty:i,ctx:a}),f.$set(L);const S={};i&1&&(S.$$scope={dirty:i,ctx:a}),x.$set(S)},i(a){_||(u(e.$$.fragment,a),u(t.$$.fragment,a),u(f.$$.fragment,a),u(x.$$.fragment,a),_=!0)},o(a){g(e.$$.fragment,a),g(t.$$.fragment,a),g(f.$$.fragment,a),g(x.$$.fragment,a),_=!1},d(a){a&&(d(n),d(s),d(r)),m(e,a),m(t,a),m(f,a),m(x,a)}}}function K($){let e,n;return e=new B({props:{$$slots:{default:[J]},$$scope:{ctx:$}}}),{c(){o(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,s){c(e,t,s),n=!0},p(t,[s]){const f={};s&1&&(f.$$scope={dirty:s,ctx:t}),e.$set(f)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){m(e,t)}}}function v($){return $.raw[0]}class U extends H{constructor(e){super(),k(this,e,null,K,y,{})}}export{U as component};
