import{s as H,n as R}from"../chunks/CVhLxNSM.js";import{S as J,i as K,c as m,b as x,m as p,t as d,a as g,d as _,s as P,e as S,f as i,g as l,h as w,k as C,j as A,l as B,n as N,o as G}from"../chunks/DvSB8R1X.js";import{L as O,S as D,M as L}from"../chunks/ByTZAYyp.js";import{L as Q}from"../chunks/xLaKUPuM.js";function U(a){let t=W`
				\begin{align*}
				\frac{d}{dx}\tan(x)&=\sec^2(x) \\\\
				\frac{d}{dx}\cot(x)&=-\csc^2(x) \\\\
				\frac{d}{dx}\sec(x)&=\tan(x)\sec(x) \\\\
				\frac{d}{dx}\csc(x)&=-\cot(x)\csc(x)
				\end{align*}
			`+"",s;return{c(){s=w(t)},l(e){s=C(e,t)},m(e,n){i(e,s,n)},p:R,d(e){e&&l(s)}}}function V(a){let t,s,e;return s=new L({props:{displayMode:!0,$$slots:{default:[U]},$$scope:{ctx:a}}}),{c(){t=w(`We will prove the following:
			`),m(s.$$.fragment)},l(n){t=C(n,`We will prove the following:
			`),x(s.$$.fragment,n)},m(n,o){i(n,t,o),p(s,n,o),e=!0},p(n,o){const $={};o&1&&($.$$scope={dirty:o,ctx:n}),s.$set($)},i(n){e||(d(s.$$.fragment,n),e=!0)},o(n){g(s.$$.fragment,n),e=!1},d(n){n&&l(t),_(s,n)}}}function X(a){let t=W`\sin^2(x)+\cos^2(x)=1`+"",s;return{c(){s=w(t)},l(e){s=C(e,t)},m(e,n){i(e,s,n)},p:R,d(e){e&&l(s)}}}function Y(a){let t,s;return t=new L({props:{displayMode:!0,$$slots:{default:[X]},$$scope:{ctx:a}}}),{c(){m(t.$$.fragment)},l(e){x(t.$$.fragment,e)},m(e,n){p(t,e,n),s=!0},p(e,n){const o={};n&1&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){s||(d(t.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),s=!1},d(e){_(t,e)}}}function Z(a){let t=W`
			\begin{align*}
			\frac{d}{dx}\tan(x)&=\frac{d}{dx}\frac{\sin(x)}{\cos(x)} \\\\
			&=\frac{\cos(x) \cdot \frac{d}{dx}[\sin(x)] - \sin(x) \cdot \frac{d}{dx}[\cos(x)]}{\cos^2(x)} \\\\
			&=\frac{\cos(x) \cdot \cos(x) - \sin(x) \cdot [-\sin(x)]}{\cos^2(x)} \\\\
			&=\frac{\cos^2(x) + \sin^2(x)}{\cos^2(x)} \\\\
			&=\frac{1}{\cos^2(x)} \\\\
			&=\sec^2(x)
			\end{align*}
		`+"",s;return{c(){s=w(t)},l(e){s=C(e,t)},m(e,n){i(e,s,n)},p:R,d(e){e&&l(s)}}}function y(a){let t,s;return t=new L({props:{displayMode:!0,$$slots:{default:[Z]},$$scope:{ctx:a}}}),{c(){m(t.$$.fragment)},l(e){x(t.$$.fragment,e)},m(e,n){p(t,e,n),s=!0},p(e,n){const o={};n&1&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){s||(d(t.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),s=!1},d(e){_(t,e)}}}function ee(a){let t=W`
            \begin{align*}
            \frac{d}{dx}\cot(x)&=\frac{d}{dx}\frac{\cos(x)}{\sin(x)} \\\\
            &=\frac{\sin(x) \cdot \frac{d}{dx}[\cos(x)] - \cos(x) \cdot \frac{d}{dx}[\sin(x)]}{\sin^2(x)} \\\\
            &=\frac{\sin(x) \cdot [-\sin(x)] - \cos(x) \cdot \cos(x)}{\sin^2(x)} \\\\
            &=\frac{-\sin^2(x) - \cos^2(x)}{\sin^2(x)} \\\\
            &=\frac{-(\sin^2(x) + \cos^2(x))}{\sin^2(x)} \\\\
            &=\frac{-1}{\sin^2(x)} \\\\
            &=-\csc^2(x)
            \end{align*}
        `+"",s;return{c(){s=w(t)},l(e){s=C(e,t)},m(e,n){i(e,s,n)},p:R,d(e){e&&l(s)}}}function te(a){let t,s;return t=new L({props:{displayMode:!0,$$slots:{default:[ee]},$$scope:{ctx:a}}}),{c(){m(t.$$.fragment)},l(e){x(t.$$.fragment,e)},m(e,n){p(t,e,n),s=!0},p(e,n){const o={};n&1&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){s||(d(t.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),s=!1},d(e){_(t,e)}}}function se(a){let t=W`
            \begin{align*}
            \frac{d}{dx}\sec(x)&=\frac{d}{dx}\frac{1}{\cos(x)} \\\\
            &=\frac{d}{dx}\cos(x)^{-1} \\\\
            &= {-1}\cos(x)^{-2} \cdot \frac{d}{dx}\cos(x) \text{ (Chain Rule)} \\\\
            &= {-1}\cos(x)^{-2} \cdot [-\sin(x)] \\\\
            &=\frac{\sin(x)}{\cos^2(x)} \\\\
            &=\frac{\sin(x)}{\cos(x)} \cdot \frac{1}{\cos(x)} \\\\
            &=\tan(x)\sec(x)
            \end{align*}
        `+"",s;return{c(){s=w(t)},l(e){s=C(e,t)},m(e,n){i(e,s,n)},p:R,d(e){e&&l(s)}}}function ne(a){let t,s,e;return s=new L({props:{displayMode:!0,$$slots:{default:[se]},$$scope:{ctx:a}}}),{c(){t=w(`The next two proofs are going to use the chain rule for one step. We will prove the chain rule in the next lesson, so it seems fine to use it here instead of waiting.
        `),m(s.$$.fragment)},l(n){t=C(n,`The next two proofs are going to use the chain rule for one step. We will prove the chain rule in the next lesson, so it seems fine to use it here instead of waiting.
        `),x(s.$$.fragment,n)},m(n,o){i(n,t,o),p(s,n,o),e=!0},p(n,o){const $={};o&1&&($.$$scope={dirty:o,ctx:n}),s.$set($)},i(n){e||(d(s.$$.fragment,n),e=!0)},o(n){g(s.$$.fragment,n),e=!1},d(n){n&&l(t),_(s,n)}}}function re(a){let t=W`
            \begin{align*}
            \frac{d}{dx}\csc(x)&=\frac{d}{dx}\frac{1}{\sin(x)} \\\\
            &=\frac{d}{dx}\sin(x)^{-1} \\\\
            &= {-1}\sin(x)^{-2} \cdot \frac{d}{dx}\sin(x) \text{ (Chain Rule)} \\\\
            &= {-1}\sin(x)^{-2} \cdot \cos(x) \\\\
            &=\frac{-\cos(x)}{\sin^2(x)} \\\\
            &=\frac{-\cos(x)}{\sin(x)} \cdot \frac{1}{\sin(x)} \\\\
            &=-\cot(x)\csc(x)
            \end{align*}
        `+"",s;return{c(){s=w(t)},l(e){s=C(e,t)},m(e,n){i(e,s,n)},p:R,d(e){e&&l(s)}}}function oe(a){let t,s,e,n,o,$,v="Appendix - Common Derivatives",b,h;return t=new L({props:{displayMode:!0,$$slots:{default:[re]},$$scope:{ctx:a}}}),{c(){m(t.$$.fragment),s=P(),e=A("br"),n=A("br"),o=w("These derivative definitions are used often and are included in the "),$=A("a"),$.textContent=v,b=w("."),this.h()},l(c){x(t.$$.fragment,c),s=S(c),e=B(c,"BR",{}),n=B(c,"BR",{}),o=C(c,"These derivative definitions are used often and are included in the "),$=B(c,"A",{href:!0,class:!0,"data-svelte-h":!0}),N($)!=="svelte-h2ytn4"&&($.textContent=v),b=C(c,"."),this.h()},h(){G($,"href","https://www.brickacademy.org/calculus/99-03-common-derivatives"),G($,"class","hover:text-primary underline")},m(c,u){p(t,c,u),i(c,s,u),i(c,e,u),i(c,n,u),i(c,o,u),i(c,$,u),i(c,b,u),h=!0},p(c,u){const T={};u&1&&(T.$$scope={dirty:u,ctx:c}),t.$set(T)},i(c){h||(d(t.$$.fragment,c),h=!0)},o(c){g(t.$$.fragment,c),h=!1},d(c){c&&(l(s),l(e),l(n),l(o),l($),l(b)),_(t,c)}}}function ae(a){let t,s,e,n,o,$,v,b,h,c,u,T,M,k;return t=new Q({props:{heading:"Tan, Cot, Sec, and Csc"}}),e=new D({props:{heading:"Introduction",$$slots:{default:[V]},$$scope:{ctx:a}}}),o=new D({props:{heading:"Preliminary Reminder",$$slots:{default:[Y]},$$scope:{ctx:a}}}),v=new D({props:{heading:"Proof of the Derivative of Tan(x)",$$slots:{default:[y]},$$scope:{ctx:a}}}),h=new D({props:{heading:"Proof of the Derivative of Cot(x)",$$slots:{default:[te]},$$scope:{ctx:a}}}),u=new D({props:{heading:"Proof of the Derivative of Sec(x)",$$slots:{default:[ne]},$$scope:{ctx:a}}}),M=new D({props:{heading:"Proof of the Derivative of Csc(x)",$$slots:{default:[oe]},$$scope:{ctx:a}}}),{c(){m(t.$$.fragment),s=P(),m(e.$$.fragment),n=P(),m(o.$$.fragment),$=P(),m(v.$$.fragment),b=P(),m(h.$$.fragment),c=P(),m(u.$$.fragment),T=P(),m(M.$$.fragment)},l(r){x(t.$$.fragment,r),s=S(r),x(e.$$.fragment,r),n=S(r),x(o.$$.fragment,r),$=S(r),x(v.$$.fragment,r),b=S(r),x(h.$$.fragment,r),c=S(r),x(u.$$.fragment,r),T=S(r),x(M.$$.fragment,r)},m(r,f){p(t,r,f),i(r,s,f),p(e,r,f),i(r,n,f),p(o,r,f),i(r,$,f),p(v,r,f),i(r,b,f),p(h,r,f),i(r,c,f),p(u,r,f),i(r,T,f),p(M,r,f),k=!0},p(r,f){const j={};f&1&&(j.$$scope={dirty:f,ctx:r}),e.$set(j);const q={};f&1&&(q.$$scope={dirty:f,ctx:r}),o.$set(q);const I={};f&1&&(I.$$scope={dirty:f,ctx:r}),v.$set(I);const z={};f&1&&(z.$$scope={dirty:f,ctx:r}),h.$set(z);const E={};f&1&&(E.$$scope={dirty:f,ctx:r}),u.$set(E);const F={};f&1&&(F.$$scope={dirty:f,ctx:r}),M.$set(F)},i(r){k||(d(t.$$.fragment,r),d(e.$$.fragment,r),d(o.$$.fragment,r),d(v.$$.fragment,r),d(h.$$.fragment,r),d(u.$$.fragment,r),d(M.$$.fragment,r),k=!0)},o(r){g(t.$$.fragment,r),g(e.$$.fragment,r),g(o.$$.fragment,r),g(v.$$.fragment,r),g(h.$$.fragment,r),g(u.$$.fragment,r),g(M.$$.fragment,r),k=!1},d(r){r&&(l(s),l(n),l($),l(b),l(c),l(T)),_(t,r),_(e,r),_(o,r),_(v,r),_(h,r),_(u,r),_(M,r)}}}function ce(a){let t,s;return t=new O({props:{$$slots:{default:[ae]},$$scope:{ctx:a}}}),{c(){m(t.$$.fragment)},l(e){x(t.$$.fragment,e)},m(e,n){p(t,e,n),s=!0},p(e,[n]){const o={};n&1&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){s||(d(t.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),s=!1},d(e){_(t,e)}}}function W(a){return a.raw[0]}class ue extends J{constructor(t){super(),K(this,t,null,ce,H,{})}}export{ue as component};
