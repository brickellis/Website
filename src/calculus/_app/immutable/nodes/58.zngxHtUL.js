import{s as it,n as b}from"../chunks/CVhLxNSM.js";import{S as lt,i as rt,c as o,b as u,m as c,t as _,a as g,d as h,s as mt,e as pt,f,g as i,h as m,j as W,k as p,l as z}from"../chunks/DvSB8R1X.js";import{L as ot,S as ut,M as v}from"../chunks/ByTZAYyp.js";import{L as ct}from"../chunks/xLaKUPuM.js";function _t(l){let s=P`P`+"",n;return{c(){n=m(s)},l(e){n=p(e,s)},m(e,a){f(e,n,a)},p:b,d(e){e&&i(n)}}}function gt(l){let s=P`t`+"",n;return{c(){n=m(s)},l(e){n=p(e,s)},m(e,a){f(e,n,a)},p:b,d(e){e&&i(n)}}}function ht(l){let s=P`
			\frac{dP}{dt} = 0.02P
		`+"",n;return{c(){n=m(s)},l(e){n=p(e,s)},m(e,a){f(e,n,a)},p:b,d(e){e&&i(n)}}}function wt(l){let s=P`P(t)`+"",n;return{c(){n=m(s)},l(e){n=p(e,s)},m(e,a){f(e,n,a)},p:b,d(e){e&&i(n)}}}function dt(l){let s=P`
			P(t) = ke^{0.02t}
		`+"",n;return{c(){n=m(s)},l(e){n=p(e,s)},m(e,a){f(e,n,a)},p:b,d(e){e&&i(n)}}}function vt(l){let s=P`k`+"",n;return{c(){n=m(s)},l(e){n=p(e,s)},m(e,a){f(e,n,a)},p:b,d(e){e&&i(n)}}}function bt(l){let s=P`
			\begin{align*}
			P(t) &= ke^{0.02t} \\ \text{} \\
			\frac{d}{dt}P(t) &= \frac{d}{dt}ke^{0.02t} \\ \text{} \\
			\frac{dP}{dt}&= 0.02ke^{0.02t} \\ \text{} \\
			\frac{dP}{dt}&= 0.02P
			\end{align*}
		`+"",n;return{c(){n=m(s)},l(e){n=p(e,s)},m(e,a){f(e,n,a)},p:b,d(e){e&&i(n)}}}function Pt(l){let s=P`t=100`+"",n;return{c(){n=m(s)},l(e){n=p(e,s)},m(e,a){f(e,n,a)},p:b,d(e){e&&i(n)}}}function kt(l){let s=P`
			\begin{align*}
			P(t) &= ke^{0.02t} \\ \text{} \\
			310 &= ke^{0.02(100)} \\ \text{} \\
			\frac{310}{e^{2}} &= k \\ \text{} \\
			k &= 42 \\ \text{} \\
			P(t) &= 42e^{0.02t}
			\end{align*}
		`+"",n;return{c(){n=m(s)},l(e){n=p(e,s)},m(e,a){f(e,n,a)},p:b,d(e){e&&i(n)}}}function Tt(l){let s=P`k`+"",n;return{c(){n=m(s)},l(e){n=p(e,s)},m(e,a){f(e,n,a)},p:b,d(e){e&&i(n)}}}function qt(l){let s=P`P(100) = 310 = 42e^{0.02(100)}`+"",n;return{c(){n=m(s)},l(e){n=p(e,s)},m(e,a){f(e,n,a)},p:b,d(e){e&&i(n)}}}function xt(l){let s,n,e,a,r,w,d,A,k,C,T,D,j,y,I,q,E,x,G,B,H,M,J,R,K,S,N,F,O,L,Q,U;return d=new v({props:{$$slots:{default:[_t]},$$scope:{ctx:l}}}),k=new v({props:{$$slots:{default:[gt]},$$scope:{ctx:l}}}),T=new v({props:{displayMode:!0,$$slots:{default:[ht]},$$scope:{ctx:l}}}),q=new v({props:{$$slots:{default:[wt]},$$scope:{ctx:l}}}),x=new v({props:{displayMode:!0,$$slots:{default:[dt]},$$scope:{ctx:l}}}),B=new v({props:{$$slots:{default:[vt]},$$scope:{ctx:l}}}),M=new v({props:{displayMode:!0,$$slots:{default:[bt]},$$scope:{ctx:l}}}),R=new v({props:{$$slots:{default:[Pt]},$$scope:{ctx:l}}}),S=new v({props:{displayMode:!0,$$slots:{default:[kt]},$$scope:{ctx:l}}}),F=new v({props:{$$slots:{default:[Tt]},$$scope:{ctx:l}}}),L=new v({props:{$$slots:{default:[qt]},$$scope:{ctx:l}}}),{c(){s=m(`Differential equations are equations with derivatives. They represent rates of change.
		`),n=W("br"),e=W("br"),a=m(`They model physical and economic systems, such as population growth, heat transfer, and compound interest.
		`),r=W("br"),w=W("br"),o(d.$$.fragment),A=m(" represents the population size in people, with "),o(k.$$.fragment),C=m(` as years:
		`),o(T.$$.fragment),D=m(`
		The population is increasing by 2% each year.
		`),j=W("br"),y=W("br"),I=m("Solving a differential equation is generally to find a function which satisfies it. For this example, we are finding "),o(q.$$.fragment),E=m(`:
		`),o(x.$$.fragment),G=m(`
		Where `),o(B.$$.fragment),H=m(` is the initial population. We can check this solution through differentiation:
		`),o(M.$$.fragment),J=m(`
		As with antiderivates, the last missing piece is finding the constant. For example, if the population is 310 at `),o(R.$$.fragment),K=m(` years, then:
		`),o(S.$$.fragment),N=m(`
		The constant `),o(F.$$.fragment),O=m(" is 42, as "),o(L.$$.fragment),Q=m(".")},l(t){s=p(t,`Differential equations are equations with derivatives. They represent rates of change.
		`),n=z(t,"BR",{}),e=z(t,"BR",{}),a=p(t,`They model physical and economic systems, such as population growth, heat transfer, and compound interest.
		`),r=z(t,"BR",{}),w=z(t,"BR",{}),u(d.$$.fragment,t),A=p(t," represents the population size in people, with "),u(k.$$.fragment,t),C=p(t,` as years:
		`),u(T.$$.fragment,t),D=p(t,`
		The population is increasing by 2% each year.
		`),j=z(t,"BR",{}),y=z(t,"BR",{}),I=p(t,"Solving a differential equation is generally to find a function which satisfies it. For this example, we are finding "),u(q.$$.fragment,t),E=p(t,`:
		`),u(x.$$.fragment,t),G=p(t,`
		Where `),u(B.$$.fragment,t),H=p(t,` is the initial population. We can check this solution through differentiation:
		`),u(M.$$.fragment,t),J=p(t,`
		As with antiderivates, the last missing piece is finding the constant. For example, if the population is 310 at `),u(R.$$.fragment,t),K=p(t,` years, then:
		`),u(S.$$.fragment,t),N=p(t,`
		The constant `),u(F.$$.fragment,t),O=p(t," is 42, as "),u(L.$$.fragment,t),Q=p(t,".")},m(t,$){f(t,s,$),f(t,n,$),f(t,e,$),f(t,a,$),f(t,r,$),f(t,w,$),c(d,t,$),f(t,A,$),c(k,t,$),f(t,C,$),c(T,t,$),f(t,D,$),f(t,j,$),f(t,y,$),f(t,I,$),c(q,t,$),f(t,E,$),c(x,t,$),f(t,G,$),c(B,t,$),f(t,H,$),c(M,t,$),f(t,J,$),c(R,t,$),f(t,K,$),c(S,t,$),f(t,N,$),c(F,t,$),f(t,O,$),c(L,t,$),f(t,Q,$),U=!0},p(t,$){const V={};$&1&&(V.$$scope={dirty:$,ctx:t}),d.$set(V);const X={};$&1&&(X.$$scope={dirty:$,ctx:t}),k.$set(X);const Y={};$&1&&(Y.$$scope={dirty:$,ctx:t}),T.$set(Y);const Z={};$&1&&(Z.$$scope={dirty:$,ctx:t}),q.$set(Z);const tt={};$&1&&(tt.$$scope={dirty:$,ctx:t}),x.$set(tt);const et={};$&1&&(et.$$scope={dirty:$,ctx:t}),B.$set(et);const nt={};$&1&&(nt.$$scope={dirty:$,ctx:t}),M.$set(nt);const st={};$&1&&(st.$$scope={dirty:$,ctx:t}),R.$set(st);const $t={};$&1&&($t.$$scope={dirty:$,ctx:t}),S.$set($t);const at={};$&1&&(at.$$scope={dirty:$,ctx:t}),F.$set(at);const ft={};$&1&&(ft.$$scope={dirty:$,ctx:t}),L.$set(ft)},i(t){U||(_(d.$$.fragment,t),_(k.$$.fragment,t),_(T.$$.fragment,t),_(q.$$.fragment,t),_(x.$$.fragment,t),_(B.$$.fragment,t),_(M.$$.fragment,t),_(R.$$.fragment,t),_(S.$$.fragment,t),_(F.$$.fragment,t),_(L.$$.fragment,t),U=!0)},o(t){g(d.$$.fragment,t),g(k.$$.fragment,t),g(T.$$.fragment,t),g(q.$$.fragment,t),g(x.$$.fragment,t),g(B.$$.fragment,t),g(M.$$.fragment,t),g(R.$$.fragment,t),g(S.$$.fragment,t),g(F.$$.fragment,t),g(L.$$.fragment,t),U=!1},d(t){t&&(i(s),i(n),i(e),i(a),i(r),i(w),i(A),i(C),i(D),i(j),i(y),i(I),i(E),i(G),i(H),i(J),i(K),i(N),i(O),i(Q)),h(d,t),h(k,t),h(T,t),h(q,t),h(x,t),h(B,t),h(M,t),h(R,t),h(S,t),h(F,t),h(L,t)}}}function Bt(l){let s,n,e,a;return s=new ct({props:{heading:"Introduction"}}),e=new ut({props:{heading:"",$$slots:{default:[xt]},$$scope:{ctx:l}}}),{c(){o(s.$$.fragment),n=mt(),o(e.$$.fragment)},l(r){u(s.$$.fragment,r),n=pt(r),u(e.$$.fragment,r)},m(r,w){c(s,r,w),f(r,n,w),c(e,r,w),a=!0},p(r,w){const d={};w&1&&(d.$$scope={dirty:w,ctx:r}),e.$set(d)},i(r){a||(_(s.$$.fragment,r),_(e.$$.fragment,r),a=!0)},o(r){g(s.$$.fragment,r),g(e.$$.fragment,r),a=!1},d(r){r&&i(n),h(s,r),h(e,r)}}}function Mt(l){let s,n;return s=new ot({props:{$$slots:{default:[Bt]},$$scope:{ctx:l}}}),{c(){o(s.$$.fragment)},l(e){u(s.$$.fragment,e)},m(e,a){c(s,e,a),n=!0},p(e,[a]){const r={};a&1&&(r.$$scope={dirty:a,ctx:e}),s.$set(r)},i(e){n||(_(s.$$.fragment,e),n=!0)},o(e){g(s.$$.fragment,e),n=!1},d(e){h(s,e)}}}function P(l){return l.raw[0]}class Wt extends lt{constructor(s){super(),rt(this,s,null,Mt,it,{})}}export{Wt as component};
