import{s as Tt,n as H}from"../chunks/CVhLxNSM.js";import{S as kt,i as St,c as v,b as R,m as B,t as F,a as T,d as k,s as Y,e as Z,f as n,g as f,h as p,j as S,k as c,l as A,n as Bt}from"../chunks/DvSB8R1X.js";import{L as At,S as at,M as D}from"../chunks/ByTZAYyp.js";import{L as qt}from"../chunks/xLaKUPuM.js";import{I as Ft}from"../chunks/D3W7TYDU.js";import{D as pt}from"../chunks/CkoZ7XGi.js";import{s as ct}from"../chunks/NvOCtOX1.js";function Ct(r){let s,t,e;return{c(){s=p(`The length of the solid is the length of the domain of the function.
			`),t=S("br"),e=p("The cross-section of the solid is derived from the function.")},l(m){s=c(m,`The length of the solid is the length of the domain of the function.
			`),t=A(m,"BR",{}),e=c(m,"The cross-section of the solid is derived from the function.")},m(m,h){n(m,s,h),n(m,t,h),n(m,e,h)},p:H,d(m){m&&(f(s),f(t),f(e))}}}function Mt(r){let s,t,e;return{c(){s=p(`Find the volume of every cross-section.
			`),t=S("br"),e=p("Sum the volumes of all the cross-sections.")},l(m){s=c(m,`Find the volume of every cross-section.
			`),t=A(m,"BR",{}),e=c(m,"Sum the volumes of all the cross-sections.")},m(m,h){n(m,s,h),n(m,t,h),n(m,e,h)},p:H,d(m){m&&(f(s),f(t),f(e))}}}function Vt(r){let s=`
				\\begin{align*}
					\\text{Area} &= \\sum_{i=1}^{n} w \\cdot h \\\\
					&= \\sum_{i=1}^{n} f(x_i) \\Delta x \\\\
					&= \\int_{a}^{b} f(x) \\, dx
					\\end{align*}
			`,t;return{c(){t=p(s)},l(e){t=c(e,s)},m(e,m){n(e,t,m)},p:H,d(e){e&&f(t)}}}function Dt(r){let s;return{c(){s=p("dx")},l(t){s=c(t,"dx")},m(t,e){n(t,s,e)},d(t){t&&f(s)}}}function Pt(r){let s=`
				\\begin{align*}
					\\text{Volume} &= \\sum_{i=1}^{n} A \\cdot d \\\\
					&= \\sum_{i=1}^{n} A(x_i) \\Delta x \\\\
					&= \\int_{a}^{b} A(x) \\, dx
				\\end{align*}
			`,t;return{c(){t=p(s)},l(e){t=c(e,s)},m(e,m){n(e,t,m)},p:H,d(e){e&&f(t)}}}function Lt(r){let s;return{c(){s=p("dx")},l(t){s=c(t,"dx")},m(t,e){n(t,s,e)},d(t){t&&f(s)}}}function Nt(r){let s;return{c(){s=p("A(x_i)")},l(t){s=c(t,"A(x_i)")},m(t,e){n(t,s,e)},d(t){t&&f(s)}}}function zt(r){let s;return{c(){s=p("A")},l(t){s=c(t,"A")},m(t,e){n(t,s,e)},d(t){t&&f(s)}}}function Et(r){let s;return{c(){s=p("f")},l(t){s=c(t,"f")},m(t,e){n(t,s,e)},d(t){t&&f(s)}}}function It(r){let s,t,e,m,h,q,g,C,w,M,o,x,u,d,V,L,P,N,i,b,z,J,E,K,G,I,O,W,j,y,tt,l,_,$t,Q,nt,U,ft,lt,X,it,mt,et,ot,st,rt,ut;return q=new Ft({props:{$$slots:{default:[Ct]},$$scope:{ctx:r}}}),N=new Ft({props:{$$slots:{default:[Mt]},$$scope:{ctx:r}}}),I=new D({props:{displayMode:!0,$$slots:{default:[Vt]},$$scope:{ctx:r}}}),W=new D({props:{$$slots:{default:[Dt]},$$scope:{ctx:r}}}),Q=new D({props:{displayMode:!0,$$slots:{default:[Pt]},$$scope:{ctx:r}}}),U=new D({props:{$$slots:{default:[Lt]},$$scope:{ctx:r}}}),X=new D({props:{$$slots:{default:[Nt]},$$scope:{ctx:r}}}),et=new D({props:{$$slots:{default:[zt]},$$scope:{ctx:r}}}),st=new D({props:{$$slots:{default:[Et]},$$scope:{ctx:r}}}),{c(){s=p(`The next four lessons are on finding the volumes of solids which are created by manipulating a function.
		`),t=S("br"),e=S("br"),m=p(`All of the solids have these characteristics in common:
		`),h=S("br"),v(q.$$.fragment),g=Y(),C=S("br"),w=S("br"),M=p(`A cross-section of a solid is the shape formed by
		slicing it perpendicular to the axis of its inputs.

		`),o=S("br"),x=S("br"),u=p(`For example, if we take a pyramid and slice it horizontally, the cross-section is a
		triangle. No matter where we slice it, the cross-section is always a triangle.

		`),d=S("br"),V=S("br"),L=p(`For all of the solids in these lessons, we will be using the same method to find the volume:
		`),P=S("br"),v(N.$$.fragment),i=Y(),b=S("br"),z=S("br"),J=p(`This is another Riemann sum, but in three dimensions instead of two.
		`),E=S("br"),K=S("br"),G=p(`With Riemann sums for area, the formula was:
		`),v(I.$$.fragment),O=Y(),v(W.$$.fragment),j=p(` was the width of the rectangle.
		`),y=S("br"),tt=p(`f(x_i) was the height of the rectangle.
		`),l=S("br"),_=S("br"),$t=p(`For volume, the formula is:
		`),v(Q.$$.fragment),nt=Y(),v(U.$$.fragment),ft=p(` is the width of the cross-section.
		`),lt=S("br"),v(X.$$.fragment),it=p(` is the area of the cross-section.
		`),mt=S("br"),v(et.$$.fragment),ot=p(" can be derived from "),v(st.$$.fragment),rt=p(".")},l($){s=c($,`The next four lessons are on finding the volumes of solids which are created by manipulating a function.
		`),t=A($,"BR",{}),e=A($,"BR",{}),m=c($,`All of the solids have these characteristics in common:
		`),h=A($,"BR",{}),R(q.$$.fragment,$),g=Z($),C=A($,"BR",{}),w=A($,"BR",{}),M=c($,`A cross-section of a solid is the shape formed by
		slicing it perpendicular to the axis of its inputs.

		`),o=A($,"BR",{}),x=A($,"BR",{}),u=c($,`For example, if we take a pyramid and slice it horizontally, the cross-section is a
		triangle. No matter where we slice it, the cross-section is always a triangle.

		`),d=A($,"BR",{}),V=A($,"BR",{}),L=c($,`For all of the solids in these lessons, we will be using the same method to find the volume:
		`),P=A($,"BR",{}),R(N.$$.fragment,$),i=Z($),b=A($,"BR",{}),z=A($,"BR",{}),J=c($,`This is another Riemann sum, but in three dimensions instead of two.
		`),E=A($,"BR",{}),K=A($,"BR",{}),G=c($,`With Riemann sums for area, the formula was:
		`),R(I.$$.fragment,$),O=Z($),R(W.$$.fragment,$),j=c($,` was the width of the rectangle.
		`),y=A($,"BR",{}),tt=c($,`f(x_i) was the height of the rectangle.
		`),l=A($,"BR",{}),_=A($,"BR",{}),$t=c($,`For volume, the formula is:
		`),R(Q.$$.fragment,$),nt=Z($),R(U.$$.fragment,$),ft=c($,` is the width of the cross-section.
		`),lt=A($,"BR",{}),R(X.$$.fragment,$),it=c($,` is the area of the cross-section.
		`),mt=A($,"BR",{}),R(et.$$.fragment,$),ot=c($," can be derived from "),R(st.$$.fragment,$),rt=c($,".")},m($,a){n($,s,a),n($,t,a),n($,e,a),n($,m,a),n($,h,a),B(q,$,a),n($,g,a),n($,C,a),n($,w,a),n($,M,a),n($,o,a),n($,x,a),n($,u,a),n($,d,a),n($,V,a),n($,L,a),n($,P,a),B(N,$,a),n($,i,a),n($,b,a),n($,z,a),n($,J,a),n($,E,a),n($,K,a),n($,G,a),B(I,$,a),n($,O,a),B(W,$,a),n($,j,a),n($,y,a),n($,tt,a),n($,l,a),n($,_,a),n($,$t,a),B(Q,$,a),n($,nt,a),B(U,$,a),n($,ft,a),n($,lt,a),B(X,$,a),n($,it,a),n($,mt,a),B(et,$,a),n($,ot,a),B(st,$,a),n($,rt,a),ut=!0},p($,a){const _t={};a&4&&(_t.$$scope={dirty:a,ctx:$}),q.$set(_t);const ht={};a&4&&(ht.$$scope={dirty:a,ctx:$}),N.$set(ht);const gt={};a&4&&(gt.$$scope={dirty:a,ctx:$}),I.$set(gt);const bt={};a&4&&(bt.$$scope={dirty:a,ctx:$}),W.$set(bt);const wt={};a&4&&(wt.$$scope={dirty:a,ctx:$}),Q.$set(wt);const xt={};a&4&&(xt.$$scope={dirty:a,ctx:$}),U.$set(xt);const dt={};a&4&&(dt.$$scope={dirty:a,ctx:$}),X.$set(dt);const vt={};a&4&&(vt.$$scope={dirty:a,ctx:$}),et.$set(vt);const Rt={};a&4&&(Rt.$$scope={dirty:a,ctx:$}),st.$set(Rt)},i($){ut||(F(q.$$.fragment,$),F(N.$$.fragment,$),F(I.$$.fragment,$),F(W.$$.fragment,$),F(Q.$$.fragment,$),F(U.$$.fragment,$),F(X.$$.fragment,$),F(et.$$.fragment,$),F(st.$$.fragment,$),ut=!0)},o($){T(q.$$.fragment,$),T(N.$$.fragment,$),T(I.$$.fragment,$),T(W.$$.fragment,$),T(Q.$$.fragment,$),T(U.$$.fragment,$),T(X.$$.fragment,$),T(et.$$.fragment,$),T(st.$$.fragment,$),ut=!1},d($){$&&(f(s),f(t),f(e),f(m),f(h),f(g),f(C),f(w),f(M),f(o),f(x),f(u),f(d),f(V),f(L),f(P),f(i),f(b),f(z),f(J),f(E),f(K),f(G),f(O),f(j),f(y),f(tt),f(l),f(_),f($t),f(nt),f(ft),f(lt),f(it),f(mt),f(ot),f(rt)),k(q,$),k(N,$),k(I,$),k(W,$),k(Q,$),k(U,$),k(X,$),k(et,$),k(st,$)}}}function Gt(r){let s=`
			A(x) = f(x)^2
		`,t;return{c(){t=p(s)},l(e){t=c(e,s)},m(e,m){n(e,t,m)},p:H,d(e){e&&f(t)}}}function Ht(r){let s=`
			\\text{Volume} = \\int_{a}^{b} f(x)^2 \\, dx
		`,t;return{c(){t=p(s)},l(e){t=c(e,s)},m(e,m){n(e,t,m)},p:H,d(e){e&&f(t)}}}function Ot(r){let s;return{c(){s=p("f(x)=x^2")},l(t){s=c(t,"f(x)=x^2")},m(t,e){n(t,s,e)},d(t){t&&f(s)}}}function Wt(r){let s,t,e,m,h,q,g,C,w,M,o,x;return t=new D({props:{displayMode:!0,$$slots:{default:[Gt]},$$scope:{ctx:r}}}),g=new D({props:{displayMode:!0,$$slots:{default:[Ht]},$$scope:{ctx:r}}}),w=new D({props:{$$slots:{default:[Ot]},$$scope:{ctx:r}}}),o=new pt({props:{sketch:ct}}),{c(){s=p(`A volume with a square cross-section is one where 
		`),v(t.$$.fragment),e=p(`
		The height and depth of the cross-section are equal to the value of the function.
		`),m=S("br"),h=S("br"),q=p(`The formula for the volume of a solid with square cross-sections is:
		`),v(g.$$.fragment),C=p(`
		For example, here is a solid with square cross-sections of `),v(w.$$.fragment),M=p(`. Hover over the sketch to see the cross-section.
		`),v(o.$$.fragment)},l(u){s=c(u,`A volume with a square cross-section is one where 
		`),R(t.$$.fragment,u),e=c(u,`
		The height and depth of the cross-section are equal to the value of the function.
		`),m=A(u,"BR",{}),h=A(u,"BR",{}),q=c(u,`The formula for the volume of a solid with square cross-sections is:
		`),R(g.$$.fragment,u),C=c(u,`
		For example, here is a solid with square cross-sections of `),R(w.$$.fragment,u),M=c(u,`. Hover over the sketch to see the cross-section.
		`),R(o.$$.fragment,u)},m(u,d){n(u,s,d),B(t,u,d),n(u,e,d),n(u,m,d),n(u,h,d),n(u,q,d),B(g,u,d),n(u,C,d),B(w,u,d),n(u,M,d),B(o,u,d),x=!0},p(u,d){const V={};d&4&&(V.$$scope={dirty:d,ctx:u}),t.$set(V);const L={};d&4&&(L.$$scope={dirty:d,ctx:u}),g.$set(L);const P={};d&4&&(P.$$scope={dirty:d,ctx:u}),w.$set(P)},i(u){x||(F(t.$$.fragment,u),F(g.$$.fragment,u),F(w.$$.fragment,u),F(o.$$.fragment,u),x=!0)},o(u){T(t.$$.fragment,u),T(g.$$.fragment,u),T(w.$$.fragment,u),T(o.$$.fragment,u),x=!1},d(u){u&&(f(s),f(e),f(m),f(h),f(q),f(C),f(M)),k(t,u),k(g,u),k(w,u),k(o,u)}}}function jt(r){let s;return{c(){s=p("f(x)")},l(t){s=c(t,"f(x)")},m(t,e){n(t,s,e)},d(t){t&&f(s)}}}function Jt(r){let s;return{c(){s=p("dx")},l(t){s=c(t,"dx")},m(t,e){n(t,s,e)},d(t){t&&f(s)}}}function Kt(r){let s;return{c(){s=p("g(x)")},l(t){s=c(t,"g(x)")},m(t,e){n(t,s,e)},d(t){t&&f(s)}}}function Qt(r){let s=`
				\\begin{align*}
				\\text{Volume} &= \\sum_{i=1}^{n} h \\cdot d \\cdot w \\\\
				&= \\sum_{i=1}^{n} f(x_i) \\cdot g(x_i) \\cdot \\Delta x \\\\
				&= \\int_{a}^{b} f(x) \\cdot g(x) \\, dx
				\\end{align*}
			`,t;return{c(){t=p(s)},l(e){t=c(e,s)},m(e,m){n(e,t,m)},p:H,d(e){e&&f(t)}}}function Ut(r){let s;return{c(){s=p("f(x)=x")},l(t){s=c(t,"f(x)=x")},m(t,e){n(t,s,e)},d(t){t&&f(s)}}}function Xt(r){let s;return{c(){s=p("g(x)=x^2")},l(t){s=c(t,"g(x)=x^2")},m(t,e){n(t,s,e)},d(t){t&&f(s)}}}function Yt(r){let s,t,e,m,h,q,g,C,w,M,o,x,u,d,V,L,P,N;return h=new D({props:{$$slots:{default:[jt]},$$scope:{ctx:r}}}),g=new D({props:{$$slots:{default:[Jt]},$$scope:{ctx:r}}}),w=new D({props:{$$slots:{default:[Kt]},$$scope:{ctx:r}}}),o=new D({props:{displayMode:!0,$$slots:{default:[Qt]},$$scope:{ctx:r}}}),u=new D({props:{$$slots:{default:[Ut]},$$scope:{ctx:r}}}),V=new D({props:{$$slots:{default:[Xt]},$$scope:{ctx:r}}}),P=new pt({props:{sketch:ct,sketchParameters:{plotFunction:oe,plotFunction2:re,dimensions:[0,2],cs:"rectangle"}}}),{c(){s=p(`Rectangles are similar, but the depth is not necessarily the same as the height. 
		`),t=S("br"),e=S("br"),m=p("For a solid with rectangular cross-sections of height "),v(h.$$.fragment),q=p(", width "),v(g.$$.fragment),C=p(", and depth "),v(w.$$.fragment),M=p(`, the formula for the volume is
		`),v(o.$$.fragment),x=p(`
		For example, here is a solid with rectangular cross-sections of `),v(u.$$.fragment),d=p(" and "),v(V.$$.fragment),L=p(`.
		`),v(P.$$.fragment)},l(i){s=c(i,`Rectangles are similar, but the depth is not necessarily the same as the height. 
		`),t=A(i,"BR",{}),e=A(i,"BR",{}),m=c(i,"For a solid with rectangular cross-sections of height "),R(h.$$.fragment,i),q=c(i,", width "),R(g.$$.fragment,i),C=c(i,", and depth "),R(w.$$.fragment,i),M=c(i,`, the formula for the volume is
		`),R(o.$$.fragment,i),x=c(i,`
		For example, here is a solid with rectangular cross-sections of `),R(u.$$.fragment,i),d=c(i," and "),R(V.$$.fragment,i),L=c(i,`.
		`),R(P.$$.fragment,i)},m(i,b){n(i,s,b),n(i,t,b),n(i,e,b),n(i,m,b),B(h,i,b),n(i,q,b),B(g,i,b),n(i,C,b),B(w,i,b),n(i,M,b),B(o,i,b),n(i,x,b),B(u,i,b),n(i,d,b),B(V,i,b),n(i,L,b),B(P,i,b),N=!0},p(i,b){const z={};b&4&&(z.$$scope={dirty:b,ctx:i}),h.$set(z);const J={};b&4&&(J.$$scope={dirty:b,ctx:i}),g.$set(J);const E={};b&4&&(E.$$scope={dirty:b,ctx:i}),w.$set(E);const K={};b&4&&(K.$$scope={dirty:b,ctx:i}),o.$set(K);const G={};b&4&&(G.$$scope={dirty:b,ctx:i}),u.$set(G);const I={};b&4&&(I.$$scope={dirty:b,ctx:i}),V.$set(I)},i(i){N||(F(h.$$.fragment,i),F(g.$$.fragment,i),F(w.$$.fragment,i),F(o.$$.fragment,i),F(u.$$.fragment,i),F(V.$$.fragment,i),F(P.$$.fragment,i),N=!0)},o(i){T(h.$$.fragment,i),T(g.$$.fragment,i),T(w.$$.fragment,i),T(o.$$.fragment,i),T(u.$$.fragment,i),T(V.$$.fragment,i),T(P.$$.fragment,i),N=!1},d(i){i&&(f(s),f(t),f(e),f(m),f(q),f(C),f(M),f(x),f(d),f(L)),k(h,i),k(g,i),k(w,i),k(o,i),k(u,i),k(V,i),k(P,i)}}}function Zt(r){let s="y = x - x^2",t;return{c(){t=p(s)},l(e){t=c(e,s)},m(e,m){n(e,t,m)},p:H,d(e){e&&f(t)}}}function yt(r){let s="[0,1]",t;return{c(){t=p(s)},l(e){t=c(e,s)},m(e,m){n(e,t,m)},p:H,d(e){e&&f(t)}}}function te(r){let s=`
				\\begin{align*}
				\\text{Volume} &= \\int_{0}^{1} A \\cdot d \\\\
				&= \\int_{0}^{1} (x - x^2)^2 \\, dx \\\\
				&= \\int_{0}^{1} (x^2 - 2x^3 + x^4) \\, dx \\\\
				&= \\left[ \\frac{1}{3}x^3 - \\frac{1}{2}x^4 + \\frac{1}{5}x^5 \\right]_0^1 \\\\
				&= \\frac{1}{3} - \\frac{1}{2} + \\frac{1}{5} = \\frac{1}{30} \\approx 0.033 \\, \\text{units}^3
				\\end{align*}
			`,t;return{c(){t=p(s)},l(e){t=c(e,s)},m(e,m){n(e,t,m)},p:H,d(e){e&&f(t)}}}function ee(r){let s="1/30",t;return{c(){t=p(s)},l(e){t=c(e,s)},m(e,m){n(e,t,m)},p:H,d(e){e&&f(t)}}}function se(r){let s="y = \\sin(x)",t;return{c(){t=p(s)},l(e){t=c(e,s)},m(e,m){n(e,t,m)},p:H,d(e){e&&f(t)}}}function $e(r){let s="[0,\\pi]",t;return{c(){t=p(s)},l(e){t=c(e,s)},m(e,m){n(e,t,m)},p:H,d(e){e&&f(t)}}}function ne(r){let s=`
				\\begin{align*}
				\\text{Volume} &= \\int_{0}^{\\pi} f(x) \\cdot g(x) \\, dx \\\\
				&= \\int_{0}^{\\pi} \\sin(x) \\cdot \\frac{1}{2}\\sin(x) \\, dx \\\\
				&= \\frac{1}{2} \\int_{0}^{\\pi} \\sin^2(x) \\, dx \\\\
				&= \\frac{1}{2} \\int_{0}^{\\pi} \\frac{1 - \\cos(2x)}{2} \\, dx \\\\
				&= \\frac{1}{4} \\left[ x - \\frac{\\sin(2x)}{2} \\right]_0^{\\pi} \\\\
				&= \\frac{1}{4} (\\pi - 0) = \\frac{\\pi}{4} \\approx 0.785 \\, \\text{units}^3
				\\end{align*}
			`,t;return{c(){t=p(s)},l(e){t=c(e,s)},m(e,m){n(e,t,m)},p:H,d(e){e&&f(t)}}}function fe(r){let s="\\pi/4",t;return{c(){t=p(s)},l(e){t=c(e,s)},m(e,m){n(e,t,m)},p:H,d(e){e&&f(t)}}}function le(r){let s,t="Example 1: Square Cross Sections",e,m,h,q,g,C,w,M,o,x,u,d,V,L,P,N="Example 2: Rectangular Cross Sections",i,b,z,J,E,K,G,I,O,W,j,y,tt;return h=new D({props:{$$slots:{default:[Zt]},$$scope:{ctx:r}}}),g=new D({props:{$$slots:{default:[yt]},$$scope:{ctx:r}}}),w=new pt({props:{sketch:ct,sketchParameters:{plotFunction:ue,dimensions:[0,5],cs:"square"}}}),o=new D({props:{displayMode:!0,$$slots:{default:[te]},$$scope:{ctx:r}}}),u=new D({props:{$$slots:{default:[ee]},$$scope:{ctx:r}}}),z=new D({props:{$$slots:{default:[se]},$$scope:{ctx:r}}}),E=new D({props:{$$slots:{default:[$e]},$$scope:{ctx:r}}}),G=new pt({props:{sketch:ct,sketchParameters:{plotFunction:r[0],plotFunction2:r[1],dimensions:[0,3.1415],cs:"rectangle"}}}),O=new D({props:{displayMode:!0,$$slots:{default:[ne]},$$scope:{ctx:r}}}),j=new D({props:{$$slots:{default:[fe]},$$scope:{ctx:r}}}),{c(){s=S("strong"),s.textContent=t,e=S("br"),m=p(`
		Find the volume of the solid whose base is bounded by `),v(h.$$.fragment),q=p(" on "),v(g.$$.fragment),C=p(`.
			`),v(w.$$.fragment),M=Y(),v(o.$$.fragment),x=p(`
		The volume of the solid is `),v(u.$$.fragment),d=p(` cubic units.

		
		`),V=S("br"),L=S("br"),P=S("strong"),P.textContent=N,i=S("br"),b=p(`
		Find the volume of the solid bounded by `),v(z.$$.fragment),J=p(` and the x-axis
		on `),v(E.$$.fragment),K=p(`, with rectangular cross sections
		perpendicular to the x-axis. The depth of each rectangle is half of the height.
		`),v(G.$$.fragment),I=Y(),v(O.$$.fragment),W=p(`
		The volume of the solid is `),v(j.$$.fragment),y=p(" cubic units.")},l(l){s=A(l,"STRONG",{"data-svelte-h":!0}),Bt(s)!=="svelte-1lsdzyw"&&(s.textContent=t),e=A(l,"BR",{}),m=c(l,`
		Find the volume of the solid whose base is bounded by `),R(h.$$.fragment,l),q=c(l," on "),R(g.$$.fragment,l),C=c(l,`.
			`),R(w.$$.fragment,l),M=Z(l),R(o.$$.fragment,l),x=c(l,`
		The volume of the solid is `),R(u.$$.fragment,l),d=c(l,` cubic units.

		
		`),V=A(l,"BR",{}),L=A(l,"BR",{}),P=A(l,"STRONG",{"data-svelte-h":!0}),Bt(P)!=="svelte-sl7h88"&&(P.textContent=N),i=A(l,"BR",{}),b=c(l,`
		Find the volume of the solid bounded by `),R(z.$$.fragment,l),J=c(l,` and the x-axis
		on `),R(E.$$.fragment,l),K=c(l,`, with rectangular cross sections
		perpendicular to the x-axis. The depth of each rectangle is half of the height.
		`),R(G.$$.fragment,l),I=Z(l),R(O.$$.fragment,l),W=c(l,`
		The volume of the solid is `),R(j.$$.fragment,l),y=c(l," cubic units.")},m(l,_){n(l,s,_),n(l,e,_),n(l,m,_),B(h,l,_),n(l,q,_),B(g,l,_),n(l,C,_),B(w,l,_),n(l,M,_),B(o,l,_),n(l,x,_),B(u,l,_),n(l,d,_),n(l,V,_),n(l,L,_),n(l,P,_),n(l,i,_),n(l,b,_),B(z,l,_),n(l,J,_),B(E,l,_),n(l,K,_),B(G,l,_),n(l,I,_),B(O,l,_),n(l,W,_),B(j,l,_),n(l,y,_),tt=!0},p(l,_){const $t={};_&4&&($t.$$scope={dirty:_,ctx:l}),h.$set($t);const Q={};_&4&&(Q.$$scope={dirty:_,ctx:l}),g.$set(Q);const nt={};_&4&&(nt.$$scope={dirty:_,ctx:l}),o.$set(nt);const U={};_&4&&(U.$$scope={dirty:_,ctx:l}),u.$set(U);const ft={};_&4&&(ft.$$scope={dirty:_,ctx:l}),z.$set(ft);const lt={};_&4&&(lt.$$scope={dirty:_,ctx:l}),E.$set(lt);const X={};_&4&&(X.$$scope={dirty:_,ctx:l}),O.$set(X);const it={};_&4&&(it.$$scope={dirty:_,ctx:l}),j.$set(it)},i(l){tt||(F(h.$$.fragment,l),F(g.$$.fragment,l),F(w.$$.fragment,l),F(o.$$.fragment,l),F(u.$$.fragment,l),F(z.$$.fragment,l),F(E.$$.fragment,l),F(G.$$.fragment,l),F(O.$$.fragment,l),F(j.$$.fragment,l),tt=!0)},o(l){T(h.$$.fragment,l),T(g.$$.fragment,l),T(w.$$.fragment,l),T(o.$$.fragment,l),T(u.$$.fragment,l),T(z.$$.fragment,l),T(E.$$.fragment,l),T(G.$$.fragment,l),T(O.$$.fragment,l),T(j.$$.fragment,l),tt=!1},d(l){l&&(f(s),f(e),f(m),f(q),f(C),f(M),f(x),f(d),f(V),f(L),f(P),f(i),f(b),f(J),f(K),f(I),f(W),f(y)),k(h,l),k(g,l),k(w,l),k(o,l),k(u,l),k(z,l),k(E,l),k(G,l),k(O,l),k(j,l)}}}function ie(r){let s,t,e,m,h,q,g,C,w,M;return s=new qt({props:{heading:"Cross Sections: Squares and Rectangles"}}),e=new at({props:{heading:"Introduction",$$slots:{default:[It]},$$scope:{ctx:r}}}),h=new at({props:{heading:"Square Cross-Sections",$$slots:{default:[Wt]},$$scope:{ctx:r}}}),g=new at({props:{heading:"Rectangular Cross-Sections",$$slots:{default:[Yt]},$$scope:{ctx:r}}}),w=new at({props:{heading:"Examples",$$slots:{default:[le]},$$scope:{ctx:r}}}),{c(){v(s.$$.fragment),t=Y(),v(e.$$.fragment),m=Y(),v(h.$$.fragment),q=Y(),v(g.$$.fragment),C=Y(),v(w.$$.fragment)},l(o){R(s.$$.fragment,o),t=Z(o),R(e.$$.fragment,o),m=Z(o),R(h.$$.fragment,o),q=Z(o),R(g.$$.fragment,o),C=Z(o),R(w.$$.fragment,o)},m(o,x){B(s,o,x),n(o,t,x),B(e,o,x),n(o,m,x),B(h,o,x),n(o,q,x),B(g,o,x),n(o,C,x),B(w,o,x),M=!0},p(o,x){const u={};x&4&&(u.$$scope={dirty:x,ctx:o}),e.$set(u);const d={};x&4&&(d.$$scope={dirty:x,ctx:o}),h.$set(d);const V={};x&4&&(V.$$scope={dirty:x,ctx:o}),g.$set(V);const L={};x&4&&(L.$$scope={dirty:x,ctx:o}),w.$set(L)},i(o){M||(F(s.$$.fragment,o),F(e.$$.fragment,o),F(h.$$.fragment,o),F(g.$$.fragment,o),F(w.$$.fragment,o),M=!0)},o(o){T(s.$$.fragment,o),T(e.$$.fragment,o),T(h.$$.fragment,o),T(g.$$.fragment,o),T(w.$$.fragment,o),M=!1},d(o){o&&(f(t),f(m),f(q),f(C)),k(s,o),k(e,o),k(h,o),k(g,o),k(w,o)}}}function me(r){let s,t;return s=new At({props:{$$slots:{default:[ie]},$$scope:{ctx:r}}}),{c(){v(s.$$.fragment)},l(e){R(s.$$.fragment,e)},m(e,m){B(s,e,m),t=!0},p(e,[m]){const h={};m&4&&(h.$$scope={dirty:m,ctx:e}),s.$set(h)},i(e){t||(F(s.$$.fragment,e),t=!0)},o(e){T(s.$$.fragment,e),t=!1},d(e){k(s,e)}}}const oe=r=>r,re=r=>r**2,ue=r=>r/5-(r/5)**2;function ae(r){return[e=>Math.sin(e),e=>Math.sin(e)/2]}class xe extends kt{constructor(s){super(),St(this,s,ae,me,Tt,{})}}export{xe as component};
