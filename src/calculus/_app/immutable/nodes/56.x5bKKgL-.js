import{s as Z,n as F}from"../chunks/CVhLxNSM.js";import{S as y,i as tt,c as B,b as h,m as v,t as A,a as W,d as C,s as I,e as T,f as l,g as i,h as u,j as D,k as p,l as E}from"../chunks/DvSB8R1X.js";import{L as et,S as G,M as P}from"../chunks/ByTZAYyp.js";import{L as nt}from"../chunks/xLaKUPuM.js";function $t(m){let $=q`a,b,c,d \in \mathbb{R}`+"",e;return{c(){e=u($)},l(t){e=p(t,$)},m(t,s){l(t,e,s)},p:F,d(t){t&&i(e)}}}function st(m){let $=q`\frac{a}{c} + \frac{b}{d} = \frac{ad}{cd} + \frac{bc}{cd} = \frac{ad + bc}{cd}`+"",e;return{c(){e=u($)},l(t){e=p(t,$)},m(t,s){l(t,e,s)},p:F,d(t){t&&i(e)}}}function ft(m){let $,e,t,s,c,d,x,b,r;return e=new P({props:{$$slots:{default:[$t]},$$scope:{ctx:m}}}),s=new P({props:{displayMode:!0,$$slots:{default:[st]},$$scope:{ctx:m}}}),{c(){$=u("With "),B(e.$$.fragment),t=I(),B(s.$$.fragment),c=u(`
		Partial Fraction Decomposition decomposes fractions with separable denominators into separate fractions.
		`),d=D("br"),x=D("br"),b=u("Multiple fractions with simpler denominators are easier to integrate than one fraction with a complex demoninator.")},l(f){$=p(f,"With "),h(e.$$.fragment,f),t=T(f),h(s.$$.fragment,f),c=p(f,`
		Partial Fraction Decomposition decomposes fractions with separable denominators into separate fractions.
		`),d=E(f,"BR",{}),x=E(f,"BR",{}),b=p(f,"Multiple fractions with simpler denominators are easier to integrate than one fraction with a complex demoninator.")},m(f,g){l(f,$,g),v(e,f,g),l(f,t,g),v(s,f,g),l(f,c,g),l(f,d,g),l(f,x,g),l(f,b,g),r=!0},p(f,g){const w={};g&1&&(w.$$scope={dirty:g,ctx:f}),e.$set(w);const R={};g&1&&(R.$$scope={dirty:g,ctx:f}),s.$set(R)},i(f){r||(A(e.$$.fragment,f),A(s.$$.fragment,f),r=!0)},o(f){W(e.$$.fragment,f),W(s.$$.fragment,f),r=!1},d(f){f&&(i($),i(t),i(c),i(d),i(x),i(b)),C(e,f),C(s,f)}}}function at(m){let $=q`A`+"",e;return{c(){e=u($)},l(t){e=p(t,$)},m(t,s){l(t,e,s)},p:F,d(t){t&&i(e)}}}function rt(m){let $=q`B`+"",e;return{c(){e=u($)},l(t){e=p(t,$)},m(t,s){l(t,e,s)},p:F,d(t){t&&i(e)}}}function lt(m){let $=q`
			\begin{align*}
			\int{\frac{7x+9}{(x+1)(x+2)} \, dx} &= \int{\frac{A(x+2) + B(x+1)}{(x+1)(x+2)}}\, dx \\\\
			&= \int{\frac{A(x+2)}{(x+1)(x+2)} + \frac{B(x+1)}{(x+1)(x+2)} \, dx} \\\\
			&= \int{\frac{A}{x+1} + \frac{B}{x+2} \, dx} 
			\end{align*}
		`+"",e;return{c(){e=u($)},l(t){e=p(t,$)},m(t,s){l(t,e,s)},p:F,d(t){t&&i(e)}}}function it(m){let $=q`x=-1`+"",e;return{c(){e=u($)},l(t){e=p(t,$)},m(t,s){l(t,e,s)},p:F,d(t){t&&i(e)}}}function mt(m){let $=q`x=-2`+"",e;return{c(){e=u($)},l(t){e=p(t,$)},m(t,s){l(t,e,s)},p:F,d(t){t&&i(e)}}}function ot(m){let $=q`A`+"",e;return{c(){e=u($)},l(t){e=p(t,$)},m(t,s){l(t,e,s)},p:F,d(t){t&&i(e)}}}function ut(m){let $=q`B`+"",e;return{c(){e=u($)},l(t){e=p(t,$)},m(t,s){l(t,e,s)},p:F,d(t){t&&i(e)}}}function pt(m){let $=q`
			\begin{align*}
			\text{When } x&=-1 \\\\
			A(x+2) + B(x+1) &= 7x+9 \\\\
			A(1) + B(0) &= 7(-1) + 9 \\\\
			A &= 2 \\\\
			\text{When } x&=-2 \\\\
			A(x+2) + B(x+1) &= 7x+9 \\\\
			A(0) + B(-1) &= 7(-2) + 9 \\\\
			B &= 5 \\\\
			2(x+2) + 5(x+1) &= 7x + 9
			\end{align*}
		`+"",e;return{c(){e=u($)},l(t){e=p(t,$)},m(t,s){l(t,e,s)},p:F,d(t){t&&i(e)}}}function ct(m){let $=q`
			\begin{align*}
			\int{\frac{7x+9}{(x+1)(x+2)} \, dx} &= \int{\frac{2(x+2) + 5(x+1)}{(x+1)(x+2)} \, dx} \\\\
			&= \int{\frac{2}{x+1} + \frac{5}{x+2} \, dx} \\\\
			&= 2\ln|x+1| + 5\ln|x+2| + C
			\end{align*}
		`+"",e;return{c(){e=u($)},l(t){e=p(t,$)},m(t,s){l(t,e,s)},p:F,d(t){t&&i(e)}}}function _t(m){let $,e,t,s,c,d,x,b,r,f,g,w,R,M,S,a,_,O,j,k,L,z;return e=new P({props:{$$slots:{default:[at]},$$scope:{ctx:m}}}),s=new P({props:{$$slots:{default:[rt]},$$scope:{ctx:m}}}),d=new P({props:{displayMode:!0,$$slots:{default:[lt]},$$scope:{ctx:m}}}),b=new P({props:{$$slots:{default:[it]},$$scope:{ctx:m}}}),f=new P({props:{$$slots:{default:[mt]},$$scope:{ctx:m}}}),w=new P({props:{$$slots:{default:[ot]},$$scope:{ctx:m}}}),M=new P({props:{$$slots:{default:[ut]},$$scope:{ctx:m}}}),a=new P({props:{displayMode:!0,$$slots:{default:[pt]},$$scope:{ctx:m}}}),L=new P({props:{displayMode:!0,$$slots:{default:[ct]},$$scope:{ctx:m}}}),{c(){$=u("We are solving for "),B(e.$$.fragment),t=u(" and "),B(s.$$.fragment),c=u(`.
		`),B(d.$$.fragment),x=u(`
		We can use `),B(b.$$.fragment),r=u(" and "),B(f.$$.fragment),g=u(" to find "),B(w.$$.fragment),R=u(" and "),B(M.$$.fragment),S=u(`.
		`),B(a.$$.fragment),_=I(),O=D("br"),j=D("br"),k=u(`Plugging that into the original equation, we get
		`),B(L.$$.fragment)},l(n){$=p(n,"We are solving for "),h(e.$$.fragment,n),t=p(n," and "),h(s.$$.fragment,n),c=p(n,`.
		`),h(d.$$.fragment,n),x=p(n,`
		We can use `),h(b.$$.fragment,n),r=p(n," and "),h(f.$$.fragment,n),g=p(n," to find "),h(w.$$.fragment,n),R=p(n," and "),h(M.$$.fragment,n),S=p(n,`.
		`),h(a.$$.fragment,n),_=T(n),O=E(n,"BR",{}),j=E(n,"BR",{}),k=p(n,`Plugging that into the original equation, we get
		`),h(L.$$.fragment,n)},m(n,o){l(n,$,o),v(e,n,o),l(n,t,o),v(s,n,o),l(n,c,o),v(d,n,o),l(n,x,o),v(b,n,o),l(n,r,o),v(f,n,o),l(n,g,o),v(w,n,o),l(n,R,o),v(M,n,o),l(n,S,o),v(a,n,o),l(n,_,o),l(n,O,o),l(n,j,o),l(n,k,o),v(L,n,o),z=!0},p(n,o){const H={};o&1&&(H.$$scope={dirty:o,ctx:n}),e.$set(H);const J={};o&1&&(J.$$scope={dirty:o,ctx:n}),s.$set(J);const K={};o&1&&(K.$$scope={dirty:o,ctx:n}),d.$set(K);const N={};o&1&&(N.$$scope={dirty:o,ctx:n}),b.$set(N);const Q={};o&1&&(Q.$$scope={dirty:o,ctx:n}),f.$set(Q);const U={};o&1&&(U.$$scope={dirty:o,ctx:n}),w.$set(U);const V={};o&1&&(V.$$scope={dirty:o,ctx:n}),M.$set(V);const X={};o&1&&(X.$$scope={dirty:o,ctx:n}),a.$set(X);const Y={};o&1&&(Y.$$scope={dirty:o,ctx:n}),L.$set(Y)},i(n){z||(A(e.$$.fragment,n),A(s.$$.fragment,n),A(d.$$.fragment,n),A(b.$$.fragment,n),A(f.$$.fragment,n),A(w.$$.fragment,n),A(M.$$.fragment,n),A(a.$$.fragment,n),A(L.$$.fragment,n),z=!0)},o(n){W(e.$$.fragment,n),W(s.$$.fragment,n),W(d.$$.fragment,n),W(b.$$.fragment,n),W(f.$$.fragment,n),W(w.$$.fragment,n),W(M.$$.fragment,n),W(a.$$.fragment,n),W(L.$$.fragment,n),z=!1},d(n){n&&(i($),i(t),i(c),i(x),i(r),i(g),i(R),i(S),i(_),i(O),i(j),i(k)),C(e,n),C(s,n),C(d,n),C(b,n),C(f,n),C(w,n),C(M,n),C(a,n),C(L,n)}}}function xt(m){let $=q`(x+1)^2`+"",e;return{c(){e=u($)},l(t){e=p(t,$)},m(t,s){l(t,e,s)},p:F,d(t){t&&i(e)}}}function gt(m){let $=q`\sqrt[3]{x}`+"",e;return{c(){e=u($)},l(t){e=p(t,$)},m(t,s){l(t,e,s)},p:F,d(t){t&&i(e)}}}function dt(m){let $=q`
			\int{\frac{4x^2 + 7x + 1}{(x+3)(x-2)(x+2)} \, dx} = \int{\frac{A}{x+3} + \frac{B}{x-2} + \frac{C}{x+2} \, dx} \\ \text{} \\
			A(x-2)(x+2) + B(x+3)(x+2) + C(x+3)(x-2) = 4x^2 + 7x + 1 \\ \text{} \\
			\text{When } x=-3 \\ \text{} \\
			A(-5)(-1) + B(0) + C(0) = 36 - 21 + 1 \\ \text{} \\
			A = \frac{16}{5} \\ \text{} \\
			\text{When } x=2 \\ \text{} \\
			A(0) + B(5)(4) + C(0) = 16 + 14 + 1 \\ \text{} \\
			B = \frac{31}{20} \\ \text{} \\
			\text{When } x=-2 \\ \text{} \\
			A(0) + B(0) + C(1)(-4) = 16 - 14 + 1 \\ \text{} \\
			C = \frac{-3}{4} \\ \text{} \\
		`+"",e;return{c(){e=u($)},l(t){e=p(t,$)},m(t,s){l(t,e,s)},p:F,d(t){t&&i(e)}}}function bt(m){let $=q`
			\begin{align*}
			\int{\frac{4x^2 + 7x + 1}{(x+3)(x-2)(x+2)} \, dx} &= \int{\frac{\frac{16}{5}}{x+3} + \frac{\frac{31}{20}}{x-2} + \frac{\frac{-3}{4}}{x+2} \, dx} \\ \text{} \\
			&= \frac{16}{5}\ln|x+3| + \frac{31}{20}\ln|x-2| - \frac{3}{4}\ln|x+2| + C
			\end{align*}
		`+"",e;return{c(){e=u($)},l(t){e=p(t,$)},m(t,s){l(t,e,s)},p:F,d(t){t&&i(e)}}}function wt(m){let $,e,t,s,c,d,x,b,r,f,g,w,R,M,S;return c=new P({props:{$$slots:{default:[xt]},$$scope:{ctx:m}}}),x=new P({props:{$$slots:{default:[gt]},$$scope:{ctx:m}}}),w=new P({props:{displayMode:!0,$$slots:{default:[dt]},$$scope:{ctx:m}}}),M=new P({props:{displayMode:!0,$$slots:{default:[bt]},$$scope:{ctx:m}}}),{c(){$=u(`Partial fraction decomposition is linear when the results have linear denominators. 
		`),e=D("br"),t=D("br"),s=u("For this course, if you find yourself decomposing into non-linear denominators, such as "),B(c.$$.fragment),d=u(" or "),B(x.$$.fragment),b=u(`, you are probably doing it wrong.
		`),r=D("br"),f=D("br"),g=u(`Our second integral is
		`),B(w.$$.fragment),R=I(),B(M.$$.fragment)},l(a){$=p(a,`Partial fraction decomposition is linear when the results have linear denominators. 
		`),e=E(a,"BR",{}),t=E(a,"BR",{}),s=p(a,"For this course, if you find yourself decomposing into non-linear denominators, such as "),h(c.$$.fragment,a),d=p(a," or "),h(x.$$.fragment,a),b=p(a,`, you are probably doing it wrong.
		`),r=E(a,"BR",{}),f=E(a,"BR",{}),g=p(a,`Our second integral is
		`),h(w.$$.fragment,a),R=T(a),h(M.$$.fragment,a)},m(a,_){l(a,$,_),l(a,e,_),l(a,t,_),l(a,s,_),v(c,a,_),l(a,d,_),v(x,a,_),l(a,b,_),l(a,r,_),l(a,f,_),l(a,g,_),v(w,a,_),l(a,R,_),v(M,a,_),S=!0},p(a,_){const O={};_&1&&(O.$$scope={dirty:_,ctx:a}),c.$set(O);const j={};_&1&&(j.$$scope={dirty:_,ctx:a}),x.$set(j);const k={};_&1&&(k.$$scope={dirty:_,ctx:a}),w.$set(k);const L={};_&1&&(L.$$scope={dirty:_,ctx:a}),M.$set(L)},i(a){S||(A(c.$$.fragment,a),A(x.$$.fragment,a),A(w.$$.fragment,a),A(M.$$.fragment,a),S=!0)},o(a){W(c.$$.fragment,a),W(x.$$.fragment,a),W(w.$$.fragment,a),W(M.$$.fragment,a),S=!1},d(a){a&&(i($),i(e),i(t),i(s),i(d),i(b),i(r),i(f),i(g),i(R)),C(c,a),C(x,a),C(w,a),C(M,a)}}}function Bt(m){let $,e,t,s,c,d,x,b;return $=new nt({props:{heading:"Partial Fraction Decomposition"}}),t=new G({props:{heading:"Introduction",$$slots:{default:[ft]},$$scope:{ctx:m}}}),c=new G({props:{heading:"Example",$$slots:{default:[_t]},$$scope:{ctx:m}}}),x=new G({props:{heading:"Example #2",$$slots:{default:[wt]},$$scope:{ctx:m}}}),{c(){B($.$$.fragment),e=I(),B(t.$$.fragment),s=I(),B(c.$$.fragment),d=I(),B(x.$$.fragment)},l(r){h($.$$.fragment,r),e=T(r),h(t.$$.fragment,r),s=T(r),h(c.$$.fragment,r),d=T(r),h(x.$$.fragment,r)},m(r,f){v($,r,f),l(r,e,f),v(t,r,f),l(r,s,f),v(c,r,f),l(r,d,f),v(x,r,f),b=!0},p(r,f){const g={};f&1&&(g.$$scope={dirty:f,ctx:r}),t.$set(g);const w={};f&1&&(w.$$scope={dirty:f,ctx:r}),c.$set(w);const R={};f&1&&(R.$$scope={dirty:f,ctx:r}),x.$set(R)},i(r){b||(A($.$$.fragment,r),A(t.$$.fragment,r),A(c.$$.fragment,r),A(x.$$.fragment,r),b=!0)},o(r){W($.$$.fragment,r),W(t.$$.fragment,r),W(c.$$.fragment,r),W(x.$$.fragment,r),b=!1},d(r){r&&(i(e),i(s),i(d)),C($,r),C(t,r),C(c,r),C(x,r)}}}function ht(m){let $,e;return $=new et({props:{$$slots:{default:[Bt]},$$scope:{ctx:m}}}),{c(){B($.$$.fragment)},l(t){h($.$$.fragment,t)},m(t,s){v($,t,s),e=!0},p(t,[s]){const c={};s&1&&(c.$$scope={dirty:s,ctx:t}),$.$set(c)},i(t){e||(A($.$$.fragment,t),e=!0)},o(t){W($.$$.fragment,t),e=!1},d(t){C($,t)}}}function q(m){return m.raw[0]}class Mt extends y{constructor($){super(),tt(this,$,null,ht,Z,{})}}export{Mt as component};
