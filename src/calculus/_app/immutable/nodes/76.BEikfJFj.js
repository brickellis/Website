import{s as at,n as T}from"../chunks/CVhLxNSM.js";import{S as ft,i as ot,c as v,b as h,m as b,t as d,a as C,d as w,s as V,e as W,f,g as o,h as p,j as F,k as u,l as E,n as Q}from"../chunks/DvSB8R1X.js";import{L as rt,S as X,M as R}from"../chunks/ByTZAYyp.js";import{L as mt}from"../chunks/xLaKUPuM.js";function pt(r){let l=x`
            \int \mathbf{r}(t)\,dt = \left\langle \int f(t)\,dt,\, \int g(t)\,dt,\, \int h(t)\,dt \right\rangle + \mathbf{C}
        `+"",n;return{c(){n=p(l)},l(t){n=u(t,l)},m(t,i){f(t,n,i)},p:T,d(t){t&&o(n)}}}function ut(r){let l=x`\mathbf{C}=\langle C_1, C_2, C_3 \rangle`+"",n;return{c(){n=p(l)},l(t){n=u(t,l)},m(t,i){f(t,n,i)},p:T,d(t){t&&o(n)}}}function gt(r){let l,n,t,i,m,_,g,B,$;return n=new R({props:{displayMode:!0,$$slots:{default:[pt]},$$scope:{ctx:r}}}),i=new R({props:{$$slots:{default:[ut]},$$scope:{ctx:r}}}),{c(){l=p(`Just as we can differentiate vector-valued functions by differentiating each component independently, we can also integrate them the same way:
        `),v(n.$$.fragment),t=p(`
        Where `),v(i.$$.fragment),m=p(`.
        `),_=F("br"),g=F("br"),B=p(`
        This process allows us to find position from velocity, or velocity from acceleration.`)},l(s){l=u(s,`Just as we can differentiate vector-valued functions by differentiating each component independently, we can also integrate them the same way:
        `),h(n.$$.fragment,s),t=u(s,`
        Where `),h(i.$$.fragment,s),m=u(s,`.
        `),_=E(s,"BR",{}),g=E(s,"BR",{}),B=u(s,`
        This process allows us to find position from velocity, or velocity from acceleration.`)},m(s,c){f(s,l,c),b(n,s,c),f(s,t,c),b(i,s,c),f(s,m,c),f(s,_,c),f(s,g,c),f(s,B,c),$=!0},p(s,c){const M={};c&1&&(M.$$scope={dirty:c,ctx:s}),n.$set(M);const S={};c&1&&(S.$$scope={dirty:c,ctx:s}),i.$set(S)},i(s){$||(d(n.$$.fragment,s),d(i.$$.fragment,s),$=!0)},o(s){C(n.$$.fragment,s),C(i.$$.fragment,s),$=!1},d(s){s&&(o(l),o(t),o(m),o(_),o(g),o(B)),w(n,s),w(i,s)}}}function ct(r){let l=x`
            \int_a^b \mathbf{r}'(t)\,dt = \mathbf{r}(b) - \mathbf{r}(a)
        `+"",n;return{c(){n=p(l)},l(t){n=u(t,l)},m(t,i){f(t,n,i)},p:T,d(t){t&&o(n)}}}function _t(r){let l,n,t;return n=new R({props:{displayMode:!0,$$slots:{default:[ct]},$$scope:{ctx:r}}}),{c(){l=p(`The definite integral of a vector-valued velocity function gives the change in position over an interval:
        `),v(n.$$.fragment)},l(i){l=u(i,`The definite integral of a vector-valued velocity function gives the change in position over an interval:
        `),h(n.$$.fragment,i)},m(i,m){f(i,l,m),b(n,i,m),t=!0},p(i,m){const _={};m&1&&(_.$$scope={dirty:m,ctx:i}),n.$set(_)},i(i){t||(d(n.$$.fragment,i),t=!0)},o(i){C(n.$$.fragment,i),t=!1},d(i){i&&o(l),w(n,i)}}}function vt(r){let l=x`\int \langle 2t,\, 3,\, \cos(t) \rangle\,dt`+"",n;return{c(){n=p(l)},l(t){n=u(t,l)},m(t,i){f(t,n,i)},p:T,d(t){t&&o(n)}}}function ht(r){let l=x`
            \begin{align*}
            \int \langle 2t,\, 3,\, \cos(t) \rangle\,dt &= \left\langle \int 2t\,dt,\, \int 3\,dt,\, \int \cos(t)\,dt \right\rangle + \mathbf{C} \\
            &= \langle t^2,\, 3t,\, \sin(t) \rangle + \langle C_1, C_2, C_3 \rangle
            \end{align*}
        `+"",n;return{c(){n=p(l)},l(t){n=u(t,l)},m(t,i){f(t,n,i)},p:T,d(t){t&&o(n)}}}function bt(r){let l=x`\mathbf{v}(t) = \langle 3t^2,\, 2t,\, -4 \rangle`+"",n;return{c(){n=p(l)},l(t){n=u(t,l)},m(t,i){f(t,n,i)},p:T,d(t){t&&o(n)}}}function dt(r){let l=x`\mathbf{r}(0) = \langle 1,\, 0,\, 2 \rangle`+"",n;return{c(){n=p(l)},l(t){n=u(t,l)},m(t,i){f(t,n,i)},p:T,d(t){t&&o(n)}}}function Ct(r){let l=x`
            \begin{align*}
            \mathbf{r}(t) &= \int \mathbf{v}(t)\,dt + \mathbf{C} \\
            &= \left\langle \int 3t^2\,dt,\, \int 2t\,dt,\, \int -4\,dt \right\rangle + \mathbf{C} \\
            &= \langle t^3,\, t^2,\, -4t \rangle + \langle C_1, C_2, C_3 \rangle
            \end{align*}
        `+"",n;return{c(){n=p(l)},l(t){n=u(t,l)},m(t,i){f(t,n,i)},p:T,d(t){t&&o(n)}}}function wt(r){let l=x`
            \begin{align*}
            \mathbf{r}(0) &= \langle 0,\, 0,\, 0 \rangle + \langle C_1, C_2, C_3 \rangle = \langle 1,\, 0,\, 2 \rangle \\
            \mathbf{C} &= \langle 1,\, 0,\, 2 \rangle \\
            \mathbf{r}(t) &= \langle t^3 + 1,\, t^2,\, -4t + 2 \rangle
            \end{align*}
        `+"",n;return{c(){n=p(l)},l(t){n=u(t,l)},m(t,i){f(t,n,i)},p:T,d(t){t&&o(n)}}}function Bt(r){let l=x`\mathbf{v}(t) = \langle \cos(t),\, \sin(t),\, 1 \rangle`+"",n;return{c(){n=p(l)},l(t){n=u(t,l)},m(t,i){f(t,n,i)},p:T,d(t){t&&o(n)}}}function Rt(r){let l=x`
            \begin{align*}
            \text{Position} &= \int_0^{2\pi} \mathbf{v}(t)\,dt \\
            &= \left\langle \int_0^{2\pi} \cos(t)\,dt,\, \int_0^{2\pi} \sin(t)\,dt,\, \int_0^{2\pi} 1\,dt \right\rangle \\
            &= \langle [\sin(t)]\Big|_0^{2\pi},\, [-\cos(t)]\Big|_0^{2\pi},\, [t]\Big|_0^{2\pi} \rangle \\
            &= \langle 0,\, 0,\, 2\pi \rangle
            \end{align*}
        `+"",n;return{c(){n=p(l)},l(t){n=u(t,l)},m(t,i){f(t,n,i)},p:T,d(t){t&&o(n)}}}function Tt(r){let l,n="Example 1: Basic Integration",t,i,m,_,g,B,$,s,c="Example 2: Finding Position from Velocity",M,S,I,k,L,A,P,J,y,U,j,O,Y="Example 3: Work and Position",q,D,G,z,N,H,K;return m=new R({props:{$$slots:{default:[vt]},$$scope:{ctx:r}}}),g=new R({props:{displayMode:!0,$$slots:{default:[ht]},$$scope:{ctx:r}}}),I=new R({props:{$$slots:{default:[bt]},$$scope:{ctx:r}}}),L=new R({props:{$$slots:{default:[dt]},$$scope:{ctx:r}}}),P=new R({props:{displayMode:!0,$$slots:{default:[Ct]},$$scope:{ctx:r}}}),y=new R({props:{displayMode:!0,$$slots:{default:[wt]},$$scope:{ctx:r}}}),G=new R({props:{$$slots:{default:[Bt]},$$scope:{ctx:r}}}),N=new R({props:{displayMode:!0,$$slots:{default:[Rt]},$$scope:{ctx:r}}}),{c(){l=F("strong"),l.textContent=n,t=F("br"),i=p(`
        Find `),v(m.$$.fragment),_=V(),v(g.$$.fragment),B=V(),$=F("br"),s=F("strong"),s.textContent=c,M=F("br"),S=p(`
        A particle has velocity `),v(I.$$.fragment),k=p(" and initial position "),v(L.$$.fragment),A=p(`. Find its position function.
        `),v(P.$$.fragment),J=p(`
        Using the initial position:
        `),v(y.$$.fragment),U=V(),j=F("br"),O=F("strong"),O.textContent=Y,q=F("br"),D=p(`
        Calculate the change in position of a particle moving with velocity `),v(G.$$.fragment),z=p(` from t = 0 to t = 2π.
        `),v(N.$$.fragment),H=p(`
        The particle completed one revolution, rising by 2π units.`)},l(e){l=E(e,"STRONG",{"data-svelte-h":!0}),Q(l)!=="svelte-14gmool"&&(l.textContent=n),t=E(e,"BR",{}),i=u(e,`
        Find `),h(m.$$.fragment,e),_=W(e),h(g.$$.fragment,e),B=W(e),$=E(e,"BR",{}),s=E(e,"STRONG",{"data-svelte-h":!0}),Q(s)!=="svelte-pgp8v5"&&(s.textContent=c),M=E(e,"BR",{}),S=u(e,`
        A particle has velocity `),h(I.$$.fragment,e),k=u(e," and initial position "),h(L.$$.fragment,e),A=u(e,`. Find its position function.
        `),h(P.$$.fragment,e),J=u(e,`
        Using the initial position:
        `),h(y.$$.fragment,e),U=W(e),j=E(e,"BR",{}),O=E(e,"STRONG",{"data-svelte-h":!0}),Q(O)!=="svelte-ybpuo0"&&(O.textContent=Y),q=E(e,"BR",{}),D=u(e,`
        Calculate the change in position of a particle moving with velocity `),h(G.$$.fragment,e),z=u(e,` from t = 0 to t = 2π.
        `),h(N.$$.fragment,e),H=u(e,`
        The particle completed one revolution, rising by 2π units.`)},m(e,a){f(e,l,a),f(e,t,a),f(e,i,a),b(m,e,a),f(e,_,a),b(g,e,a),f(e,B,a),f(e,$,a),f(e,s,a),f(e,M,a),f(e,S,a),b(I,e,a),f(e,k,a),b(L,e,a),f(e,A,a),b(P,e,a),f(e,J,a),b(y,e,a),f(e,U,a),f(e,j,a),f(e,O,a),f(e,q,a),f(e,D,a),b(G,e,a),f(e,z,a),b(N,e,a),f(e,H,a),K=!0},p(e,a){const Z={};a&1&&(Z.$$scope={dirty:a,ctx:e}),m.$set(Z);const tt={};a&1&&(tt.$$scope={dirty:a,ctx:e}),g.$set(tt);const et={};a&1&&(et.$$scope={dirty:a,ctx:e}),I.$set(et);const nt={};a&1&&(nt.$$scope={dirty:a,ctx:e}),L.$set(nt);const lt={};a&1&&(lt.$$scope={dirty:a,ctx:e}),P.$set(lt);const it={};a&1&&(it.$$scope={dirty:a,ctx:e}),y.$set(it);const st={};a&1&&(st.$$scope={dirty:a,ctx:e}),G.$set(st);const $t={};a&1&&($t.$$scope={dirty:a,ctx:e}),N.$set($t)},i(e){K||(d(m.$$.fragment,e),d(g.$$.fragment,e),d(I.$$.fragment,e),d(L.$$.fragment,e),d(P.$$.fragment,e),d(y.$$.fragment,e),d(G.$$.fragment,e),d(N.$$.fragment,e),K=!0)},o(e){C(m.$$.fragment,e),C(g.$$.fragment,e),C(I.$$.fragment,e),C(L.$$.fragment,e),C(P.$$.fragment,e),C(y.$$.fragment,e),C(G.$$.fragment,e),C(N.$$.fragment,e),K=!1},d(e){e&&(o(l),o(t),o(i),o(_),o(B),o($),o(s),o(M),o(S),o(k),o(A),o(J),o(U),o(j),o(O),o(q),o(D),o(z),o(H)),w(m,e),w(g,e),w(I,e),w(L,e),w(P,e),w(y,e),w(G,e),w(N,e)}}}function xt(r){let l,n,t,i,m,_,g,B;return l=new mt({props:{heading:"Integrating Vector-Valued Functions"}}),t=new X({props:{heading:"Introduction",$$slots:{default:[gt]},$$scope:{ctx:r}}}),m=new X({props:{heading:"Definite Integration",$$slots:{default:[_t]},$$scope:{ctx:r}}}),g=new X({props:{heading:"Examples",$$slots:{default:[Tt]},$$scope:{ctx:r}}}),{c(){v(l.$$.fragment),n=V(),v(t.$$.fragment),i=V(),v(m.$$.fragment),_=V(),v(g.$$.fragment)},l($){h(l.$$.fragment,$),n=W($),h(t.$$.fragment,$),i=W($),h(m.$$.fragment,$),_=W($),h(g.$$.fragment,$)},m($,s){b(l,$,s),f($,n,s),b(t,$,s),f($,i,s),b(m,$,s),f($,_,s),b(g,$,s),B=!0},p($,s){const c={};s&1&&(c.$$scope={dirty:s,ctx:$}),t.$set(c);const M={};s&1&&(M.$$scope={dirty:s,ctx:$}),m.$set(M);const S={};s&1&&(S.$$scope={dirty:s,ctx:$}),g.$set(S)},i($){B||(d(l.$$.fragment,$),d(t.$$.fragment,$),d(m.$$.fragment,$),d(g.$$.fragment,$),B=!0)},o($){C(l.$$.fragment,$),C(t.$$.fragment,$),C(m.$$.fragment,$),C(g.$$.fragment,$),B=!1},d($){$&&(o(n),o(i),o(_)),w(l,$),w(t,$),w(m,$),w(g,$)}}}function Mt(r){let l,n;return l=new rt({props:{$$slots:{default:[xt]},$$scope:{ctx:r}}}),{c(){v(l.$$.fragment)},l(t){h(l.$$.fragment,t)},m(t,i){b(l,t,i),n=!0},p(t,[i]){const m={};i&1&&(m.$$scope={dirty:i,ctx:t}),l.$set(m)},i(t){n||(d(l.$$.fragment,t),n=!0)},o(t){C(l.$$.fragment,t),n=!1},d(t){w(l,t)}}}function x(r){return r.raw[0]}class Lt extends ft{constructor(l){super(),ot(this,l,null,Mt,at,{})}}export{Lt as component};
