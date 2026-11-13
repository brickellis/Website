import{s as q,n as H}from"../chunks/CVhLxNSM.js";import{S as I,i as N,c as u,b as _,m as p,t as h,a as x,d as g,s as L,e as M,f as l,g as i,h as d,k as v}from"../chunks/DvSB8R1X.js";import{L as P,S,M as w}from"../chunks/ByTZAYyp.js";import{L as T}from"../chunks/xLaKUPuM.js";function j($){let e;return{c(){e=d("\\cos(x)")},l(n){e=v(n,"\\cos(x)")},m(n,t){l(n,e,t)},d(n){n&&i(e)}}}function z($){let e;return{c(){e=d("\\ln(x)")},l(n){e=v(n,"\\ln(x)")},m(n,t){l(n,e,t)},d(n){n&&i(e)}}}function A($){let e,n,t,o,r,m;return n=new w({props:{$$slots:{default:[j]},$$scope:{ctx:$}}}),o=new w({props:{$$slots:{default:[z]},$$scope:{ctx:$}}}),{c(){e=d("Here are full proofs of the derivatives of "),u(n.$$.fragment),t=d(" and "),u(o.$$.fragment),r=d(".")},l(f){e=v(f,"Here are full proofs of the derivatives of "),_(n.$$.fragment,f),t=v(f," and "),_(o.$$.fragment,f),r=v(f,".")},m(f,c){l(f,e,c),p(n,f,c),l(f,t,c),p(o,f,c),l(f,r,c),m=!0},p(f,c){const s={};c&1&&(s.$$scope={dirty:c,ctx:f}),n.$set(s);const a={};c&1&&(a.$$scope={dirty:c,ctx:f}),o.$set(a)},i(f){m||(h(n.$$.fragment,f),h(o.$$.fragment,f),m=!0)},o(f){x(n.$$.fragment,f),x(o.$$.fragment,f),m=!1},d(f){f&&(i(e),i(t),i(r)),g(n,f),g(o,f)}}}function B($){let e=k`
			\begin{align*}
			f(x)&=\cos(x) \\\\
			f'(x)&=\lim_{h \to 0}\frac{f(x+h) - f(x)}{h} \\\\
			&=\lim_{h \to 0}\frac{\c1{\cos(x+h)} - \c1{\cos(x)}}{h} \\\\
			&=\lim_{h \to 0}\frac{\c1{\cos(x)\cos(h) - \sin(x)\sin(h)} - \cos(x)}{h} \\\\
			&=\lim_{h \to 0}\frac{\c1{\cos(x)[\cos(h) - 1 ]} - \sin(x)\sin(h)}{h} \\\\
			&=\c1{\lim_{h \to 0}}\frac{\cos(x)[\cos(h) - 1 ]}{h} - \c1{\lim_{h \to 0}}\frac{\sin(x)\sin(h)}{h} \\\\
			&=\c1{\cos(x)}\lim_{h \to 0}\frac{\cos(h) - 1 }{h} - \c1{\sin(x)}\lim_{h \to 0}\frac{\sin(h)}{h} \\\\
			&=\cos(x)\c1{[0]} - \sin(x)\c1{[1]} \\\\
			&=-\sin(x)
			\end{align*}
		`+"",n;return{c(){n=d(e)},l(t){n=v(t,e)},m(t,o){l(t,n,o)},p:H,d(t){t&&i(n)}}}function E($){let e,n;return e=new w({props:{displayMode:!0,$$slots:{default:[B]},$$scope:{ctx:$}}}),{c(){u(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,o){p(e,t,o),n=!0},p(t,o){const r={};o&1&&(r.$$scope={dirty:o,ctx:t}),e.$set(r)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function F($){let e=k`
				\begin{align*}
				f(x) &= \ln(x) \\\\
				f'(x)&=\lim_{h \to 0}\frac{f(x+h) - f(x)}{h} \\\\
				&=\lim_{h \to 0}\frac{\c1{\ln(x+h)} - \c1{\ln(x)}}{h} \\\\
				&=\lim_{h \to 0}\frac{\c1{\ln(\frac{x+h}{x})}}{h} \\\\
				&=\lim_{h \to 0}\ln \left(\frac{x+h}{x} \right)^{\c1{1/h}} \\\\
				&=\lim_{h \to 0}\ln \left(\c1{1+\frac{h}{x}} \right)^{1/h} \\\\
				t &= \frac{h}{x} \\\\
				f'(x)&=\lim_{t \to 0}\ln(1+\c1{t})^{\c1{(1/x)(1/t)}} \\\\
				&=\lim_{t \to 0}\frac{\ln((1+t)^{1/t})}{\c1{x}} \\\\
				&=\c1{\frac{1}{x}}\lim_{t \to 0}\ln((1+t)^{1/t}) \\\\
				&=\frac{1}{x}\c1{\ln}(\,\c1{\lim_{t \to 0}}(1+t)^{1/t}) \\\\
				\text{Note } e &= \lim_{t \to 0}(1+t)^{1/t} \\\\
				f'(x)&=\frac{1}{x}\c1{\ln(e)} \\\\
				&=\frac{1}{x}
				\end{align*}
			`+"",n;return{c(){n=d(e)},l(t){n=v(t,e)},m(t,o){l(t,n,o)},p:H,d(t){t&&i(n)}}}function G($){let e,n;return e=new w({props:{displayMode:!0,$$slots:{default:[F]},$$scope:{ctx:$}}}),{c(){u(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,o){p(e,t,o),n=!0},p(t,o){const r={};o&1&&(r.$$scope={dirty:o,ctx:t}),e.$set(r)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function J($){let e,n,t,o,r,m,f,c;return e=new T({props:{heading:"Calculating Derivatives 2"}}),t=new S({props:{heading:"Introduction",$$slots:{default:[A]},$$scope:{ctx:$}}}),r=new S({props:{heading:"Derivative of cos(x)",$$slots:{default:[E]},$$scope:{ctx:$}}}),f=new S({props:{heading:"Derivative of ln(x)",$$slots:{default:[G]},$$scope:{ctx:$}}}),{c(){u(e.$$.fragment),n=L(),u(t.$$.fragment),o=L(),u(r.$$.fragment),m=L(),u(f.$$.fragment)},l(s){_(e.$$.fragment,s),n=M(s),_(t.$$.fragment,s),o=M(s),_(r.$$.fragment,s),m=M(s),_(f.$$.fragment,s)},m(s,a){p(e,s,a),l(s,n,a),p(t,s,a),l(s,o,a),p(r,s,a),l(s,m,a),p(f,s,a),c=!0},p(s,a){const b={};a&1&&(b.$$scope={dirty:a,ctx:s}),t.$set(b);const C={};a&1&&(C.$$scope={dirty:a,ctx:s}),r.$set(C);const D={};a&1&&(D.$$scope={dirty:a,ctx:s}),f.$set(D)},i(s){c||(h(e.$$.fragment,s),h(t.$$.fragment,s),h(r.$$.fragment,s),h(f.$$.fragment,s),c=!0)},o(s){x(e.$$.fragment,s),x(t.$$.fragment,s),x(r.$$.fragment,s),x(f.$$.fragment,s),c=!1},d(s){s&&(i(n),i(o),i(m)),g(e,s),g(t,s),g(r,s),g(f,s)}}}function K($){let e,n;return e=new P({props:{$$slots:{default:[J]},$$scope:{ctx:$}}}),{c(){u(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,o){p(e,t,o),n=!0},p(t,[o]){const r={};o&1&&(r.$$scope={dirty:o,ctx:t}),e.$set(r)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function k($){return $.raw[0]}class V extends I{constructor(e){super(),N(this,e,null,K,q,{})}}export{V as component};
