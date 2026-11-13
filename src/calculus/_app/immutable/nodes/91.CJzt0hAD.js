import{s as Pt,n as w}from"../chunks/CVhLxNSM.js";import{S as zt,i as At,c as _,b as p,m as c,t as o,a as g,d as x,s as fe,e as se,f as l,g as r,h as u,j as R,k as a,l as d,n as _e}from"../chunks/DvSB8R1X.js";import{L as Ht,S as lt,M as v}from"../chunks/ByTZAYyp.js";import{L as Jt}from"../chunks/xLaKUPuM.js";function Kt(m){let f=M`
            f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!} (x - a)^n
            `+"",n;return{c(){n=u(f)},l(t){n=a(t,f)},m(t,s){l(t,n,s)},p:w,d(t){t&&r(n)}}}function Qt(m){let f=M`a=0`+"",n;return{c(){n=u(f)},l(t){n=a(t,f)},m(t,s){l(t,n,s)},p:w,d(t){t&&r(n)}}}function Ut(m){let f=M`
            f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!} x^n
            `+"",n;return{c(){n=u(f)},l(t){n=a(t,f)},m(t,s){l(t,n,s)},p:w,d(t){t&&r(n)}}}function Vt(m){let f,n,t,s,h,B,C,S,T,y;return n=new v({props:{displayMode:!0,$$slots:{default:[Kt]},$$scope:{ctx:m}}}),C=new v({props:{$$slots:{default:[Qt]},$$scope:{ctx:m}}}),T=new v({props:{displayMode:!0,$$slots:{default:[Ut]},$$scope:{ctx:m}}}),{c(){f=u(`Taylor Series:
		`),_(n.$$.fragment),t=fe(),s=R("br"),h=R("br"),B=u(`
		Maclaurin Series (Taylor Series centered at `),_(C.$$.fragment),S=u(`):
		`),_(T.$$.fragment)},l(i){f=a(i,`Taylor Series:
		`),p(n.$$.fragment,i),t=se(i),s=d(i,"BR",{}),h=d(i,"BR",{}),B=a(i,`
		Maclaurin Series (Taylor Series centered at `),p(C.$$.fragment,i),S=a(i,`):
		`),p(T.$$.fragment,i)},m(i,b){l(i,f,b),c(n,i,b),l(i,t,b),l(i,s,b),l(i,h,b),l(i,B,b),c(C,i,b),l(i,S,b),c(T,i,b),y=!0},p(i,b){const F={};b&1&&(F.$$scope={dirty:b,ctx:i}),n.$set(F);const E={};b&1&&(E.$$scope={dirty:b,ctx:i}),C.$set(E);const q={};b&1&&(q.$$scope={dirty:b,ctx:i}),T.$set(q)},i(i){y||(o(n.$$.fragment,i),o(C.$$.fragment,i),o(T.$$.fragment,i),y=!0)},o(i){g(n.$$.fragment,i),g(C.$$.fragment,i),g(T.$$.fragment,i),y=!1},d(i){i&&(r(f),r(t),r(s),r(h),r(B),r(S)),x(n,i),x(C,i),x(T,i)}}}function Xt(m){let f=M`
            \begin{align*}
            e^x &= \sum_{n=0}^{\infty} \frac{x^n}{n!} \\\\
            \cos x &= \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!} \\\\
            \sin x &= \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!} \\\\
            \frac{1}{1-x} &= \sum_{n=0}^{\infty} x^n \quad \text{for } |x| < 1
            \end{align*}
            `+"",n;return{c(){n=u(f)},l(t){n=a(t,f)},m(t,s){l(t,n,s)},p:w,d(t){t&&r(n)}}}function Yt(m){let f,n;return f=new v({props:{displayMode:!0,$$slots:{default:[Xt]},$$scope:{ctx:m}}}),{c(){_(f.$$.fragment)},l(t){p(f.$$.fragment,t)},m(t,s){c(f,t,s),n=!0},p(t,s){const h={};s&1&&(h.$$scope={dirty:s,ctx:t}),f.$set(h)},i(t){n||(o(f.$$.fragment,t),n=!0)},o(t){g(f.$$.fragment,t),n=!1},d(t){x(f,t)}}}function Zt(m){let f=M`
        \begin{align*}
        f(x) &= \sum_{n=0}^{\infty} a_n x^n \\\\
        f'(x) &= \frac{d}{dx} \left[ \sum_{n=0}^{\infty} a_n x^n \right] = \sum_{n=1}^{\infty} n a_n x^{n-1} \\\\
        \int f(x) \, dx &= \int \left[ \sum_{n=0}^{\infty} a_n x^n \right] dx = \sum_{n=0}^{\infty} \frac{a_n}{n+1} x^{n+1} + C
        \end{align*}
        `+"",n;return{c(){n=u(f)},l(t){n=a(t,f)},m(t,s){l(t,n,s)},p:w,d(t){t&&r(n)}}}function en(m){let f,n,t;return n=new v({props:{displayMode:!0,$$slots:{default:[Zt]},$$scope:{ctx:m}}}),{c(){f=u(`We can use differentiation and integration of known power series to find the taylor series
		representations of other functions. These operations are done term-by-term within the radius of
		convergence (for converging series).
		`),_(n.$$.fragment)},l(s){f=a(s,`We can use differentiation and integration of known power series to find the taylor series
		representations of other functions. These operations are done term-by-term within the radius of
		convergence (for converging series).
		`),p(n.$$.fragment,s)},m(s,h){l(s,f,h),c(n,s,h),t=!0},p(s,h){const B={};h&1&&(B.$$scope={dirty:h,ctx:s}),n.$set(B)},i(s){t||(o(n.$$.fragment,s),t=!0)},o(s){g(n.$$.fragment,s),t=!1},d(s){s&&r(f),x(n,s)}}}function tn(m){let f=M`f(x) = \cos(x)`+"",n;return{c(){n=u(f)},l(t){n=a(t,f)},m(t,s){l(t,n,s)},p:w,d(t){t&&r(n)}}}function nn(m){let f=M`\sin(x)`+"",n;return{c(){n=u(f)},l(t){n=a(t,f)},m(t,s){l(t,n,s)},p:w,d(t){t&&r(n)}}}function $n(m){let f=M`
                    \begin{align*}
                    \sin(x) &= \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!} \\
                    \frac{d}{dx} \left[ \sin(x) \right] &= \frac{d}{dx} \left[ \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!} \right] \\
                    \cos(x) &= \sum_{n=0}^{\infty} \frac{d}{dx} \left[ \frac{(-1)^n x^{2n+1}}{(2n+1)!} \right] \\
                    &= \sum_{n=0}^{\infty} \frac{(-1)^n (2n+1) x^{2n}}{(2n+1)!} \\
                    &= \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!}
                    \end{align*}
                `+"",n;return{c(){n=u(f)},l(t){n=a(t,f)},m(t,s){l(t,n,s)},p:w,d(t){t&&r(n)}}}function fn(m){let f=M`\cos(x)`+"",n;return{c(){n=u(f)},l(t){n=a(t,f)},m(t,s){l(t,n,s)},p:w,d(t){t&&r(n)}}}function sn(m){let f=M`\sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!}`+"",n;return{c(){n=u(f)},l(t){n=a(t,f)},m(t,s){l(t,n,s)},p:w,d(t){t&&r(n)}}}function ln(m){let f=M`f(x) = \frac{1}{(1-x)^2}`+"",n;return{c(){n=u(f)},l(t){n=a(t,f)},m(t,s){l(t,n,s)},p:w,d(t){t&&r(n)}}}function rn(m){let f=M`\frac{1}{1-x}`+"",n;return{c(){n=u(f)},l(t){n=a(t,f)},m(t,s){l(t,n,s)},p:w,d(t){t&&r(n)}}}function mn(m){let f=M`
                    \begin{align*}
                    \frac{1}{1-x} &= \sum_{n=0}^{\infty} x^n \\
                    \frac{d}{dx} \left[ \frac{1}{1-x} \right] &= \frac{d}{dx} \left[ \sum_{n=0}^{\infty} x^n \right] \\
                    \frac{1}{(1-x)^2} &= \sum_{n=0}^{\infty} \frac{d}{dx} \left[ x^n \right] \\
                    &= \sum_{n=0}^{\infty} n x^{n-1} \\
                    &= \sum_{n=1}^{\infty} n x^{n-1} \quad \text{Exclude } n=0 \text{ as } a_0 = 0x^{-1}=0 \\
                    &= \sum_{n=0}^{\infty} (n+1) x^{n} \quad \text{Re-index } n \to n+1
                    \end{align*}
                `+"",n;return{c(){n=u(f)},l(t){n=a(t,f)},m(t,s){l(t,n,s)},p:w,d(t){t&&r(n)}}}function un(m){let f=M`\frac{1}{(1-x)^2}`+"",n;return{c(){n=u(f)},l(t){n=a(t,f)},m(t,s){l(t,n,s)},p:w,d(t){t&&r(n)}}}function an(m){let f=M`\sum_{n=0}^{\infty} (n+1) x^{n}`+"",n;return{c(){n=u(f)},l(t){n=a(t,f)},m(t,s){l(t,n,s)},p:w,d(t){t&&r(n)}}}function _n(m){let f=M`f(x) = \cosh(x)`+"",n;return{c(){n=u(f)},l(t){n=a(t,f)},m(t,s){l(t,n,s)},p:w,d(t){t&&r(n)}}}function pn(m){let f=M`\sinh(x)`+"",n;return{c(){n=u(f)},l(t){n=a(t,f)},m(t,s){l(t,n,s)},p:w,d(t){t&&r(n)}}}function cn(m){let f=M`
                    \begin{align*}
                    \sinh(x) &= \sum_{n=0}^{\infty} \frac{x^{2n+1}}{(2n+1)!} \\
                    \frac{d}{dx} \left[ \sinh(x) \right] &= \frac{d}{dx} \left[ \sum_{n=0}^{\infty} \frac{x^{2n+1}}{(2n+1)!} \right] \\
                    \cosh(x) &= \sum_{n=0}^{\infty} \frac{d}{dx} \left[ \frac{x^{2n+1}}{(2n+1)!} \right] \\
                    &= \sum_{n=0}^{\infty} \frac{(2n+1) x^{2n}}{(2n+1)!} \\
                    &= \sum_{n=0}^{\infty} \frac{x^{2n}}{(2n)!}
                    \end{align*}
                `+"",n;return{c(){n=u(f)},l(t){n=a(t,f)},m(t,s){l(t,n,s)},p:w,d(t){t&&r(n)}}}function on(m){let f=M`\cosh(x)`+"",n;return{c(){n=u(f)},l(t){n=a(t,f)},m(t,s){l(t,n,s)},p:w,d(t){t&&r(n)}}}function gn(m){let f=M`\sum_{n=0}^{\infty} \frac{x^{2n}}{(2n)!}`+"",n;return{c(){n=u(f)},l(t){n=a(t,f)},m(t,s){l(t,n,s)},p:w,d(t){t&&r(n)}}}function xn(m){let f=M`f(x) = -\ln(1-x)`+"",n;return{c(){n=u(f)},l(t){n=a(t,f)},m(t,s){l(t,n,s)},p:w,d(t){t&&r(n)}}}function bn(m){let f=M`\frac{1}{1-x}`+"",n;return{c(){n=u(f)},l(t){n=a(t,f)},m(t,s){l(t,n,s)},p:w,d(t){t&&r(n)}}}function vn(m){let f=M`
                    \begin{align*}
                    \frac{1}{1-x} &= \sum_{n=0}^{\infty} x^n \\
                    \int \frac{1}{1-x} \, dx &= \int \left[ \sum_{n=0}^{\infty} x^n \right] dx \\
                    -\ln(1-x) &= \sum_{n=0}^{\infty} \int x^n \, dx \\
                    &= \sum_{n=0}^{\infty} \frac{x^{n+1}}{n+1} + C \\\\
                    \text{To find C, set } x&=0 \\
                    -\ln(1-0) &= 0 = \sum_{n=0}^{\infty} \frac{0^{n+1}}{n+1} + C = C \\
                    C &= 0 \\\\
                    -\ln(1-x) &= \sum_{n=0}^{\infty} \frac{x^{n+1}}{n+1} \\
                    &= \sum_{n=1}^{\infty} \frac{x^{n}}{n} \quad \text{Re-index } n \to n-1
                    \end{align*}
                    `+"",n;return{c(){n=u(f)},l(t){n=a(t,f)},m(t,s){l(t,n,s)},p:w,d(t){t&&r(n)}}}function wn(m){let f=M`-\ln(1-x)`+"",n;return{c(){n=u(f)},l(t){n=a(t,f)},m(t,s){l(t,n,s)},p:w,d(t){t&&r(n)}}}function Mn(m){let f=M`\sum_{n=1}^{\infty} \frac{x^{n}}{n}`+"",n;return{c(){n=u(f)},l(t){n=a(t,f)},m(t,s){l(t,n,s)},p:w,d(t){t&&r(n)}}}function hn(m){let f=M`f(x) = \arctan(x)`+"",n;return{c(){n=u(f)},l(t){n=a(t,f)},m(t,s){l(t,n,s)},p:w,d(t){t&&r(n)}}}function Cn(m){let f=M`\frac{1}{1+x^2}`+"",n;return{c(){n=u(f)},l(t){n=a(t,f)},m(t,s){l(t,n,s)},p:w,d(t){t&&r(n)}}}function Tn(m){let f=M`
                    \begin{align*}
                    \frac{1}{1+x^2} &= \sum_{n=0}^{\infty} (-1)^n x^{2n} \\
                    \int \frac{1}{1+x^2} \, dx &= \int \left[ \sum_{n=0}^{\infty} (-1)^n x^{2n} \right] dx \\
                    \arctan(x) &= \sum_{n=0}^{\infty} \int (-1)^n x^{2n} \, dx \\
                    &= \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{2n+1} + C \\\\
                    \text{To find C, set } x&=0 \\
                    \arctan(0) &= 0 = \sum_{n=0}^{\infty} \frac{(-1)^n 0^{2n+1}}{2n+1} + C = C \\
                    C &= 0 \\\\
                    \arctan(x) &= \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{2n+1}
                    \end{align*}
                `+"",n;return{c(){n=u(f)},l(t){n=a(t,f)},m(t,s){l(t,n,s)},p:w,d(t){t&&r(n)}}}function Rn(m){let f=M`\arctan(x)`+"",n;return{c(){n=u(f)},l(t){n=a(t,f)},m(t,s){l(t,n,s)},p:w,d(t){t&&r(n)}}}function dn(m){let f=M`\sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{2n+1}`+"",n;return{c(){n=u(f)},l(t){n=a(t,f)},m(t,s){l(t,n,s)},p:w,d(t){t&&r(n)}}}function Bn(m){let f=M`e^x`+"",n;return{c(){n=u(f)},l(t){n=a(t,f)},m(t,s){l(t,n,s)},p:w,d(t){t&&r(n)}}}function Sn(m){let f=M`e^x`+"",n;return{c(){n=u(f)},l(t){n=a(t,f)},m(t,s){l(t,n,s)},p:w,d(t){t&&r(n)}}}function yn(m){let f=M`
                            \begin{align*}
                            e^x &= \sum_{n=0}^{\infty} \frac{x^n}{n!} \\
                            \int e^x \, dx &= \int \left[ \sum_{n=0}^{\infty} \frac{x^n}{n!} \right] dx \\
                            &= \sum_{n=0}^{\infty} \int \frac{x^n}{n!} \, dx \\
                            e^x &= \sum_{n=0}^{\infty} \frac{x^{n+1}}{(n+1)!} + C \\\\
                            \text{To find C, set } x&=0 \\
                            e^0 &= 1 = \sum_{n=0}^{\infty} \frac{0^{n+1}}{(n+1)!} + C = C \\
                            C &= 1 \\\\
                            e^x &= 1 + \sum_{n=0}^{\infty} \frac{x^{n+1}}{(n+1)!} \\
                            &= 1 + \sum_{n=1}^{\infty} \frac{x^{n}}{n!} \quad \text{Re-index } n \to n-1 \\
                            &= \frac{x^{0}}{0!} + \sum_{n=1}^{\infty} \frac{x^{n}}{n!} \\
                            &= \sum_{n=0}^{\infty} \frac{x^{n}}{n!} \\
                            
                            \end{align*}
                        `+"",n;return{c(){n=u(f)},l(t){n=a(t,f)},m(t,s){l(t,n,s)},p:w,d(t){t&&r(n)}}}function Fn(m){let f=M`e^x`+"",n;return{c(){n=u(f)},l(t){n=a(t,f)},m(t,s){l(t,n,s)},p:w,d(t){t&&r(n)}}}function En(m){let f=M`\sum_{n=0}^{\infty} \frac{x^{n}}{n!}`+"",n;return{c(){n=u(f)},l(t){n=a(t,f)},m(t,s){l(t,n,s)},p:w,d(t){t&&r(n)}}}function qn(m){let f,n="Example 1: Derivation",t,s,h,B,C,S,T,y,i,b,F,E,q,le,pe,re,rt="Example 2: Derivation",ce,oe,N,ge,G,xe,O,be,k,ve,D,we,Me,he,Ce,ie,it="Example 3: Derivation",Te,Re,I,de,L,Be,W,Se,j,ye,P,Fe,Ee,qe,me,mt="Example 4: Integration",Ne,Ge,z,Oe,A,ke,H,De,J,Ie,K,Le,We,je,Pe,ue,ut="Example 5: Integration",ze,Ae,Q,He,U,Je,V,Ke,X,Qe,Y,Ue,Ve,Xe,ae,at="Example 6: Integration",Ye,Ze,Z,et,ee,tt,te,nt,ne,$t,$e,ft,st;return h=new v({props:{$$slots:{default:[tn]},$$scope:{ctx:m}}}),C=new v({props:{$$slots:{default:[nn]},$$scope:{ctx:m}}}),T=new v({props:{displayMode:!0,$$slots:{default:[$n]},$$scope:{ctx:m}}}),i=new v({props:{$$slots:{default:[fn]},$$scope:{ctx:m}}}),F=new v({props:{$$slots:{default:[sn]},$$scope:{ctx:m}}}),N=new v({props:{$$slots:{default:[ln]},$$scope:{ctx:m}}}),G=new v({props:{$$slots:{default:[rn]},$$scope:{ctx:m}}}),O=new v({props:{displayMode:!0,$$slots:{default:[mn]},$$scope:{ctx:m}}}),k=new v({props:{$$slots:{default:[un]},$$scope:{ctx:m}}}),D=new v({props:{$$slots:{default:[an]},$$scope:{ctx:m}}}),I=new v({props:{$$slots:{default:[_n]},$$scope:{ctx:m}}}),L=new v({props:{$$slots:{default:[pn]},$$scope:{ctx:m}}}),W=new v({props:{displayMode:!0,$$slots:{default:[cn]},$$scope:{ctx:m}}}),j=new v({props:{$$slots:{default:[on]},$$scope:{ctx:m}}}),P=new v({props:{$$slots:{default:[gn]},$$scope:{ctx:m}}}),z=new v({props:{$$slots:{default:[xn]},$$scope:{ctx:m}}}),A=new v({props:{$$slots:{default:[bn]},$$scope:{ctx:m}}}),H=new v({props:{displayMode:!0,$$slots:{default:[vn]},$$scope:{ctx:m}}}),J=new v({props:{$$slots:{default:[wn]},$$scope:{ctx:m}}}),K=new v({props:{$$slots:{default:[Mn]},$$scope:{ctx:m}}}),Q=new v({props:{$$slots:{default:[hn]},$$scope:{ctx:m}}}),U=new v({props:{$$slots:{default:[Cn]},$$scope:{ctx:m}}}),V=new v({props:{displayMode:!0,$$slots:{default:[Tn]},$$scope:{ctx:m}}}),X=new v({props:{$$slots:{default:[Rn]},$$scope:{ctx:m}}}),Y=new v({props:{$$slots:{default:[dn]},$$scope:{ctx:m}}}),Z=new v({props:{$$slots:{default:[Bn]},$$scope:{ctx:m}}}),ee=new v({props:{$$slots:{default:[Sn]},$$scope:{ctx:m}}}),te=new v({props:{displayMode:!0,$$slots:{default:[yn]},$$scope:{ctx:m}}}),ne=new v({props:{$$slots:{default:[Fn]},$$scope:{ctx:m}}}),$e=new v({props:{$$slots:{default:[En]},$$scope:{ctx:m}}}),{c(){f=R("strong"),f.textContent=n,t=R("br"),s=u(`
            Find the Maclaurin series for `),_(h.$$.fragment),B=u(" by differentiating the Maclaurin series for "),_(C.$$.fragment),S=u(`.
            `),_(T.$$.fragment),y=u(`
            The Maclaurin series for `),_(i.$$.fragment),b=u(" is "),_(F.$$.fragment),E=u(`.

            `),q=R("br"),le=R("br"),pe=fe(),re=R("strong"),re.textContent=rt,ce=R("br"),oe=u(`
            Find the Maclaurin series for `),_(N.$$.fragment),ge=u(" by differentiating the Maclaurin series for "),_(G.$$.fragment),xe=u(`.
            `),_(O.$$.fragment),be=u(`
            The Maclaurin series for `),_(k.$$.fragment),ve=u(" is "),_(D.$$.fragment),we=u(`.

            `),Me=R("br"),he=R("br"),Ce=fe(),ie=R("strong"),ie.textContent=it,Te=R("br"),Re=u(`
            Find the Maclaurin series for `),_(I.$$.fragment),de=u(" by differentiating the Maclaurin series of "),_(L.$$.fragment),Be=u(`.
            `),_(W.$$.fragment),Se=u(`
            The Maclaurin series for `),_(j.$$.fragment),ye=u(" is "),_(P.$$.fragment),Fe=u(`.
            `),Ee=R("br"),qe=R("br"),me=R("strong"),me.textContent=mt,Ne=R("br"),Ge=u(`
            Find the Maclaurin series for `),_(z.$$.fragment),Oe=u(" by integrating the Maclaurin series for "),_(A.$$.fragment),ke=u(`.
            `),_(H.$$.fragment),De=u(`
            The Maclaurin series for `),_(J.$$.fragment),Ie=u(" is "),_(K.$$.fragment),Le=u(`.

            `),We=R("br"),je=R("br"),Pe=fe(),ue=R("strong"),ue.textContent=ut,ze=R("br"),Ae=u(`
            Find the Maclaurin series for `),_(Q.$$.fragment),He=u(" by integrating the Maclaurin series for "),_(U.$$.fragment),Je=u(`.
            `),_(V.$$.fragment),Ke=u(`
            The Maclaurin series for `),_(X.$$.fragment),Qe=u(" is "),_(Y.$$.fragment),Ue=u(`.

            `),Ve=R("br"),Xe=R("br"),ae=R("strong"),ae.textContent=at,Ye=R("br"),Ze=u(`
                    Find the Maclaurin series for `),_(Z.$$.fragment),et=u(" by integrating the Maclaurin series for "),_(ee.$$.fragment),tt=u(`.
                    `),_(te.$$.fragment),nt=u(`
                    The Maclaurin series for `),_(ne.$$.fragment),$t=u(" is "),_($e.$$.fragment),ft=u(".")},l(e){f=d(e,"STRONG",{"data-svelte-h":!0}),_e(f)!=="svelte-165hhcw"&&(f.textContent=n),t=d(e,"BR",{}),s=a(e,`
            Find the Maclaurin series for `),p(h.$$.fragment,e),B=a(e," by differentiating the Maclaurin series for "),p(C.$$.fragment,e),S=a(e,`.
            `),p(T.$$.fragment,e),y=a(e,`
            The Maclaurin series for `),p(i.$$.fragment,e),b=a(e," is "),p(F.$$.fragment,e),E=a(e,`.

            `),q=d(e,"BR",{}),le=d(e,"BR",{}),pe=se(e),re=d(e,"STRONG",{"data-svelte-h":!0}),_e(re)!=="svelte-1kg2v1n"&&(re.textContent=rt),ce=d(e,"BR",{}),oe=a(e,`
            Find the Maclaurin series for `),p(N.$$.fragment,e),ge=a(e," by differentiating the Maclaurin series for "),p(G.$$.fragment,e),xe=a(e,`.
            `),p(O.$$.fragment,e),be=a(e,`
            The Maclaurin series for `),p(k.$$.fragment,e),ve=a(e," is "),p(D.$$.fragment,e),we=a(e,`.

            `),Me=d(e,"BR",{}),he=d(e,"BR",{}),Ce=se(e),ie=d(e,"STRONG",{"data-svelte-h":!0}),_e(ie)!=="svelte-12oftmq"&&(ie.textContent=it),Te=d(e,"BR",{}),Re=a(e,`
            Find the Maclaurin series for `),p(I.$$.fragment,e),de=a(e," by differentiating the Maclaurin series of "),p(L.$$.fragment,e),Be=a(e,`.
            `),p(W.$$.fragment,e),Se=a(e,`
            The Maclaurin series for `),p(j.$$.fragment,e),ye=a(e," is "),p(P.$$.fragment,e),Fe=a(e,`.
            `),Ee=d(e,"BR",{}),qe=d(e,"BR",{}),me=d(e,"STRONG",{"data-svelte-h":!0}),_e(me)!=="svelte-1xce96a"&&(me.textContent=mt),Ne=d(e,"BR",{}),Ge=a(e,`
            Find the Maclaurin series for `),p(z.$$.fragment,e),Oe=a(e," by integrating the Maclaurin series for "),p(A.$$.fragment,e),ke=a(e,`.
            `),p(H.$$.fragment,e),De=a(e,`
            The Maclaurin series for `),p(J.$$.fragment,e),Ie=a(e," is "),p(K.$$.fragment,e),Le=a(e,`.

            `),We=d(e,"BR",{}),je=d(e,"BR",{}),Pe=se(e),ue=d(e,"STRONG",{"data-svelte-h":!0}),_e(ue)!=="svelte-ahwesb"&&(ue.textContent=ut),ze=d(e,"BR",{}),Ae=a(e,`
            Find the Maclaurin series for `),p(Q.$$.fragment,e),He=a(e," by integrating the Maclaurin series for "),p(U.$$.fragment,e),Je=a(e,`.
            `),p(V.$$.fragment,e),Ke=a(e,`
            The Maclaurin series for `),p(X.$$.fragment,e),Qe=a(e," is "),p(Y.$$.fragment,e),Ue=a(e,`.

            `),Ve=d(e,"BR",{}),Xe=d(e,"BR",{}),ae=d(e,"STRONG",{"data-svelte-h":!0}),_e(ae)!=="svelte-ku26hc"&&(ae.textContent=at),Ye=d(e,"BR",{}),Ze=a(e,`
                    Find the Maclaurin series for `),p(Z.$$.fragment,e),et=a(e," by integrating the Maclaurin series for "),p(ee.$$.fragment,e),tt=a(e,`.
                    `),p(te.$$.fragment,e),nt=a(e,`
                    The Maclaurin series for `),p(ne.$$.fragment,e),$t=a(e," is "),p($e.$$.fragment,e),ft=a(e,".")},m(e,$){l(e,f,$),l(e,t,$),l(e,s,$),c(h,e,$),l(e,B,$),c(C,e,$),l(e,S,$),c(T,e,$),l(e,y,$),c(i,e,$),l(e,b,$),c(F,e,$),l(e,E,$),l(e,q,$),l(e,le,$),l(e,pe,$),l(e,re,$),l(e,ce,$),l(e,oe,$),c(N,e,$),l(e,ge,$),c(G,e,$),l(e,xe,$),c(O,e,$),l(e,be,$),c(k,e,$),l(e,ve,$),c(D,e,$),l(e,we,$),l(e,Me,$),l(e,he,$),l(e,Ce,$),l(e,ie,$),l(e,Te,$),l(e,Re,$),c(I,e,$),l(e,de,$),c(L,e,$),l(e,Be,$),c(W,e,$),l(e,Se,$),c(j,e,$),l(e,ye,$),c(P,e,$),l(e,Fe,$),l(e,Ee,$),l(e,qe,$),l(e,me,$),l(e,Ne,$),l(e,Ge,$),c(z,e,$),l(e,Oe,$),c(A,e,$),l(e,ke,$),c(H,e,$),l(e,De,$),c(J,e,$),l(e,Ie,$),c(K,e,$),l(e,Le,$),l(e,We,$),l(e,je,$),l(e,Pe,$),l(e,ue,$),l(e,ze,$),l(e,Ae,$),c(Q,e,$),l(e,He,$),c(U,e,$),l(e,Je,$),c(V,e,$),l(e,Ke,$),c(X,e,$),l(e,Qe,$),c(Y,e,$),l(e,Ue,$),l(e,Ve,$),l(e,Xe,$),l(e,ae,$),l(e,Ye,$),l(e,Ze,$),c(Z,e,$),l(e,et,$),c(ee,e,$),l(e,tt,$),c(te,e,$),l(e,nt,$),c(ne,e,$),l(e,$t,$),c($e,e,$),l(e,ft,$),st=!0},p(e,$){const _t={};$&1&&(_t.$$scope={dirty:$,ctx:e}),h.$set(_t);const pt={};$&1&&(pt.$$scope={dirty:$,ctx:e}),C.$set(pt);const ct={};$&1&&(ct.$$scope={dirty:$,ctx:e}),T.$set(ct);const ot={};$&1&&(ot.$$scope={dirty:$,ctx:e}),i.$set(ot);const gt={};$&1&&(gt.$$scope={dirty:$,ctx:e}),F.$set(gt);const xt={};$&1&&(xt.$$scope={dirty:$,ctx:e}),N.$set(xt);const bt={};$&1&&(bt.$$scope={dirty:$,ctx:e}),G.$set(bt);const vt={};$&1&&(vt.$$scope={dirty:$,ctx:e}),O.$set(vt);const wt={};$&1&&(wt.$$scope={dirty:$,ctx:e}),k.$set(wt);const Mt={};$&1&&(Mt.$$scope={dirty:$,ctx:e}),D.$set(Mt);const ht={};$&1&&(ht.$$scope={dirty:$,ctx:e}),I.$set(ht);const Ct={};$&1&&(Ct.$$scope={dirty:$,ctx:e}),L.$set(Ct);const Tt={};$&1&&(Tt.$$scope={dirty:$,ctx:e}),W.$set(Tt);const Rt={};$&1&&(Rt.$$scope={dirty:$,ctx:e}),j.$set(Rt);const dt={};$&1&&(dt.$$scope={dirty:$,ctx:e}),P.$set(dt);const Bt={};$&1&&(Bt.$$scope={dirty:$,ctx:e}),z.$set(Bt);const St={};$&1&&(St.$$scope={dirty:$,ctx:e}),A.$set(St);const yt={};$&1&&(yt.$$scope={dirty:$,ctx:e}),H.$set(yt);const Ft={};$&1&&(Ft.$$scope={dirty:$,ctx:e}),J.$set(Ft);const Et={};$&1&&(Et.$$scope={dirty:$,ctx:e}),K.$set(Et);const qt={};$&1&&(qt.$$scope={dirty:$,ctx:e}),Q.$set(qt);const Nt={};$&1&&(Nt.$$scope={dirty:$,ctx:e}),U.$set(Nt);const Gt={};$&1&&(Gt.$$scope={dirty:$,ctx:e}),V.$set(Gt);const Ot={};$&1&&(Ot.$$scope={dirty:$,ctx:e}),X.$set(Ot);const kt={};$&1&&(kt.$$scope={dirty:$,ctx:e}),Y.$set(kt);const Dt={};$&1&&(Dt.$$scope={dirty:$,ctx:e}),Z.$set(Dt);const It={};$&1&&(It.$$scope={dirty:$,ctx:e}),ee.$set(It);const Lt={};$&1&&(Lt.$$scope={dirty:$,ctx:e}),te.$set(Lt);const Wt={};$&1&&(Wt.$$scope={dirty:$,ctx:e}),ne.$set(Wt);const jt={};$&1&&(jt.$$scope={dirty:$,ctx:e}),$e.$set(jt)},i(e){st||(o(h.$$.fragment,e),o(C.$$.fragment,e),o(T.$$.fragment,e),o(i.$$.fragment,e),o(F.$$.fragment,e),o(N.$$.fragment,e),o(G.$$.fragment,e),o(O.$$.fragment,e),o(k.$$.fragment,e),o(D.$$.fragment,e),o(I.$$.fragment,e),o(L.$$.fragment,e),o(W.$$.fragment,e),o(j.$$.fragment,e),o(P.$$.fragment,e),o(z.$$.fragment,e),o(A.$$.fragment,e),o(H.$$.fragment,e),o(J.$$.fragment,e),o(K.$$.fragment,e),o(Q.$$.fragment,e),o(U.$$.fragment,e),o(V.$$.fragment,e),o(X.$$.fragment,e),o(Y.$$.fragment,e),o(Z.$$.fragment,e),o(ee.$$.fragment,e),o(te.$$.fragment,e),o(ne.$$.fragment,e),o($e.$$.fragment,e),st=!0)},o(e){g(h.$$.fragment,e),g(C.$$.fragment,e),g(T.$$.fragment,e),g(i.$$.fragment,e),g(F.$$.fragment,e),g(N.$$.fragment,e),g(G.$$.fragment,e),g(O.$$.fragment,e),g(k.$$.fragment,e),g(D.$$.fragment,e),g(I.$$.fragment,e),g(L.$$.fragment,e),g(W.$$.fragment,e),g(j.$$.fragment,e),g(P.$$.fragment,e),g(z.$$.fragment,e),g(A.$$.fragment,e),g(H.$$.fragment,e),g(J.$$.fragment,e),g(K.$$.fragment,e),g(Q.$$.fragment,e),g(U.$$.fragment,e),g(V.$$.fragment,e),g(X.$$.fragment,e),g(Y.$$.fragment,e),g(Z.$$.fragment,e),g(ee.$$.fragment,e),g(te.$$.fragment,e),g(ne.$$.fragment,e),g($e.$$.fragment,e),st=!1},d(e){e&&(r(f),r(t),r(s),r(B),r(S),r(y),r(b),r(E),r(q),r(le),r(pe),r(re),r(ce),r(oe),r(ge),r(xe),r(be),r(ve),r(we),r(Me),r(he),r(Ce),r(ie),r(Te),r(Re),r(de),r(Be),r(Se),r(ye),r(Fe),r(Ee),r(qe),r(me),r(Ne),r(Ge),r(Oe),r(ke),r(De),r(Ie),r(Le),r(We),r(je),r(Pe),r(ue),r(ze),r(Ae),r(He),r(Je),r(Ke),r(Qe),r(Ue),r(Ve),r(Xe),r(ae),r(Ye),r(Ze),r(et),r(tt),r(nt),r($t),r(ft)),x(h,e),x(C,e),x(T,e),x(i,e),x(F,e),x(N,e),x(G,e),x(O,e),x(k,e),x(D,e),x(I,e),x(L,e),x(W,e),x(j,e),x(P,e),x(z,e),x(A,e),x(H,e),x(J,e),x(K,e),x(Q,e),x(U,e),x(V,e),x(X,e),x(Y,e),x(Z,e),x(ee,e),x(te,e),x(ne,e),x($e,e)}}}function Nn(m){let f,n,t,s,h,B,C,S,T,y;return f=new Jt({props:{heading:"Derivatives and Integrals"}}),t=new lt({props:{heading:"Introduction",$$slots:{default:[Vt]},$$scope:{ctx:m}}}),h=new lt({props:{heading:"Common Maclaurin Series",$$slots:{default:[Yt]},$$scope:{ctx:m}}}),C=new lt({props:{heading:"Deriving New Series",$$slots:{default:[en]},$$scope:{ctx:m}}}),T=new lt({props:{heading:"Examples",$$slots:{default:[qn]},$$scope:{ctx:m}}}),{c(){_(f.$$.fragment),n=fe(),_(t.$$.fragment),s=fe(),_(h.$$.fragment),B=fe(),_(C.$$.fragment),S=fe(),_(T.$$.fragment)},l(i){p(f.$$.fragment,i),n=se(i),p(t.$$.fragment,i),s=se(i),p(h.$$.fragment,i),B=se(i),p(C.$$.fragment,i),S=se(i),p(T.$$.fragment,i)},m(i,b){c(f,i,b),l(i,n,b),c(t,i,b),l(i,s,b),c(h,i,b),l(i,B,b),c(C,i,b),l(i,S,b),c(T,i,b),y=!0},p(i,b){const F={};b&1&&(F.$$scope={dirty:b,ctx:i}),t.$set(F);const E={};b&1&&(E.$$scope={dirty:b,ctx:i}),h.$set(E);const q={};b&1&&(q.$$scope={dirty:b,ctx:i}),C.$set(q);const le={};b&1&&(le.$$scope={dirty:b,ctx:i}),T.$set(le)},i(i){y||(o(f.$$.fragment,i),o(t.$$.fragment,i),o(h.$$.fragment,i),o(C.$$.fragment,i),o(T.$$.fragment,i),y=!0)},o(i){g(f.$$.fragment,i),g(t.$$.fragment,i),g(h.$$.fragment,i),g(C.$$.fragment,i),g(T.$$.fragment,i),y=!1},d(i){i&&(r(n),r(s),r(B),r(S)),x(f,i),x(t,i),x(h,i),x(C,i),x(T,i)}}}function Gn(m){let f,n;return f=new Ht({props:{$$slots:{default:[Nn]},$$scope:{ctx:m}}}),{c(){_(f.$$.fragment)},l(t){p(f.$$.fragment,t)},m(t,s){c(f,t,s),n=!0},p(t,[s]){const h={};s&1&&(h.$$scope={dirty:s,ctx:t}),f.$set(h)},i(t){n||(o(f.$$.fragment,t),n=!0)},o(t){g(f.$$.fragment,t),n=!1},d(t){x(f,t)}}}function M(m){return m.raw[0]}class Ln extends zt{constructor(f){super(),At(this,f,null,Gn,Pt,{})}}export{Ln as component};
