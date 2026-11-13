import{s as T,n as w}from"../chunks/CVhLxNSM.js";import{S as B,i as R,c as x,b as d,m as p,t as g,a as _,d as b,s as S,e as F,f as l,g as o,h as c,j as L,k as m,l as k}from"../chunks/DvSB8R1X.js";import{L as j,S as I,M as h}from"../chunks/ByTZAYyp.js";import{L as E}from"../chunks/xLaKUPuM.js";function P($){let s=C`
		\begin{align*}
		u &= g(x) \\\\
		F(g(b)) - F(g(a)) &= \int_a^b f(g(x))g'(x)dx \\\\
		F(g(b)) - F(g(a)) &= \int_{g(a)}^{g(b)} f(u)du \\\\
		\int_a^b f(g(x))g'(x)dx &= \int_{g(a)}^{g(b)} f(u)du
		\end{align*}
		`+"",a;return{c(){a=c(s)},l(t){a=m(t,s)},m(t,r){l(t,a,r)},p:w,d(t){t&&o(a)}}}function z($){let s,a,t,r,f,i;return f=new h({props:{displayMode:!0,$$slots:{default:[P]},$$scope:{ctx:$}}}),{c(){s=c(`Integration by substitution simplifies integrals that are otherwise too difficult to solve.
		`),a=L("br"),t=L("br"),r=c(`Think of it as a reverse chain rule.
		`),x(f.$$.fragment)},l(e){s=m(e,`Integration by substitution simplifies integrals that are otherwise too difficult to solve.
		`),a=k(e,"BR",{}),t=k(e,"BR",{}),r=m(e,`Think of it as a reverse chain rule.
		`),d(f.$$.fragment,e)},m(e,n){l(e,s,n),l(e,a,n),l(e,t,n),l(e,r,n),p(f,e,n),i=!0},p(e,n){const u={};n&1&&(u.$$scope={dirty:n,ctx:e}),f.$set(u)},i(e){i||(g(f.$$.fragment,e),i=!0)},o(e){_(f.$$.fragment,e),i=!1},d(e){e&&(o(s),o(a),o(t),o(r)),b(f,e)}}}function A($){let s=C`
		\int x^3 e^{x^4} \, dx \\ \text{} \\
		u = x^4 \quad\quad \frac{du}{dx}=4x^3 \quad\quad \frac{du}{4} = x^3dx \\ \text{} \\
		\begin{align*}
		\int x^3 e^{x^4} \, dx &= \int \frac{1}{4}e^{u} \, du  \\\\
		\int \frac{1}{4}e^{u} \, du &= \frac{1}{4}e^{u} + C \\\\
		\int \frac{1}{4}e^{u} \, du &= \frac{1}{4}e^{x^4} + C \\\\
		\int x^3 e^{x^4} \, dx &= \frac{1}{4}e^{x^4} + C
		\end{align*}
		`+"",a;return{c(){a=c(s)},l(t){a=m(t,s)},m(t,r){l(t,a,r)},p:w,d(t){t&&o(a)}}}function D($){let s=C`
		\int 5x\sin(3x^2) \, dx \\ \text{} \\
		u = 3x^2 \quad\quad \frac{du}{dx}=6x \quad\quad \frac{du}{6} = xdx \\ \text{} \\
		\begin{align*}
		\int 5x\sin(3x^2) \, dx &= \int \frac{5}{6}\sin(u) \, du \\\\
		\int \frac{5}{6}\sin(u) \, du &= -\frac{5}{6}\cos(u) + C \\\\
		\int \frac{5}{6}\sin(u) \, du &= -\frac{5}{6}\cos(3x^2) + C \\\\
		\int 5x\sin(3x^2) \, dx &= -\frac{5}{6}\cos(3x^2) + C
		\end{align*}
		`+"",a;return{c(){a=c(s)},l(t){a=m(t,s)},m(t,r){l(t,a,r)},p:w,d(t){t&&o(a)}}}function G($){let s=C`
		\int \frac{1}{x\ln(x)} \, dx \\ \text{} \\
		u = \ln(x) \quad\quad \frac{du}{dx}=\frac{1}{x} \quad\quad du = \frac{1}{x}dx \\ \text{} \\
		\begin{align*}
		\int \frac{1}{x\ln(x)} \, dx &= \int \frac{1}{u} \, du \\\\
		\int \frac{1}{u} \, du &= \ln|u| + C \\\\
		\int \frac{1}{u} \, du &= \ln|\ln(x)| + C \\\\
		\int \frac{1}{x\ln(x)} \, dx &= \ln|\ln(x)| + C
		\end{align*}
		`+"",a;return{c(){a=c(s)},l(t){a=m(t,s)},m(t,r){l(t,a,r)},p:w,d(t){t&&o(a)}}}function H($){let s,a,t,r,f,i,e;return a=new h({props:{displayMode:!0,$$slots:{default:[A]},$$scope:{ctx:$}}}),r=new h({props:{displayMode:!0,$$slots:{default:[D]},$$scope:{ctx:$}}}),i=new h({props:{displayMode:!0,$$slots:{default:[G]},$$scope:{ctx:$}}}),{c(){s=c(`1.
		`),x(a.$$.fragment),t=c(`
		2.
		`),x(r.$$.fragment),f=c(`
		3.
		`),x(i.$$.fragment)},l(n){s=m(n,`1.
		`),d(a.$$.fragment,n),t=m(n,`
		2.
		`),d(r.$$.fragment,n),f=m(n,`
		3.
		`),d(i.$$.fragment,n)},m(n,u){l(n,s,u),p(a,n,u),l(n,t,u),p(r,n,u),l(n,f,u),p(i,n,u),e=!0},p(n,u){const q={};u&1&&(q.$$scope={dirty:u,ctx:n}),a.$set(q);const v={};u&1&&(v.$$scope={dirty:u,ctx:n}),r.$set(v);const M={};u&1&&(M.$$scope={dirty:u,ctx:n}),i.$set(M)},i(n){e||(g(a.$$.fragment,n),g(r.$$.fragment,n),g(i.$$.fragment,n),e=!0)},o(n){_(a.$$.fragment,n),_(r.$$.fragment,n),_(i.$$.fragment,n),e=!1},d(n){n&&(o(s),o(t),o(f)),b(a,n),b(r,n),b(i,n)}}}function J($){let s,a,t,r,f,i;return s=new E({props:{heading:"Substitution"}}),t=new I({props:{heading:"Introduction",$$slots:{default:[z]},$$scope:{ctx:$}}}),f=new I({props:{heading:"Examples",$$slots:{default:[H]},$$scope:{ctx:$}}}),{c(){x(s.$$.fragment),a=S(),x(t.$$.fragment),r=S(),x(f.$$.fragment)},l(e){d(s.$$.fragment,e),a=F(e),d(t.$$.fragment,e),r=F(e),d(f.$$.fragment,e)},m(e,n){p(s,e,n),l(e,a,n),p(t,e,n),l(e,r,n),p(f,e,n),i=!0},p(e,n){const u={};n&1&&(u.$$scope={dirty:n,ctx:e}),t.$set(u);const q={};n&1&&(q.$$scope={dirty:n,ctx:e}),f.$set(q)},i(e){i||(g(s.$$.fragment,e),g(t.$$.fragment,e),g(f.$$.fragment,e),i=!0)},o(e){_(s.$$.fragment,e),_(t.$$.fragment,e),_(f.$$.fragment,e),i=!1},d(e){e&&(o(a),o(r)),b(s,e),b(t,e),b(f,e)}}}function K($){let s,a;return s=new j({props:{$$slots:{default:[J]},$$scope:{ctx:$}}}),{c(){x(s.$$.fragment)},l(t){d(s.$$.fragment,t)},m(t,r){p(s,t,r),a=!0},p(t,[r]){const f={};r&1&&(f.$$scope={dirty:r,ctx:t}),s.$set(f)},i(t){a||(g(s.$$.fragment,t),a=!0)},o(t){_(s.$$.fragment,t),a=!1},d(t){b(s,t)}}}function C($){return $.raw[0]}class V extends B{constructor(s){super(),R(this,s,null,K,T,{})}}export{V as component};
