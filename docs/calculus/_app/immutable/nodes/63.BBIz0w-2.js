import{s as at,n as M}from"../chunks/CVhLxNSM.js";import{S as ft,i as it,c as _,b as y,m as d,t as w,a as A,d as b,s as N,e as O,f as s,g as r,h as m,j as C,k as c,l as W}from"../chunks/DvSB8R1X.js";import{L as st,S as nt,M as R}from"../chunks/ByTZAYyp.js";import{L as rt}from"../chunks/xLaKUPuM.js";import{I as $t}from"../chunks/D3W7TYDU.js";function ot(l){let a=P`
			\frac{dy}{dt} = ky(A-y)
		`+"",n;return{c(){n=m(a)},l(t){n=c(t,a)},m(t,i){s(t,n,i)},p:M,d(t){t&&r(n)}}}function lt(l){let a=P`k`+"",n;return{c(){n=m(a)},l(t){n=c(t,a)},m(t,i){s(t,n,i)},p:M,d(t){t&&r(n)}}}function pt(l){let a=P`A`+"",n;return{c(){n=m(a)},l(t){n=c(t,a)},m(t,i){s(t,n,i)},p:M,d(t){t&&r(n)}}}function mt(l){let a;return{c(){a=m("The rate of change of a quantity is jointly proportional to the size of the quantity and the difference between the quantity and its carrying capacity.")},l(n){a=c(n,"The rate of change of a quantity is jointly proportional to the size of the quantity and the difference between the quantity and its carrying capacity.")},m(n,t){s(n,a,t)},d(n){n&&r(a)}}}function ct(l){let a=P`y(t)`+"",n;return{c(){n=m(a)},l(t){n=c(t,a)},m(t,i){s(t,n,i)},p:M,d(t){t&&r(n)}}}function ut(l){let a=P`
			\begin{align*}
			\frac{dy}{dt} &= ky(A-y) \\ \text{} \\
			\frac{dy}{y(A-y)} &= k \, dt \\ \text{} \\
			\int \frac{dy}{y(A-y)} &= \int k \, dt \\ \text{} \\
			\frac{1}{A}y + \frac{1}{A}(A-y) &= 1 \quad \text{(Partial Fraction Decomposition)} \\\\
			\int \frac{dy}{y(A-y)} &= \int \frac{\left[\frac{1}{A}y + \frac{1}{A}(A-y)\right]dy}{y(A-y)} \\\\
			&= \frac{1}{A} \int \frac{\left[y + (A-y)\right]dy}{y(A-y)} \\\\
			&= \frac{1}{A} \int \left[ \frac{y}{y(A-y)} + \frac{A-y}{y(A-y)} \right] dy \\\\
			&= \frac{1}{A} \int \left[ \frac{1}{A-y} + \frac{1}{y} \right] dy \\\\
			\frac{1}{A} \int \left[ \frac{1}{A-y} + \frac{1}{y} \right] dy &= \int k \, dt \\ \text{} \\
			\frac{1}{A} [ \ln|y| - \ln|A-y| ] &= kt + C \\ \text{} \\
			\frac{1}{A} \ln|\frac{y}{A-y}| &= kt + C \\ \text{} \\
			\ln|\frac{y}{A-y}| &= Akt + C_2 \\ \text{} \\
			\frac{y}{A-y} &= e^{Akt + C_2} \\ \text{} \\
			\frac{A-y}{y} &= \frac{1}{ce^{Akt}} \\ \text{} \\
			\frac{A}{y} &= ce^{-Akt}+1 \\ \text{} \\
			\frac{1}{y} &= \frac{ce^{-Akt}+1}{A} \\ \text{} \\
			y &= \frac{A}{ce^{-Akt}+1} \\ \text{} \\
			
			\end{align*}
		`+"",n;return{c(){n=m(a)},l(t){n=c(t,a)},m(t,i){s(t,n,i)},p:M,d(t){t&&r(n)}}}function ht(l){let a=P`c`+"",n;return{c(){n=m(a)},l(t){n=c(t,a)},m(t,i){s(t,n,i)},p:M,d(t){t&&r(n)}}}function gt(l){let a,n,t,i,u,g,o,h,v,B,x,q,T,I,k,z,f,p,Y,D,E,F,L,G,S,H,j,J,K;return n=new R({props:{displayMode:!0,$$slots:{default:[ot]},$$scope:{ctx:l}}}),i=new R({props:{$$slots:{default:[lt]},$$scope:{ctx:l}}}),g=new R({props:{$$slots:{default:[pt]},$$scope:{ctx:l}}}),q=new $t({props:{$$slots:{default:[mt]},$$scope:{ctx:l}}}),L=new R({props:{$$slots:{default:[ct]},$$scope:{ctx:l}}}),S=new R({props:{displayMode:!0,$$slots:{default:[ut]},$$scope:{ctx:l}}}),j=new R({props:{$$slots:{default:[ht]},$$scope:{ctx:l}}}),{c(){a=m(`Logistic growth is modelled by differential equations of the form:
		`),_(n.$$.fragment),t=N(),_(i.$$.fragment),u=m(" and "),_(g.$$.fragment),o=m(` are positive constants. 
		`),h=C("br"),v=C("br"),B=m(`In other words:
		`),x=C("br"),_(q.$$.fragment),T=N(),I=C("br"),k=C("br"),z=m(`The carrying capacity is the maximum size of the quantity. An example of carrying capacity is the number of fish in a pond. You cannot have more fish than you have space in the pond to hold them. There is a maximum, and that maximum is the carrying capacity.
		`),f=C("br"),p=C("br"),Y=m(`The difference between logistic growth and exponential growth is like the difference between the population of fish in a pond vs the population of fish in an infinite body of water. They could both grow at the same rate if not for the logistic growth's carrying capacity. The logistic growth slows down as it approaches its maximum until it eventually stops.
		`),D=C("br"),E=C("br"),F=m("We can solve this differential equation to find the function "),_(L.$$.fragment),G=m(` that models logistic growth.
		`),_(S.$$.fragment),H=m(`
		Where `),_(j.$$.fragment),J=m(" is a constant.")},l(e){a=c(e,`Logistic growth is modelled by differential equations of the form:
		`),y(n.$$.fragment,e),t=O(e),y(i.$$.fragment,e),u=c(e," and "),y(g.$$.fragment,e),o=c(e,` are positive constants. 
		`),h=W(e,"BR",{}),v=W(e,"BR",{}),B=c(e,`In other words:
		`),x=W(e,"BR",{}),y(q.$$.fragment,e),T=O(e),I=W(e,"BR",{}),k=W(e,"BR",{}),z=c(e,`The carrying capacity is the maximum size of the quantity. An example of carrying capacity is the number of fish in a pond. You cannot have more fish than you have space in the pond to hold them. There is a maximum, and that maximum is the carrying capacity.
		`),f=W(e,"BR",{}),p=W(e,"BR",{}),Y=c(e,`The difference between logistic growth and exponential growth is like the difference between the population of fish in a pond vs the population of fish in an infinite body of water. They could both grow at the same rate if not for the logistic growth's carrying capacity. The logistic growth slows down as it approaches its maximum until it eventually stops.
		`),D=W(e,"BR",{}),E=W(e,"BR",{}),F=c(e,"We can solve this differential equation to find the function "),y(L.$$.fragment,e),G=c(e,` that models logistic growth.
		`),y(S.$$.fragment,e),H=c(e,`
		Where `),y(j.$$.fragment,e),J=c(e," is a constant.")},m(e,$){s(e,a,$),d(n,e,$),s(e,t,$),d(i,e,$),s(e,u,$),d(g,e,$),s(e,o,$),s(e,h,$),s(e,v,$),s(e,B,$),s(e,x,$),d(q,e,$),s(e,T,$),s(e,I,$),s(e,k,$),s(e,z,$),s(e,f,$),s(e,p,$),s(e,Y,$),s(e,D,$),s(e,E,$),s(e,F,$),d(L,e,$),s(e,G,$),d(S,e,$),s(e,H,$),d(j,e,$),s(e,J,$),K=!0},p(e,$){const Q={};$&1&&(Q.$$scope={dirty:$,ctx:e}),n.$set(Q);const U={};$&1&&(U.$$scope={dirty:$,ctx:e}),i.$set(U);const V={};$&1&&(V.$$scope={dirty:$,ctx:e}),g.$set(V);const X={};$&1&&(X.$$scope={dirty:$,ctx:e}),q.$set(X);const Z={};$&1&&(Z.$$scope={dirty:$,ctx:e}),L.$set(Z);const tt={};$&1&&(tt.$$scope={dirty:$,ctx:e}),S.$set(tt);const et={};$&1&&(et.$$scope={dirty:$,ctx:e}),j.$set(et)},i(e){K||(w(n.$$.fragment,e),w(i.$$.fragment,e),w(g.$$.fragment,e),w(q.$$.fragment,e),w(L.$$.fragment,e),w(S.$$.fragment,e),w(j.$$.fragment,e),K=!0)},o(e){A(n.$$.fragment,e),A(i.$$.fragment,e),A(g.$$.fragment,e),A(q.$$.fragment,e),A(L.$$.fragment,e),A(S.$$.fragment,e),A(j.$$.fragment,e),K=!1},d(e){e&&(r(a),r(t),r(u),r(o),r(h),r(v),r(B),r(x),r(T),r(I),r(k),r(z),r(f),r(p),r(Y),r(D),r(E),r(F),r(G),r(H),r(J)),b(n,e),b(i,e),b(g,e),b(q,e),b(L,e),b(S,e),b(j,e)}}}function _t(l){let a=P`100,000`+"",n;return{c(){n=m(a)},l(t){n=c(t,a)},m(t,i){s(t,n,i)},p:M,d(t){t&&r(n)}}}function yt(l){let a=P`2\%`+"",n;return{c(){n=m(a)},l(t){n=c(t,a)},m(t,i){s(t,n,i)},p:M,d(t){t&&r(n)}}}function dt(l){let a=P`
			\frac{dP}{dt} = 0.02P(100000-P)
		`+"",n;return{c(){n=m(a)},l(t){n=c(t,a)},m(t,i){s(t,n,i)},p:M,d(t){t&&r(n)}}}function wt(l){let a=P`
			P = \frac{100000}{ce^{-0.02(100000)t}+1}
		`+"",n;return{c(){n=m(a)},l(t){n=c(t,a)},m(t,i){s(t,n,i)},p:M,d(t){t&&r(n)}}}function At(l){let a=P`10`+"",n;return{c(){n=m(a)},l(t){n=c(t,a)},m(t,i){s(t,n,i)},p:M,d(t){t&&r(n)}}}function bt(l){let a=P`
			10 = \frac{100000}{ce^{-0.02(100000)(0)}+1} \\ \text{} \\
			10 = \frac{100000}{c+1} \\ \text{} \\
			10(c+1) = 100000 \\ \text{} \\
			c = \frac{100000}{10} - 1 = 9999 \\ \text{} \\
			P = \frac{100000}{9999e^{-0.02(100000)t}+1}
		`+"",n;return{c(){n=m(a)},l(t){n=c(t,a)},m(t,i){s(t,n,i)},p:M,d(t){t&&r(n)}}}function vt(l){let a,n,t,i,u,g,o,h,v,B,x,q,T,I,k,z;return u=new R({props:{$$slots:{default:[_t]},$$scope:{ctx:l}}}),o=new R({props:{$$slots:{default:[yt]},$$scope:{ctx:l}}}),v=new R({props:{displayMode:!0,$$slots:{default:[dt]},$$scope:{ctx:l}}}),x=new R({props:{displayMode:!0,$$slots:{default:[wt]},$$scope:{ctx:l}}}),T=new R({props:{$$slots:{default:[At]},$$scope:{ctx:l}}}),k=new R({props:{displayMode:!0,$$slots:{default:[bt]},$$scope:{ctx:l}}}),{c(){a=m(`This differential equation represents a population undergoing logistic growth. 
		`),n=C("br"),t=C("br"),i=m("The population has a carrying capacity of "),_(u.$$.fragment),g=m(" people and a growth rate of "),_(o.$$.fragment),h=m(` per year.
		`),_(v.$$.fragment),B=m(`
		This is the equation that represents the population undergoing this growth:
		`),_(x.$$.fragment),q=m(`
		With an initial population of `),_(T.$$.fragment),I=m(` people, the equation becomes:
		`),_(k.$$.fragment)},l(f){a=c(f,`This differential equation represents a population undergoing logistic growth. 
		`),n=W(f,"BR",{}),t=W(f,"BR",{}),i=c(f,"The population has a carrying capacity of "),y(u.$$.fragment,f),g=c(f," people and a growth rate of "),y(o.$$.fragment,f),h=c(f,` per year.
		`),y(v.$$.fragment,f),B=c(f,`
		This is the equation that represents the population undergoing this growth:
		`),y(x.$$.fragment,f),q=c(f,`
		With an initial population of `),y(T.$$.fragment,f),I=c(f,` people, the equation becomes:
		`),y(k.$$.fragment,f)},m(f,p){s(f,a,p),s(f,n,p),s(f,t,p),s(f,i,p),d(u,f,p),s(f,g,p),d(o,f,p),s(f,h,p),d(v,f,p),s(f,B,p),d(x,f,p),s(f,q,p),d(T,f,p),s(f,I,p),d(k,f,p),z=!0},p(f,p){const Y={};p&1&&(Y.$$scope={dirty:p,ctx:f}),u.$set(Y);const D={};p&1&&(D.$$scope={dirty:p,ctx:f}),o.$set(D);const E={};p&1&&(E.$$scope={dirty:p,ctx:f}),v.$set(E);const F={};p&1&&(F.$$scope={dirty:p,ctx:f}),x.$set(F);const L={};p&1&&(L.$$scope={dirty:p,ctx:f}),T.$set(L);const G={};p&1&&(G.$$scope={dirty:p,ctx:f}),k.$set(G)},i(f){z||(w(u.$$.fragment,f),w(o.$$.fragment,f),w(v.$$.fragment,f),w(x.$$.fragment,f),w(T.$$.fragment,f),w(k.$$.fragment,f),z=!0)},o(f){A(u.$$.fragment,f),A(o.$$.fragment,f),A(v.$$.fragment,f),A(x.$$.fragment,f),A(T.$$.fragment,f),A(k.$$.fragment,f),z=!1},d(f){f&&(r(a),r(n),r(t),r(i),r(g),r(h),r(B),r(q),r(I)),b(u,f),b(o,f),b(v,f),b(x,f),b(T,f),b(k,f)}}}function xt(l){let a,n,t,i,u,g;return a=new rt({props:{heading:"Logistic Models"}}),t=new nt({props:{heading:"Introduction",$$slots:{default:[gt]},$$scope:{ctx:l}}}),u=new nt({props:{heading:"Example",$$slots:{default:[vt]},$$scope:{ctx:l}}}),{c(){_(a.$$.fragment),n=N(),_(t.$$.fragment),i=N(),_(u.$$.fragment)},l(o){y(a.$$.fragment,o),n=O(o),y(t.$$.fragment,o),i=O(o),y(u.$$.fragment,o)},m(o,h){d(a,o,h),s(o,n,h),d(t,o,h),s(o,i,h),d(u,o,h),g=!0},p(o,h){const v={};h&1&&(v.$$scope={dirty:h,ctx:o}),t.$set(v);const B={};h&1&&(B.$$scope={dirty:h,ctx:o}),u.$set(B)},i(o){g||(w(a.$$.fragment,o),w(t.$$.fragment,o),w(u.$$.fragment,o),g=!0)},o(o){A(a.$$.fragment,o),A(t.$$.fragment,o),A(u.$$.fragment,o),g=!1},d(o){o&&(r(n),r(i)),b(a,o),b(t,o),b(u,o)}}}function qt(l){let a,n;return a=new st({props:{$$slots:{default:[xt]},$$scope:{ctx:l}}}),{c(){_(a.$$.fragment)},l(t){y(a.$$.fragment,t)},m(t,i){d(a,t,i),n=!0},p(t,[i]){const u={};i&1&&(u.$$scope={dirty:i,ctx:t}),a.$set(u)},i(t){n||(w(a.$$.fragment,t),n=!0)},o(t){A(a.$$.fragment,t),n=!1},d(t){b(a,t)}}}function P(l){return l.raw[0]}class Pt extends ft{constructor(a){super(),it(this,a,null,qt,at,{})}}export{Pt as component};
