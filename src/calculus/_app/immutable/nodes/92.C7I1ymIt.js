import{s as Nt,n as h}from"../chunks/CVhLxNSM.js";import{S as Ot,i as dt,c as g,b,m as v,t as w,a as M,d as C,s as d,e as k,f,g as l,h as _,j as F,k as p,l as G,n as U}from"../chunks/DvSB8R1X.js";import{L as kt,S as ct,M as S}from"../chunks/ByTZAYyp.js";import{L as Et}from"../chunks/xLaKUPuM.js";function Lt(a){let s,n,e,i;return{c(){s=_(`We have used differentiation and integration to derive new Taylor series.
      `),n=F("br"),e=F("br"),i=_("We will now use algebraic manipulations and substitutions.")},l(r){s=p(r,`We have used differentiation and integration to derive new Taylor series.
      `),n=G(r,"BR",{}),e=G(r,"BR",{}),i=p(r,"We will now use algebraic manipulations and substitutions.")},m(r,x){f(r,s,x),f(r,n,x),f(r,e,x),f(r,i,x)},p:h,d(r){r&&(l(s),l(n),l(e),l(i))}}}function Wt(a){let s=B`
        f(x) = \sum_{n=0}^{\infty} a_n x^n \quad g(x) = \sum_{n=0}^{\infty} b_n x^n \\
        \begin{align*}\\
        f(x) \pm g(x) &= \sum_{n=0}^{\infty} a_n x^n + \sum_{n=0}^{\infty} b_n x^n \\\\
        &= \left[ a_0 + a_1 x + a_2 x^2 + \cdots \right] \pm \left[ b_0 + b_1 x + b_2 x^2 + \cdots \right] \\\\
        &= (a_0 \pm b_0) + (a_1 \pm b_1) x + (a_2 \pm b_2) x^2 + \cdots \\\\
        &= \sum_{n=0}^{\infty} (a_n \pm b_n) x^n
        \end{align*}
      `+"",n;return{c(){n=_(s)},l(e){n=p(e,s)},m(e,i){f(e,n,i)},p:h,d(e){e&&l(n)}}}function yt(a){let s=B`
        f(x) = \sum_{n=0}^{\infty} a_n x^n \quad g(x) = \sum_{n=0}^{\infty} b_n x^n \\
        \begin{align*}\\
        f(x) g(x) &= \left( \sum_{n=0}^{\infty} a_n x^n \right) \left( \sum_{m=0}^{\infty} b_m x^m \right) \\\\
        &= \left[ a_0 + a_1 x + a_2 x^2 + \cdots \right] \left[ b_0 + b_1 x + b_2 x^2 + \cdots \right] \\\\
        &= a_0 b_0 + (a_0 b_1 + a_1 b_0) x + (a_0 b_2 + a_1 b_1 + a_2 b_0) x^2 + \cdots \\\\
        &= \sum_{n=0}^{\infty} \left( \sum_{k=0}^{n} a_k b_{n-k} \right) x^n
        \end{align*}
      `+"",n;return{c(){n=_(s)},l(e){n=p(e,s)},m(e,i){f(e,n,i)},p:h,d(e){e&&l(n)}}}function At(a){let s=B`
        \begin{align*}
        f(x) = \sum_{n=0}^{\infty} a_n x^n \\\\
        f(g(x)) = \sum_{n=0}^{\infty} a_n g(x)^n
        \end{align*}
      `+"",n;return{c(){n=_(s)},l(e){n=p(e,s)},m(e,i){f(e,n,i)},p:h,d(e){e&&l(n)}}}function Pt(a){let s,n="Addition and Subtraction",e,i,r,x,R="Multiplication",N,u,o,T,E="Substitution",q,O,W;return i=new S({props:{displayMode:!0,$$slots:{default:[Wt]},$$scope:{ctx:a}}}),u=new S({props:{displayMode:!0,$$slots:{default:[yt]},$$scope:{ctx:a}}}),O=new S({props:{displayMode:!0,$$slots:{default:[At]},$$scope:{ctx:a}}}),{c(){s=F("strong"),s.textContent=n,e=d(),g(i.$$.fragment),r=d(),x=F("strong"),x.textContent=R,N=d(),g(u.$$.fragment),o=d(),T=F("strong"),T.textContent=E,q=d(),g(O.$$.fragment)},l(m){s=G(m,"STRONG",{"data-svelte-h":!0}),U(s)!=="svelte-quulwr"&&(s.textContent=n),e=k(m),b(i.$$.fragment,m),r=k(m),x=G(m,"STRONG",{"data-svelte-h":!0}),U(x)!=="svelte-1ni8e4q"&&(x.textContent=R),N=k(m),b(u.$$.fragment,m),o=k(m),T=G(m,"STRONG",{"data-svelte-h":!0}),U(T)!=="svelte-125xqb9"&&(T.textContent=E),q=k(m),b(O.$$.fragment,m)},m(m,c){f(m,s,c),f(m,e,c),v(i,m,c),f(m,r,c),f(m,x,c),f(m,N,c),v(u,m,c),f(m,o,c),f(m,T,c),f(m,q,c),v(O,m,c),W=!0},p(m,c){const L={};c&1&&(L.$$scope={dirty:c,ctx:m}),i.$set(L);const V={};c&1&&(V.$$scope={dirty:c,ctx:m}),u.$set(V);const K={};c&1&&(K.$$scope={dirty:c,ctx:m}),O.$set(K)},i(m){W||(w(i.$$.fragment,m),w(u.$$.fragment,m),w(O.$$.fragment,m),W=!0)},o(m){M(i.$$.fragment,m),M(u.$$.fragment,m),M(O.$$.fragment,m),W=!1},d(m){m&&(l(s),l(e),l(r),l(x),l(N),l(o),l(T),l(q)),C(i,m),C(u,m),C(O,m)}}}function jt(a){let s=B`f(x) = \cos(2x)`+"",n;return{c(){n=_(s)},l(e){n=p(e,s)},m(e,i){f(e,n,i)},p:h,d(e){e&&l(n)}}}function zt(a){let s=B`\cos(x)`+"",n;return{c(){n=_(s)},l(e){n=p(e,s)},m(e,i){f(e,n,i)},p:h,d(e){e&&l(n)}}}function It(a){let s=B`
                    \begin{align*}
                    \cos(x) &= \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!} \\
                    \cos(2x) &= \sum_{n=0}^{\infty} \frac{(-1)^n (2x)^{2n}}{(2n)!} \\
                    &= \sum_{n=0}^{\infty} \frac{(-1)^n 2^{2n} x^{2n}}{(2n)!} \\
                    &= \sum_{n=0}^{\infty} \frac{(-1)^n 4^{n} x^{2n}}{(2n)!} \\
                    &= \sum_{n=0}^{\infty} \frac{(-4)^n x^{2n}}{(2n)!}
                    \end{align*}
                `+"",n;return{c(){n=_(s)},l(e){n=p(e,s)},m(e,i){f(e,n,i)},p:h,d(e){e&&l(n)}}}function Dt(a){let s=B`\cos(2x)`+"",n;return{c(){n=_(s)},l(e){n=p(e,s)},m(e,i){f(e,n,i)},p:h,d(e){e&&l(n)}}}function Ht(a){let s=B`\sum_{n=0}^{\infty} \frac{(-4)^n  x^{2n}}{(2n)!}`+"",n;return{c(){n=_(s)},l(e){n=p(e,s)},m(e,i){f(e,n,i)},p:h,d(e){e&&l(n)}}}function Jt(a){let s=B`f(x) = (e^x)^2`+"",n;return{c(){n=_(s)},l(e){n=p(e,s)},m(e,i){f(e,n,i)},p:h,d(e){e&&l(n)}}}function Kt(a){let s=B`e^x`+"",n;return{c(){n=_(s)},l(e){n=p(e,s)},m(e,i){f(e,n,i)},p:h,d(e){e&&l(n)}}}function Qt(a){let s=B`
                    \begin{align*}
                    e^x &= \sum_{n=0}^{\infty} \frac{x^n}{n!} \\
                    (e^x)^2 &= \sum_{n=0}^{\infty} \frac{(x^2)^n}{n!} \\
                    &= \sum_{n=0}^{\infty} \frac{x^{2n}}{n!}
                    \end{align*}
                `+"",n;return{c(){n=_(s)},l(e){n=p(e,s)},m(e,i){f(e,n,i)},p:h,d(e){e&&l(n)}}}function Ut(a){let s=B`(e^x)^2`+"",n;return{c(){n=_(s)},l(e){n=p(e,s)},m(e,i){f(e,n,i)},p:h,d(e){e&&l(n)}}}function Vt(a){let s=B`\sum_{n=0}^{\infty} \frac{x^{2n}}{n!}`+"",n;return{c(){n=_(s)},l(e){n=p(e,s)},m(e,i){f(e,n,i)},p:h,d(e){e&&l(n)}}}function Xt(a){let s=B`f(x) = \sin^2(x) + \cos^2(x)`+"",n;return{c(){n=_(s)},l(e){n=p(e,s)},m(e,i){f(e,n,i)},p:h,d(e){e&&l(n)}}}function Yt(a){let s=B`
          \begin{align*}
          \cos(2x) &= \sum_{n=0}^{\infty} \frac{(-4)^n x^{2n}}{(2n)!} \\\\
          \sin^2(x) &= \frac{1 - \cos(2x)}{2} \\
          &= \frac{1}{2} - \frac{1}{2} \cos(2x) \\
          &= \frac{1}{2} - \frac{1}{2} \sum_{n=0}^{\infty} \frac{(-4)^n x^{2n}}{(2n)!} \\\\
          \cos^2(x) &= \frac{1 + \cos(2x)}{2} \\
          &= \frac{1}{2} + \frac{1}{2} \cos(2x) \\
          &= \frac{1}{2} + \frac{1}{2} \sum_{n=0}^{\infty} \frac{(-4)^n x^{2n}}{(2n)!} \\\\
          \sin^2(x) + \cos^2(x) &= \frac{1}{2} - \frac{1}{2} \sum_{n=0}^{\infty} \frac{(-4)^n x^{2n}}{(2n)!} + \frac{1}{2} + \frac{1}{2} \sum_{n=0}^{\infty} \frac{(-4)^n x^{2n}}{(2n)!} \\
          &= \frac{1}{2} + \frac{1}{2} \\
          &= 1
          \end{align*}
        `+"",n;return{c(){n=_(s)},l(e){n=p(e,s)},m(e,i){f(e,n,i)},p:h,d(e){e&&l(n)}}}function Zt(a){let s=B`\sin^2(x) + \cos^2(x)`+"",n;return{c(){n=_(s)},l(e){n=p(e,s)},m(e,i){f(e,n,i)},p:h,d(e){e&&l(n)}}}function te(a){let s=B`1`+"",n;return{c(){n=_(s)},l(e){n=p(e,s)},m(e,i){f(e,n,i)},p:h,d(e){e&&l(n)}}}function ee(a){let s,n="Example 1:",e,i,r,x,R,N,u,o,T,E,q,O,W,m,c,L,V="Example 2:",K,X,y,Y,A,Z,P,tt,j,et,z,nt,st,$t,ft,Q,xt="Example 3:",lt,it,I,ut,at,mt,D,rt,H,_t,J,pt,ot;return r=new S({props:{$$slots:{default:[jt]},$$scope:{ctx:a}}}),R=new S({props:{$$slots:{default:[zt]},$$scope:{ctx:a}}}),u=new S({props:{displayMode:!0,$$slots:{default:[It]},$$scope:{ctx:a}}}),T=new S({props:{$$slots:{default:[Dt]},$$scope:{ctx:a}}}),q=new S({props:{$$slots:{default:[Ht]},$$scope:{ctx:a}}}),y=new S({props:{$$slots:{default:[Jt]},$$scope:{ctx:a}}}),A=new S({props:{$$slots:{default:[Kt]},$$scope:{ctx:a}}}),P=new S({props:{displayMode:!0,$$slots:{default:[Qt]},$$scope:{ctx:a}}}),j=new S({props:{$$slots:{default:[Ut]},$$scope:{ctx:a}}}),z=new S({props:{$$slots:{default:[Vt]},$$scope:{ctx:a}}}),I=new S({props:{$$slots:{default:[Xt]},$$scope:{ctx:a}}}),D=new S({props:{displayMode:!0,$$slots:{default:[Yt]},$$scope:{ctx:a}}}),H=new S({props:{$$slots:{default:[Zt]},$$scope:{ctx:a}}}),J=new S({props:{$$slots:{default:[te]},$$scope:{ctx:a}}}),{c(){s=F("strong"),s.textContent=n,e=F("br"),i=_(`
            Find the Maclaurin series for `),g(r.$$.fragment),x=_(" by substitution into the Maclaurin series for "),g(R.$$.fragment),N=_(`.
            `),g(u.$$.fragment),o=_(`
            The Maclaurin series for `),g(T.$$.fragment),E=_(" is "),g(q.$$.fragment),O=_(`.
  
            `),W=F("br"),m=F("br"),c=d(),L=F("strong"),L.textContent=V,K=F("br"),X=_(`
            Find the Maclaurin series for `),g(y.$$.fragment),Y=_(" by substitution into the Maclaurin series for "),g(A.$$.fragment),Z=_(`.
            `),g(P.$$.fragment),tt=_(`
            The Maclaurin series for `),g(j.$$.fragment),et=_(" is "),g(z.$$.fragment),nt=_(`.
  
            `),st=F("br"),$t=F("br"),ft=d(),Q=F("strong"),Q.textContent=xt,lt=F("br"),it=_(`
      Find the Maclaurin series for `),g(I.$$.fragment),ut=_("."),at=F("br"),mt=d(),g(D.$$.fragment),rt=_(`
      The Maclaurin series for `),g(H.$$.fragment),_t=_(" is "),g(J.$$.fragment),pt=_(".")},l(t){s=G(t,"STRONG",{"data-svelte-h":!0}),U(s)!=="svelte-u4xhh"&&(s.textContent=n),e=G(t,"BR",{}),i=p(t,`
            Find the Maclaurin series for `),b(r.$$.fragment,t),x=p(t," by substitution into the Maclaurin series for "),b(R.$$.fragment,t),N=p(t,`.
            `),b(u.$$.fragment,t),o=p(t,`
            The Maclaurin series for `),b(T.$$.fragment,t),E=p(t," is "),b(q.$$.fragment,t),O=p(t,`.
  
            `),W=G(t,"BR",{}),m=G(t,"BR",{}),c=k(t),L=G(t,"STRONG",{"data-svelte-h":!0}),U(L)!=="svelte-1k1h9vi"&&(L.textContent=V),K=G(t,"BR",{}),X=p(t,`
            Find the Maclaurin series for `),b(y.$$.fragment,t),Y=p(t," by substitution into the Maclaurin series for "),b(A.$$.fragment,t),Z=p(t,`.
            `),b(P.$$.fragment,t),tt=p(t,`
            The Maclaurin series for `),b(j.$$.fragment,t),et=p(t," is "),b(z.$$.fragment,t),nt=p(t,`.
  
            `),st=G(t,"BR",{}),$t=G(t,"BR",{}),ft=k(t),Q=G(t,"STRONG",{"data-svelte-h":!0}),U(Q)!=="svelte-25calz"&&(Q.textContent=xt),lt=G(t,"BR",{}),it=p(t,`
      Find the Maclaurin series for `),b(I.$$.fragment,t),ut=p(t,"."),at=G(t,"BR",{}),mt=k(t),b(D.$$.fragment,t),rt=p(t,`
      The Maclaurin series for `),b(H.$$.fragment,t),_t=p(t," is "),b(J.$$.fragment,t),pt=p(t,".")},m(t,$){f(t,s,$),f(t,e,$),f(t,i,$),v(r,t,$),f(t,x,$),v(R,t,$),f(t,N,$),v(u,t,$),f(t,o,$),v(T,t,$),f(t,E,$),v(q,t,$),f(t,O,$),f(t,W,$),f(t,m,$),f(t,c,$),f(t,L,$),f(t,K,$),f(t,X,$),v(y,t,$),f(t,Y,$),v(A,t,$),f(t,Z,$),v(P,t,$),f(t,tt,$),v(j,t,$),f(t,et,$),v(z,t,$),f(t,nt,$),f(t,st,$),f(t,$t,$),f(t,ft,$),f(t,Q,$),f(t,lt,$),f(t,it,$),v(I,t,$),f(t,ut,$),f(t,at,$),f(t,mt,$),v(D,t,$),f(t,rt,$),v(H,t,$),f(t,_t,$),v(J,t,$),f(t,pt,$),ot=!0},p(t,$){const gt={};$&1&&(gt.$$scope={dirty:$,ctx:t}),r.$set(gt);const bt={};$&1&&(bt.$$scope={dirty:$,ctx:t}),R.$set(bt);const vt={};$&1&&(vt.$$scope={dirty:$,ctx:t}),u.$set(vt);const wt={};$&1&&(wt.$$scope={dirty:$,ctx:t}),T.$set(wt);const Mt={};$&1&&(Mt.$$scope={dirty:$,ctx:t}),q.$set(Mt);const Ct={};$&1&&(Ct.$$scope={dirty:$,ctx:t}),y.$set(Ct);const Rt={};$&1&&(Rt.$$scope={dirty:$,ctx:t}),A.$set(Rt);const Tt={};$&1&&(Tt.$$scope={dirty:$,ctx:t}),P.$set(Tt);const ht={};$&1&&(ht.$$scope={dirty:$,ctx:t}),j.$set(ht);const St={};$&1&&(St.$$scope={dirty:$,ctx:t}),z.$set(St);const Bt={};$&1&&(Bt.$$scope={dirty:$,ctx:t}),I.$set(Bt);const qt={};$&1&&(qt.$$scope={dirty:$,ctx:t}),D.$set(qt);const Ft={};$&1&&(Ft.$$scope={dirty:$,ctx:t}),H.$set(Ft);const Gt={};$&1&&(Gt.$$scope={dirty:$,ctx:t}),J.$set(Gt)},i(t){ot||(w(r.$$.fragment,t),w(R.$$.fragment,t),w(u.$$.fragment,t),w(T.$$.fragment,t),w(q.$$.fragment,t),w(y.$$.fragment,t),w(A.$$.fragment,t),w(P.$$.fragment,t),w(j.$$.fragment,t),w(z.$$.fragment,t),w(I.$$.fragment,t),w(D.$$.fragment,t),w(H.$$.fragment,t),w(J.$$.fragment,t),ot=!0)},o(t){M(r.$$.fragment,t),M(R.$$.fragment,t),M(u.$$.fragment,t),M(T.$$.fragment,t),M(q.$$.fragment,t),M(y.$$.fragment,t),M(A.$$.fragment,t),M(P.$$.fragment,t),M(j.$$.fragment,t),M(z.$$.fragment,t),M(I.$$.fragment,t),M(D.$$.fragment,t),M(H.$$.fragment,t),M(J.$$.fragment,t),ot=!1},d(t){t&&(l(s),l(e),l(i),l(x),l(N),l(o),l(E),l(O),l(W),l(m),l(c),l(L),l(K),l(X),l(Y),l(Z),l(tt),l(et),l(nt),l(st),l($t),l(ft),l(Q),l(lt),l(it),l(ut),l(at),l(mt),l(rt),l(_t),l(pt)),C(r,t),C(R,t),C(u,t),C(T,t),C(q,t),C(y,t),C(A,t),C(P,t),C(j,t),C(z,t),C(I,t),C(D,t),C(H,t),C(J,t)}}}function ne(a){let s,n,e,i,r,x,R,N;return s=new Et({props:{heading:"Algebra and Substitution"}}),e=new ct({props:{heading:"Introduction",$$slots:{default:[Lt]},$$scope:{ctx:a}}}),r=new ct({props:{heading:"Algebraic Properties",$$slots:{default:[Pt]},$$scope:{ctx:a}}}),R=new ct({props:{heading:"Examples",$$slots:{default:[ee]},$$scope:{ctx:a}}}),{c(){g(s.$$.fragment),n=d(),g(e.$$.fragment),i=d(),g(r.$$.fragment),x=d(),g(R.$$.fragment)},l(u){b(s.$$.fragment,u),n=k(u),b(e.$$.fragment,u),i=k(u),b(r.$$.fragment,u),x=k(u),b(R.$$.fragment,u)},m(u,o){v(s,u,o),f(u,n,o),v(e,u,o),f(u,i,o),v(r,u,o),f(u,x,o),v(R,u,o),N=!0},p(u,o){const T={};o&1&&(T.$$scope={dirty:o,ctx:u}),e.$set(T);const E={};o&1&&(E.$$scope={dirty:o,ctx:u}),r.$set(E);const q={};o&1&&(q.$$scope={dirty:o,ctx:u}),R.$set(q)},i(u){N||(w(s.$$.fragment,u),w(e.$$.fragment,u),w(r.$$.fragment,u),w(R.$$.fragment,u),N=!0)},o(u){M(s.$$.fragment,u),M(e.$$.fragment,u),M(r.$$.fragment,u),M(R.$$.fragment,u),N=!1},d(u){u&&(l(n),l(i),l(x)),C(s,u),C(e,u),C(r,u),C(R,u)}}}function se(a){let s,n;return s=new kt({props:{$$slots:{default:[ne]},$$scope:{ctx:a}}}),{c(){g(s.$$.fragment)},l(e){b(s.$$.fragment,e)},m(e,i){v(s,e,i),n=!0},p(e,[i]){const r={};i&1&&(r.$$scope={dirty:i,ctx:e}),s.$set(r)},i(e){n||(w(s.$$.fragment,e),n=!0)},o(e){M(s.$$.fragment,e),n=!1},d(e){C(s,e)}}}function B(a){return a.raw[0]}class ue extends Ot{constructor(s){super(),dt(this,s,null,se,Nt,{})}}export{ue as component};
