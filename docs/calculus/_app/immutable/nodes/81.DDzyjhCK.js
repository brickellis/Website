import{s as ie,n as B}from"../chunks/CVhLxNSM.js";import{S as ue,i as oe,c as w,b as h,m as S,t as d,a as C,d as T,s as z,e as H,f as l,g as m,h as c,j as G,k as _,l as E,n as ee}from"../chunks/DvSB8R1X.js";import{L as pe,S as y,M}from"../chunks/ByTZAYyp.js";import{L as ce}from"../chunks/xLaKUPuM.js";function _e(a){let s=x`
    \sum_{n=0}^{\infty} ar^n = a + ar + ar^2 + ar^3 + \ldots
    `+"",t;return{c(){t=c(s)},l(e){t=_(e,s)},m(e,r){l(e,t,r)},p:B,d(e){e&&m(t)}}}function ge(a){let s=x`a`+"",t;return{c(){t=c(s)},l(e){t=_(e,s)},m(e,r){l(e,t,r)},p:B,d(e){e&&m(t)}}}function ve(a){let s=x`r`+"",t;return{c(){t=c(s)},l(e){t=_(e,s)},m(e,r){l(e,t,r)},p:B,d(e){e&&m(t)}}}function be(a){let s=x`
    \begin{align*}
      &\sum_{n=0}^{\infty} 2(0.5)^n &=&\, 2 + 1 + 0.5 + 0.25 + \ldots \\
      &\sum_{n=0}^{\infty} 3(2)^n &=&\, 3 + 6 + 12 + 24 + \ldots \\
      &\sum_{n=0}^{\infty} 4(-3)^n &=&\, 4 - 12 + 36 - 108 + \ldots
    \end{align*}
    `+"",t;return{c(){t=c(s)},l(e){t=_(e,s)},m(e,r){l(e,t,r)},p:B,d(e){e&&m(t)}}}function we(a){let s,t,e,r,v,u,p,R,g,N,$,o;return t=new M({props:{displayMode:!0,$$slots:{default:[_e]},$$scope:{ctx:a}}}),r=new M({props:{$$slots:{default:[ge]},$$scope:{ctx:a}}}),u=new M({props:{$$slots:{default:[ve]},$$scope:{ctx:a}}}),$=new M({props:{displayMode:!0,$$slots:{default:[be]},$$scope:{ctx:a}}}),{c(){s=c(`A geometric series is of the form:
    `),w(t.$$.fragment),e=c(`
    where `),w(r.$$.fragment),v=c(" and "),w(u.$$.fragment),p=c(` are real numbers.
    `),R=G("br"),g=G("br"),N=c(`The following are geometric series:
    `),w($.$$.fragment)},l(f){s=_(f,`A geometric series is of the form:
    `),h(t.$$.fragment,f),e=_(f,`
    where `),h(r.$$.fragment,f),v=_(f," and "),h(u.$$.fragment,f),p=_(f,` are real numbers.
    `),R=E(f,"BR",{}),g=E(f,"BR",{}),N=_(f,`The following are geometric series:
    `),h($.$$.fragment,f)},m(f,b){l(f,s,b),S(t,f,b),l(f,e,b),S(r,f,b),l(f,v,b),S(u,f,b),l(f,p,b),l(f,R,b),l(f,g,b),l(f,N,b),S($,f,b),o=!0},p(f,b){const q={};b&1&&(q.$$scope={dirty:b,ctx:f}),t.$set(q);const A={};b&1&&(A.$$scope={dirty:b,ctx:f}),r.$set(A);const D={};b&1&&(D.$$scope={dirty:b,ctx:f}),u.$set(D);const j={};b&1&&(j.$$scope={dirty:b,ctx:f}),$.$set(j)},i(f){o||(d(t.$$.fragment,f),d(r.$$.fragment,f),d(u.$$.fragment,f),d($.$$.fragment,f),o=!0)},o(f){C(t.$$.fragment,f),C(r.$$.fragment,f),C(u.$$.fragment,f),C($.$$.fragment,f),o=!1},d(f){f&&(m(s),m(e),m(v),m(p),m(R),m(g),m(N)),T(t,f),T(r,f),T(u,f),T($,f)}}}function he(a){let s=x`|r| < 1`+"",t;return{c(){t=c(s)},l(e){t=_(e,s)},m(e,r){l(e,t,r)},p:B,d(e){e&&m(t)}}}function Se(a){let s=x`|r| \geq 1`+"",t;return{c(){t=c(s)},l(e){t=_(e,s)},m(e,r){l(e,t,r)},p:B,d(e){e&&m(t)}}}function de(a){let s,t,e,r,v;return t=new M({props:{displayMode:!0,$$slots:{default:[he]},$$scope:{ctx:a}}}),r=new M({props:{displayMode:!0,$$slots:{default:[Se]},$$scope:{ctx:a}}}),{c(){s=c(`The series converges if:
    `),w(t.$$.fragment),e=c(`
    And diverges if:
    `),w(r.$$.fragment)},l(u){s=_(u,`The series converges if:
    `),h(t.$$.fragment,u),e=_(u,`
    And diverges if:
    `),h(r.$$.fragment,u)},m(u,p){l(u,s,p),S(t,u,p),l(u,e,p),S(r,u,p),v=!0},p(u,p){const R={};p&1&&(R.$$scope={dirty:p,ctx:u}),t.$set(R);const g={};p&1&&(g.$$scope={dirty:p,ctx:u}),r.$set(g)},i(u){v||(d(t.$$.fragment,u),d(r.$$.fragment,u),v=!0)},o(u){C(t.$$.fragment,u),C(r.$$.fragment,u),v=!1},d(u){u&&(m(s),m(e)),T(t,u),T(r,u)}}}function Ce(a){let s=x`\sum_{n=0}^{\infty} ar^n = \frac{a}{1 - r}`+"",t;return{c(){t=c(s)},l(e){t=_(e,s)},m(e,r){l(e,t,r)},p:B,d(e){e&&m(t)}}}function Te(a){let s=x`
    \begin{align*}
      S &= \sum_{n=0}^{N} ar^n \\
      &= a + ar + ar^2 + ar^3 + \ldots + ar^N \\
      rS &= ar + ar^2 + ar^3 + ar^4 + \ldots + ar^{N+1} \\
      S - rS &= a + \left( ar^2 + ar^3 + \ldots + ar^N \right) - \left( ar^2 + ar^3 + \ldots + ar^{N+1} \right) \\
      &= a - ar^{N+1} \\
      S(1 - r) &= a(1-r^{N+1}) \\
      S &= \frac{a(1-r^{N+1})}{1 - r}
    \end{align*}
    `+"",t;return{c(){t=c(s)},l(e){t=_(e,s)},m(e,r){l(e,t,r)},p:B,d(e){e&&m(t)}}}function Re(a){let s=x`
    \begin{align*}
    \text{Note that if }\, |r| &< 1 \\ \text{} \\
    \lim_{N \to \infty} r^{N+1} &= 0 \\ \text{} \\
    S &= \frac{a}{1 - r}
    \end{align*}
    `+"",t;return{c(){t=c(s)},l(e){t=_(e,s)},m(e,r){l(e,t,r)},p:B,d(e){e&&m(t)}}}function Ne(a){let s,t,e,r,v="Proof:",u,p,R,g,N;return t=new M({props:{displayMode:!0,$$slots:{default:[Ce]},$$scope:{ctx:a}}}),p=new M({props:{displayMode:!0,$$slots:{default:[Te]},$$scope:{ctx:a}}}),g=new M({props:{displayMode:!0,$$slots:{default:[Re]},$$scope:{ctx:a}}}),{c(){s=c(`The sum of a convergent geometric series is:
    `),w(t.$$.fragment),e=z(),r=G("strong"),r.textContent=v,u=z(),w(p.$$.fragment),R=z(),w(g.$$.fragment)},l($){s=_($,`The sum of a convergent geometric series is:
    `),h(t.$$.fragment,$),e=H($),r=E($,"STRONG",{"data-svelte-h":!0}),ee(r)!=="svelte-1qimrtw"&&(r.textContent=v),u=H($),h(p.$$.fragment,$),R=H($),h(g.$$.fragment,$)},m($,o){l($,s,o),S(t,$,o),l($,e,o),l($,r,o),l($,u,o),S(p,$,o),l($,R,o),S(g,$,o),N=!0},p($,o){const f={};o&1&&(f.$$scope={dirty:o,ctx:$}),t.$set(f);const b={};o&1&&(b.$$scope={dirty:o,ctx:$}),p.$set(b);const q={};o&1&&(q.$$scope={dirty:o,ctx:$}),g.$set(q)},i($){N||(d(t.$$.fragment,$),d(p.$$.fragment,$),d(g.$$.fragment,$),N=!0)},o($){C(t.$$.fragment,$),C(p.$$.fragment,$),C(g.$$.fragment,$),N=!1},d($){$&&(m(s),m(e),m(r),m(u),m(R)),T(t,$),T(p,$),T(g,$)}}}function Me(a){let s=x`\sum_{n=0}^{\infty} 3 \left(\frac{1}{2}\right)^n`+"",t;return{c(){t=c(s)},l(e){t=_(e,s)},m(e,r){l(e,t,r)},p:B,d(e){e&&m(t)}}}function Be(a){let s=x`
        \begin{align*}
        a &= 3 \\
        r &= \frac{1}{2} \\
        S &= \frac{a}{1 - r} \\
        &= \frac{3}{1 - \frac{1}{2}} \\
        &= \frac{3}{\frac{1}{2}} = 6
        \end{align*}
        `+"",t;return{c(){t=c(s)},l(e){t=_(e,s)},m(e,r){l(e,t,r)},p:B,d(e){e&&m(t)}}}function xe(a){let s=x`\sum_{n=0}^{\infty} 2(3)^n`+"",t;return{c(){t=c(s)},l(e){t=_(e,s)},m(e,r){l(e,t,r)},p:B,d(e){e&&m(t)}}}function Ge(a){let s=x`
        \begin{align*}
        a &= 2 \\
        r &= 3 \\
        |r| &= 3 \geq 1
        \end{align*}
        `+"",t;return{c(){t=c(s)},l(e){t=_(e,s)},m(e,r){l(e,t,r)},p:B,d(e){e&&m(t)}}}function Ee(a){let s=x`|r| \geq 1`+"",t;return{c(){t=c(s)},l(e){t=_(e,s)},m(e,r){l(e,t,r)},p:B,d(e){e&&m(t)}}}function qe(a){let s=x`0.\overline{37}`+"",t;return{c(){t=c(s)},l(e){t=_(e,s)},m(e,r){l(e,t,r)},p:B,d(e){e&&m(t)}}}function De(a){let s=x`
        \begin{align*}
        0.\overline{37} &= 0.373737\ldots = \frac{37}{99} \\\\
        &= \frac{37}{100} + \frac{37}{10000} + \frac{37}{1000000} + \ldots \\\\
        &= \frac{37}{100} + \frac{37}{100}\left(\frac{1}{100}\right) + \frac{37}{100}\left(\frac{1}{100}\right)^2 + \ldots \\\\
        &= \sum_{n=0}^{\infty} \frac{37}{100}\left(\frac{1}{100}\right)^n
        \end{align*}
        `+"",t;return{c(){t=c(s)},l(e){t=_(e,s)},m(e,r){l(e,t,r)},p:B,d(e){e&&m(t)}}}function Ae(a){let s=x`
        \begin{align*}
        S &= \frac{a}{1 - r} \\\\
        &= \frac{\frac{37}{100}}{1 - \frac{1}{100}} \\\\
        &= \frac{\frac{37}{100}}{\frac{99}{100}} \\\\
        &= \frac{37}{99}
        \end{align*}
        `+"",t;return{c(){t=c(s)},l(e){t=_(e,s)},m(e,r){l(e,t,r)},p:B,d(e){e&&m(t)}}}function Le(a){let s,t,e,r="Example 1: Basic Convergent Series",v,u,p,R,g,N,$,o,f,b="Example 2: Divergent Geometric Series",q,A,D,j,L,J,O,K,Q,U,I,te="Example 3:  Repeating Decimal as Geometric Series",V,W,k,X,F,Y,P,Z;return p=new M({props:{$$slots:{default:[Me]},$$scope:{ctx:a}}}),g=new M({props:{displayMode:!0,$$slots:{default:[Be]},$$scope:{ctx:a}}}),D=new M({props:{$$slots:{default:[xe]},$$scope:{ctx:a}}}),L=new M({props:{displayMode:!0,$$slots:{default:[Ge]},$$scope:{ctx:a}}}),O=new M({props:{$$slots:{default:[Ee]},$$scope:{ctx:a}}}),k=new M({props:{$$slots:{default:[qe]},$$scope:{ctx:a}}}),F=new M({props:{displayMode:!0,$$slots:{default:[De]},$$scope:{ctx:a}}}),P=new M({props:{displayMode:!0,$$slots:{default:[Ae]},$$scope:{ctx:a}}}),{c(){s=G("br"),t=G("br"),e=G("strong"),e.textContent=r,v=G("br"),u=c(`
    Find the sum of the geometric series `),w(p.$$.fragment),R=c(`.
    `),w(g.$$.fragment),N=c(`
    The sum of the geometric series is 6.

    `),$=G("br"),o=G("br"),f=G("strong"),f.textContent=b,q=G("br"),A=c(`
    Does the geometric series `),w(D.$$.fragment),j=c(` converge or diverge?
    `),w(L.$$.fragment),J=c(`
    Since `),w(O.$$.fragment),K=c(`, the geometric series diverges.  Therefore, it does not have a finite sum.

    `),Q=G("br"),U=G("br"),I=G("strong"),I.textContent=te,V=G("br"),W=c(`
    Express the repeating decimal `),w(k.$$.fragment),X=c(` as a fraction using a geometric series.
    `),w(F.$$.fragment),Y=c(`
    Therefore,
    `),w(P.$$.fragment)},l(n){s=E(n,"BR",{}),t=E(n,"BR",{}),e=E(n,"STRONG",{"data-svelte-h":!0}),ee(e)!=="svelte-1cadkub"&&(e.textContent=r),v=E(n,"BR",{}),u=_(n,`
    Find the sum of the geometric series `),h(p.$$.fragment,n),R=_(n,`.
    `),h(g.$$.fragment,n),N=_(n,`
    The sum of the geometric series is 6.

    `),$=E(n,"BR",{}),o=E(n,"BR",{}),f=E(n,"STRONG",{"data-svelte-h":!0}),ee(f)!=="svelte-18p56h0"&&(f.textContent=b),q=E(n,"BR",{}),A=_(n,`
    Does the geometric series `),h(D.$$.fragment,n),j=_(n,` converge or diverge?
    `),h(L.$$.fragment,n),J=_(n,`
    Since `),h(O.$$.fragment,n),K=_(n,`, the geometric series diverges.  Therefore, it does not have a finite sum.

    `),Q=E(n,"BR",{}),U=E(n,"BR",{}),I=E(n,"STRONG",{"data-svelte-h":!0}),ee(I)!=="svelte-wm7sp9"&&(I.textContent=te),V=E(n,"BR",{}),W=_(n,`
    Express the repeating decimal `),h(k.$$.fragment,n),X=_(n,` as a fraction using a geometric series.
    `),h(F.$$.fragment,n),Y=_(n,`
    Therefore,
    `),h(P.$$.fragment,n)},m(n,i){l(n,s,i),l(n,t,i),l(n,e,i),l(n,v,i),l(n,u,i),S(p,n,i),l(n,R,i),S(g,n,i),l(n,N,i),l(n,$,i),l(n,o,i),l(n,f,i),l(n,q,i),l(n,A,i),S(D,n,i),l(n,j,i),S(L,n,i),l(n,J,i),S(O,n,i),l(n,K,i),l(n,Q,i),l(n,U,i),l(n,I,i),l(n,V,i),l(n,W,i),S(k,n,i),l(n,X,i),S(F,n,i),l(n,Y,i),S(P,n,i),Z=!0},p(n,i){const ne={};i&1&&(ne.$$scope={dirty:i,ctx:n}),p.$set(ne);const $e={};i&1&&($e.$$scope={dirty:i,ctx:n}),g.$set($e);const se={};i&1&&(se.$$scope={dirty:i,ctx:n}),D.$set(se);const re={};i&1&&(re.$$scope={dirty:i,ctx:n}),L.$set(re);const fe={};i&1&&(fe.$$scope={dirty:i,ctx:n}),O.$set(fe);const le={};i&1&&(le.$$scope={dirty:i,ctx:n}),k.$set(le);const me={};i&1&&(me.$$scope={dirty:i,ctx:n}),F.$set(me);const ae={};i&1&&(ae.$$scope={dirty:i,ctx:n}),P.$set(ae)},i(n){Z||(d(p.$$.fragment,n),d(g.$$.fragment,n),d(D.$$.fragment,n),d(L.$$.fragment,n),d(O.$$.fragment,n),d(k.$$.fragment,n),d(F.$$.fragment,n),d(P.$$.fragment,n),Z=!0)},o(n){C(p.$$.fragment,n),C(g.$$.fragment,n),C(D.$$.fragment,n),C(L.$$.fragment,n),C(O.$$.fragment,n),C(k.$$.fragment,n),C(F.$$.fragment,n),C(P.$$.fragment,n),Z=!1},d(n){n&&(m(s),m(t),m(e),m(v),m(u),m(R),m(N),m($),m(o),m(f),m(q),m(A),m(j),m(J),m(K),m(Q),m(U),m(I),m(V),m(W),m(X),m(Y)),T(p,n),T(g,n),T(D,n),T(L,n),T(O,n),T(k,n),T(F,n),T(P,n)}}}function Oe(a){let s,t,e,r,v,u,p,R,g,N;return s=new ce({props:{heading:"Geometric Series"}}),e=new y({props:{heading:"Introduction",$$slots:{default:[we]},$$scope:{ctx:a}}}),v=new y({props:{heading:"Convergence and Divergence",$$slots:{default:[de]},$$scope:{ctx:a}}}),p=new y({props:{heading:"Sum of a Convergent Geometric Series",$$slots:{default:[Ne]},$$scope:{ctx:a}}}),g=new y({props:{heading:"Examples",$$slots:{default:[Le]},$$scope:{ctx:a}}}),{c(){w(s.$$.fragment),t=z(),w(e.$$.fragment),r=z(),w(v.$$.fragment),u=z(),w(p.$$.fragment),R=z(),w(g.$$.fragment)},l($){h(s.$$.fragment,$),t=H($),h(e.$$.fragment,$),r=H($),h(v.$$.fragment,$),u=H($),h(p.$$.fragment,$),R=H($),h(g.$$.fragment,$)},m($,o){S(s,$,o),l($,t,o),S(e,$,o),l($,r,o),S(v,$,o),l($,u,o),S(p,$,o),l($,R,o),S(g,$,o),N=!0},p($,o){const f={};o&1&&(f.$$scope={dirty:o,ctx:$}),e.$set(f);const b={};o&1&&(b.$$scope={dirty:o,ctx:$}),v.$set(b);const q={};o&1&&(q.$$scope={dirty:o,ctx:$}),p.$set(q);const A={};o&1&&(A.$$scope={dirty:o,ctx:$}),g.$set(A)},i($){N||(d(s.$$.fragment,$),d(e.$$.fragment,$),d(v.$$.fragment,$),d(p.$$.fragment,$),d(g.$$.fragment,$),N=!0)},o($){C(s.$$.fragment,$),C(e.$$.fragment,$),C(v.$$.fragment,$),C(p.$$.fragment,$),C(g.$$.fragment,$),N=!1},d($){$&&(m(t),m(r),m(u),m(R)),T(s,$),T(e,$),T(v,$),T(p,$),T(g,$)}}}function ke(a){let s,t;return s=new pe({props:{$$slots:{default:[Oe]},$$scope:{ctx:a}}}),{c(){w(s.$$.fragment)},l(e){h(s.$$.fragment,e)},m(e,r){S(s,e,r),t=!0},p(e,[r]){const v={};r&1&&(v.$$scope={dirty:r,ctx:e}),s.$set(v)},i(e){t||(d(s.$$.fragment,e),t=!0)},o(e){C(s.$$.fragment,e),t=!1},d(e){T(s,e)}}}function x(a){return a.raw[0]}class ze extends ue{constructor(s){super(),oe(this,s,null,ke,ie,{})}}export{ze as component};
