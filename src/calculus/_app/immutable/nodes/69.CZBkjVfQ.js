import{s as ce,n as O}from"../chunks/CVhLxNSM.js";import{S as _e,i as ge,c as _,b as g,m as x,t as b,a as h,d as w,s as W,e as X,f,g as l,h as o,j as F,k as p,l as S,n as oe}from"../chunks/DvSB8R1X.js";import{L as xe,S as pe,M as T}from"../chunks/ByTZAYyp.js";import{L as be}from"../chunks/xLaKUPuM.js";import{D as $e}from"../chunks/CkoZ7XGi.js";import{s as ne}from"../chunks/NvOCtOX1.js";function he(m){let n=`
				A(x) = f(x)^2
			`,s;return{c(){s=o(n)},l(t){s=p(t,n)},m(t,u){f(t,s,u)},p:O,d(t){t&&l(s)}}}function we(m){let n=`
				A(x) = f(x) \\cdot g(x)
			`,s;return{c(){s=o(n)},l(t){s=p(t,n)},m(t,u){f(t,s,u)},p:O,d(t){t&&l(s)}}}function ve(m){let n;return{c(){n=o("f(x)")},l(s){n=p(s,"f(x)")},m(s,t){f(s,n,t)},d(s){s&&l(n)}}}function qe(m){let n=`
			\\begin{align*}
			A(x) &= \\frac{1}{2} b \\cdot h \\\\\\\\
			&= \\frac{1}{2} b \\cdot \\frac{\\sqrt{3}}{2} b \\\\\\\\
			&= \\frac{\\sqrt{3}}{4} b^2 \\\\\\\\
			&= \\frac{\\sqrt{3}}{4} f(x)^2
			\\end{align*}
			`,s;return{c(){s=o(n)},l(t){s=p(t,n)},m(t,u){f(t,s,u)},p:O,d(t){t&&l(s)}}}function de(m){let n;return{c(){n=o("f(x)=x^2")},l(s){n=p(s,"f(x)=x^2")},m(s,t){f(s,n,t)},d(s){s&&l(n)}}}function Te(m){let n;return{c(){n=o("f(x)")},l(s){n=p(s,"f(x)")},m(s,t){f(s,n,t)},d(s){s&&l(n)}}}function ke(m){let n=`
			\\begin{align*}
			A(x) &= \\frac{1}{2} \\pi r^2 \\\\\\\\
			&= \\frac{1}{2} \\pi \\left(\\frac{d}{2}\\right)^2 \\\\\\\\
			&= \\frac{\\pi}{8} d^2 \\\\\\\\
			&= \\frac{\\pi}{8} f(x)^2
			\\end{align*}
			`,s;return{c(){s=o(n)},l(t){s=p(t,n)},m(t,u){f(t,s,u)},p:O,d(t){t&&l(s)}}}function Re(m){let n;return{c(){n=o("f(x)=x^2")},l(s){n=p(s,"f(x)=x^2")},m(s,t){f(s,n,t)},d(s){s&&l(n)}}}function Be(m){let n,s,t,u,c,B,a,v,R,V,I,C,M,A,P,E,z,D,G,Y,H,J,q,K,d,Q,k,U,N,L;return s=new T({props:{displayMode:!0,$$slots:{default:[he]},$$scope:{ctx:m}}}),a=new T({props:{displayMode:!0,$$slots:{default:[we]},$$scope:{ctx:m}}}),C=new T({props:{$$slots:{default:[ve]},$$scope:{ctx:m}}}),A=new T({props:{displayMode:!0,$$slots:{default:[qe]},$$scope:{ctx:m}}}),E=new T({props:{$$slots:{default:[de]},$$scope:{ctx:m}}}),D=new $e({props:{sketch:ne,sketchParameters:{plotFunction:Oe,dimensions:[0,2],cs:"triangle"}}}),q=new T({props:{$$slots:{default:[Te]},$$scope:{ctx:m}}}),d=new T({props:{displayMode:!0,$$slots:{default:[ke]},$$scope:{ctx:m}}}),k=new T({props:{$$slots:{default:[Re]},$$scope:{ctx:m}}}),N=new $e({props:{sketch:ne,sketchParameters:{plotFunction:je,dimensions:[0,2],cs:"semicircle"}}}),{c(){n=o(`The area of a square cross-section is
		`),_(s.$$.fragment),t=W(),u=F("br"),c=F("br"),B=o(`The volume of a rectangular cross-section is 
		`),_(a.$$.fragment),v=W(),R=F("br"),V=F("br"),I=o("The area of an equilateral triangular cross-section, where the side-length is equal to "),_(C.$$.fragment),M=o(`, is
		`),_(A.$$.fragment),P=o(`
        For example, a solid with a triangle cross-section of `),_(E.$$.fragment),z=o(`.
        `),_(D.$$.fragment),G=W(),Y=F("br"),H=F("br"),J=o("The volume of a semicircular cross-section, where the diameter is equal to "),_(q.$$.fragment),K=o(`, is
		`),_(d.$$.fragment),Q=o(`
        For example, a solid with a semicircular cross-section of `),_(k.$$.fragment),U=o(`.
        `),_(N.$$.fragment)},l($){n=p($,`The area of a square cross-section is
		`),g(s.$$.fragment,$),t=X($),u=S($,"BR",{}),c=S($,"BR",{}),B=p($,`The volume of a rectangular cross-section is 
		`),g(a.$$.fragment,$),v=X($),R=S($,"BR",{}),V=S($,"BR",{}),I=p($,"The area of an equilateral triangular cross-section, where the side-length is equal to "),g(C.$$.fragment,$),M=p($,`, is
		`),g(A.$$.fragment,$),P=p($,`
        For example, a solid with a triangle cross-section of `),g(E.$$.fragment,$),z=p($,`.
        `),g(D.$$.fragment,$),G=X($),Y=S($,"BR",{}),H=S($,"BR",{}),J=p($,"The volume of a semicircular cross-section, where the diameter is equal to "),g(q.$$.fragment,$),K=p($,`, is
		`),g(d.$$.fragment,$),Q=p($,`
        For example, a solid with a semicircular cross-section of `),g(k.$$.fragment,$),U=p($,`.
        `),g(N.$$.fragment,$)},m($,r){f($,n,r),x(s,$,r),f($,t,r),f($,u,r),f($,c,r),f($,B,r),x(a,$,r),f($,v,r),f($,R,r),f($,V,r),f($,I,r),x(C,$,r),f($,M,r),x(A,$,r),f($,P,r),x(E,$,r),f($,z,r),x(D,$,r),f($,G,r),f($,Y,r),f($,H,r),f($,J,r),x(q,$,r),f($,K,r),x(d,$,r),f($,Q,r),x(k,$,r),f($,U,r),x(N,$,r),L=!0},p($,r){const Z={};r&4&&(Z.$$scope={dirty:r,ctx:$}),s.$set(Z);const j={};r&4&&(j.$$scope={dirty:r,ctx:$}),a.$set(j);const y={};r&4&&(y.$$scope={dirty:r,ctx:$}),C.$set(y);const ee={};r&4&&(ee.$$scope={dirty:r,ctx:$}),A.$set(ee);const e={};r&4&&(e.$$scope={dirty:r,ctx:$}),E.$set(e);const i={};r&4&&(i.$$scope={dirty:r,ctx:$}),q.$set(i);const te={};r&4&&(te.$$scope={dirty:r,ctx:$}),d.$set(te);const se={};r&4&&(se.$$scope={dirty:r,ctx:$}),k.$set(se)},i($){L||(b(s.$$.fragment,$),b(a.$$.fragment,$),b(C.$$.fragment,$),b(A.$$.fragment,$),b(E.$$.fragment,$),b(D.$$.fragment,$),b(q.$$.fragment,$),b(d.$$.fragment,$),b(k.$$.fragment,$),b(N.$$.fragment,$),L=!0)},o($){h(s.$$.fragment,$),h(a.$$.fragment,$),h(C.$$.fragment,$),h(A.$$.fragment,$),h(E.$$.fragment,$),h(D.$$.fragment,$),h(q.$$.fragment,$),h(d.$$.fragment,$),h(k.$$.fragment,$),h(N.$$.fragment,$),L=!1},d($){$&&(l(n),l(t),l(u),l(c),l(B),l(v),l(R),l(V),l(I),l(M),l(P),l(z),l(G),l(Y),l(H),l(J),l(K),l(Q),l(U)),w(s,$),w(a,$),w(C,$),w(A,$),w(E,$),w(D,$),w(q,$),w(d,$),w(k,$),w(N,$)}}}function Fe(m){let n="y = \\sqrt{x}",s;return{c(){s=o(n)},l(t){s=p(t,n)},m(t,u){f(t,s,u)},p:O,d(t){t&&l(s)}}}function Se(m){let n;return{c(){n=o("[0,4]")},l(s){n=p(s,"[0,4]")},m(s,t){f(s,n,t)},d(s){s&&l(n)}}}function Ce(m){let n=`
                \\begin{align*}
                \\text{Volume} &= \\int_{0}^{4} A \\cdot d \\\\\\\\
                &= \\int_{0}^{4} \\frac{\\sqrt{3}}{4}f(x)^2 \\cdot d \\\\\\\\
                &= \\int_{0}^{4} \\frac{\\sqrt{3}}{4} x \\, dx \\\\\\\\
                &= \\frac{\\sqrt{3}}{4} \\left[ \\frac{1}{2}x^2 \\right]_0^{4} \\\\\\\\
                &= \\frac{\\sqrt{3}}{8} (16 - 0) \\\\\\\\
                &= 2\\sqrt{3} \\approx 3.464 \\, \\text{units}^3
                \\end{align*}
            `,s;return{c(){s=o(n)},l(t){s=p(t,n)},m(t,u){f(t,s,u)},p:O,d(t){t&&l(s)}}}function Me(m){let n="2\\sqrt{3}",s;return{c(){s=o(n)},l(t){s=p(t,n)},m(t,u){f(t,s,u)},p:O,d(t){t&&l(s)}}}function Ae(m){let n="y = \\sin(x)",s;return{c(){s=o(n)},l(t){s=p(t,n)},m(t,u){f(t,s,u)},p:O,d(t){t&&l(s)}}}function Pe(m){let n="[0, \\pi]",s;return{c(){s=o(n)},l(t){s=p(t,n)},m(t,u){f(t,s,u)},p:O,d(t){t&&l(s)}}}function Ee(m){let n="A(x)=\\frac{\\pi}{8} \\sin^2(x)",s;return{c(){s=o(n)},l(t){s=p(t,n)},m(t,u){f(t,s,u)},p:O,d(t){t&&l(s)}}}function Le(m){let n=`
                \\begin{align*}
				\\text{Volume} &= \\int_{0}^{\\pi} A \\cdot d \\\\\\\\
				&= \\int_{0}^{\\pi} \\frac{\\pi}{8} f(x)^2 \\, dx \\\\\\\\
                &= \\int_{0}^{\\pi} \\frac{\\pi}{8} \\sin^2(x) \\, dx \\\\\\\\
                &= \\frac{\\pi}{8} \\int_{0}^{\\pi} \\frac{1 - \\cos(2x)}{2} \\, dx \\\\\\\\
                &= \\frac{\\pi}{16} \\left[ x - \\frac{\\sin(2x)}{2} \\right]_0^{\\pi} \\\\\\\\
                &= \\frac{\\pi}{16} (\\pi - 0) \\\\\\\\
                &= \\frac{\\pi^2}{16} \\approx 0.617 \\, \\text{units}^3
                \\end{align*}
            `,s;return{c(){s=o(n)},l(t){s=p(t,n)},m(t,u){f(t,s,u)},p:O,d(t){t&&l(s)}}}function Ve(m){let n="\\pi^2/16",s;return{c(){s=o(n)},l(t){s=p(t,n)},m(t,u){f(t,s,u)},p:O,d(t){t&&l(s)}}}function De(m){let n,s="Example 1: Equilateral Triangle Cross Sections",t,u,c,B,a,v,R,V,I,C,M,A,P,E,z,D,G,Y="Example 2: Semicircular Cross Sections",H,J,q,K,d,Q,k,U,N,L,$,r,Z,j,y,ee;return c=new T({props:{$$slots:{default:[Fe]},$$scope:{ctx:m}}}),a=new T({props:{$$slots:{default:[Se]},$$scope:{ctx:m}}}),R=new $e({props:{sketch:ne,sketchParameters:{plotFunction:m[0],dimensions:[0,4],cs:"triangle"}}}),M=new T({props:{displayMode:!0,$$slots:{default:[Ce]},$$scope:{ctx:m}}}),P=new T({props:{$$slots:{default:[Me]},$$scope:{ctx:m}}}),q=new T({props:{$$slots:{default:[Ae]},$$scope:{ctx:m}}}),d=new T({props:{$$slots:{default:[Pe]},$$scope:{ctx:m}}}),k=new $e({props:{sketch:ne,sketchParameters:{plotFunction:m[1],dimensions:[0,3.1415],cs:"semicircle"}}}),L=new T({props:{$$slots:{default:[Ee]},$$scope:{ctx:m}}}),r=new T({props:{displayMode:!0,$$slots:{default:[Le]},$$scope:{ctx:m}}}),j=new T({props:{$$slots:{default:[Ve]},$$scope:{ctx:m}}}),{c(){n=F("strong"),n.textContent=s,t=F("br"),u=o(`
        Find the volume of the solid whose base is bounded by `),_(c.$$.fragment),B=o(" on "),_(a.$$.fragment),v=o(`, with equilateral triangle cross sections perpendicular to the x-axis.
        `),_(R.$$.fragment),V=W(),I=F("br"),C=W(),_(M.$$.fragment),A=o(`
        The volume is `),_(P.$$.fragment),E=o(` cubic units.

        
        `),z=F("br"),D=F("br"),G=F("strong"),G.textContent=Y,H=F("br"),J=o(`
        Find the volume of the solid bounded by `),_(q.$$.fragment),K=o(" and the x-axis on "),_(d.$$.fragment),Q=o(`, with semicircular cross sections perpendicular to the x-axis.
        `),_(k.$$.fragment),U=W(),N=F("br"),_(L.$$.fragment),$=o(`.

        `),_(r.$$.fragment),Z=o(`
        The volume is `),_(j.$$.fragment),y=o(" cubic units.")},l(e){n=S(e,"STRONG",{"data-svelte-h":!0}),oe(n)!=="svelte-17v8ixm"&&(n.textContent=s),t=S(e,"BR",{}),u=p(e,`
        Find the volume of the solid whose base is bounded by `),g(c.$$.fragment,e),B=p(e," on "),g(a.$$.fragment,e),v=p(e,`, with equilateral triangle cross sections perpendicular to the x-axis.
        `),g(R.$$.fragment,e),V=X(e),I=S(e,"BR",{}),C=X(e),g(M.$$.fragment,e),A=p(e,`
        The volume is `),g(P.$$.fragment,e),E=p(e,` cubic units.

        
        `),z=S(e,"BR",{}),D=S(e,"BR",{}),G=S(e,"STRONG",{"data-svelte-h":!0}),oe(G)!=="svelte-i8xvi7"&&(G.textContent=Y),H=S(e,"BR",{}),J=p(e,`
        Find the volume of the solid bounded by `),g(q.$$.fragment,e),K=p(e," and the x-axis on "),g(d.$$.fragment,e),Q=p(e,`, with semicircular cross sections perpendicular to the x-axis.
        `),g(k.$$.fragment,e),U=X(e),N=S(e,"BR",{}),g(L.$$.fragment,e),$=p(e,`.

        `),g(r.$$.fragment,e),Z=p(e,`
        The volume is `),g(j.$$.fragment,e),y=p(e," cubic units.")},m(e,i){f(e,n,i),f(e,t,i),f(e,u,i),x(c,e,i),f(e,B,i),x(a,e,i),f(e,v,i),x(R,e,i),f(e,V,i),f(e,I,i),f(e,C,i),x(M,e,i),f(e,A,i),x(P,e,i),f(e,E,i),f(e,z,i),f(e,D,i),f(e,G,i),f(e,H,i),f(e,J,i),x(q,e,i),f(e,K,i),x(d,e,i),f(e,Q,i),x(k,e,i),f(e,U,i),f(e,N,i),x(L,e,i),f(e,$,i),x(r,e,i),f(e,Z,i),x(j,e,i),f(e,y,i),ee=!0},p(e,i){const te={};i&4&&(te.$$scope={dirty:i,ctx:e}),c.$set(te);const se={};i&4&&(se.$$scope={dirty:i,ctx:e}),a.$set(se);const fe={};i&4&&(fe.$$scope={dirty:i,ctx:e}),M.$set(fe);const le={};i&4&&(le.$$scope={dirty:i,ctx:e}),P.$set(le);const re={};i&4&&(re.$$scope={dirty:i,ctx:e}),q.$set(re);const ie={};i&4&&(ie.$$scope={dirty:i,ctx:e}),d.$set(ie);const me={};i&4&&(me.$$scope={dirty:i,ctx:e}),L.$set(me);const ae={};i&4&&(ae.$$scope={dirty:i,ctx:e}),r.$set(ae);const ue={};i&4&&(ue.$$scope={dirty:i,ctx:e}),j.$set(ue)},i(e){ee||(b(c.$$.fragment,e),b(a.$$.fragment,e),b(R.$$.fragment,e),b(M.$$.fragment,e),b(P.$$.fragment,e),b(q.$$.fragment,e),b(d.$$.fragment,e),b(k.$$.fragment,e),b(L.$$.fragment,e),b(r.$$.fragment,e),b(j.$$.fragment,e),ee=!0)},o(e){h(c.$$.fragment,e),h(a.$$.fragment,e),h(R.$$.fragment,e),h(M.$$.fragment,e),h(P.$$.fragment,e),h(q.$$.fragment,e),h(d.$$.fragment,e),h(k.$$.fragment,e),h(L.$$.fragment,e),h(r.$$.fragment,e),h(j.$$.fragment,e),ee=!1},d(e){e&&(l(n),l(t),l(u),l(B),l(v),l(V),l(I),l(C),l(A),l(E),l(z),l(D),l(G),l(H),l(J),l(K),l(Q),l(U),l(N),l($),l(Z),l(y)),w(c,e),w(a,e),w(R,e),w(M,e),w(P,e),w(q,e),w(d,e),w(k,e),w(L,e),w(r,e),w(j,e)}}}function Ge(m){let n,s,t,u,c,B;return n=new be({props:{heading:"Cross Sections: Triangles and Semicircles"}}),t=new pe({props:{heading:"Introduction",$$slots:{default:[Be]},$$scope:{ctx:m}}}),c=new pe({props:{heading:"Examples",$$slots:{default:[De]},$$scope:{ctx:m}}}),{c(){_(n.$$.fragment),s=W(),_(t.$$.fragment),u=W(),_(c.$$.fragment)},l(a){g(n.$$.fragment,a),s=X(a),g(t.$$.fragment,a),u=X(a),g(c.$$.fragment,a)},m(a,v){x(n,a,v),f(a,s,v),x(t,a,v),f(a,u,v),x(c,a,v),B=!0},p(a,v){const R={};v&4&&(R.$$scope={dirty:v,ctx:a}),t.$set(R);const V={};v&4&&(V.$$scope={dirty:v,ctx:a}),c.$set(V)},i(a){B||(b(n.$$.fragment,a),b(t.$$.fragment,a),b(c.$$.fragment,a),B=!0)},o(a){h(n.$$.fragment,a),h(t.$$.fragment,a),h(c.$$.fragment,a),B=!1},d(a){a&&(l(s),l(u)),w(n,a),w(t,a),w(c,a)}}}function Ne(m){let n,s;return n=new xe({props:{$$slots:{default:[Ge]},$$scope:{ctx:m}}}),{c(){_(n.$$.fragment)},l(t){g(n.$$.fragment,t)},m(t,u){x(n,t,u),s=!0},p(t,[u]){const c={};u&4&&(c.$$scope={dirty:u,ctx:t}),n.$set(c)},i(t){s||(b(n.$$.fragment,t),s=!0)},o(t){h(n.$$.fragment,t),s=!1},d(t){w(n,t)}}}const Oe=m=>m**2,je=m=>m**2;function Ie(m){return[t=>Math.sqrt(t),t=>Math.sin(t)]}class We extends _e{constructor(n){super(),ge(this,n,Ie,Ne,ce,{})}}export{We as component};
