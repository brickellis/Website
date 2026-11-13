import{s as z,n as S}from"../chunks/CVhLxNSM.js";import{S as J,i as K,c as x,b,m as v,t as h,a as w,d as M,s as L,e as W,f as l,g as r,h as g,j as T,k as d,l as H}from"../chunks/DvSB8R1X.js";import{L as N,S as E,M as F}from"../chunks/ByTZAYyp.js";import{L as Q}from"../chunks/xLaKUPuM.js";import{D as O}from"../chunks/CkoZ7XGi.js";import{s as U}from"../chunks/Bw3t_506.js";function V(f){let $=P`
			\int^{30}_1{\ln(x) \, dx}
		`+"",n;return{c(){n=g($)},l(t){n=d(t,$)},m(t,a){l(t,n,a)},p:S,d(t){t&&r(n)}}}function X(f){let $=P`
			\int^{\infty}_1{\ln(x) \, dx}
		`+"",n;return{c(){n=g($)},l(t){n=d(t,$)},m(t,a){l(t,n,a)},p:S,d(t){t&&r(n)}}}function Y(f){let $=P`
			\int^{3}_0{\frac{1}{x} \, dx}
		`+"",n;return{c(){n=g($)},l(t){n=d(t,$)},m(t,a){l(t,n,a)},p:S,d(t){t&&r(n)}}}function Z(f){let $,n,t,a,m,_,o,c,e,i,u,B,k,y,D,R,A,I,C;return n=new F({props:{displayMode:!0,$$slots:{default:[V]},$$scope:{ctx:f}}}),a=new O({props:{sketch:U,sketchParameters:{plotFunction:f[0],area:{active:!0,domain:[1,30],color:"red"},dimensions:[-10,40,-20,20]}}}),B=new F({props:{displayMode:!0,$$slots:{default:[X]},$$scope:{ctx:f}}}),y=new O({props:{sketch:U,sketchParameters:{plotFunction:f[1],area:{active:!0,domain:[1,50],color:"red"},dimensions:[-10,40,-20,20]}}}),R=new F({props:{displayMode:!0,$$slots:{default:[Y]},$$scope:{ctx:f}}}),I=new O({props:{sketch:U,sketchParameters:{plotFunction:ot,area:{active:!0,domain:[0,3],color:"red"},dimensions:[-4,4,-4,4]}}}),{c(){$=g(`Proper integrals are bounded to a finite domain with a finite function. For example:
		`),x(n.$$.fragment),t=L(),x(a.$$.fragment),m=L(),_=T("br"),o=T("br"),c=g(`Improper integrals are either on an unbounded (infinite) domain or have an unbounded function.
		`),e=T("br"),i=T("br"),u=g(`For example,
		`),x(B.$$.fragment),k=g(`
		On an unbounded domain.
		`),x(y.$$.fragment),D=L(),x(R.$$.fragment),A=g(`
		Has an unbounded function.
		`),x(I.$$.fragment)},l(s){$=d(s,`Proper integrals are bounded to a finite domain with a finite function. For example:
		`),b(n.$$.fragment,s),t=W(s),b(a.$$.fragment,s),m=W(s),_=H(s,"BR",{}),o=H(s,"BR",{}),c=d(s,`Improper integrals are either on an unbounded (infinite) domain or have an unbounded function.
		`),e=H(s,"BR",{}),i=H(s,"BR",{}),u=d(s,`For example,
		`),b(B.$$.fragment,s),k=d(s,`
		On an unbounded domain.
		`),b(y.$$.fragment,s),D=W(s),b(R.$$.fragment,s),A=d(s,`
		Has an unbounded function.
		`),b(I.$$.fragment,s)},m(s,p){l(s,$,p),v(n,s,p),l(s,t,p),v(a,s,p),l(s,m,p),l(s,_,p),l(s,o,p),l(s,c,p),l(s,e,p),l(s,i,p),l(s,u,p),v(B,s,p),l(s,k,p),v(y,s,p),l(s,D,p),v(R,s,p),l(s,A,p),v(I,s,p),C=!0},p(s,p){const j={};p&4&&(j.$$scope={dirty:p,ctx:s}),n.$set(j);const q={};p&4&&(q.$$scope={dirty:p,ctx:s}),B.$set(q);const G={};p&4&&(G.$$scope={dirty:p,ctx:s}),R.$set(G)},i(s){C||(h(n.$$.fragment,s),h(a.$$.fragment,s),h(B.$$.fragment,s),h(y.$$.fragment,s),h(R.$$.fragment,s),h(I.$$.fragment,s),C=!0)},o(s){w(n.$$.fragment,s),w(a.$$.fragment,s),w(B.$$.fragment,s),w(y.$$.fragment,s),w(R.$$.fragment,s),w(I.$$.fragment,s),C=!1},d(s){s&&(r($),r(t),r(m),r(_),r(o),r(c),r(e),r(i),r(u),r(k),r(D),r(A)),M(n,s),M(a,s),M(B,s),M(y,s),M(R,s),M(I,s)}}}function tt(f){let $=P`
			\begin{align*}
			\int^{\infty}_1{\ln(x) \, dx} &= x\ln|x| + \ln|x|\Big|_1^{\infty} \\ \text{} \\
			&= \infty\ln|\infty| + \ln|\infty| - (\ln|1| + \ln|1|)
			\end{align*}
		`+"",n;return{c(){n=g($)},l(t){n=d(t,$)},m(t,a){l(t,n,a)},p:S,d(t){t&&r(n)}}}function et(f){let $=P`
			\begin{align*}
			\int^{\infty}_1{\ln(x) \, dx} &= \lim_{n \to \infty} \int^{n}_1{\ln(x) \, dx} \\ \text{} \\
			&= \lim_{n \to \infty} x\ln|x| + \ln|x| \Big|^n_1 \\ \text{} \\
			&= \lim_{n \to \infty} n\ln|n| + \ln|n| - (\ln|1| + \ln|1|) \\ \text{} \\
			&= \infty
			\end{align*}
		`+"",n;return{c(){n=g($)},l(t){n=d(t,$)},m(t,a){l(t,n,a)},p:S,d(t){t&&r(n)}}}function nt(f){let $=P`
			\begin{align*}
			\int^{\infty}_5{\frac{1}{x^2} \, dx} &= \lim_{n \to \infty} \int^{n}_5{\frac{1}{x^2} \, dx} \\ \text{} \\
			&= \lim_{n \to \infty} -\frac{1}{x} \Big|^n_{5} \\ \text{} \\
			&= \lim_{n \to \infty} -\frac{1}{n} + \frac{1}{5} \\ \text{} \\
			&= \frac{1}{5}
			\end{align*}
		`+"",n;return{c(){n=g($)},l(t){n=d(t,$)},m(t,a){l(t,n,a)},p:S,d(t){t&&r(n)}}}function $t(f){let $,n,t,a,m,_,o,c,e;return $=new F({props:{displayMode:!0,$$slots:{default:[tt]},$$scope:{ctx:f}}}),_=new F({props:{displayMode:!0,$$slots:{default:[et]},$$scope:{ctx:f}}}),c=new F({props:{displayMode:!0,$$slots:{default:[nt]},$$scope:{ctx:f}}}),{c(){x($.$$.fragment),n=g(`
		This is not a valid solution. We must change the integral.
		`),t=T("br"),a=T("br"),m=g(`Antiderivatives, by their nature, are differentiable. Therefore, we can evaluate the integral as a limit.
		
		`),x(_.$$.fragment),o=g(`
		Example #2:
		`),x(c.$$.fragment)},l(i){b($.$$.fragment,i),n=d(i,`
		This is not a valid solution. We must change the integral.
		`),t=H(i,"BR",{}),a=H(i,"BR",{}),m=d(i,`Antiderivatives, by their nature, are differentiable. Therefore, we can evaluate the integral as a limit.
		
		`),b(_.$$.fragment,i),o=d(i,`
		Example #2:
		`),b(c.$$.fragment,i)},m(i,u){v($,i,u),l(i,n,u),l(i,t,u),l(i,a,u),l(i,m,u),v(_,i,u),l(i,o,u),v(c,i,u),e=!0},p(i,u){const B={};u&4&&(B.$$scope={dirty:u,ctx:i}),$.$set(B);const k={};u&4&&(k.$$scope={dirty:u,ctx:i}),_.$set(k);const y={};u&4&&(y.$$scope={dirty:u,ctx:i}),c.$set(y)},i(i){e||(h($.$$.fragment,i),h(_.$$.fragment,i),h(c.$$.fragment,i),e=!0)},o(i){w($.$$.fragment,i),w(_.$$.fragment,i),w(c.$$.fragment,i),e=!1},d(i){i&&(r(n),r(t),r(a),r(m),r(o)),M($,i),M(_,i),M(c,i)}}}function it(f){let $=P`
			\begin{align*}
			\int_0^3 \frac{1}{x} \, dx &= \ln|x|\Big|_0^3 \\ \text{} \\
			&= \ln|3| - \ln|0|
			\end{align*}
		`+"",n;return{c(){n=g($)},l(t){n=d(t,$)},m(t,a){l(t,n,a)},p:S,d(t){t&&r(n)}}}function st(f){let $=P`\ln|0|`+"",n;return{c(){n=g($)},l(t){n=d(t,$)},m(t,a){l(t,n,a)},p:S,d(t){t&&r(n)}}}function at(f){let $=P`
			\begin{align*}
			\int_0^3 \frac{1}{x} \, dx &= \lim_{n \to 0^+} \int^{3}_n{\frac{1}{x} \, dx} \\\\
			&= \lim_{n \to 0^+} \ln|x| \Big|^3_n \\ \text{} \\
			&= \lim_{n \to 0^+} \ln|3| - \ln|n| \\ \text{} \\
			&= \ln|3| + \infty \\ \text{} \\
			&= \infty
			\end{align*}
		`+"",n;return{c(){n=g($)},l(t){n=d(t,$)},m(t,a){l(t,n,a)},p:S,d(t){t&&r(n)}}}function ft(f){let $=P`
			\begin{align*}
			\int_0^7 \frac{1}{x^2} \, dx &= \lim_{n \to 0^+} \int^{7}_n{\frac{1}{x^2} \, dx} \\\\
			&= \lim_{n \to 0^+} -\frac{1}{x} \Big|^7_n \\ \text{} \\
			&= \lim_{n \to 0^+} -\frac{1}{7} + \frac{1}{n} \\ \text{} \\
			&= -\frac{1}{7} + \infty \\ \text{} \\
			&= \infty
			\end{align*}
		`+"",n;return{c(){n=g($)},l(t){n=d(t,$)},m(t,a){l(t,n,a)},p:S,d(t){t&&r(n)}}}function lt(f){let $,n,t,a,m,_,o,c;return $=new F({props:{displayMode:!0,$$slots:{default:[it]},$$scope:{ctx:f}}}),t=new F({props:{$$slots:{default:[st]},$$scope:{ctx:f}}}),m=new F({props:{displayMode:!0,$$slots:{default:[at]},$$scope:{ctx:f}}}),o=new F({props:{displayMode:!0,$$slots:{default:[ft]},$$scope:{ctx:f}}}),{c(){x($.$$.fragment),n=g(`
		Since `),x(t.$$.fragment),a=g(` does not exist, we cannot solve this integral. We must also evaluate this integral as a limit.
		`),x(m.$$.fragment),_=g(`
		Here is another example:
		`),x(o.$$.fragment)},l(e){b($.$$.fragment,e),n=d(e,`
		Since `),b(t.$$.fragment,e),a=d(e,` does not exist, we cannot solve this integral. We must also evaluate this integral as a limit.
		`),b(m.$$.fragment,e),_=d(e,`
		Here is another example:
		`),b(o.$$.fragment,e)},m(e,i){v($,e,i),l(e,n,i),v(t,e,i),l(e,a,i),v(m,e,i),l(e,_,i),v(o,e,i),c=!0},p(e,i){const u={};i&4&&(u.$$scope={dirty:i,ctx:e}),$.$set(u);const B={};i&4&&(B.$$scope={dirty:i,ctx:e}),t.$set(B);const k={};i&4&&(k.$$scope={dirty:i,ctx:e}),m.$set(k);const y={};i&4&&(y.$$scope={dirty:i,ctx:e}),o.$set(y)},i(e){c||(h($.$$.fragment,e),h(t.$$.fragment,e),h(m.$$.fragment,e),h(o.$$.fragment,e),c=!0)},o(e){w($.$$.fragment,e),w(t.$$.fragment,e),w(m.$$.fragment,e),w(o.$$.fragment,e),c=!1},d(e){e&&(r(n),r(a),r(_)),M($,e),M(t,e),M(m,e),M(o,e)}}}function rt(f){let $,n,t,a,m,_,o,c;return $=new Q({props:{heading:"Improper Integrals"}}),t=new E({props:{heading:"Introduction",$$slots:{default:[Z]},$$scope:{ctx:f}}}),m=new E({props:{heading:"Unbounded Domains",$$slots:{default:[$t]},$$scope:{ctx:f}}}),o=new E({props:{heading:"Unbounded Functions",$$slots:{default:[lt]},$$scope:{ctx:f}}}),{c(){x($.$$.fragment),n=L(),x(t.$$.fragment),a=L(),x(m.$$.fragment),_=L(),x(o.$$.fragment)},l(e){b($.$$.fragment,e),n=W(e),b(t.$$.fragment,e),a=W(e),b(m.$$.fragment,e),_=W(e),b(o.$$.fragment,e)},m(e,i){v($,e,i),l(e,n,i),v(t,e,i),l(e,a,i),v(m,e,i),l(e,_,i),v(o,e,i),c=!0},p(e,i){const u={};i&4&&(u.$$scope={dirty:i,ctx:e}),t.$set(u);const B={};i&4&&(B.$$scope={dirty:i,ctx:e}),m.$set(B);const k={};i&4&&(k.$$scope={dirty:i,ctx:e}),o.$set(k)},i(e){c||(h($.$$.fragment,e),h(t.$$.fragment,e),h(m.$$.fragment,e),h(o.$$.fragment,e),c=!0)},o(e){w($.$$.fragment,e),w(t.$$.fragment,e),w(m.$$.fragment,e),w(o.$$.fragment,e),c=!1},d(e){e&&(r(n),r(a),r(_)),M($,e),M(t,e),M(m,e),M(o,e)}}}function mt(f){let $,n;return $=new N({props:{$$slots:{default:[rt]},$$scope:{ctx:f}}}),{c(){x($.$$.fragment)},l(t){b($.$$.fragment,t)},m(t,a){v($,t,a),n=!0},p(t,[a]){const m={};a&4&&(m.$$scope={dirty:a,ctx:t}),$.$set(m)},i(t){n||(h($.$$.fragment,t),n=!0)},o(t){w($.$$.fragment,t),n=!1},d(t){M($,t)}}}function P(f){return f.raw[0]}const ot=f=>1/f;function ut(f){return[t=>Math.log(t),t=>Math.log(t)]}class bt extends J{constructor($){super(),K(this,$,ut,mt,z,{})}}export{bt as component};
