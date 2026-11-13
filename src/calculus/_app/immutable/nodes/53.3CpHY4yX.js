import{s as U,n as L}from"../chunks/CVhLxNSM.js";import{S as V,i as X,c as d,b,m as v,t as w,a as M,d as y,s as j,e as k,f,g as p,h as x,j as A,k as u,l as F}from"../chunks/DvSB8R1X.js";import{L as Y,S as z,M as C}from"../chunks/ByTZAYyp.js";import{L as Z}from"../chunks/xLaKUPuM.js";function tt(o){let n=S`\int \frac{x^3 + 2x^2 - x + 4}{x+1} \, dx`+"",e;return{c(){e=x(n)},l(t){e=u(t,n)},m(t,s){f(t,e,s)},p:L,d(t){t&&p(e)}}}function et(o){let n=S`
			\begin{array}{r} x\phantom{^2}+4\phantom{x+3)} \\
			x-2{\overline{\smash{\big)}\,x^2+2x+3\phantom{)}}}\\
			\underline{-~\phantom{(}(x^2-2x)\phantom{-3}}\\ 
			0+4x+3\phantom{)}\\
			\underline{-~\phantom{()}(4x-8)}\\ 
			0+11\phantom{)} 
			\end{array}
		`+"",e;return{c(){e=x(n)},l(t){e=u(t,n)},m(t,s){f(t,e,s)},p:L,d(t){t&&p(e)}}}function nt(o){let n=S`
			\frac{x^2 + 2x + 3}{x-2} = x + 4 + \frac{11}{x-2}
		`+"",e;return{c(){e=x(n)},l(t){e=u(t,n)},m(t,s){f(t,e,s)},p:L,d(t){t&&p(e)}}}function $t(o){let n,e,t,s,c,R,g,D,m,h;return e=new C({props:{displayMode:!0,$$slots:{default:[tt]},$$scope:{ctx:o}}}),g=new C({props:{displayMode:!0,$$slots:{default:[et]},$$scope:{ctx:o}}}),m=new C({props:{displayMode:!0,$$slots:{default:[nt]},$$scope:{ctx:o}}}),{c(){n=x(`We want to integrate the following:
		`),d(e.$$.fragment),t=x(`
		It is a messy integral, but we can simplify it using polynomial long division.
		polynomials instead of numbers.
		`),s=A("br"),c=A("br"),R=x(`We will divide the numerator by the denominator, resulting in a quotient and remainder.
		`),d(g.$$.fragment),D=j(),d(m.$$.fragment)},l(r){n=u(r,`We want to integrate the following:
		`),b(e.$$.fragment,r),t=u(r,`
		It is a messy integral, but we can simplify it using polynomial long division.
		polynomials instead of numbers.
		`),s=F(r,"BR",{}),c=F(r,"BR",{}),R=u(r,`We will divide the numerator by the denominator, resulting in a quotient and remainder.
		`),b(g.$$.fragment,r),D=k(r),b(m.$$.fragment,r)},m(r,_){f(r,n,_),v(e,r,_),f(r,t,_),f(r,s,_),f(r,c,_),f(r,R,_),v(g,r,_),f(r,D,_),v(m,r,_),h=!0},p(r,_){const T={};_&1&&(T.$$scope={dirty:_,ctx:r}),e.$set(T);const W={};_&1&&(W.$$scope={dirty:_,ctx:r}),g.$set(W);const a={};_&1&&(a.$$scope={dirty:_,ctx:r}),m.$set(a)},i(r){h||(w(e.$$.fragment,r),w(g.$$.fragment,r),w(m.$$.fragment,r),h=!0)},o(r){M(e.$$.fragment,r),M(g.$$.fragment,r),M(m.$$.fragment,r),h=!1},d(r){r&&(p(n),p(t),p(s),p(c),p(R),p(D)),y(e,r),y(g,r),y(m,r)}}}function at(o){let n=S`
			\begin{array}{r} x+1\overline{\smash{\big)}\,x^3 + 2x^2 - x + 4} \end{array}
		`+"",e;return{c(){e=x(n)},l(t){e=u(t,n)},m(t,s){f(t,e,s)},p:L,d(t){t&&p(e)}}}function st(o){let n=S`\begin{array}{r} x^2 \phantom{+ 2x^2 - x + 4} \\ x+1\overline{\smash{\big)}\,x^3 + 2x^2 - x +
			4} \\ \phantom{x}-\phantom{1\smash{\big)}\,}\underline{x^3 + \phantom{1}x^2} \phantom{-x + 4}
			\\ x^2 - x + 4 \end{array}`+"",e;return{c(){e=x(n)},l(t){e=u(t,n)},m(t,s){f(t,e,s)},p:L,d(t){t&&p(e)}}}function mt(o){let n=S`\begin{array}{r} x^2 + \phantom{2}x\phantom{^2 - x + 4} \\ x+1\overline{\smash{\big)}\,x^3 +
			2x^2 - x + 4} \\ \phantom{x}-\phantom{1\smash{\big)}\,}\underline{x^3 + \phantom{1}x^2}
			\phantom{-x + 4} \\ x^2 - x + 4 \\ \phantom{x}-\phantom{1\smash{\big)}\,}\underline{x^2+x}
			\phantom{+ 4} \\ -2x+4 \end{array}`+"",e;return{c(){e=x(n)},l(t){e=u(t,n)},m(t,s){f(t,e,s)},p:L,d(t){t&&p(e)}}}function rt(o){let n=S`\begin{array}{r} x^2 + \phantom{2}x\phantom{^2} - 2 \phantom{+ 4} \\
			x+1\overline{\smash{\big)}\,x^3 + 2x^2 - x + 4} \\
			\phantom{x}-\phantom{1\smash{\big)}\,}\underline{x^3 + \phantom{1}x^2} \phantom{-x + 4} \\ x^2
			- x + 4 \\ \phantom{x}-\phantom{1\smash{\big)}\,}\underline{x^2+x} \phantom{+ 4} \\ -2x+4 \\
			\phantom{x}-\phantom{1\smash{\big)}\,}\underline{-2x-2} \\ 6 \end{array}`+"",e;return{c(){e=x(n)},l(t){e=u(t,n)},m(t,s){f(t,e,s)},p:L,d(t){t&&p(e)}}}function ot(o){let n=S`6`+"",e;return{c(){e=x(n)},l(t){e=u(t,n)},m(t,s){f(t,e,s)},p:L,d(t){t&&p(e)}}}function ft(o){let n=S`x+1`+"",e;return{c(){e=x(n)},l(t){e=u(t,n)},m(t,s){f(t,e,s)},p:L,d(t){t&&p(e)}}}function pt(o){let n=S`
			\begin{align*}
			\int \frac{x^3 + 2x^2 - x + 4}{x+1} \, dx &= \int {x^2 + x - 2 + \frac{6}{x+1} } \, dx \\\\
			&= \frac{x^3}{3} + \frac{x^2}{2} - 2x + 6\ln|x+1| + C
			\end{align*}
		`+"",e;return{c(){e=x(n)},l(t){e=u(t,n)},m(t,s){f(t,e,s)},p:L,d(t){t&&p(e)}}}function lt(o){let n,e,t,s,c,R,g,D,m,h,r,_,T,W;return n=new C({props:{displayMode:!0,$$slots:{default:[at]},$$scope:{ctx:o}}}),t=new C({props:{displayMode:!0,$$slots:{default:[st]},$$scope:{ctx:o}}}),c=new C({props:{displayMode:!0,$$slots:{default:[mt]},$$scope:{ctx:o}}}),g=new C({props:{displayMode:!0,$$slots:{default:[rt]},$$scope:{ctx:o}}}),m=new C({props:{$$slots:{default:[ot]},$$scope:{ctx:o}}}),r=new C({props:{$$slots:{default:[ft]},$$scope:{ctx:o}}}),T=new C({props:{displayMode:!0,$$slots:{default:[pt]},$$scope:{ctx:o}}}),{c(){d(n.$$.fragment),e=x(`
		Divide the highest term of the numerator by the highest term of the denominator.
		`),d(t.$$.fragment),s=x(`
		Repeat.
		`),d(c.$$.fragment),R=x(`
		Repeat.
		`),d(g.$$.fragment),D=x(`
		The `),d(m.$$.fragment),h=x(" is not divisible by "),d(r.$$.fragment),_=x(`, so it is the remainder.
		`),d(T.$$.fragment)},l(a){b(n.$$.fragment,a),e=u(a,`
		Divide the highest term of the numerator by the highest term of the denominator.
		`),b(t.$$.fragment,a),s=u(a,`
		Repeat.
		`),b(c.$$.fragment,a),R=u(a,`
		Repeat.
		`),b(g.$$.fragment,a),D=u(a,`
		The `),b(m.$$.fragment,a),h=u(a," is not divisible by "),b(r.$$.fragment,a),_=u(a,`, so it is the remainder.
		`),b(T.$$.fragment,a)},m(a,i){v(n,a,i),f(a,e,i),v(t,a,i),f(a,s,i),v(c,a,i),f(a,R,i),v(g,a,i),f(a,D,i),v(m,a,i),f(a,h,i),v(r,a,i),f(a,_,i),v(T,a,i),W=!0},p(a,i){const B={};i&1&&(B.$$scope={dirty:i,ctx:a}),n.$set(B);const q={};i&1&&(q.$$scope={dirty:i,ctx:a}),t.$set(q);const I={};i&1&&(I.$$scope={dirty:i,ctx:a}),c.$set(I);const $={};i&1&&($.$$scope={dirty:i,ctx:a}),g.$set($);const l={};i&1&&(l.$$scope={dirty:i,ctx:a}),m.$set(l);const E={};i&1&&(E.$$scope={dirty:i,ctx:a}),r.$set(E);const P={};i&1&&(P.$$scope={dirty:i,ctx:a}),T.$set(P)},i(a){W||(w(n.$$.fragment,a),w(t.$$.fragment,a),w(c.$$.fragment,a),w(g.$$.fragment,a),w(m.$$.fragment,a),w(r.$$.fragment,a),w(T.$$.fragment,a),W=!0)},o(a){M(n.$$.fragment,a),M(t.$$.fragment,a),M(c.$$.fragment,a),M(g.$$.fragment,a),M(m.$$.fragment,a),M(r.$$.fragment,a),M(T.$$.fragment,a),W=!1},d(a){a&&(p(e),p(s),p(R),p(D),p(h),p(_)),y(n,a),y(t,a),y(c,a),y(g,a),y(m,a),y(r,a),y(T,a)}}}function it(o){let n=S`\int \frac{3x^4 - 2x^2 + 5x + 1}{x - 3} \, dx`+"",e;return{c(){e=x(n)},l(t){e=u(t,n)},m(t,s){f(t,e,s)},p:L,d(t){t&&p(e)}}}function xt(o){let n=S`
			\begin{array}{r} x-3\overline{\smash{\big)}\,3x^4 - 2x^2 + 5x + 1} \end{array}
		`+"",e;return{c(){e=x(n)},l(t){e=u(t,n)},m(t,s){f(t,e,s)},p:L,d(t){t&&p(e)}}}function ut(o){let n=S`
			\begin{array}{r} 3x^3 \phantom{-9x^3+ 2x^2 + 5x + 1} \\ x-3\overline{\smash{\big)}\,3x^4
			\phantom{-9x^3}-2x^2 + 5x + 1} \\ \phantom{x}-\phantom{1\smash{\big)}\,}\underline{3x^4 -
			9x^3} \phantom{+2x^2 + 5x + 1} \\ 9x^3 - 2x^2 + 5x + 1 \end{array}
		`+"",e;return{c(){e=x(n)},l(t){e=u(t,n)},m(t,s){f(t,e,s)},p:L,d(t){t&&p(e)}}}function ht(o){let n=S`
			\begin{array}{r} 3x^3+9x^2 \phantom{-22x^2 + 5x + 1} \\ x-3\overline{\smash{\big)}\,3x^4
			\phantom{-9x^3}-\phantom{2}2x^2 + 5x + 1} \\
			\phantom{x}-\phantom{1\smash{\big)}\,}\underline{3x^4 - 9x^3} \phantom{+22x^2 + 5x + 1} \\
			9x^3 - \phantom{2}2x^2 + 5x + 1 \\ \phantom{x}-\phantom{1\smash{\big)}\,}\underline{9x^3 -
			27x^2} \phantom{+5x + 1} \\ 25x^2 + 5x + 1 \end{array}
		`+"",e;return{c(){e=x(n)},l(t){e=u(t,n)},m(t,s){f(t,e,s)},p:L,d(t){t&&p(e)}}}function _t(o){let n=S`
			\begin{array}{r} 3x^3+9x^2 +25x \phantom{^2 + 55x + 1} \\ x-3\overline{\smash{\big)}\,3x^4
			\phantom{-9x^3}-\phantom{2}2x^2 + \phantom{5}5x + 1} \\
			\phantom{x}-\phantom{1\smash{\big)}\,}\underline{3x^4 - 9x^3} \phantom{+22x^2 + 55x + 1} \\
			9x^3 - \phantom{2}2x^2 + \phantom{5}5x + 1 \\
			\phantom{x}-\phantom{1\smash{\big)}\,}\underline{9x^3 - 27x^2} \phantom{+55x + 1} \\ 25x^2 +
			\phantom{5}5x + 1 \\ \phantom{x}-\phantom{1\smash{\big)}\,}\underline{25x^2 - 75x}\phantom{+
			1} \\ 80x + 1 \end{array}
		`+"",e;return{c(){e=x(n)},l(t){e=u(t,n)},m(t,s){f(t,e,s)},p:L,d(t){t&&p(e)}}}function gt(o){let n=S`
			\begin{array}{r} 3x^3+9x^2 +25x \phantom{^2} + \phantom{x}80 \phantom{+ 271} \\
			x-3\overline{\smash{\big)}\,3x^4 \phantom{-9x^3}-\phantom{2}2x^2 + \phantom{5}5x +
			\phantom{27}1} \\ \phantom{x}-\phantom{1\smash{\big)}\,}\underline{3x^4 - 9x^3}
			\phantom{+22x^2 + 55x + 271} \\ 9x^3 - \phantom{2}2x^2 + \phantom{5}5x + \phantom{27}1 \\
			\phantom{x}-\phantom{1\smash{\big)}\,}\underline{9x^3 - 27x^2} \phantom{+55x + 271} \\ 25x^2 +
			\phantom{5}5x + \phantom{27}1 \\ \phantom{x}-\phantom{1\smash{\big)}\,}\underline{25x^2 -
			75x}\phantom{+ 271} \\ 80x + \phantom{27}1 \\
			\phantom{x}-\phantom{1\smash{\big)}\,}\underline{80x-240} \\ 241 \end{array}
		`+"",e;return{c(){e=x(n)},l(t){e=u(t,n)},m(t,s){f(t,e,s)},p:L,d(t){t&&p(e)}}}function ct(o){let n=S`241`+"",e;return{c(){e=x(n)},l(t){e=u(t,n)},m(t,s){f(t,e,s)},p:L,d(t){t&&p(e)}}}function dt(o){let n=S`x-3`+"",e;return{c(){e=x(n)},l(t){e=u(t,n)},m(t,s){f(t,e,s)},p:L,d(t){t&&p(e)}}}function bt(o){let n=S`
			\begin{align*} 
			\int \frac{3x^4 - 2x^2 + 5x + 1}{x - 3} \, dx &= \int {3x^3 + 9x^2 + 25x + 80
			+ \frac{241}{x-3} } \, dx \\ 
			&= \frac{3x^4}{4} + 3x^3 + \frac{25x^2}{2} + 80x + 241\ln|x-3| + C 
			\end{align*}
		`+"",e;return{c(){e=x(n)},l(t){e=u(t,n)},m(t,s){f(t,e,s)},p:L,d(t){t&&p(e)}}}function vt(o){let n,e,t,s,c,R,g,D,m,h,r,_,T,W,a,i,B,q,I;return n=new C({props:{displayMode:!0,$$slots:{default:[it]},$$scope:{ctx:o}}}),s=new C({props:{displayMode:!0,$$slots:{default:[xt]},$$scope:{ctx:o}}}),R=new C({props:{displayMode:!0,$$slots:{default:[ut]},$$scope:{ctx:o}}}),D=new C({props:{displayMode:!0,$$slots:{default:[ht]},$$scope:{ctx:o}}}),h=new C({props:{displayMode:!0,$$slots:{default:[_t]},$$scope:{ctx:o}}}),_=new C({props:{displayMode:!0,$$slots:{default:[gt]},$$scope:{ctx:o}}}),W=new C({props:{$$slots:{default:[ct]},$$scope:{ctx:o}}}),i=new C({props:{$$slots:{default:[dt]},$$scope:{ctx:o}}}),q=new C({props:{displayMode:!0,$$slots:{default:[bt]},$$scope:{ctx:o}}}),{c(){d(n.$$.fragment),e=j(),t=A("br"),d(s.$$.fragment),c=x(`
		Divide the highest term of the numerator by the highest term of the denominator.
		`),d(R.$$.fragment),g=x(`
		Repeat.
		`),d(D.$$.fragment),m=x(`
		Repeat.
		`),d(h.$$.fragment),r=x(`
		Repeat.
		`),d(_.$$.fragment),T=x(`
		The `),d(W.$$.fragment),a=x(" is not divisible by "),d(i.$$.fragment),B=x(`, so it is the remainder.
		`),d(q.$$.fragment)},l($){b(n.$$.fragment,$),e=k($),t=F($,"BR",{}),b(s.$$.fragment,$),c=u($,`
		Divide the highest term of the numerator by the highest term of the denominator.
		`),b(R.$$.fragment,$),g=u($,`
		Repeat.
		`),b(D.$$.fragment,$),m=u($,`
		Repeat.
		`),b(h.$$.fragment,$),r=u($,`
		Repeat.
		`),b(_.$$.fragment,$),T=u($,`
		The `),b(W.$$.fragment,$),a=u($," is not divisible by "),b(i.$$.fragment,$),B=u($,`, so it is the remainder.
		`),b(q.$$.fragment,$)},m($,l){v(n,$,l),f($,e,l),f($,t,l),v(s,$,l),f($,c,l),v(R,$,l),f($,g,l),v(D,$,l),f($,m,l),v(h,$,l),f($,r,l),v(_,$,l),f($,T,l),v(W,$,l),f($,a,l),v(i,$,l),f($,B,l),v(q,$,l),I=!0},p($,l){const E={};l&1&&(E.$$scope={dirty:l,ctx:$}),n.$set(E);const P={};l&1&&(P.$$scope={dirty:l,ctx:$}),s.$set(P);const G={};l&1&&(G.$$scope={dirty:l,ctx:$}),R.$set(G);const H={};l&1&&(H.$$scope={dirty:l,ctx:$}),D.$set(H);const J={};l&1&&(J.$$scope={dirty:l,ctx:$}),h.$set(J);const K={};l&1&&(K.$$scope={dirty:l,ctx:$}),_.$set(K);const N={};l&1&&(N.$$scope={dirty:l,ctx:$}),W.$set(N);const O={};l&1&&(O.$$scope={dirty:l,ctx:$}),i.$set(O);const Q={};l&1&&(Q.$$scope={dirty:l,ctx:$}),q.$set(Q)},i($){I||(w(n.$$.fragment,$),w(s.$$.fragment,$),w(R.$$.fragment,$),w(D.$$.fragment,$),w(h.$$.fragment,$),w(_.$$.fragment,$),w(W.$$.fragment,$),w(i.$$.fragment,$),w(q.$$.fragment,$),I=!0)},o($){M(n.$$.fragment,$),M(s.$$.fragment,$),M(R.$$.fragment,$),M(D.$$.fragment,$),M(h.$$.fragment,$),M(_.$$.fragment,$),M(W.$$.fragment,$),M(i.$$.fragment,$),M(q.$$.fragment,$),I=!1},d($){$&&(p(e),p(t),p(c),p(g),p(m),p(r),p(T),p(a),p(B)),y(n,$),y(s,$),y(R,$),y(D,$),y(h,$),y(_,$),y(W,$),y(i,$),y(q,$)}}}function wt(o){let n,e,t,s,c,R,g,D;return n=new Z({props:{heading:"Polynomial Division"}}),t=new z({props:{heading:"Introduction",$$slots:{default:[$t]},$$scope:{ctx:o}}}),c=new z({props:{heading:"Example #1",$$slots:{default:[lt]},$$scope:{ctx:o}}}),g=new z({props:{heading:"Example #2",$$slots:{default:[vt]},$$scope:{ctx:o}}}),{c(){d(n.$$.fragment),e=j(),d(t.$$.fragment),s=j(),d(c.$$.fragment),R=j(),d(g.$$.fragment)},l(m){b(n.$$.fragment,m),e=k(m),b(t.$$.fragment,m),s=k(m),b(c.$$.fragment,m),R=k(m),b(g.$$.fragment,m)},m(m,h){v(n,m,h),f(m,e,h),v(t,m,h),f(m,s,h),v(c,m,h),f(m,R,h),v(g,m,h),D=!0},p(m,h){const r={};h&1&&(r.$$scope={dirty:h,ctx:m}),t.$set(r);const _={};h&1&&(_.$$scope={dirty:h,ctx:m}),c.$set(_);const T={};h&1&&(T.$$scope={dirty:h,ctx:m}),g.$set(T)},i(m){D||(w(n.$$.fragment,m),w(t.$$.fragment,m),w(c.$$.fragment,m),w(g.$$.fragment,m),D=!0)},o(m){M(n.$$.fragment,m),M(t.$$.fragment,m),M(c.$$.fragment,m),M(g.$$.fragment,m),D=!1},d(m){m&&(p(e),p(s),p(R)),y(n,m),y(t,m),y(c,m),y(g,m)}}}function Mt(o){let n,e;return n=new Y({props:{$$slots:{default:[wt]},$$scope:{ctx:o}}}),{c(){d(n.$$.fragment)},l(t){b(n.$$.fragment,t)},m(t,s){v(n,t,s),e=!0},p(t,[s]){const c={};s&1&&(c.$$scope={dirty:s,ctx:t}),n.$set(c)},i(t){e||(w(n.$$.fragment,t),e=!0)},o(t){M(n.$$.fragment,t),e=!1},d(t){y(n,t)}}}function S(o){return o.raw[0]}class Ct extends V{constructor(n){super(),X(this,n,null,Mt,U,{})}}export{Ct as component};
