import{s as dt,n as E}from"../chunks/CVhLxNSM.js";import{S as Rt,i as Bt,c as b,b as v,m as w,t as d,a as R,d as B,s as lt,e as at,f,g as l,h as m,j as T,k as i,l as k,n as ft}from"../chunks/DvSB8R1X.js";import{L as Ct,S as vt,M as x}from"../chunks/ByTZAYyp.js";import{L as Tt}from"../chunks/xLaKUPuM.js";import{I as wt}from"../chunks/D3W7TYDU.js";function kt(o){let n;return{c(){n=m("f(b) - f(a)")},l(t){n=i(t,"f(b) - f(a)")},m(t,e){f(t,n,e)},d(t){t&&l(n)}}}function xt(o){let n;return{c(){n=m("f")},l(t){n=i(t,"f")},m(t,e){f(t,n,e)},d(t){t&&l(n)}}}function St(o){let n;return{c(){n=m("[a,b]")},l(t){n=i(t,"[a,b]")},m(t,e){f(t,n,e)},d(t){t&&l(n)}}}function Ft(o){let n;return{c(){n=m("f'")},l(t){n=i(t,"f'")},m(t,e){f(t,n,e)},d(t){t&&l(n)}}}function Mt(o){let n;return{c(){n=m("[a,b]")},l(t){n=i(t,"[a,b]")},m(t,e){f(t,n,e)},d(t){t&&l(n)}}}function At(o){let n;return{c(){n=m("f")},l(t){n=i(t,"f")},m(t,e){f(t,n,e)},d(t){t&&l(n)}}}function Pt(o){let n;return{c(){n=m("[a,b]")},l(t){n=i(t,"[a,b]")},m(t,e){f(t,n,e)},d(t){t&&l(n)}}}function qt(o){let n=`
			f(b) - f(a) = \\int_{a}^{b} f'(t) \\, dt
		`,t;return{c(){t=m(n)},l(e){t=i(e,n)},m(e,r){f(e,t,r)},p:E,d(e){e&&l(t)}}}function It(o){let n=`
			\\int_{a}^{b} |f'(t)| \\, dt
		`,t;return{c(){t=m(n)},l(e){t=i(e,n)},m(e,r){f(e,t,r)},p:E,d(e){e&&l(t)}}}function Et(o){let n,t,e,r,g,C,p;return{c(){n=m(`Find each point where the function changes sign on the domain.
			`),t=T("br"),e=m(`Separate the integral into intervals so that the function does not change sign within any individual integral.
			`),r=T("br"),g=m(`Calculate the integrals.
			`),C=T("br"),p=m("Sum the absolute values of the integrals.")},l(_){n=i(_,`Find each point where the function changes sign on the domain.
			`),t=k(_,"BR",{}),e=i(_,`Separate the integral into intervals so that the function does not change sign within any individual integral.
			`),r=k(_,"BR",{}),g=i(_,`Calculate the integrals.
			`),C=k(_,"BR",{}),p=i(_,"Sum the absolute values of the integrals.")},m(_,c){f(_,n,c),f(_,t,c),f(_,e,c),f(_,r,c),f(_,g,c),f(_,C,c),f(_,p,c)},p:E,d(_){_&&(l(n),l(t),l(e),l(r),l(g),l(C),l(p))}}}function Lt(o){let n,t,e,r,g,C,p,_,c,h,L,S,D,F,j,M,z,A,H,P,J,K,q,G,V,I,Q;return n=new x({props:{$$slots:{default:[kt]},$$scope:{ctx:o}}}),e=new x({props:{$$slots:{default:[xt]},$$scope:{ctx:o}}}),g=new x({props:{$$slots:{default:[St]},$$scope:{ctx:o}}}),h=new x({props:{$$slots:{default:[Ft]},$$scope:{ctx:o}}}),S=new x({props:{$$slots:{default:[Mt]},$$scope:{ctx:o}}}),F=new x({props:{$$slots:{default:[At]},$$scope:{ctx:o}}}),M=new x({props:{$$slots:{default:[Pt]},$$scope:{ctx:o}}}),A=new x({props:{displayMode:!0,$$slots:{default:[qt]},$$scope:{ctx:o}}}),q=new x({props:{displayMode:!0,$$slots:{default:[It]},$$scope:{ctx:o}}}),I=new wt({props:{$$slots:{default:[Et]},$$scope:{ctx:o}}}),{c(){b(n.$$.fragment),t=m(" is the accumulated change of "),b(e.$$.fragment),r=m(" on "),b(g.$$.fragment),C=m(`.
		`),p=T("br"),_=T("br"),c=m("Therefore, the integral of a derivative "),b(h.$$.fragment),L=m(" on "),b(S.$$.fragment),D=m(" is the accumulated change of "),b(F.$$.fragment),j=m(" on "),b(M.$$.fragment),z=m(`.
		`),b(A.$$.fragment),H=m(`
		The equation above cancels out accumulated change of different signs. If the function increases by 5 units and decreases by 3, the net change is 2 units.

		`),P=T("br"),J=T("br"),K=m(`For the total change of a function, which sums all changes regardless of sign, we use:
		`),b(q.$$.fragment),G=m(`
		Calculating the integral of a function's absolute value involves the following steps:
		`),V=T("br"),b(I.$$.fragment)},l(s){v(n.$$.fragment,s),t=i(s," is the accumulated change of "),v(e.$$.fragment,s),r=i(s," on "),v(g.$$.fragment,s),C=i(s,`.
		`),p=k(s,"BR",{}),_=k(s,"BR",{}),c=i(s,"Therefore, the integral of a derivative "),v(h.$$.fragment,s),L=i(s," on "),v(S.$$.fragment,s),D=i(s," is the accumulated change of "),v(F.$$.fragment,s),j=i(s," on "),v(M.$$.fragment,s),z=i(s,`.
		`),v(A.$$.fragment,s),H=i(s,`
		The equation above cancels out accumulated change of different signs. If the function increases by 5 units and decreases by 3, the net change is 2 units.

		`),P=k(s,"BR",{}),J=k(s,"BR",{}),K=i(s,`For the total change of a function, which sums all changes regardless of sign, we use:
		`),v(q.$$.fragment,s),G=i(s,`
		Calculating the integral of a function's absolute value involves the following steps:
		`),V=k(s,"BR",{}),v(I.$$.fragment,s)},m(s,u){w(n,s,u),f(s,t,u),w(e,s,u),f(s,r,u),w(g,s,u),f(s,C,u),f(s,p,u),f(s,_,u),f(s,c,u),w(h,s,u),f(s,L,u),w(S,s,u),f(s,D,u),w(F,s,u),f(s,j,u),w(M,s,u),f(s,z,u),w(A,s,u),f(s,H,u),f(s,P,u),f(s,J,u),f(s,K,u),w(q,s,u),f(s,G,u),f(s,V,u),w(I,s,u),Q=!0},p(s,u){const N={};u&1&&(N.$$scope={dirty:u,ctx:s}),n.$set(N);const X={};u&1&&(X.$$scope={dirty:u,ctx:s}),e.$set(X);const Y={};u&1&&(Y.$$scope={dirty:u,ctx:s}),g.$set(Y);const Z={};u&1&&(Z.$$scope={dirty:u,ctx:s}),h.$set(Z);const W={};u&1&&(W.$$scope={dirty:u,ctx:s}),S.$set(W);const nt={};u&1&&(nt.$$scope={dirty:u,ctx:s}),F.$set(nt);const y={};u&1&&(y.$$scope={dirty:u,ctx:s}),M.$set(y);const tt={};u&1&&(tt.$$scope={dirty:u,ctx:s}),A.$set(tt);const O={};u&1&&(O.$$scope={dirty:u,ctx:s}),q.$set(O);const et={};u&1&&(et.$$scope={dirty:u,ctx:s}),I.$set(et)},i(s){Q||(d(n.$$.fragment,s),d(e.$$.fragment,s),d(g.$$.fragment,s),d(h.$$.fragment,s),d(S.$$.fragment,s),d(F.$$.fragment,s),d(M.$$.fragment,s),d(A.$$.fragment,s),d(q.$$.fragment,s),d(I.$$.fragment,s),Q=!0)},o(s){R(n.$$.fragment,s),R(e.$$.fragment,s),R(g.$$.fragment,s),R(h.$$.fragment,s),R(S.$$.fragment,s),R(F.$$.fragment,s),R(M.$$.fragment,s),R(A.$$.fragment,s),R(q.$$.fragment,s),R(I.$$.fragment,s),Q=!1},d(s){s&&(l(t),l(r),l(C),l(p),l(_),l(c),l(L),l(D),l(j),l(z),l(H),l(P),l(J),l(K),l(G),l(V)),B(n,s),B(e,s),B(g,s),B(h,s),B(S,s),B(F,s),B(M,s),B(A,s),B(q,s),B(I,s)}}}function Gt(o){let n="v(t) = 3t^2 - 12t + 9 \\, {m/s}",t;return{c(){t=m(n)},l(e){t=i(e,n)},m(e,r){f(e,t,r)},p:E,d(e){e&&l(t)}}}function Nt(o){let n="[0, 4]",t;return{c(){t=m(n)},l(e){t=i(e,n)},m(e,r){f(e,t,r)},p:E,d(e){e&&l(t)}}}function Ot(o){let n="t = 0",t;return{c(){t=m(n)},l(e){t=i(e,n)},m(e,r){f(e,t,r)},p:E,d(e){e&&l(t)}}}function Wt(o){let n="t = 4",t;return{c(){t=m(n)},l(e){t=i(e,n)},m(e,r){f(e,t,r)},p:E,d(e){e&&l(t)}}}function Dt(o){let n,t,e,r,g,C,p,_;return t=new x({props:{$$slots:{default:[Ot]},$$scope:{ctx:o}}}),r=new x({props:{$$slots:{default:[Wt]},$$scope:{ctx:o}}}),{c(){n=m("The accumulated change of the rocket's position from "),b(t.$$.fragment),e=m(" to "),b(r.$$.fragment),g=m(`.
			`),C=T("br"),p=m("The total distance travelled by the rocket.")},l(c){n=i(c,"The accumulated change of the rocket's position from "),v(t.$$.fragment,c),e=i(c," to "),v(r.$$.fragment,c),g=i(c,`.
			`),C=k(c,"BR",{}),p=i(c,"The total distance travelled by the rocket.")},m(c,h){f(c,n,h),w(t,c,h),f(c,e,h),w(r,c,h),f(c,g,h),f(c,C,h),f(c,p,h),_=!0},p(c,h){const L={};h&1&&(L.$$scope={dirty:h,ctx:c}),t.$set(L);const S={};h&1&&(S.$$scope={dirty:h,ctx:c}),r.$set(S)},i(c){_||(d(t.$$.fragment,c),d(r.$$.fragment,c),_=!0)},o(c){R(t.$$.fragment,c),R(r.$$.fragment,c),_=!1},d(c){c&&(l(n),l(e),l(g),l(C),l(p)),B(t,c),B(r,c)}}}function jt(o){let n=`
			\\begin{align*}
			\\int_{0}^{4} (3t^2 - 12t + 9) \\, dt &= \\left[ t^3 - 6t^2 + 9t \\right]_0^4 \\\\
			&= (64 - 96 + 36) - 0 \\\\
			&= 4 \\, \\text{m} \\\\
			\\end{align*}
			`,t;return{c(){t=m(n)},l(e){t=i(e,n)},m(e,r){f(e,t,r)},p:E,d(e){e&&l(t)}}}function zt(o){let n=`
			\\text{When } [t = 1 \\text{ or } t=3] \\Rightarrow [v(t) = 0] \\,  \\\\ \\text{} \\\\
			\\begin{align*}
			\\int_{0}^{4} |3t^2 - 12t + 9| \\, dt &= |\\int_{0}^{1} v(t) \\, dt| + |\\int_{1}^{3} v(t) \\, dt| + |\\int_{3}^{4} v(t) \\, dt| \\\\ \\text{} \\\\
			&= |4| + |-4| + |4| = 12 \\, \\text{m}
			\\end{align*}
		`,t;return{c(){t=m(n)},l(e){t=i(e,n)},m(e,r){f(e,t,r)},p:E,d(e){e&&l(t)}}}function Ht(o){let n;return{c(){n=m("4m")},l(t){n=i(t,"4m")},m(t,e){f(t,n,e)},d(t){t&&l(n)}}}function Jt(o){let n;return{c(){n=m("12m")},l(t){n=i(t,"12m")},m(t,e){f(t,n,e)},d(t){t&&l(n)}}}function Kt(o){let n="P'(t) = 200e^{0.2t}",t;return{c(){t=m(n)},l(e){t=i(e,n)},m(e,r){f(e,t,r)},p:E,d(e){e&&l(t)}}}function Qt(o){let n=`
			\\begin{align*}
			\\Delta P &= \\int_{5}^{10} 200e^{0.2t} \\, dt \\\\
			&= \\left[ 1000e^{0.2t} \\right]_5^{10} \\\\
			&= 1000(e^{2} - e^{1}) \\\\
			&= 1000(7.389 - 2.718) \\\\
			&= 4671 \\, \\text{bacteria}
			\\end{align*}
		`,t;return{c(){t=m(n)},l(e){t=i(e,n)},m(e,r){f(e,t,r)},p:E,d(e){e&&l(t)}}}function Ut(o){let n="C'(x) = 50\\sqrt{x} + 100",t;return{c(){t=m(n)},l(e){t=i(e,n)},m(e,r){f(e,t,r)},p:E,d(e){e&&l(t)}}}function Vt(o){let n=`
			\\begin{align*}
			\\Delta C &= \\int_{16}^{25} (50x^{1/2} + 100) \\, dx \\\\
			&= \\left[ \\frac{100}{3}x^{3/2} + 100x \\right]_{16}^{25} \\\\
			&= \\left(\\frac{100}{3}(125) + 2500\\right) - \\left(\\frac{100}{3}(64) + 1600\\right) \\\\
			&= \\left(4166.67 + 2500\\right) - \\left(2133.33 + 1600\\right) \\approx \\$2933.34
			\\end{align*}
		`,t;return{c(){t=m(n)},l(e){t=i(e,n)},m(e,r){f(e,t,r)},p:E,d(e){e&&l(t)}}}function Xt(o){let n,t="Example 1: Rocket Motion Analysis",e,r,g,C,p,_,c,h,L,S,D,F,j,M,z,A,H,P,J,K,q,G,V="Example 2: Bacterial Population",I,Q,s,u,N,X,Y,Z,W,nt="Example 3: Cost of Production",y,tt,O,et,U,$t,st;return g=new x({props:{$$slots:{default:[Gt]},$$scope:{ctx:o}}}),p=new x({props:{$$slots:{default:[Nt]},$$scope:{ctx:o}}}),S=new wt({props:{$$slots:{default:[Dt]},$$scope:{ctx:o}}}),F=new x({props:{displayMode:!0,$$slots:{default:[jt]},$$scope:{ctx:o}}}),M=new x({props:{displayMode:!0,$$slots:{default:[zt]},$$scope:{ctx:o}}}),A=new x({props:{$$slots:{default:[Ht]},$$scope:{ctx:o}}}),P=new x({props:{$$slots:{default:[Jt]},$$scope:{ctx:o}}}),s=new x({props:{$$slots:{default:[Kt]},$$scope:{ctx:o}}}),N=new x({props:{displayMode:!0,$$slots:{default:[Qt]},$$scope:{ctx:o}}}),O=new x({props:{$$slots:{default:[Ut]},$$scope:{ctx:o}}}),U=new x({props:{displayMode:!0,$$slots:{default:[Vt]},$$scope:{ctx:o}}}),{c(){n=T("strong"),n.textContent=t,e=T("br"),r=m(`
		A rocket's velocity is `),b(g.$$.fragment),C=m(" on "),b(p.$$.fragment),_=m(`.
		`),c=T("br"),h=m(`Find
		`),L=T("br"),b(S.$$.fragment),D=lt(),b(F.$$.fragment),j=m(`
		The rocket ended 4m from its start point.
		`),b(M.$$.fragment),z=m(`
		While the rocket ended `),b(A.$$.fragment),H=m(" from its start point, it travelled "),b(P.$$.fragment),J=m(` total.

		
		`),K=T("br"),q=T("br"),G=T("strong"),G.textContent=V,I=T("br"),Q=m(`
		A bacteria colony is growing at `),b(s.$$.fragment),u=m(` bacteria/day. Find the population increase from
		day 5 to day 10.
		`),b(N.$$.fragment),X=m(`
		There were 4671 more bacteria on day 10 than on day 5.

		
		`),Y=T("br"),Z=T("br"),W=T("strong"),W.textContent=nt,y=T("br"),tt=m(`
		A factory's costs increase as they produce more units at the rate of `),b(O.$$.fragment),et=m(` dollars/unit. Find the cost
		increase from producing 16 to 25 units.
		`),b(U.$$.fragment),$t=m(`
		The cost of production increased by $2933.34 when the factory increased its production from 16 to 25 units.`)},l($){n=k($,"STRONG",{"data-svelte-h":!0}),ft(n)!=="svelte-1w49gpz"&&(n.textContent=t),e=k($,"BR",{}),r=i($,`
		A rocket's velocity is `),v(g.$$.fragment,$),C=i($," on "),v(p.$$.fragment,$),_=i($,`.
		`),c=k($,"BR",{}),h=i($,`Find
		`),L=k($,"BR",{}),v(S.$$.fragment,$),D=at($),v(F.$$.fragment,$),j=i($,`
		The rocket ended 4m from its start point.
		`),v(M.$$.fragment,$),z=i($,`
		While the rocket ended `),v(A.$$.fragment,$),H=i($," from its start point, it travelled "),v(P.$$.fragment,$),J=i($,` total.

		
		`),K=k($,"BR",{}),q=k($,"BR",{}),G=k($,"STRONG",{"data-svelte-h":!0}),ft(G)!=="svelte-lg0rb4"&&(G.textContent=V),I=k($,"BR",{}),Q=i($,`
		A bacteria colony is growing at `),v(s.$$.fragment,$),u=i($,` bacteria/day. Find the population increase from
		day 5 to day 10.
		`),v(N.$$.fragment,$),X=i($,`
		There were 4671 more bacteria on day 10 than on day 5.

		
		`),Y=k($,"BR",{}),Z=k($,"BR",{}),W=k($,"STRONG",{"data-svelte-h":!0}),ft(W)!=="svelte-1oc50oq"&&(W.textContent=nt),y=k($,"BR",{}),tt=i($,`
		A factory's costs increase as they produce more units at the rate of `),v(O.$$.fragment,$),et=i($,` dollars/unit. Find the cost
		increase from producing 16 to 25 units.
		`),v(U.$$.fragment,$),$t=i($,`
		The cost of production increased by $2933.34 when the factory increased its production from 16 to 25 units.`)},m($,a){f($,n,a),f($,e,a),f($,r,a),w(g,$,a),f($,C,a),w(p,$,a),f($,_,a),f($,c,a),f($,h,a),f($,L,a),w(S,$,a),f($,D,a),w(F,$,a),f($,j,a),w(M,$,a),f($,z,a),w(A,$,a),f($,H,a),w(P,$,a),f($,J,a),f($,K,a),f($,q,a),f($,G,a),f($,I,a),f($,Q,a),w(s,$,a),f($,u,a),w(N,$,a),f($,X,a),f($,Y,a),f($,Z,a),f($,W,a),f($,y,a),f($,tt,a),w(O,$,a),f($,et,a),w(U,$,a),f($,$t,a),st=!0},p($,a){const rt={};a&1&&(rt.$$scope={dirty:a,ctx:$}),g.$set(rt);const mt={};a&1&&(mt.$$scope={dirty:a,ctx:$}),p.$set(mt);const it={};a&1&&(it.$$scope={dirty:a,ctx:$}),S.$set(it);const ot={};a&1&&(ot.$$scope={dirty:a,ctx:$}),F.$set(ot);const ut={};a&1&&(ut.$$scope={dirty:a,ctx:$}),M.$set(ut);const pt={};a&1&&(pt.$$scope={dirty:a,ctx:$}),A.$set(pt);const ct={};a&1&&(ct.$$scope={dirty:a,ctx:$}),P.$set(ct);const _t={};a&1&&(_t.$$scope={dirty:a,ctx:$}),s.$set(_t);const gt={};a&1&&(gt.$$scope={dirty:a,ctx:$}),N.$set(gt);const ht={};a&1&&(ht.$$scope={dirty:a,ctx:$}),O.$set(ht);const bt={};a&1&&(bt.$$scope={dirty:a,ctx:$}),U.$set(bt)},i($){st||(d(g.$$.fragment,$),d(p.$$.fragment,$),d(S.$$.fragment,$),d(F.$$.fragment,$),d(M.$$.fragment,$),d(A.$$.fragment,$),d(P.$$.fragment,$),d(s.$$.fragment,$),d(N.$$.fragment,$),d(O.$$.fragment,$),d(U.$$.fragment,$),st=!0)},o($){R(g.$$.fragment,$),R(p.$$.fragment,$),R(S.$$.fragment,$),R(F.$$.fragment,$),R(M.$$.fragment,$),R(A.$$.fragment,$),R(P.$$.fragment,$),R(s.$$.fragment,$),R(N.$$.fragment,$),R(O.$$.fragment,$),R(U.$$.fragment,$),st=!1},d($){$&&(l(n),l(e),l(r),l(C),l(_),l(c),l(h),l(L),l(D),l(j),l(z),l(H),l(J),l(K),l(q),l(G),l(I),l(Q),l(u),l(X),l(Y),l(Z),l(W),l(y),l(tt),l(et),l($t)),B(g,$),B(p,$),B(S,$),B(F,$),B(M,$),B(A,$),B(P,$),B(s,$),B(N,$),B(O,$),B(U,$)}}}function Yt(o){let n,t,e,r,g,C;return n=new Tt({props:{heading:"Accumulative Change"}}),e=new vt({props:{heading:"Introduction",$$slots:{default:[Lt]},$$scope:{ctx:o}}}),g=new vt({props:{heading:"Examples",$$slots:{default:[Xt]},$$scope:{ctx:o}}}),{c(){b(n.$$.fragment),t=lt(),b(e.$$.fragment),r=lt(),b(g.$$.fragment)},l(p){v(n.$$.fragment,p),t=at(p),v(e.$$.fragment,p),r=at(p),v(g.$$.fragment,p)},m(p,_){w(n,p,_),f(p,t,_),w(e,p,_),f(p,r,_),w(g,p,_),C=!0},p(p,_){const c={};_&1&&(c.$$scope={dirty:_,ctx:p}),e.$set(c);const h={};_&1&&(h.$$scope={dirty:_,ctx:p}),g.$set(h)},i(p){C||(d(n.$$.fragment,p),d(e.$$.fragment,p),d(g.$$.fragment,p),C=!0)},o(p){R(n.$$.fragment,p),R(e.$$.fragment,p),R(g.$$.fragment,p),C=!1},d(p){p&&(l(t),l(r)),B(n,p),B(e,p),B(g,p)}}}function Zt(o){let n,t;return n=new Ct({props:{$$slots:{default:[Yt]},$$scope:{ctx:o}}}),{c(){b(n.$$.fragment)},l(e){v(n.$$.fragment,e)},m(e,r){w(n,e,r),t=!0},p(e,[r]){const g={};r&1&&(g.$$scope={dirty:r,ctx:e}),n.$set(g)},i(e){t||(d(n.$$.fragment,e),t=!0)},o(e){R(n.$$.fragment,e),t=!1},d(e){B(n,e)}}}class se extends Rt{constructor(n){super(),Bt(this,n,null,Zt,dt,{})}}export{se as component};
