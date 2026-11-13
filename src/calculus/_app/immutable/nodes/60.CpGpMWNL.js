import{s as gt,n as E}from"../chunks/CVhLxNSM.js";import{S as ht,i as bt,c as x,b as g,m as h,t as b,a as y,d as w,s as j,e as G,f,g as l,h as a,j as _,k as p,l as d}from"../chunks/DvSB8R1X.js";import{L as yt,S as wt,M as S}from"../chunks/ByTZAYyp.js";import{L as Bt}from"../chunks/xLaKUPuM.js";import{D as _t}from"../chunks/CkoZ7XGi.js";import{I as dt}from"../chunks/D3W7TYDU.js";import{s as xt}from"../chunks/Bw3t_506.js";function kt(r){let n=T`y(x + \Delta x) = y(x) + \Delta x \cdot \frac{dy}{dx}(x, y(x))`+"",s;return{c(){s=a(n)},l(e){s=p(e,n)},m(e,o){f(e,s,o)},p:E,d(e){e&&l(s)}}}function vt(r){let n=T`(x,y)`+"",s;return{c(){s=a(n)},l(e){s=p(e,n)},m(e,o){f(e,s,o)},p:E,d(e){e&&l(s)}}}function Rt(r){let n=T`x`+"",s;return{c(){s=a(n)},l(e){s=p(e,n)},m(e,o){f(e,s,o)},p:E,d(e){e&&l(s)}}}function Ct(r){let n=T`y`+"",s;return{c(){s=a(n)},l(e){s=p(e,n)},m(e,o){f(e,s,o)},p:E,d(e){e&&l(s)}}}function Et(r){let n,s,e,o,u,c,R,B,M,k,v,I;return s=new S({props:{$$slots:{default:[vt]},$$scope:{ctx:r}}}),c=new S({props:{$$slots:{default:[Rt]},$$scope:{ctx:r}}}),k=new S({props:{$$slots:{default:[Ct]},$$scope:{ctx:r}}}),{c(){n=a("Take "),x(s.$$.fragment),e=j(),o=_("br"),u=a("Add the step value to "),x(c.$$.fragment),R=j(),B=_("br"),M=a("Add the product of the step and the slope to "),x(k.$$.fragment),v=a(".")},l(i){n=p(i,"Take "),g(s.$$.fragment,i),e=G(i),o=d(i,"BR",{}),u=p(i,"Add the step value to "),g(c.$$.fragment,i),R=G(i),B=d(i,"BR",{}),M=p(i,"Add the product of the step and the slope to "),g(k.$$.fragment,i),v=p(i,".")},m(i,m){f(i,n,m),h(s,i,m),f(i,e,m),f(i,o,m),f(i,u,m),h(c,i,m),f(i,R,m),f(i,B,m),f(i,M,m),h(k,i,m),f(i,v,m),I=!0},p(i,m){const L={};m&2&&(L.$$scope={dirty:m,ctx:i}),s.$set(L);const P={};m&2&&(P.$$scope={dirty:m,ctx:i}),c.$set(P);const C={};m&2&&(C.$$scope={dirty:m,ctx:i}),k.$set(C)},i(i){I||(b(s.$$.fragment,i),b(c.$$.fragment,i),b(k.$$.fragment,i),I=!0)},o(i){y(s.$$.fragment,i),y(c.$$.fragment,i),y(k.$$.fragment,i),I=!1},d(i){i&&(l(n),l(e),l(o),l(u),l(R),l(B),l(M),l(v)),w(s,i),w(c,i),w(k,i)}}}function Mt(r){let n,s,e;return{c(){n=a(`Each line is a step along the function. 
			`),s=_("br"),e=a("Each step's slope is the slope of the function at its starting point.")},l(o){n=p(o,`Each line is a step along the function. 
			`),s=d(o,"BR",{}),e=p(o,"Each step's slope is the slope of the function at its starting point.")},m(o,u){f(o,n,u),f(o,s,u),f(o,e,u)},p:E,d(o){o&&(l(n),l(s),l(e))}}}function It(r){let n=T`\frac{dy}{dx}=x+y`+"",s;return{c(){s=a(n)},l(e){s=p(e,n)},m(e,o){f(e,s,o)},p:E,d(e){e&&l(s)}}}function St(r){let n=T`y(0)=1`+"",s;return{c(){s=a(n)},l(e){s=p(e,n)},m(e,o){f(e,s,o)},p:E,d(e){e&&l(s)}}}function Tt(r){let n=T`h=0.1`+"",s;return{c(){s=a(n)},l(e){s=p(e,n)},m(e,o){f(e,s,o)},p:E,d(e){e&&l(s)}}}function Dt(r){let n=T`
			\begin{align*}
			y(0) &= 1 \\ \text{} \\
			y(x + \Delta x) &= y(x) + \Delta x \cdot \frac{dy}{dx}(x, y(x)) \\ \text{} \\
			y(0 + 0.1) &= y(0) + 0.1 \cdot \frac{dy}{dx}(0, y(0)) \\ \text{} \\
			y(0.1) &= 1 + 0.1 \cdot \frac{dy}{dx}(0, 1) \\ \text{} \\
			y(0.1) &= 1 + 0.1 \cdot (0 + 1) \\ \text{} \\
			y(0.1) &= 1.1 \\ \text{} \\
			\end{align*}
		`+"",s;return{c(){s=a(n)},l(e){s=p(e,n)},m(e,o){f(e,s,o)},p:E,d(e){e&&l(s)}}}function qt(r){let n=T`
			\begin{align*}
			y(0.1) &= 1.00 + 0.1 \cdot \frac{dy}{dx}(0.0, 1.00) = 1.10 \\ \text{} \\
			y(0.2) &= 1.10 + 0.1 \cdot \frac{dy}{dx}(0.1, 1.10) = 1.22 \\ \text{} \\
			y(0.3) &= 1.22 + 0.1 \cdot \frac{dy}{dx}(0.2, 1.22) = 1.36 \\ \text{} \\
			y(0.4) &= 1.36 + 0.1 \cdot \frac{dy}{dx}(0.3, 1.36) = 1.53 \\ \text{} \\
			y(0.5) &= 1.53 + 0.1 \cdot \frac{dy}{dx}(0.4, 1.53) = 1.72 \\ \text{} \\
			y(0.6) &= 1.72 + 0.1 \cdot \frac{dy}{dx}(0.5, 1.72) = 1.94 \\ \text{} \\
			y(0.7) &= 1.94 + 0.1 \cdot \frac{dy}{dx}(0.6, 1.94) = 2.20 \\ \text{} \\
			y(0.8) &= 2.20 + 0.1 \cdot \frac{dy}{dx}(0.7, 2.20) = 2.48 \\ \text{} \\
			y(0.9) &= 2.48 + 0.1 \cdot \frac{dy}{dx}(0.8, 2.48) = 2.82 \\ \text{} \\
			y(1.0) &= 2.82 + 0.1 \cdot \frac{dy}{dx}(0.9, 2.82) = 3.19 \\ \text{} \\
			\end{align*}
		`+"",s;return{c(){s=a(n)},l(e){s=p(e,n)},m(e,o){f(e,s,o)},p:E,d(e){e&&l(s)}}}function zt(r){let n,s,e,o,u,c,R,B,M,k,v,I,i,m,L,P,C,N,J,K,O,F,Q,U,V,W,D,Y,q,Z,z,tt,A,et,H,st,nt,$t,ft,X,lt;return B=new S({props:{displayMode:!0,$$slots:{default:[kt]},$$scope:{ctx:r}}}),v=new dt({props:{$$slots:{default:[Et]},$$scope:{ctx:r}}}),C=new dt({props:{$$slots:{default:[Mt]},$$scope:{ctx:r}}}),F=new _t({props:{sketch:xt,sketchParameters:{dimensions:[-.1,1.9,-.5,1.5],eulersMethod:{active:!0,function:Lt,stepSize:.1,startingCoord:[0,0],endingX:2},axesColor:"#666666",slopeField:{active:!0,density:15,function:Pt},click:["slopefield"]}}}),D=new S({props:{$$slots:{default:[It]},$$scope:{ctx:r}}}),q=new S({props:{$$slots:{default:[St]},$$scope:{ctx:r}}}),z=new S({props:{$$slots:{default:[Tt]},$$scope:{ctx:r}}}),A=new S({props:{displayMode:!0,$$slots:{default:[Dt]},$$scope:{ctx:r}}}),H=new S({props:{displayMode:!0,$$slots:{default:[qt]},$$scope:{ctx:r}}}),X=new _t({props:{sketch:xt,sketchParameters:{plotFunction:r[0],dimensions:[-.1,1.1,-.9,3.5],eulersMethod:{active:!0,function:Ft,stepSize:.1,startingCoord:[0,1],endingX:1},axesColor:"#666666",axesNumbering:!0,click:["plotFunction"]}}}),{c(){n=a(`Euler's method approximates solution functions for differential equations.
		`),s=_("br"),e=_("br"),o=a(`It is done by taking small steps along the function, using its slope at each step to draw the next one.
		`),u=_("br"),c=_("br"),R=a(`This is the formula:
		`),x(B.$$.fragment),M=a(`
		In other words: 
		`),k=_("br"),x(v.$$.fragment),I=j(),i=_("br"),m=_("br"),L=a(`Here is an example of Euler's method:
		`),P=_("br"),x(C.$$.fragment),N=j(),J=_("br"),K=_("br"),O=a(`Click the graph to see the slope field.
		`),x(F.$$.fragment),Q=j(),U=_("br"),V=_("br"),W=a("Here is an example using "),x(D.$$.fragment),Y=a(" with a solution function starting at "),x(q.$$.fragment),Z=a(" and a step size of "),x(z.$$.fragment),tt=a(`:
		`),x(A.$$.fragment),et=a(`
		This continues along the equation
		`),x(H.$$.fragment),st=a(`
		Below is a graph of our euler method approximations of the solution function.
		`),nt=_("br"),$t=_("br"),ft=a(`Click the graph to see the solution function.
		`),x(X.$$.fragment)},l(t){n=p(t,`Euler's method approximates solution functions for differential equations.
		`),s=d(t,"BR",{}),e=d(t,"BR",{}),o=p(t,`It is done by taking small steps along the function, using its slope at each step to draw the next one.
		`),u=d(t,"BR",{}),c=d(t,"BR",{}),R=p(t,`This is the formula:
		`),g(B.$$.fragment,t),M=p(t,`
		In other words: 
		`),k=d(t,"BR",{}),g(v.$$.fragment,t),I=G(t),i=d(t,"BR",{}),m=d(t,"BR",{}),L=p(t,`Here is an example of Euler's method:
		`),P=d(t,"BR",{}),g(C.$$.fragment,t),N=G(t),J=d(t,"BR",{}),K=d(t,"BR",{}),O=p(t,`Click the graph to see the slope field.
		`),g(F.$$.fragment,t),Q=G(t),U=d(t,"BR",{}),V=d(t,"BR",{}),W=p(t,"Here is an example using "),g(D.$$.fragment,t),Y=p(t," with a solution function starting at "),g(q.$$.fragment,t),Z=p(t," and a step size of "),g(z.$$.fragment,t),tt=p(t,`:
		`),g(A.$$.fragment,t),et=p(t,`
		This continues along the equation
		`),g(H.$$.fragment,t),st=p(t,`
		Below is a graph of our euler method approximations of the solution function.
		`),nt=d(t,"BR",{}),$t=d(t,"BR",{}),ft=p(t,`Click the graph to see the solution function.
		`),g(X.$$.fragment,t)},m(t,$){f(t,n,$),f(t,s,$),f(t,e,$),f(t,o,$),f(t,u,$),f(t,c,$),f(t,R,$),h(B,t,$),f(t,M,$),f(t,k,$),h(v,t,$),f(t,I,$),f(t,i,$),f(t,m,$),f(t,L,$),f(t,P,$),h(C,t,$),f(t,N,$),f(t,J,$),f(t,K,$),f(t,O,$),h(F,t,$),f(t,Q,$),f(t,U,$),f(t,V,$),f(t,W,$),h(D,t,$),f(t,Y,$),h(q,t,$),f(t,Z,$),h(z,t,$),f(t,tt,$),h(A,t,$),f(t,et,$),h(H,t,$),f(t,st,$),f(t,nt,$),f(t,$t,$),f(t,ft,$),h(X,t,$),lt=!0},p(t,$){const ot={};$&2&&(ot.$$scope={dirty:$,ctx:t}),B.$set(ot);const it={};$&2&&(it.$$scope={dirty:$,ctx:t}),v.$set(it);const rt={};$&2&&(rt.$$scope={dirty:$,ctx:t}),C.$set(rt);const ut={};$&2&&(ut.$$scope={dirty:$,ctx:t}),D.$set(ut);const at={};$&2&&(at.$$scope={dirty:$,ctx:t}),q.$set(at);const pt={};$&2&&(pt.$$scope={dirty:$,ctx:t}),z.$set(pt);const mt={};$&2&&(mt.$$scope={dirty:$,ctx:t}),A.$set(mt);const ct={};$&2&&(ct.$$scope={dirty:$,ctx:t}),H.$set(ct)},i(t){lt||(b(B.$$.fragment,t),b(v.$$.fragment,t),b(C.$$.fragment,t),b(F.$$.fragment,t),b(D.$$.fragment,t),b(q.$$.fragment,t),b(z.$$.fragment,t),b(A.$$.fragment,t),b(H.$$.fragment,t),b(X.$$.fragment,t),lt=!0)},o(t){y(B.$$.fragment,t),y(v.$$.fragment,t),y(C.$$.fragment,t),y(F.$$.fragment,t),y(D.$$.fragment,t),y(q.$$.fragment,t),y(z.$$.fragment,t),y(A.$$.fragment,t),y(H.$$.fragment,t),y(X.$$.fragment,t),lt=!1},d(t){t&&(l(n),l(s),l(e),l(o),l(u),l(c),l(R),l(M),l(k),l(I),l(i),l(m),l(L),l(P),l(N),l(J),l(K),l(O),l(Q),l(U),l(V),l(W),l(Y),l(Z),l(tt),l(et),l(st),l(nt),l($t),l(ft)),w(B,t),w(v,t),w(C,t),w(F,t),w(D,t),w(q,t),w(z,t),w(A,t),w(H,t),w(X,t)}}}function At(r){let n,s,e,o;return n=new Bt({props:{heading:"Euler's Method"}}),e=new wt({props:{heading:"Introduction",$$slots:{default:[zt]},$$scope:{ctx:r}}}),{c(){x(n.$$.fragment),s=j(),x(e.$$.fragment)},l(u){g(n.$$.fragment,u),s=G(u),g(e.$$.fragment,u)},m(u,c){h(n,u,c),f(u,s,c),h(e,u,c),o=!0},p(u,c){const R={};c&2&&(R.$$scope={dirty:c,ctx:u}),e.$set(R)},i(u){o||(b(n.$$.fragment,u),b(e.$$.fragment,u),o=!0)},o(u){y(n.$$.fragment,u),y(e.$$.fragment,u),o=!1},d(u){u&&l(s),w(n,u),w(e,u)}}}function Ht(r){let n,s;return n=new yt({props:{$$slots:{default:[At]},$$scope:{ctx:r}}}),{c(){x(n.$$.fragment)},l(e){g(n.$$.fragment,e)},m(e,o){h(n,e,o),s=!0},p(e,[o]){const u={};o&2&&(u.$$scope={dirty:o,ctx:e}),n.$set(u)},i(e){s||(b(n.$$.fragment,e),s=!0)},o(e){y(n.$$.fragment,e),s=!1},d(e){w(n,e)}}}function T(r){return r.raw[0]}const Lt=(r,n)=>r-1-n**3+1,Pt=(r,n)=>r-1-n**3+1,Ft=(r,n)=>r+n;function Xt(r){return[s=>-s-1+2*Math.exp(s)]}class Ut extends ht{constructor(n){super(),bt(this,n,Xt,Ht,gt,{})}}export{Ut as component};
