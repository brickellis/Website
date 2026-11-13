import{s as O,n as k}from"../chunks/CVhLxNSM.js";import{S as U,i as V,c,b as m,m as x,t as p,a as g,d,s as S,e as I,f as o,g as u,h as R,j as Q,k as C,l as W}from"../chunks/DvSB8R1X.js";import{L as X,S as L,M as j}from"../chunks/ByTZAYyp.js";import{L as Y}from"../chunks/xLaKUPuM.js";import{I as Z}from"../chunks/D3W7TYDU.js";function y(r){let t,n,e,f,s,_,h,v,w,P,b,M,T;return{c(){t=R(`The Power Rule
			`),n=Q("br"),e=R(`The Constant Rule
			`),f=Q("br"),s=R(`The Sum Rule
			`),_=Q("br"),h=R(`The Product Rule
			`),v=Q("br"),w=R(`The Quotient Rule
			`),P=Q("br"),b=R(`The Chain Rule
			`),M=Q("br"),T=R("The Constant Product Rule")},l(l){t=C(l,`The Power Rule
			`),n=W(l,"BR",{}),e=C(l,`The Constant Rule
			`),f=W(l,"BR",{}),s=C(l,`The Sum Rule
			`),_=W(l,"BR",{}),h=C(l,`The Product Rule
			`),v=W(l,"BR",{}),w=C(l,`The Quotient Rule
			`),P=W(l,"BR",{}),b=C(l,`The Chain Rule
			`),M=W(l,"BR",{}),T=C(l,"The Constant Product Rule")},m(l,i){o(l,t,i),o(l,n,i),o(l,e,i),o(l,f,i),o(l,s,i),o(l,_,i),o(l,h,i),o(l,v,i),o(l,w,i),o(l,P,i),o(l,b,i),o(l,M,i),o(l,T,i)},p:k,d(l){l&&(u(t),u(n),u(e),u(f),u(s),u(_),u(h),u(v),u(w),u(P),u(b),u(M),u(T))}}}function ee(r){let t,n,e,f;return e=new Z({props:{$$slots:{default:[y]},$$scope:{ctx:r}}}),{c(){t=R(`We will look at each derivative rule and reverse it for antiderivatives.
		`),n=Q("br"),c(e.$$.fragment)},l(s){t=C(s,`We will look at each derivative rule and reverse it for antiderivatives.
		`),n=W(s,"BR",{}),m(e.$$.fragment,s)},m(s,_){o(s,t,_),o(s,n,_),x(e,s,_),f=!0},p(s,_){const h={};_&1&&(h.$$scope={dirty:_,ctx:s}),e.$set(h)},i(s){f||(p(e.$$.fragment,s),f=!0)},o(s){g(e.$$.fragment,s),f=!1},d(s){s&&(u(t),u(n)),d(e,s)}}}function te(r){let t=q`
		\begin{align*}
		\frac{d}{dx} x^n &= nx^{n-1} \\\\
		-&-- \\\\
		\int nx^{n-1} \,dx &= x^n + C \\\\
		\int 3x^2 \,dx &= x^3 + C \\\\
		\end{align*}
		`+"",n;return{c(){n=R(t)},l(e){n=C(e,t)},m(e,f){o(e,n,f)},p:k,d(e){e&&u(n)}}}function ne(r){let t,n;return t=new j({props:{displayMode:!0,$$slots:{default:[te]},$$scope:{ctx:r}}}),{c(){c(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,f){x(t,e,f),n=!0},p(e,f){const s={};f&1&&(s.$$scope={dirty:f,ctx:e}),t.$set(s)},i(e){n||(p(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){d(t,e)}}}function $e(r){let t=q`
		\begin{align*}
		\frac{d}{dx} C &= 0 \\\\
		-&-- \\\\
		\int 0 \,dx &= C
		\end{align*}
		`+"",n;return{c(){n=R(t)},l(e){n=C(e,t)},m(e,f){o(e,n,f)},p:k,d(e){e&&u(n)}}}function fe(r){let t,n;return t=new j({props:{displayMode:!0,$$slots:{default:[$e]},$$scope:{ctx:r}}}),{c(){c(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,f){x(t,e,f),n=!0},p(e,f){const s={};f&1&&(s.$$scope={dirty:f,ctx:e}),t.$set(s)},i(e){n||(p(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){d(t,e)}}}function se(r){let t=q`
		\begin{align*}
		\frac{d}{dx} [f(x) + g(x)] &= \frac{d}{dx} f(x) + \frac{d}{dx} g(x) \\\\
		-&-- \\\\
		\int [f(x) + g(x)] \,dx &= \int f(x) \,dx + \int g(x) \,dx \\\\
		\int [3x^2 + 6x^5] \,dx &= \int 3x^2 \,dx + \int 6x^5 \,dx \\\\
		\int [3x^2 + 6x^5] \,dx &= x^3 + x^6 + C
		\end{align*}
		`+"",n;return{c(){n=R(t)},l(e){n=C(e,t)},m(e,f){o(e,n,f)},p:k,d(e){e&&u(n)}}}function re(r){let t,n;return t=new j({props:{displayMode:!0,$$slots:{default:[se]},$$scope:{ctx:r}}}),{c(){c(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,f){x(t,e,f),n=!0},p(e,f){const s={};f&1&&(s.$$scope={dirty:f,ctx:e}),t.$set(s)},i(e){n||(p(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){d(t,e)}}}function le(r){let t=q`
		\begin{align*}
		\frac{d}{dx} [f(x)g(x)] &= f(x) \frac{d}{dx} g(x) + g(x) \frac{d}{dx} f(x) \\\\
		-&-- \\\\
		\int [f(x)g'(x) + g(x)f'(x)] \,dx &= f(x)g(x) + C \\\\
		\int [x^3 \cdot 6x^5 + x^6 \cdot 3x^2] \,dx &= x^3 \cdot x^6 + C \\\\
		\int \cos(2x) \, dx &= \int [\cos^2(x) - \sin^2(x)] \, dx \\\\
		\int \cos(2x) \, dx &= \sin(x)\cos(x) + C
		\end{align*}
		`+"",n;return{c(){n=R(t)},l(e){n=C(e,t)},m(e,f){o(e,n,f)},p:k,d(e){e&&u(n)}}}function ae(r){let t,n;return t=new j({props:{displayMode:!0,$$slots:{default:[le]},$$scope:{ctx:r}}}),{c(){c(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,f){x(t,e,f),n=!0},p(e,f){const s={};f&1&&(s.$$scope={dirty:f,ctx:e}),t.$set(s)},i(e){n||(p(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){d(t,e)}}}function oe(r){let t=q`
		\begin{align*}
		\frac{d}{dx} [\frac{f(x)}{g(x)}] &= \frac{g(x) \frac{d}{dx} f(x) - f(x) \frac{d}{dx} g(x)}{g(x)^2} \\\\
		-&-- \\\\
		\int [\frac{g(x)f'(x) - f(x)g'(x)}{g(x)^2}] \,dx &= \frac{f(x)}{g(x)} + C \\\\
		\int [\frac{x^6 \cdot 3x^2 - x^3 \cdot 6x^5}{x^{12}}] \,dx &= \frac{x^3}{x^6} + C = x^{-3} + C
		\end{align*}
		`+"",n;return{c(){n=R(t)},l(e){n=C(e,t)},m(e,f){o(e,n,f)},p:k,d(e){e&&u(n)}}}function ue(r){let t,n;return t=new j({props:{displayMode:!0,$$slots:{default:[oe]},$$scope:{ctx:r}}}),{c(){c(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,f){x(t,e,f),n=!0},p(e,f){const s={};f&1&&(s.$$scope={dirty:f,ctx:e}),t.$set(s)},i(e){n||(p(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){d(t,e)}}}function ie(r){let t=q`
		\begin{align*}
		\frac{d}{dx} f(g(x)) &= f'(g(x)) \cdot g'(x) \\\\
		-&-- \\\\
		\int f'(g(x)) \cdot g'(x) \,dx &= f(g(x)) + C \\\\
		\int 2\cos(2x) \,dx &= \sin(2x) + C
		\end{align*}
		`+"",n;return{c(){n=R(t)},l(e){n=C(e,t)},m(e,f){o(e,n,f)},p:k,d(e){e&&u(n)}}}function ce(r){let t,n;return t=new j({props:{displayMode:!0,$$slots:{default:[ie]},$$scope:{ctx:r}}}),{c(){c(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,f){x(t,e,f),n=!0},p(e,f){const s={};f&1&&(s.$$scope={dirty:f,ctx:e}),t.$set(s)},i(e){n||(p(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){d(t,e)}}}function me(r){let t=q`
		\begin{align*}
		\frac{d}{dx} [a \cdot f(x)] &= a \cdot \frac{d}{dx} f(x) \\\\
		-&-- \\\\
		\int a \cdot f'(x) \,dx &= a \cdot f(x) + C \\\\
		\int 6x^2 \,dx &= 2 \int 3x^2 \,dx = 2x^3 + C \\\\
		\int \cos(2x) \,dx &= \frac{1}{2} \int 2\cos(2x) \,dx = \frac{1}{2} \sin(2x) + C
		\end{align*}
		`+"",n;return{c(){n=R(t)},l(e){n=C(e,t)},m(e,f){o(e,n,f)},p:k,d(e){e&&u(n)}}}function xe(r){let t,n;return t=new j({props:{displayMode:!0,$$slots:{default:[me]},$$scope:{ctx:r}}}),{c(){c(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,f){x(t,e,f),n=!0},p(e,f){const s={};f&1&&(s.$$scope={dirty:f,ctx:e}),t.$set(s)},i(e){n||(p(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){d(t,e)}}}function pe(r){let t,n,e,f,s,_,h,v,w,P,b,M,T,l,i,z,B,A;return t=new Y({props:{heading:"Integral Toolbox 2"}}),e=new L({props:{heading:"Introduction",$$slots:{default:[ee]},$$scope:{ctx:r}}}),s=new L({props:{heading:"The Power Rule",$$slots:{default:[ne]},$$scope:{ctx:r}}}),h=new L({props:{heading:"The Constant Rule",$$slots:{default:[fe]},$$scope:{ctx:r}}}),w=new L({props:{heading:"The Sum Rule",$$slots:{default:[re]},$$scope:{ctx:r}}}),b=new L({props:{heading:"The Product Rule",$$slots:{default:[ae]},$$scope:{ctx:r}}}),T=new L({props:{heading:"The Quotient Rule",$$slots:{default:[ue]},$$scope:{ctx:r}}}),i=new L({props:{heading:"The Chain Rule",$$slots:{default:[ce]},$$scope:{ctx:r}}}),B=new L({props:{heading:"The Constant Product Rule",$$slots:{default:[xe]},$$scope:{ctx:r}}}),{c(){c(t.$$.fragment),n=S(),c(e.$$.fragment),f=S(),c(s.$$.fragment),_=S(),c(h.$$.fragment),v=S(),c(w.$$.fragment),P=S(),c(b.$$.fragment),M=S(),c(T.$$.fragment),l=S(),c(i.$$.fragment),z=S(),c(B.$$.fragment)},l($){m(t.$$.fragment,$),n=I($),m(e.$$.fragment,$),f=I($),m(s.$$.fragment,$),_=I($),m(h.$$.fragment,$),v=I($),m(w.$$.fragment,$),P=I($),m(b.$$.fragment,$),M=I($),m(T.$$.fragment,$),l=I($),m(i.$$.fragment,$),z=I($),m(B.$$.fragment,$)},m($,a){x(t,$,a),o($,n,a),x(e,$,a),o($,f,a),x(s,$,a),o($,_,a),x(h,$,a),o($,v,a),x(w,$,a),o($,P,a),x(b,$,a),o($,M,a),x(T,$,a),o($,l,a),x(i,$,a),o($,z,a),x(B,$,a),A=!0},p($,a){const D={};a&1&&(D.$$scope={dirty:a,ctx:$}),e.$set(D);const E={};a&1&&(E.$$scope={dirty:a,ctx:$}),s.$set(E);const F={};a&1&&(F.$$scope={dirty:a,ctx:$}),h.$set(F);const G={};a&1&&(G.$$scope={dirty:a,ctx:$}),w.$set(G);const H={};a&1&&(H.$$scope={dirty:a,ctx:$}),b.$set(H);const J={};a&1&&(J.$$scope={dirty:a,ctx:$}),T.$set(J);const K={};a&1&&(K.$$scope={dirty:a,ctx:$}),i.$set(K);const N={};a&1&&(N.$$scope={dirty:a,ctx:$}),B.$set(N)},i($){A||(p(t.$$.fragment,$),p(e.$$.fragment,$),p(s.$$.fragment,$),p(h.$$.fragment,$),p(w.$$.fragment,$),p(b.$$.fragment,$),p(T.$$.fragment,$),p(i.$$.fragment,$),p(B.$$.fragment,$),A=!0)},o($){g(t.$$.fragment,$),g(e.$$.fragment,$),g(s.$$.fragment,$),g(h.$$.fragment,$),g(w.$$.fragment,$),g(b.$$.fragment,$),g(T.$$.fragment,$),g(i.$$.fragment,$),g(B.$$.fragment,$),A=!1},d($){$&&(u(n),u(f),u(_),u(v),u(P),u(M),u(l),u(z)),d(t,$),d(e,$),d(s,$),d(h,$),d(w,$),d(b,$),d(T,$),d(i,$),d(B,$)}}}function ge(r){let t,n;return t=new X({props:{$$slots:{default:[pe]},$$scope:{ctx:r}}}),{c(){c(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,f){x(t,e,f),n=!0},p(e,[f]){const s={};f&1&&(s.$$scope={dirty:f,ctx:e}),t.$set(s)},i(e){n||(p(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){d(t,e)}}}function q(r){return r.raw[0]}class we extends U{constructor(t){super(),V(this,t,null,ge,O,{})}}export{we as component};
