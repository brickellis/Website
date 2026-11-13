import{s as Gt,n as S}from"../chunks/CVhLxNSM.js";import{S as It,i as Nt,c as g,b as h,m as b,t as w,a as v,d as x,s as et,e as $t,f as l,g as m,h as p,j as E,k as _,l as W,n as gt}from"../chunks/DvSB8R1X.js";import{L as Ot,S as ht,M as B}from"../chunks/ByTZAYyp.js";import{L as jt}from"../chunks/xLaKUPuM.js";import{D as Pt}from"../chunks/CkoZ7XGi.js";import{s as At}from"../chunks/Bw3t_506.js";function Vt(u){let n=C`(a, f(a))`+"",$;return{c(){$=p(n)},l(t){$=_(t,n)},m(t,s){l(t,$,s)},p:S,d(t){t&&m($)}}}function zt(u){let n=C`(b, f(b))`+"",$;return{c(){$=p(n)},l(t){$=_(t,n)},m(t,s){l(t,$,s)},p:S,d(t){t&&m($)}}}function Ht(u){let n=C`\sqrt{(b - a)^2 + (f(b) - f(a))^2}`+"",$;return{c(){$=p(n)},l(t){$=_(t,n)},m(t,s){l(t,$,s)},p:S,d(t){t&&m($)}}}function Jt(u){let n,$,t,s,d,R,T,F,i,q,D,M,L,k,G;return $=new B({props:{$$slots:{default:[Vt]},$$scope:{ctx:u}}}),s=new B({props:{$$slots:{default:[zt]},$$scope:{ctx:u}}}),R=new B({props:{displayMode:!0,$$slots:{default:[Ht]},$$scope:{ctx:u}}}),k=new Pt({props:{sketch:At,sketchParameters:{plotFunction:xe,dimensions:[-4,4,-2,6],dots:[[[-1,1],"red"],[[2,4],"red"]],bonusFunctions:[[u[0],"red"],[u[1],"green"]]}}}),{c(){n=p("We calculate the distance between two points on a function "),g($.$$.fragment),t=p(", "),g(s.$$.fragment),d=p(`, as the bird flies:
		`),g(R.$$.fragment),T=p(`
		We can also calculate the distance between two points on a function while travelling along the function.
		`),F=E("br"),i=E("br"),q=p(`This is the arc length.
		`),D=E("br"),M=E("br"),L=p(`In other words, the euclidean distance is the green line. The arc length is the red line.
		`),g(k.$$.fragment)},l(r){n=_(r,"We calculate the distance between two points on a function "),h($.$$.fragment,r),t=_(r,", "),h(s.$$.fragment,r),d=_(r,`, as the bird flies:
		`),h(R.$$.fragment,r),T=_(r,`
		We can also calculate the distance between two points on a function while travelling along the function.
		`),F=W(r,"BR",{}),i=W(r,"BR",{}),q=_(r,`This is the arc length.
		`),D=W(r,"BR",{}),M=W(r,"BR",{}),L=_(r,`In other words, the euclidean distance is the green line. The arc length is the red line.
		`),h(k.$$.fragment,r)},m(r,c){l(r,n,c),b($,r,c),l(r,t,c),b(s,r,c),l(r,d,c),b(R,r,c),l(r,T,c),l(r,F,c),l(r,i,c),l(r,q,c),l(r,D,c),l(r,M,c),l(r,L,c),b(k,r,c),G=!0},p(r,c){const I={};c&4&&(I.$$scope={dirty:c,ctx:r}),$.$set(I);const N={};c&4&&(N.$$scope={dirty:c,ctx:r}),s.$set(N);const a={};c&4&&(a.$$scope={dirty:c,ctx:r}),R.$set(a)},i(r){G||(w($.$$.fragment,r),w(s.$$.fragment,r),w(R.$$.fragment,r),w(k.$$.fragment,r),G=!0)},o(r){v($.$$.fragment,r),v(s.$$.fragment,r),v(R.$$.fragment,r),v(k.$$.fragment,r),G=!1},d(r){r&&(m(n),m(t),m(d),m(T),m(F),m(i),m(q),m(D),m(M),m(L)),x($,r),x(s,r),x(R,r),x(k,r)}}}function Kt(u){let n=C`
				D = \sqrt{(\Delta x)^2 + (\Delta y)^2}
			`+"",$;return{c(){$=p(n)},l(t){$=_(t,n)},m(t,s){l(t,$,s)},p:S,d(t){t&&m($)}}}function Qt(u){let n=C`\Delta x`+"",$;return{c(){$=p(n)},l(t){$=_(t,n)},m(t,s){l(t,$,s)},p:S,d(t){t&&m($)}}}function Ut(u){let n=C`x`+"",$;return{c(){$=p(n)},l(t){$=_(t,n)},m(t,s){l(t,$,s)},p:S,d(t){t&&m($)}}}function Xt(u){let n=C`\Delta y`+"",$;return{c(){$=p(n)},l(t){$=_(t,n)},m(t,s){l(t,$,s)},p:S,d(t){t&&m($)}}}function Yt(u){let n=C`y`+"",$;return{c(){$=p(n)},l(t){$=_(t,n)},m(t,s){l(t,$,s)},p:S,d(t){t&&m($)}}}function Zt(u){let n=C`
				L =\sum_{i=1}^{n} \sqrt{(\Delta x_i)^2 + (\Delta y_i)^2}
			`+"",$;return{c(){$=p(n)},l(t){$=_(t,n)},m(t,s){l(t,$,s)},p:S,d(t){t&&m($)}}}function yt(u){let n=C`
				\begin{align*}
				L &= \int_{a}^{b} \sqrt{dx^2 + dy^2} \\
				&= \int_{a}^{b} \sqrt{dx^2 + dy^2} \cdot \frac{dx}{dx} \\
				&= \int_{a}^{b} \sqrt{\frac{dx^2}{dx^2} + \frac{dy^2}{dx^2}} \, dx \\
				&= \int_{a}^{b} \sqrt{1 + \left(\frac{dy}{dx}\right)^2} \, dx
				\end{align*}
			`+"",$;return{c(){$=p(n)},l(t){$=_(t,n)},m(t,s){l(t,$,s)},p:S,d(t){t&&m($)}}}function te(u){let n,$,t,s,d,R,T,F,i,q,D,M,L,k,G,r,c,I,N;return $=new B({props:{displayMode:!0,$$slots:{default:[Kt]},$$scope:{ctx:u}}}),s=new B({props:{$$slots:{default:[Qt]},$$scope:{ctx:u}}}),R=new B({props:{$$slots:{default:[Ut]},$$scope:{ctx:u}}}),i=new B({props:{$$slots:{default:[Xt]},$$scope:{ctx:u}}}),D=new B({props:{$$slots:{default:[Yt]},$$scope:{ctx:u}}}),r=new B({props:{displayMode:!0,$$slots:{default:[Zt]},$$scope:{ctx:u}}}),I=new B({props:{displayMode:!0,$$slots:{default:[yt]},$$scope:{ctx:u}}}),{c(){n=p(`The formula above is the same as the one below: Euclidean Distance:
		`),g($.$$.fragment),t=et(),g(s.$$.fragment),d=p(" is the change in "),g(R.$$.fragment),T=et(),F=E("br"),g(i.$$.fragment),q=p(" is the change in "),g(D.$$.fragment),M=p(`.
		`),L=E("br"),k=E("br"),G=p(`We calculate the arc length between two points by summing the euclidean distances of all the points along the function between them:
		`),g(r.$$.fragment),c=p(`
		This Riemann Sum can be converted to an integral:
		`),g(I.$$.fragment)},l(a){n=_(a,`The formula above is the same as the one below: Euclidean Distance:
		`),h($.$$.fragment,a),t=$t(a),h(s.$$.fragment,a),d=_(a," is the change in "),h(R.$$.fragment,a),T=$t(a),F=W(a,"BR",{}),h(i.$$.fragment,a),q=_(a," is the change in "),h(D.$$.fragment,a),M=_(a,`.
		`),L=W(a,"BR",{}),k=W(a,"BR",{}),G=_(a,`We calculate the arc length between two points by summing the euclidean distances of all the points along the function between them:
		`),h(r.$$.fragment,a),c=_(a,`
		This Riemann Sum can be converted to an integral:
		`),h(I.$$.fragment,a)},m(a,o){l(a,n,o),b($,a,o),l(a,t,o),b(s,a,o),l(a,d,o),b(R,a,o),l(a,T,o),l(a,F,o),b(i,a,o),l(a,q,o),b(D,a,o),l(a,M,o),l(a,L,o),l(a,k,o),l(a,G,o),b(r,a,o),l(a,c,o),b(I,a,o),N=!0},p(a,o){const X={};o&4&&(X.$$scope={dirty:o,ctx:a}),$.$set(X);const O={};o&4&&(O.$$scope={dirty:o,ctx:a}),s.$set(O);const Y={};o&4&&(Y.$$scope={dirty:o,ctx:a}),R.$set(Y);const j={};o&4&&(j.$$scope={dirty:o,ctx:a}),i.$set(j);const Z={};o&4&&(Z.$$scope={dirty:o,ctx:a}),D.$set(Z);const P={};o&4&&(P.$$scope={dirty:o,ctx:a}),r.$set(P);const y={};o&4&&(y.$$scope={dirty:o,ctx:a}),I.$set(y)},i(a){N||(w($.$$.fragment,a),w(s.$$.fragment,a),w(R.$$.fragment,a),w(i.$$.fragment,a),w(D.$$.fragment,a),w(r.$$.fragment,a),w(I.$$.fragment,a),N=!0)},o(a){v($.$$.fragment,a),v(s.$$.fragment,a),v(R.$$.fragment,a),v(i.$$.fragment,a),v(D.$$.fragment,a),v(r.$$.fragment,a),v(I.$$.fragment,a),N=!1},d(a){a&&(m(n),m(t),m(d),m(T),m(F),m(q),m(M),m(L),m(k),m(G),m(c)),x($,a),x(s,a),x(R,a),x(i,a),x(D,a),x(r,a),x(I,a)}}}function ee(u){let n=C`y = \frac{2}{3}x^{3/2}`+"",$;return{c(){$=p(n)},l(t){$=_(t,n)},m(t,s){l(t,$,s)},p:S,d(t){t&&m($)}}}function $e(u){let n=C`x = 0`+"",$;return{c(){$=p(n)},l(t){$=_(t,n)},m(t,s){l(t,$,s)},p:S,d(t){t&&m($)}}}function ne(u){let n=C`x = 3`+"",$;return{c(){$=p(n)},l(t){$=_(t,n)},m(t,s){l(t,$,s)},p:S,d(t){t&&m($)}}}function se(u){let n=C`
				\begin{align*}
				\frac{dy}{dx} &= \sqrt{x} \\
				L &= \int_{0}^{3} \sqrt{1 + (\sqrt{x})^2} \, dx \\
				&= \int_{0}^{3} \sqrt{1 + x} \, \, dx \\
				&= \left[ \frac{2}{3}(1 + x)^{3/2} \right]_0^3 \\
				&= \frac{2}{3}(8 - 1) = \frac{14}{3} \approx 4.67 \, \text{units}
				\end{align*}
			`+"",$;return{c(){$=p(n)},l(t){$=_(t,n)},m(t,s){l(t,$,s)},p:S,d(t){t&&m($)}}}function fe(u){let n=C`\frac{14}{3}`+"",$;return{c(){$=p(n)},l(t){$=_(t,n)},m(t,s){l(t,$,s)},p:S,d(t){t&&m($)}}}function le(u){let n=C`y = 3x + 2`+"",$;return{c(){$=p(n)},l(t){$=_(t,n)},m(t,s){l(t,$,s)},p:S,d(t){t&&m($)}}}function me(u){let n=C`x = 1`+"",$;return{c(){$=p(n)},l(t){$=_(t,n)},m(t,s){l(t,$,s)},p:S,d(t){t&&m($)}}}function ae(u){let n=C`x = 4`+"",$;return{c(){$=p(n)},l(t){$=_(t,n)},m(t,s){l(t,$,s)},p:S,d(t){t&&m($)}}}function ue(u){let n=C`
			\begin{align*}
			\frac{dy}{dx} &= 3 \\
			L &= \int_{1}^{4} \sqrt{1 + 3^2} \, dx \\
			&= \int_{1}^{4} \sqrt{10} \, dx \\
			&= \sqrt{10}(4 - 1) = 3\sqrt{10} \approx 9.49 \, \text{units}
			\end{align*}
		`+"",$;return{c(){$=p(n)},l(t){$=_(t,n)},m(t,s){l(t,$,s)},p:S,d(t){t&&m($)}}}function re(u){let n=C`(1, 5)`+"",$;return{c(){$=p(n)},l(t){$=_(t,n)},m(t,s){l(t,$,s)},p:S,d(t){t&&m($)}}}function ie(u){let n=C`(4, 14)`+"",$;return{c(){$=p(n)},l(t){$=_(t,n)},m(t,s){l(t,$,s)},p:S,d(t){t&&m($)}}}function pe(u){let n=C`
			\sqrt{(4-1)^2 + (14-5)^2} = \sqrt{9 + 81} = \sqrt{90} = 3\sqrt{10}
			`+"",$;return{c(){$=p(n)},l(t){$=_(t,n)},m(t,s){l(t,$,s)},p:S,d(t){t&&m($)}}}function _e(u){let n=C`y = \frac{1}{3}(x^2 + 2)^{3 / 2}`+"",$;return{c(){$=p(n)},l(t){$=_(t,n)},m(t,s){l(t,$,s)},p:S,d(t){t&&m($)}}}function oe(u){let n=C`x = 0`+"",$;return{c(){$=p(n)},l(t){$=_(t,n)},m(t,s){l(t,$,s)},p:S,d(t){t&&m($)}}}function ce(u){let n=C`x = 1`+"",$;return{c(){$=p(n)},l(t){$=_(t,n)},m(t,s){l(t,$,s)},p:S,d(t){t&&m($)}}}function ge(u){let n=C`
			\begin{align*}
			\frac{dy}{dx} &= x(x^2 + 2)^{1/2} \\
			L &= \int_{0}^{1} \sqrt{1 + \left(x\sqrt{x^2 + 2}\right)^2} \, dx \\
			&= \int_{0}^{1} \sqrt{1 + x^2(x^2 + 2)} \, dx \\
			&= \int_{0}^{1} \sqrt{x^4 + 2x^2 + 1} \, dx \\
			&= \int_{0}^{1} (x^2 + 1) \, dx \\
			&= \left[\frac{x^3}{3} + x\right]_0^1 = \frac{4}{3} \, \text{units}
			\end{align*}
		`+"",$;return{c(){$=p(n)},l(t){$=_(t,n)},m(t,s){l(t,$,s)},p:S,d(t){t&&m($)}}}function he(u){let n=C`\frac{4}{3}`+"",$;return{c(){$=p(n)},l(t){$=_(t,n)},m(t,s){l(t,$,s)},p:S,d(t){t&&m($)}}}function be(u){let n,$="Example 1: Explicit Function",t,s,d,R,T,F,i,q,D,M,L,k,G,r,c,I="Example 2: Linear Function Verification",N,a,o,X,O,Y,j,Z,P,y,A,nt,V,st,z,ft,lt,mt,tt,bt="Example 3: Simplifying Integral",at,ut,H,rt,J,it,K,pt,Q,_t,U,ot,ct;return d=new B({props:{$$slots:{default:[ee]},$$scope:{ctx:u}}}),T=new B({props:{$$slots:{default:[$e]},$$scope:{ctx:u}}}),i=new B({props:{$$slots:{default:[ne]},$$scope:{ctx:u}}}),D=new B({props:{displayMode:!0,$$slots:{default:[se]},$$scope:{ctx:u}}}),L=new B({props:{$$slots:{default:[fe]},$$scope:{ctx:u}}}),o=new B({props:{$$slots:{default:[le]},$$scope:{ctx:u}}}),O=new B({props:{$$slots:{default:[me]},$$scope:{ctx:u}}}),j=new B({props:{$$slots:{default:[ae]},$$scope:{ctx:u}}}),P=new B({props:{displayMode:!0,$$slots:{default:[ue]},$$scope:{ctx:u}}}),A=new B({props:{$$slots:{default:[re]},$$scope:{ctx:u}}}),V=new B({props:{$$slots:{default:[ie]},$$scope:{ctx:u}}}),z=new B({props:{displayMode:!0,$$slots:{default:[pe]},$$scope:{ctx:u}}}),H=new B({props:{$$slots:{default:[_e]},$$scope:{ctx:u}}}),J=new B({props:{$$slots:{default:[oe]},$$scope:{ctx:u}}}),K=new B({props:{$$slots:{default:[ce]},$$scope:{ctx:u}}}),Q=new B({props:{displayMode:!0,$$slots:{default:[ge]},$$scope:{ctx:u}}}),U=new B({props:{$$slots:{default:[he]},$$scope:{ctx:u}}}),{c(){n=E("strong"),n.textContent=$,t=E("br"),s=p(`
		Find the arc length of `),g(d.$$.fragment),R=p(" from "),g(T.$$.fragment),F=p(" to "),g(i.$$.fragment),q=p(`.
		`),g(D.$$.fragment),M=p(`
		The function travels a distance of `),g(L.$$.fragment),k=p(` units.

		`),G=E("br"),r=E("br"),c=E("strong"),c.textContent=I,N=E("br"),a=p(`
		Find the arc length of `),g(o.$$.fragment),X=p(" from "),g(O.$$.fragment),Y=p(" to "),g(j.$$.fragment),Z=p(`.
		`),g(P.$$.fragment),y=p(`
		Since this function is a straight line, we can check our work using the euclidean distance between
		`),g(A.$$.fragment),nt=p(" and "),g(V.$$.fragment),st=p(`:
		`),g(z.$$.fragment),ft=et(),lt=E("br"),mt=E("br"),tt=E("strong"),tt.textContent=bt,at=E("br"),ut=p(`
		Find the arc length of `),g(H.$$.fragment),rt=p(" from "),g(J.$$.fragment),it=p(` to
		`),g(K.$$.fragment),pt=p(`.
		`),g(Q.$$.fragment),_t=p(`
		The arc length is `),g(U.$$.fragment),ot=p(" units.")},l(e){n=W(e,"STRONG",{"data-svelte-h":!0}),gt(n)!=="svelte-356pft"&&(n.textContent=$),t=W(e,"BR",{}),s=_(e,`
		Find the arc length of `),h(d.$$.fragment,e),R=_(e," from "),h(T.$$.fragment,e),F=_(e," to "),h(i.$$.fragment,e),q=_(e,`.
		`),h(D.$$.fragment,e),M=_(e,`
		The function travels a distance of `),h(L.$$.fragment,e),k=_(e,` units.

		`),G=W(e,"BR",{}),r=W(e,"BR",{}),c=W(e,"STRONG",{"data-svelte-h":!0}),gt(c)!=="svelte-1iwyuim"&&(c.textContent=I),N=W(e,"BR",{}),a=_(e,`
		Find the arc length of `),h(o.$$.fragment,e),X=_(e," from "),h(O.$$.fragment,e),Y=_(e," to "),h(j.$$.fragment,e),Z=_(e,`.
		`),h(P.$$.fragment,e),y=_(e,`
		Since this function is a straight line, we can check our work using the euclidean distance between
		`),h(A.$$.fragment,e),nt=_(e," and "),h(V.$$.fragment,e),st=_(e,`:
		`),h(z.$$.fragment,e),ft=$t(e),lt=W(e,"BR",{}),mt=W(e,"BR",{}),tt=W(e,"STRONG",{"data-svelte-h":!0}),gt(tt)!=="svelte-pbvjmo"&&(tt.textContent=bt),at=W(e,"BR",{}),ut=_(e,`
		Find the arc length of `),h(H.$$.fragment,e),rt=_(e," from "),h(J.$$.fragment,e),it=_(e,` to
		`),h(K.$$.fragment,e),pt=_(e,`.
		`),h(Q.$$.fragment,e),_t=_(e,`
		The arc length is `),h(U.$$.fragment,e),ot=_(e," units.")},m(e,f){l(e,n,f),l(e,t,f),l(e,s,f),b(d,e,f),l(e,R,f),b(T,e,f),l(e,F,f),b(i,e,f),l(e,q,f),b(D,e,f),l(e,M,f),b(L,e,f),l(e,k,f),l(e,G,f),l(e,r,f),l(e,c,f),l(e,N,f),l(e,a,f),b(o,e,f),l(e,X,f),b(O,e,f),l(e,Y,f),b(j,e,f),l(e,Z,f),b(P,e,f),l(e,y,f),b(A,e,f),l(e,nt,f),b(V,e,f),l(e,st,f),b(z,e,f),l(e,ft,f),l(e,lt,f),l(e,mt,f),l(e,tt,f),l(e,at,f),l(e,ut,f),b(H,e,f),l(e,rt,f),b(J,e,f),l(e,it,f),b(K,e,f),l(e,pt,f),b(Q,e,f),l(e,_t,f),b(U,e,f),l(e,ot,f),ct=!0},p(e,f){const wt={};f&4&&(wt.$$scope={dirty:f,ctx:e}),d.$set(wt);const vt={};f&4&&(vt.$$scope={dirty:f,ctx:e}),T.$set(vt);const xt={};f&4&&(xt.$$scope={dirty:f,ctx:e}),i.$set(xt);const dt={};f&4&&(dt.$$scope={dirty:f,ctx:e}),D.$set(dt);const qt={};f&4&&(qt.$$scope={dirty:f,ctx:e}),L.$set(qt);const Rt={};f&4&&(Rt.$$scope={dirty:f,ctx:e}),o.$set(Rt);const Tt={};f&4&&(Tt.$$scope={dirty:f,ctx:e}),O.$set(Tt);const Bt={};f&4&&(Bt.$$scope={dirty:f,ctx:e}),j.$set(Bt);const St={};f&4&&(St.$$scope={dirty:f,ctx:e}),P.$set(St);const Ct={};f&4&&(Ct.$$scope={dirty:f,ctx:e}),A.$set(Ct);const Dt={};f&4&&(Dt.$$scope={dirty:f,ctx:e}),V.$set(Dt);const Lt={};f&4&&(Lt.$$scope={dirty:f,ctx:e}),z.$set(Lt);const Ft={};f&4&&(Ft.$$scope={dirty:f,ctx:e}),H.$set(Ft);const Mt={};f&4&&(Mt.$$scope={dirty:f,ctx:e}),J.$set(Mt);const kt={};f&4&&(kt.$$scope={dirty:f,ctx:e}),K.$set(kt);const Et={};f&4&&(Et.$$scope={dirty:f,ctx:e}),Q.$set(Et);const Wt={};f&4&&(Wt.$$scope={dirty:f,ctx:e}),U.$set(Wt)},i(e){ct||(w(d.$$.fragment,e),w(T.$$.fragment,e),w(i.$$.fragment,e),w(D.$$.fragment,e),w(L.$$.fragment,e),w(o.$$.fragment,e),w(O.$$.fragment,e),w(j.$$.fragment,e),w(P.$$.fragment,e),w(A.$$.fragment,e),w(V.$$.fragment,e),w(z.$$.fragment,e),w(H.$$.fragment,e),w(J.$$.fragment,e),w(K.$$.fragment,e),w(Q.$$.fragment,e),w(U.$$.fragment,e),ct=!0)},o(e){v(d.$$.fragment,e),v(T.$$.fragment,e),v(i.$$.fragment,e),v(D.$$.fragment,e),v(L.$$.fragment,e),v(o.$$.fragment,e),v(O.$$.fragment,e),v(j.$$.fragment,e),v(P.$$.fragment,e),v(A.$$.fragment,e),v(V.$$.fragment,e),v(z.$$.fragment,e),v(H.$$.fragment,e),v(J.$$.fragment,e),v(K.$$.fragment,e),v(Q.$$.fragment,e),v(U.$$.fragment,e),ct=!1},d(e){e&&(m(n),m(t),m(s),m(R),m(F),m(q),m(M),m(k),m(G),m(r),m(c),m(N),m(a),m(X),m(Y),m(Z),m(y),m(nt),m(st),m(ft),m(lt),m(mt),m(tt),m(at),m(ut),m(rt),m(it),m(pt),m(_t),m(ot)),x(d,e),x(T,e),x(i,e),x(D,e),x(L,e),x(o,e),x(O,e),x(j,e),x(P,e),x(A,e),x(V,e),x(z,e),x(H,e),x(J,e),x(K,e),x(Q,e),x(U,e)}}}function we(u){let n,$,t,s,d,R,T,F;return n=new jt({props:{heading:"Arc Lengths"}}),t=new ht({props:{heading:"Introduction",$$slots:{default:[Jt]},$$scope:{ctx:u}}}),d=new ht({props:{heading:"Calculation",$$slots:{default:[te]},$$scope:{ctx:u}}}),T=new ht({props:{heading:"Examples",$$slots:{default:[be]},$$scope:{ctx:u}}}),{c(){g(n.$$.fragment),$=et(),g(t.$$.fragment),s=et(),g(d.$$.fragment),R=et(),g(T.$$.fragment)},l(i){h(n.$$.fragment,i),$=$t(i),h(t.$$.fragment,i),s=$t(i),h(d.$$.fragment,i),R=$t(i),h(T.$$.fragment,i)},m(i,q){b(n,i,q),l(i,$,q),b(t,i,q),l(i,s,q),b(d,i,q),l(i,R,q),b(T,i,q),F=!0},p(i,q){const D={};q&4&&(D.$$scope={dirty:q,ctx:i}),t.$set(D);const M={};q&4&&(M.$$scope={dirty:q,ctx:i}),d.$set(M);const L={};q&4&&(L.$$scope={dirty:q,ctx:i}),T.$set(L)},i(i){F||(w(n.$$.fragment,i),w(t.$$.fragment,i),w(d.$$.fragment,i),w(T.$$.fragment,i),F=!0)},o(i){v(n.$$.fragment,i),v(t.$$.fragment,i),v(d.$$.fragment,i),v(T.$$.fragment,i),F=!1},d(i){i&&(m($),m(s),m(R)),x(n,i),x(t,i),x(d,i),x(T,i)}}}function ve(u){let n,$;return n=new Ot({props:{$$slots:{default:[we]},$$scope:{ctx:u}}}),{c(){g(n.$$.fragment)},l(t){h(n.$$.fragment,t)},m(t,s){b(n,t,s),$=!0},p(t,[s]){const d={};s&4&&(d.$$scope={dirty:s,ctx:t}),n.$set(d)},i(t){$||(w(n.$$.fragment,t),$=!0)},o(t){v(n.$$.fragment,t),$=!1},d(t){x(n,t)}}}function C(u){return u.raw[0]}const xe=u=>u**2;function de(u){return[t=>t>=-1&&t<=2?t**2:void 0,t=>t>=-1&&t<=2?t+2:void 0]}class De extends It{constructor(n){super(),Nt(this,n,de,ve,Gt,{})}}export{De as component};
