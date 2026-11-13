import{s as Ft,n as F}from"../chunks/CVhLxNSM.js";import{S as Tt,i as Pt,c as h,b,m as w,t as x,a as d,d as M,s as q,e as y,f as i,g as r,h as c,k as g,j as k,l as R,n as rt}from"../chunks/DvSB8R1X.js";import{L as St,S as it,M as C}from"../chunks/ByTZAYyp.js";import{L as kt}from"../chunks/xLaKUPuM.js";import{D as mt}from"../chunks/CkoZ7XGi.js";import{I as Rt}from"../chunks/D3W7TYDU.js";import{s as Ct}from"../chunks/NvOCtOX1.js";import{s as qt}from"../chunks/CqEGPqgJ.js";function yt(f){let $=T`
        \begin{align*}
        \text{Position: } &&\mathbf{r}(t)=\,\,& \langle x(t),\, y(t),\, z(t) \rangle \\
        \text{Velocity: } &&\mathbf{v}(t)=\,\,& \mathbf{r}'(t) = \langle x'(t),\, y'(t),\, z'(t) \rangle \\
        \text{Speed: } &&\|\mathbf{v}(t)\|=\,\,& \sqrt{(x'(t))^2 + (y'(t))^2 + (z'(t))^2} \\
        \text{Acceleration: } &&\mathbf{a}(t)=\,\,& \mathbf{v}'(t) = \mathbf{r}''(t) = \langle x''(t),\, y''(t),\, z''(t) \rangle \\
        \text{Direction: } &&\mathbf{T}(t)=\,\,& \frac{\mathbf{v}(t)}{\|\mathbf{v}(t)\|}
        \end{align*}
        `+"",n;return{c(){n=c($)},l(t){n=g(t,$)},m(t,l){i(t,n,l)},p:F,d(t){t&&r(n)}}}function At(f){let $,n,t;return n=new C({props:{displayMode:!0,$$slots:{default:[yt]},$$scope:{ctx:f}}}),{c(){$=c(`When analyzing motion in space, we use the following:
        `),h(n.$$.fragment)},l(l){$=g(l,`When analyzing motion in space, we use the following:
        `),b(n.$$.fragment,l)},m(l,u){i(l,$,u),w(n,l,u),t=!0},p(l,u){const _={};u&4&&(_.$$scope={dirty:u,ctx:l}),n.$set(_)},i(l){t||(x(n.$$.fragment,l),t=!0)},o(l){d(n.$$.fragment,l),t=!1},d(l){l&&r($),M(n,l)}}}function Bt(f){let $=T`
        \begin{align*}
        r(t) &= \text{Initial Position} + \text{Initial velocity} + \text{Gravity} \\
        &= \langle x_0, y_0, z_0 \rangle + t\langle v_{0x}, v_{0y}, v_{0z} \rangle + \frac{1}{2}t^2\langle 0, g, 0 \rangle \\
        &= \langle x_0 + v_{0x}t,\, y_0 + v_{0y}t - \frac{1}{2}gt^2,\, z_0 + v_{0z}t \rangle \\
        \end{align*}
        `+"",n;return{c(){n=c($)},l(t){n=g(t,$)},m(t,l){i(t,n,l)},p:F,d(t){t&&r(n)}}}function Gt(f){let $=T`(x_0, y_0, z_0)`+"",n;return{c(){n=c($)},l(t){n=g(t,$)},m(t,l){i(t,n,l)},p:F,d(t){t&&r(n)}}}function It(f){let $=T`(v_{0x}, v_{0y}, v_{0z})`+"",n;return{c(){n=c($)},l(t){n=g(t,$)},m(t,l){i(t,n,l)},p:F,d(t){t&&r(n)}}}function Nt(f){let $,n,t,l,u,_,o,p;return n=new C({props:{displayMode:!0,$$slots:{default:[Bt]},$$scope:{ctx:f}}}),l=new C({props:{$$slots:{default:[Gt]},$$scope:{ctx:f}}}),_=new C({props:{$$slots:{default:[It]},$$scope:{ctx:f}}}),{c(){$=c(`For projectile motion problems under gravity (g = -9.8 m/s²):
        `),h(n.$$.fragment),t=c(`
        Where `),h(l.$$.fragment),u=c(" is the initial position and "),h(_.$$.fragment),o=c(" is the initial velocity.")},l(s){$=g(s,`For projectile motion problems under gravity (g = -9.8 m/s²):
        `),b(n.$$.fragment,s),t=g(s,`
        Where `),b(l.$$.fragment,s),u=g(s," is the initial position and "),b(_.$$.fragment,s),o=g(s," is the initial velocity.")},m(s,v){i(s,$,v),w(n,s,v),i(s,t,v),w(l,s,v),i(s,u,v),w(_,s,v),i(s,o,v),p=!0},p(s,v){const m={};v&4&&(m.$$scope={dirty:v,ctx:s}),n.$set(m);const z={};v&4&&(z.$$scope={dirty:v,ctx:s}),l.$set(z);const P={};v&4&&(P.$$scope={dirty:v,ctx:s}),_.$set(P)},i(s){p||(x(n.$$.fragment,s),x(l.$$.fragment,s),x(_.$$.fragment,s),p=!0)},o(s){d(n.$$.fragment,s),d(l.$$.fragment,s),d(_.$$.fragment,s),p=!1},d(s){s&&(r($),r(t),r(u),r(o)),M(n,s),M(l,s),M(_,s)}}}function jt(f){let $=T`r`+"",n;return{c(){n=c($)},l(t){n=g(t,$)},m(t,l){i(t,n,l)},p:F,d(t){t&&r(n)}}}function Dt(f){let $=T`\omega`+"",n;return{c(){n=c($)},l(t){n=g(t,$)},m(t,l){i(t,n,l)},p:F,d(t){t&&r(n)}}}function Et(f){let $,n,t,l,u,_;return $=new C({props:{$$slots:{default:[jt]},$$scope:{ctx:f}}}),l=new C({props:{$$slots:{default:[Dt]},$$scope:{ctx:f}}}),{c(){h($.$$.fragment),n=c(` - The radius of the circle
            `),t=k("br"),h(l.$$.fragment),u=c(" - The speed of rotation")},l(o){b($.$$.fragment,o),n=g(o,` - The radius of the circle
            `),t=R(o,"BR",{}),b(l.$$.fragment,o),u=g(o," - The speed of rotation")},m(o,p){w($,o,p),i(o,n,p),i(o,t,p),w(l,o,p),i(o,u,p),_=!0},p(o,p){const s={};p&4&&(s.$$scope={dirty:p,ctx:o}),$.$set(s);const v={};p&4&&(v.$$scope={dirty:p,ctx:o}),l.$set(v)},i(o){_||(x($.$$.fragment,o),x(l.$$.fragment,o),_=!0)},o(o){d($.$$.fragment,o),d(l.$$.fragment,o),_=!1},d(o){o&&(r(n),r(t),r(u)),M($,o),M(l,o)}}}function Lt(f){let $=T`
            \begin{align*}
            \text{Position: } &&\mathbf{r}(t)=\,\,& \langle r\cos(\omega t),\, r\sin(\omega t),\, 0 \rangle \\
            \text{Velocity: } &&\mathbf{v}(t)=\,\,& \mathbf{r}'(t) = \langle -r\omega\sin(\omega t),\, r\omega\cos(\omega t),\, 0 \rangle \\
            \text{Speed: } &&\|\mathbf{v}(t)\|=\,\,& r\omega \\
            \text{Acceleration: } &&\mathbf{a}(t)=\,\,& \mathbf{v}'(t) = \langle -r\omega^2\cos(\omega t),\, -r\omega^2\sin(\omega t),\, 0 \rangle \\
            \end{align*}
            `+"",n;return{c(){n=c($)},l(t){n=g(t,$)},m(t,l){i(t,n,l)},p:F,d(t){t&&r(n)}}}function Wt(f){let $,n,t,l,u,_,o;return t=new Rt({props:{$$slots:{default:[Et]},$$scope:{ctx:f}}}),u=new C({props:{displayMode:!0,$$slots:{default:[Lt]},$$scope:{ctx:f}}}),{c(){$=c(`Circular motion in the xy-plane with 
        `),n=k("br"),h(t.$$.fragment),l=q(),h(u.$$.fragment),_=c(`
            Note that the speed is a constant value, equal to the product of the radius of the circle and the speed of rotating around the circle.`)},l(p){$=g(p,`Circular motion in the xy-plane with 
        `),n=R(p,"BR",{}),b(t.$$.fragment,p),l=y(p),b(u.$$.fragment,p),_=g(p,`
            Note that the speed is a constant value, equal to the product of the radius of the circle and the speed of rotating around the circle.`)},m(p,s){i(p,$,s),i(p,n,s),w(t,p,s),i(p,l,s),w(u,p,s),i(p,_,s),o=!0},p(p,s){const v={};s&4&&(v.$$scope={dirty:s,ctx:p}),t.$set(v);const m={};s&4&&(m.$$scope={dirty:s,ctx:p}),u.$set(m)},i(p){o||(x(t.$$.fragment,p),x(u.$$.fragment,p),o=!0)},o(p){d(t.$$.fragment,p),d(u.$$.fragment,p),o=!1},d(p){p&&(r($),r(n),r(l),r(_)),M(t,p),M(u,p)}}}function Ot(f){let $=T`(0, 0, 0)`+"",n;return{c(){n=c($)},l(t){n=g(t,$)},m(t,l){i(t,n,l)},p:F,d(t){t&&r(n)}}}function Vt(f){let $=T`\langle 2, 3, 0 \rangle`+"",n;return{c(){n=c($)},l(t){n=g(t,$)},m(t,l){i(t,n,l)},p:F,d(t){t&&r(n)}}}function Ut(f){let $=T`
            \begin{align*}
            \mathbf{r}(t) &= \langle 0, 0, 0 \rangle + t\langle 2, 3, 0 \rangle + \frac{1}{2}t^2\langle 0, -9.8, 0 \rangle \\
            &= \langle 2t, 3t - 4.9t^2, 0 \rangle \\
            \mathbf{v}(t) &= \langle 2, 3 - 9.8t, 0 \rangle
            \end{align*}
        `+"",n;return{c(){n=c($)},l(t){n=g(t,$)},m(t,l){i(t,n,l)},p:F,d(t){t&&r(n)}}}function Xt(f){let $=T`
            \begin{align*}
            3 - 9.8t &= 0 \\
            t &= 0.306 \text{ seconds} \\
            y_{max} &= 3(0.306) - 4.9(0.306)^2 = 0.459 \text{ meters}
            \end{align*}
        `+"",n;return{c(){n=c($)},l(t){n=g(t,$)},m(t,l){i(t,n,l)},p:F,d(t){t&&r(n)}}}function Yt(f){let $=T`\omega = 2`+"",n;return{c(){n=c($)},l(t){n=g(t,$)},m(t,l){i(t,n,l)},p:F,d(t){t&&r(n)}}}function Ht(f){let $=T`t = \pi/4`+"",n;return{c(){n=c($)},l(t){n=g(t,$)},m(t,l){i(t,n,l)},p:F,d(t){t&&r(n)}}}function Jt(f){let $=T`
            \begin{align*}
            \mathbf{r}(\pi/4) &= \langle 5\cos(\pi/2), 5\sin(\pi/2), 0 \rangle \\
            &= \langle 0, 5, 0 \rangle \\
            \mathbf{v}(\pi/4) &= \langle -10\sin(\pi/2), 10\cos(\pi/2), 0 \rangle \\
            &= \langle -10, 0, 0 \rangle \\
            \text{Speed} &= \|\mathbf{v}(\pi/4)\| = r\omega = 5(2) = 10 \text{ m/s}
            \end{align*}
        `+"",n;return{c(){n=c($)},l(t){n=g(t,$)},m(t,l){i(t,n,l)},p:F,d(t){t&&r(n)}}}function Kt(f){let $=T`\mathbf{r}(t) = \langle t^2, t^3, t \rangle`+"",n;return{c(){n=c($)},l(t){n=g(t,$)},m(t,l){i(t,n,l)},p:F,d(t){t&&r(n)}}}function Qt(f){let $=T`t = 1`+"",n;return{c(){n=c($)},l(t){n=g(t,$)},m(t,l){i(t,n,l)},p:F,d(t){t&&r(n)}}}function Zt(f){let $=T`
            \begin{align*}
            \mathbf{v}(t) &= \langle 2t, 3t^2, 1 \rangle \\
            \mathbf{v}(1) &= \langle 2, 3, 1 \rangle \\
            \|\mathbf{v}(1)\| &= \sqrt{4 + 9 + 1} = \sqrt{14} \\
            \mathbf{T}(1) &= \frac{\mathbf{v}(1)}{\|\mathbf{v}(1)\|} = \left\langle \frac{2}{\sqrt{14}}, \frac{3}{\sqrt{14}}, \frac{1}{\sqrt{14}} \right\rangle
            \end{align*}
        `+"",n;return{c(){n=c($)},l(t){n=g(t,$)},m(t,l){i(t,n,l)},p:F,d(t){t&&r(n)}}}function te(f){let $=T`\mathbf{T}(1)`+"",n;return{c(){n=c($)},l(t){n=g(t,$)},m(t,l){i(t,n,l)},p:F,d(t){t&&r(n)}}}function ee(f){let $=T`t = 1`+"",n;return{c(){n=c($)},l(t){n=g(t,$)},m(t,l){i(t,n,l)},p:F,d(t){t&&r(n)}}}function ne(f){let $,n="Example 1: Projectile Motion",t,l,u,_,o,p,s,v,m,z,P,L,W,S,ot="Example 2: Circular Motion Speed",X,Y,A,H,B,J,G,K,O,Q,Z,V,pt="Example 3: Direction of Motion",tt,et,I,nt,N,$t,j,lt,D,st,E,at,U,ft;return u=new C({props:{$$slots:{default:[Ot]},$$scope:{ctx:f}}}),o=new C({props:{$$slots:{default:[Vt]},$$scope:{ctx:f}}}),s=new C({props:{displayMode:!0,$$slots:{default:[Ut]},$$scope:{ctx:f}}}),m=new C({props:{displayMode:!0,$$slots:{default:[Xt]},$$scope:{ctx:f}}}),P=new mt({props:{sketch:Ct,sketchParameters:{parametricFunction:se,cameraPosition:{x:0,y:0,z:-500},tMin:0,tMax:.61}}}),A=new C({props:{$$slots:{default:[Yt]},$$scope:{ctx:f}}}),B=new C({props:{$$slots:{default:[Ht]},$$scope:{ctx:f}}}),G=new C({props:{displayMode:!0,$$slots:{default:[Jt]},$$scope:{ctx:f}}}),O=new mt({props:{sketch:qt,sketchParameters:{plotFunctionX:f[0],plotFunctionY:f[1],show_t:[0,6.28],dimensions:[-6,6,-6,6]}}}),I=new C({props:{$$slots:{default:[Kt]},$$scope:{ctx:f}}}),N=new C({props:{$$slots:{default:[Qt]},$$scope:{ctx:f}}}),j=new C({props:{displayMode:!0,$$slots:{default:[Zt]},$$scope:{ctx:f}}}),D=new C({props:{$$slots:{default:[te]},$$scope:{ctx:f}}}),E=new C({props:{$$slots:{default:[ee]},$$scope:{ctx:f}}}),U=new mt({props:{sketch:Ct,sketchParameters:{parametricFunction:ae,cameraPosition:{x:500,y:100,z:-500},tMin:0,tMax:5}}}),{c(){$=k("strong"),$.textContent=n,t=k("br"),l=c(`
        A ball is thrown from initial position `),h(u.$$.fragment),_=c(" with initial velocity "),h(o.$$.fragment),p=c(` m/s. Find its position, velocity, and maximum height.
        `),h(s.$$.fragment),v=c(`
        For maximum height, set y-component of velocity to zero:
        `),h(m.$$.fragment),z=q(),h(P.$$.fragment),L=q(),W=k("br"),S=k("strong"),S.textContent=ot,X=k("br"),Y=c(`
        A particle moves in a circle of radius 5 meters with angular velocity `),h(A.$$.fragment),H=c(" rad/s. Find its position, velocity, and speed at "),h(B.$$.fragment),J=c(`.
        `),h(G.$$.fragment),K=q(),h(O.$$.fragment),Q=q(),Z=k("br"),V=k("strong"),V.textContent=pt,tt=k("br"),et=c(`
        A particle moves according to `),h(I.$$.fragment),nt=c(". Find its velocity and direction at "),h(N.$$.fragment),$t=c(`.
        `),h(j.$$.fragment),lt=c(`
        The direction vector `),h(D.$$.fragment),st=c(" is a unit vector pointing in the direction of motion at "),h(E.$$.fragment),at=c(`.
        `),h(U.$$.fragment)},l(e){$=R(e,"STRONG",{"data-svelte-h":!0}),rt($)!=="svelte-127pcla"&&($.textContent=n),t=R(e,"BR",{}),l=g(e,`
        A ball is thrown from initial position `),b(u.$$.fragment,e),_=g(e," with initial velocity "),b(o.$$.fragment,e),p=g(e,` m/s. Find its position, velocity, and maximum height.
        `),b(s.$$.fragment,e),v=g(e,`
        For maximum height, set y-component of velocity to zero:
        `),b(m.$$.fragment,e),z=y(e),b(P.$$.fragment,e),L=y(e),W=R(e,"BR",{}),S=R(e,"STRONG",{"data-svelte-h":!0}),rt(S)!=="svelte-15cyhao"&&(S.textContent=ot),X=R(e,"BR",{}),Y=g(e,`
        A particle moves in a circle of radius 5 meters with angular velocity `),b(A.$$.fragment,e),H=g(e," rad/s. Find its position, velocity, and speed at "),b(B.$$.fragment,e),J=g(e,`.
        `),b(G.$$.fragment,e),K=y(e),b(O.$$.fragment,e),Q=y(e),Z=R(e,"BR",{}),V=R(e,"STRONG",{"data-svelte-h":!0}),rt(V)!=="svelte-1v13p1n"&&(V.textContent=pt),tt=R(e,"BR",{}),et=g(e,`
        A particle moves according to `),b(I.$$.fragment,e),nt=g(e,". Find its velocity and direction at "),b(N.$$.fragment,e),$t=g(e,`.
        `),b(j.$$.fragment,e),lt=g(e,`
        The direction vector `),b(D.$$.fragment,e),st=g(e," is a unit vector pointing in the direction of motion at "),b(E.$$.fragment,e),at=g(e,`.
        `),b(U.$$.fragment,e)},m(e,a){i(e,$,a),i(e,t,a),i(e,l,a),w(u,e,a),i(e,_,a),w(o,e,a),i(e,p,a),w(s,e,a),i(e,v,a),w(m,e,a),i(e,z,a),w(P,e,a),i(e,L,a),i(e,W,a),i(e,S,a),i(e,X,a),i(e,Y,a),w(A,e,a),i(e,H,a),w(B,e,a),i(e,J,a),w(G,e,a),i(e,K,a),w(O,e,a),i(e,Q,a),i(e,Z,a),i(e,V,a),i(e,tt,a),i(e,et,a),w(I,e,a),i(e,nt,a),w(N,e,a),i(e,$t,a),w(j,e,a),i(e,lt,a),w(D,e,a),i(e,st,a),w(E,e,a),i(e,at,a),w(U,e,a),ft=!0},p(e,a){const ut={};a&4&&(ut.$$scope={dirty:a,ctx:e}),u.$set(ut);const ct={};a&4&&(ct.$$scope={dirty:a,ctx:e}),o.$set(ct);const gt={};a&4&&(gt.$$scope={dirty:a,ctx:e}),s.$set(gt);const _t={};a&4&&(_t.$$scope={dirty:a,ctx:e}),m.$set(_t);const vt={};a&4&&(vt.$$scope={dirty:a,ctx:e}),A.$set(vt);const ht={};a&4&&(ht.$$scope={dirty:a,ctx:e}),B.$set(ht);const bt={};a&4&&(bt.$$scope={dirty:a,ctx:e}),G.$set(bt);const wt={};a&4&&(wt.$$scope={dirty:a,ctx:e}),I.$set(wt);const xt={};a&4&&(xt.$$scope={dirty:a,ctx:e}),N.$set(xt);const dt={};a&4&&(dt.$$scope={dirty:a,ctx:e}),j.$set(dt);const Mt={};a&4&&(Mt.$$scope={dirty:a,ctx:e}),D.$set(Mt);const zt={};a&4&&(zt.$$scope={dirty:a,ctx:e}),E.$set(zt)},i(e){ft||(x(u.$$.fragment,e),x(o.$$.fragment,e),x(s.$$.fragment,e),x(m.$$.fragment,e),x(P.$$.fragment,e),x(A.$$.fragment,e),x(B.$$.fragment,e),x(G.$$.fragment,e),x(O.$$.fragment,e),x(I.$$.fragment,e),x(N.$$.fragment,e),x(j.$$.fragment,e),x(D.$$.fragment,e),x(E.$$.fragment,e),x(U.$$.fragment,e),ft=!0)},o(e){d(u.$$.fragment,e),d(o.$$.fragment,e),d(s.$$.fragment,e),d(m.$$.fragment,e),d(P.$$.fragment,e),d(A.$$.fragment,e),d(B.$$.fragment,e),d(G.$$.fragment,e),d(O.$$.fragment,e),d(I.$$.fragment,e),d(N.$$.fragment,e),d(j.$$.fragment,e),d(D.$$.fragment,e),d(E.$$.fragment,e),d(U.$$.fragment,e),ft=!1},d(e){e&&(r($),r(t),r(l),r(_),r(p),r(v),r(z),r(L),r(W),r(S),r(X),r(Y),r(H),r(J),r(K),r(Q),r(Z),r(V),r(tt),r(et),r(nt),r($t),r(lt),r(st),r(at)),M(u,e),M(o,e),M(s,e),M(m,e),M(P,e),M(A,e),M(B,e),M(G,e),M(O,e),M(I,e),M(N,e),M(j,e),M(D,e),M(E,e),M(U,e)}}}function $e(f){let $,n,t,l,u,_,o,p,s,v;return $=new kt({props:{heading:"Motion"}}),t=new it({props:{heading:"Introduction",$$slots:{default:[At]},$$scope:{ctx:f}}}),u=new it({props:{heading:"Motion Under Gravity",$$slots:{default:[Nt]},$$scope:{ctx:f}}}),o=new it({props:{heading:"Circular Motion",$$slots:{default:[Wt]},$$scope:{ctx:f}}}),s=new it({props:{heading:"Examples",$$slots:{default:[ne]},$$scope:{ctx:f}}}),{c(){h($.$$.fragment),n=q(),h(t.$$.fragment),l=q(),h(u.$$.fragment),_=q(),h(o.$$.fragment),p=q(),h(s.$$.fragment)},l(m){b($.$$.fragment,m),n=y(m),b(t.$$.fragment,m),l=y(m),b(u.$$.fragment,m),_=y(m),b(o.$$.fragment,m),p=y(m),b(s.$$.fragment,m)},m(m,z){w($,m,z),i(m,n,z),w(t,m,z),i(m,l,z),w(u,m,z),i(m,_,z),w(o,m,z),i(m,p,z),w(s,m,z),v=!0},p(m,z){const P={};z&4&&(P.$$scope={dirty:z,ctx:m}),t.$set(P);const L={};z&4&&(L.$$scope={dirty:z,ctx:m}),u.$set(L);const W={};z&4&&(W.$$scope={dirty:z,ctx:m}),o.$set(W);const S={};z&4&&(S.$$scope={dirty:z,ctx:m}),s.$set(S)},i(m){v||(x($.$$.fragment,m),x(t.$$.fragment,m),x(u.$$.fragment,m),x(o.$$.fragment,m),x(s.$$.fragment,m),v=!0)},o(m){d($.$$.fragment,m),d(t.$$.fragment,m),d(u.$$.fragment,m),d(o.$$.fragment,m),d(s.$$.fragment,m),v=!1},d(m){m&&(r(n),r(l),r(_),r(p)),M($,m),M(t,m),M(u,m),M(o,m),M(s,m)}}}function le(f){let $,n;return $=new St({props:{$$slots:{default:[$e]},$$scope:{ctx:f}}}),{c(){h($.$$.fragment)},l(t){b($.$$.fragment,t)},m(t,l){w($,t,l),n=!0},p(t,[l]){const u={};l&4&&(u.$$scope={dirty:l,ctx:t}),$.$set(u)},i(t){n||(x($.$$.fragment,t),n=!0)},o(t){d($.$$.fragment,t),n=!1},d(t){M($,t)}}}function T(f){return f.raw[0]}const se=f=>({x:10*f,y:15*f-24.5*f**2,z:0}),ae=f=>({x:f**2,y:f**3,z:f});function fe(f){return[t=>5*Math.cos(2*t),t=>5*Math.sin(2*t)]}class _e extends Tt{constructor($){super(),Pt(this,$,fe,le,Ft,{})}}export{_e as component};
