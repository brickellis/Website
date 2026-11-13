import{s as se,n as T}from"../chunks/CVhLxNSM.js";import{S as fe,i as ie,c as w,b as k,m as S,t as q,a as B,d as M,s as D,e as O,f as l,g as a,h as g,k as h,j as W,l as L}from"../chunks/DvSB8R1X.js";import{L as re,S as x,M as F}from"../chunks/ByTZAYyp.js";import{L as le}from"../chunks/xLaKUPuM.js";import{D as ae}from"../chunks/CkoZ7XGi.js";import{I as N}from"../chunks/D3W7TYDU.js";const ue=(s,n,t,e,f,p)=>{n+=e/8,t+=e/8,s.beginShape(),s.vertex(n-e/2,t-e/2),s.vertex(n+e/2,t-e/2),s.vertex(n+e/2,t+e/2),s.vertex(n-e/2,t+e/2),s.vertex(n-e/2,t+e/2),s.endShape(s.CLOSE),s.beginShape(),s.vertex(n-e/2,t-e/2),s.vertex(n-e/2-e/4,t-e/2-e/4),s.vertex(n-e/2-e/4,t+e/2-e/4),s.vertex(n-e/2,t+e/2),s.endShape(s.CLOSE),s.fill(f),s.beginShape(),s.vertex(n-e/2,t-e/2),s.vertex(n-e/2-e/4,t-e/2-e/4),s.vertex(n+e/2-e/4,t-e/2-e/4),s.vertex(n+e/2,t-e/2),s.endShape(s.CLOSE),s.stroke(p),s.line(n-e/2-e/4,t-e/2-e/4,n-e/2-e/4,t+e/2-e/4)},me=(s,n)=>{let{initialColor:t="#ff0000",background:e=null,dark_mode:f=!1,f_type:p="gen"}=n,r,c,_;s.setup=function(){s.createCanvas(100,100),s.noLoop()},s.draw=function(){s.clear(),r=f?0:255,c=f?"#FF0000":t,_=f?t:"#FF0000",s.stroke(r),s.strokeWeight(2),s.noFill(),ue(s,s.height/2,s.height/2,s.height/2,c,_)},s.windowResized=function(){s.redraw()},s.darkToggle=m=>{f=m,s.redraw()}};function oe(s){let n;return{c(){n=g("The bread and butter example of derivatives and second-order derivatives is motion (position/velocity/acceleration). However, these concepts can be applied to any example of rates of change.")},l(t){n=h(t,"The bread and butter example of derivatives and second-order derivatives is motion (position/velocity/acceleration). However, these concepts can be applied to any example of rates of change.")},m(t,e){l(t,n,e)},d(t){t&&a(n)}}}function ce(s){let n=I`t`+"",t;return{c(){t=g(n)},l(e){t=h(e,n)},m(e,f){l(e,t,f)},p:T,d(e){e&&a(t)}}}function pe(s){let n=I`V(t) = 1000(1-0.05t)^3`+"",t;return{c(){t=g(n)},l(e){t=h(e,n)},m(e,f){l(e,t,f)},p:T,d(e){e&&a(t)}}}function _e(s){let n=I`V(t)`+"",t;return{c(){t=g(n)},l(e){t=h(e,n)},m(e,f){l(e,t,f)},p:T,d(e){e&&a(t)}}}function ge(s){let n=I`t`+"",t;return{c(){t=g(n)},l(e){t=h(e,n)},m(e,f){l(e,t,f)},p:T,d(e){e&&a(t)}}}function he(s){let n,t,e,f,p;return{c(){n=g(`1. Find the volume of the ice cube at 10 minutes.
			`),t=W("br"),e=g(`2. Find how fast the ice cube is shrinking at 10 minutes.
			`),f=W("br"),p=g("3. Find how fast the top face of the ice cube is shrinking at 10 minutes.")},l(r){n=h(r,`1. Find the volume of the ice cube at 10 minutes.
			`),t=L(r,"BR",{}),e=h(r,`2. Find how fast the ice cube is shrinking at 10 minutes.
			`),f=L(r,"BR",{}),p=h(r,"3. Find how fast the top face of the ice cube is shrinking at 10 minutes.")},m(r,c){l(r,n,c),l(r,t,c),l(r,e,c),l(r,f,c),l(r,p,c)},p:T,d(r){r&&(a(n),a(t),a(e),a(f),a(p))}}}function be(s){let n,t,e,f,p,r,c,_,m,d,v,C,R,V,u;return t=new F({props:{$$slots:{default:[ce]},$$scope:{ctx:s}}}),f=new F({props:{displayMode:!0,$$slots:{default:[pe]},$$scope:{ctx:s}}}),r=new F({props:{$$slots:{default:[_e]},$$scope:{ctx:s}}}),_=new F({props:{$$slots:{default:[ge]},$$scope:{ctx:s}}}),V=new N({props:{$$slots:{default:[he]},$$scope:{ctx:s}}}),{c(){n=g("An ice cube is melting. Its size after "),w(t.$$.fragment),e=g(` seconds is equal to the following function: 
		`),w(f.$$.fragment),p=D(),w(r.$$.fragment),c=g(" is in cubic centimeters and "),w(_.$$.fragment),m=g(` is in minutes.
		`),d=W("br"),v=W("br"),C=g(`Do the following:
		`),R=W("br"),w(V.$$.fragment)},l($){n=h($,"An ice cube is melting. Its size after "),k(t.$$.fragment,$),e=h($,` seconds is equal to the following function: 
		`),k(f.$$.fragment,$),p=O($),k(r.$$.fragment,$),c=h($," is in cubic centimeters and "),k(_.$$.fragment,$),m=h($,` is in minutes.
		`),d=L($,"BR",{}),v=L($,"BR",{}),C=h($,`Do the following:
		`),R=L($,"BR",{}),k(V.$$.fragment,$)},m($,o){l($,n,o),S(t,$,o),l($,e,o),S(f,$,o),l($,p,o),S(r,$,o),l($,c,o),S(_,$,o),l($,m,o),l($,d,o),l($,v,o),l($,C,o),l($,R,o),S(V,$,o),u=!0},p($,o){const z={};o&1&&(z.$$scope={dirty:o,ctx:$}),t.$set(z);const A={};o&1&&(A.$$scope={dirty:o,ctx:$}),f.$set(A);const H={};o&1&&(H.$$scope={dirty:o,ctx:$}),r.$set(H);const P={};o&1&&(P.$$scope={dirty:o,ctx:$}),_.$set(P);const U={};o&1&&(U.$$scope={dirty:o,ctx:$}),V.$set(U)},i($){u||(q(t.$$.fragment,$),q(f.$$.fragment,$),q(r.$$.fragment,$),q(_.$$.fragment,$),q(V.$$.fragment,$),u=!0)},o($){B(t.$$.fragment,$),B(f.$$.fragment,$),B(r.$$.fragment,$),B(_.$$.fragment,$),B(V.$$.fragment,$),u=!1},d($){$&&(a(n),a(e),a(p),a(c),a(m),a(d),a(v),a(C),a(R)),M(t,$),M(f,$),M(r,$),M(_,$),M(V,$)}}}function de(s){let n=I`V(t) = 1000(1-0.05t)^3`+"",t;return{c(){t=g(n)},l(e){t=h(e,n)},m(e,f){l(e,t,f)},p:T,d(e){e&&a(t)}}}function ve(s){let n=I`V(10)`+"",t;return{c(){t=g(n)},l(e){t=h(e,n)},m(e,f){l(e,t,f)},p:T,d(e){e&&a(t)}}}function we(s){let n=I`
			\begin{align*}
			V(10) &= 1000(1-0.05(10))^3 \\
			&= 1000(1-0.5)^3 \\
			&= 1000(0.5)^3 \\
			&= 1000(0.125) \\
			&= 125\text{cm}^3
			\end{align*}
		`+"",t;return{c(){t=g(n)},l(e){t=h(e,n)},m(e,f){l(e,t,f)},p:T,d(e){e&&a(t)}}}function ke(s){let n,t,e,f,p,r,c,_;return t=new F({props:{displayMode:!0,$$slots:{default:[de]},$$scope:{ctx:s}}}),f=new F({props:{$$slots:{default:[ve]},$$scope:{ctx:s}}}),r=new F({props:{displayMode:!0,$$slots:{default:[we]},$$scope:{ctx:s}}}),{c(){n=g(`We are looking for the volume of the ice cube at 10 minutes. It is given by
		`),w(t.$$.fragment),e=g(`
		We want `),w(f.$$.fragment),p=g(`.
		`),w(r.$$.fragment),c=g(`
		The ice cube has a volume of 125 cubic centimeters after 10 minutes.`)},l(m){n=h(m,`We are looking for the volume of the ice cube at 10 minutes. It is given by
		`),k(t.$$.fragment,m),e=h(m,`
		We want `),k(f.$$.fragment,m),p=h(m,`.
		`),k(r.$$.fragment,m),c=h(m,`
		The ice cube has a volume of 125 cubic centimeters after 10 minutes.`)},m(m,d){l(m,n,d),S(t,m,d),l(m,e,d),S(f,m,d),l(m,p,d),S(r,m,d),l(m,c,d),_=!0},p(m,d){const v={};d&1&&(v.$$scope={dirty:d,ctx:m}),t.$set(v);const C={};d&1&&(C.$$scope={dirty:d,ctx:m}),f.$set(C);const R={};d&1&&(R.$$scope={dirty:d,ctx:m}),r.$set(R)},i(m){_||(q(t.$$.fragment,m),q(f.$$.fragment,m),q(r.$$.fragment,m),_=!0)},o(m){B(t.$$.fragment,m),B(f.$$.fragment,m),B(r.$$.fragment,m),_=!1},d(m){m&&(a(n),a(e),a(p),a(c)),M(t,m),M(f,m),M(r,m)}}}function Se(s){let n;return{c(){n=g("We are looking for the rate that the ice cube is shrinking at 10 minutes. That is the rate the volume is decreasing per second.")},l(t){n=h(t,"We are looking for the rate that the ice cube is shrinking at 10 minutes. That is the rate the volume is decreasing per second.")},m(t,e){l(t,n,e)},d(t){t&&a(n)}}}function qe(s){let n=I`V(t) = 1000(1-0.05t)^3`+"",t;return{c(){t=g(n)},l(e){t=h(e,n)},m(e,f){l(e,t,f)},p:T,d(e){e&&a(t)}}}function Be(s){let n=I`V'(t) = \frac{d}{dt}V(t) = \frac{d}{dt}1000(1-0.05t)^3`+"",t;return{c(){t=g(n)},l(e){t=h(e,n)},m(e,f){l(e,t,f)},p:T,d(e){e&&a(t)}}}function Me(s){let n=I`
				\begin{align*}
				V'(t) &= 3(1000)(1-0.05t)^2(-0.05) \\
				&= -150(1-0.05t)^2 \\
				V(10)&= -150(1-0.05(10))^2 \\
				&= -150(1-0.5)^2 \\
				&= -150(0.5)^2 \\
				&= -150(0.25) \\
				&= -37.5\text{cm}^3/\text{min}
				\end{align*}
			`+"",t;return{c(){t=g(n)},l(e){t=h(e,n)},m(e,f){l(e,t,f)},p:T,d(e){e&&a(t)}}}function Re(s){let n;return{c(){n=g("10 minutes after starting, the ice cube is shrinking at a rate of 37.5 cubic centimeters per minute.")},l(t){n=h(t,"10 minutes after starting, the ice cube is shrinking at a rate of 37.5 cubic centimeters per minute.")},m(t,e){l(t,n,e)},d(t){t&&a(n)}}}function Ve(s){let n,t,e,f,p,r,c,_,m,d,v,C,R,V,u;return e=new N({props:{$$slots:{default:[Se]},$$scope:{ctx:s}}}),c=new F({props:{displayMode:!0,$$slots:{default:[qe]},$$scope:{ctx:s}}}),m=new F({props:{displayMode:!0,$$slots:{default:[Be]},$$scope:{ctx:s}}}),v=new F({props:{displayMode:!0,$$slots:{default:[Me]},$$scope:{ctx:s}}}),V=new N({props:{$$slots:{default:[Re]},$$scope:{ctx:s}}}),{c(){n=g(`1. Understand what the question is asking.
		`),t=W("br"),w(e.$$.fragment),f=D(),p=W("br"),r=g(`2. Convert the request into mathematical notation.
			`),w(c.$$.fragment),_=D(),w(m.$$.fragment),d=g(`
		3. Solve the differential equation(s).
			`),w(v.$$.fragment),C=g(`
		4. Interpret the solution.
		`),R=W("br"),w(V.$$.fragment)},l($){n=h($,`1. Understand what the question is asking.
		`),t=L($,"BR",{}),k(e.$$.fragment,$),f=O($),p=L($,"BR",{}),r=h($,`2. Convert the request into mathematical notation.
			`),k(c.$$.fragment,$),_=O($),k(m.$$.fragment,$),d=h($,`
		3. Solve the differential equation(s).
			`),k(v.$$.fragment,$),C=h($,`
		4. Interpret the solution.
		`),R=L($,"BR",{}),k(V.$$.fragment,$)},m($,o){l($,n,o),l($,t,o),S(e,$,o),l($,f,o),l($,p,o),l($,r,o),S(c,$,o),l($,_,o),S(m,$,o),l($,d,o),S(v,$,o),l($,C,o),l($,R,o),S(V,$,o),u=!0},p($,o){const z={};o&1&&(z.$$scope={dirty:o,ctx:$}),e.$set(z);const A={};o&1&&(A.$$scope={dirty:o,ctx:$}),c.$set(A);const H={};o&1&&(H.$$scope={dirty:o,ctx:$}),m.$set(H);const P={};o&1&&(P.$$scope={dirty:o,ctx:$}),v.$set(P);const U={};o&1&&(U.$$scope={dirty:o,ctx:$}),V.$set(U)},i($){u||(q(e.$$.fragment,$),q(c.$$.fragment,$),q(m.$$.fragment,$),q(v.$$.fragment,$),q(V.$$.fragment,$),u=!0)},o($){B(e.$$.fragment,$),B(c.$$.fragment,$),B(m.$$.fragment,$),B(v.$$.fragment,$),B(V.$$.fragment,$),u=!1},d($){$&&(a(n),a(t),a(f),a(p),a(r),a(_),a(d),a(C),a(R)),M(e,$),M(c,$),M(m,$),M(v,$),M(V,$)}}}function Ce(s){let n=I`
			\htmlClass{text-dark_primary dark:text-primary}{S(t)=\text{Length of One Side}} \quad\quad \htmlClass{text-primary dark:text-dark_primary}{A(t)=\text{Area of One Face}} \quad\quad V(t)=\text{Volume of the Cube}
		`+"",t;return{c(){t=g(n)},l(e){t=h(e,n)},m(e,f){l(e,t,f)},p:T,d(e){e&&a(t)}}}function Te(s){let n,t,e,f,p,r,c;return{c(){n=g(`We are looking for the rate that the top face of the ice cube is shrinking at 10 minutes. In the image above, that is the rate at which the filled in square is shrinking.
			`),t=W("br"),e=W("br"),f=g(`We need to find the area of one face of the cube using the volume of the cube. The volume is the length of one side cubed. The area is the length of one side squared.
			`),p=W("br"),r=W("br"),c=g("Then, we need to find the rate that the area is shrinking with respect to time.")},l(_){n=h(_,`We are looking for the rate that the top face of the ice cube is shrinking at 10 minutes. In the image above, that is the rate at which the filled in square is shrinking.
			`),t=L(_,"BR",{}),e=L(_,"BR",{}),f=h(_,`We need to find the area of one face of the cube using the volume of the cube. The volume is the length of one side cubed. The area is the length of one side squared.
			`),p=L(_,"BR",{}),r=L(_,"BR",{}),c=h(_,"Then, we need to find the rate that the area is shrinking with respect to time.")},m(_,m){l(_,n,m),l(_,t,m),l(_,e,m),l(_,f,m),l(_,p,m),l(_,r,m),l(_,c,m)},p:T,d(_){_&&(a(n),a(t),a(e),a(f),a(p),a(r),a(c))}}}function Fe(s){let n=I`S(t)`+"",t;return{c(){t=g(n)},l(e){t=h(e,n)},m(e,f){l(e,t,f)},p:T,d(e){e&&a(t)}}}function Ie(s){let n=I`A(t)`+"",t;return{c(){t=g(n)},l(e){t=h(e,n)},m(e,f){l(e,t,f)},p:T,d(e){e&&a(t)}}}function Ae(s){let n,t,e,f,p;return n=new F({props:{$$slots:{default:[Fe]},$$scope:{ctx:s}}}),e=new F({props:{$$slots:{default:[Ie]},$$scope:{ctx:s}}}),{c(){w(n.$$.fragment),t=g(" is the length of one side."),w(e.$$.fragment),f=g(" is the area of one side.")},l(r){k(n.$$.fragment,r),t=h(r," is the length of one side."),k(e.$$.fragment,r),f=h(r," is the area of one side.")},m(r,c){S(n,r,c),l(r,t,c),S(e,r,c),l(r,f,c),p=!0},p(r,c){const _={};c&1&&(_.$$scope={dirty:c,ctx:r}),n.$set(_);const m={};c&1&&(m.$$scope={dirty:c,ctx:r}),e.$set(m)},i(r){p||(q(n.$$.fragment,r),q(e.$$.fragment,r),p=!0)},o(r){B(n.$$.fragment,r),B(e.$$.fragment,r),p=!1},d(r){r&&(a(t),a(f)),M(n,r),M(e,r)}}}function We(s){let n=I`V(t) = 1000(1-0.05t)^3`+"",t;return{c(){t=g(n)},l(e){t=h(e,n)},m(e,f){l(e,t,f)},p:T,d(e){e&&a(t)}}}function Le(s){let n=I`V(t)=S(t)^3`+"",t;return{c(){t=g(n)},l(e){t=h(e,n)},m(e,f){l(e,t,f)},p:T,d(e){e&&a(t)}}}function De(s){let n=I`A(t)=S(t)^2`+"",t;return{c(){t=g(n)},l(e){t=h(e,n)},m(e,f){l(e,t,f)},p:T,d(e){e&&a(t)}}}function Oe(s){let n=I`S(t)=\sqrt[3]{V(t)}`+"",t;return{c(){t=g(n)},l(e){t=h(e,n)},m(e,f){l(e,t,f)},p:T,d(e){e&&a(t)}}}function ze(s){let n=I`
				\begin{align*}
				S(t)&=\sqrt[3]{1000(1-0.05t)^3} \\
				&=10(1-0.05t) \\
				&=10-0.5t \\
				A(t)&=S(t)^2 \\
				&=(10-0.5t)^2 \\
				A'(t)&=\frac{d}{dt}A(t) \\
				&=\frac{d}{dt}(10-0.5t)^2 \\
				&=2(10-0.5t)(-0.5) \\
				&=-1(10-0.5t) \\
				&=-10+0.5t \\
				A'(10)&=-10+0.5(10) \\
				&=-10+5 \\
				&=-5\text{cm}^2/\text{min}
				\end{align*}
		`+"",t;return{c(){t=g(n)},l(e){t=h(e,n)},m(e,f){l(e,t,f)},p:T,d(e){e&&a(t)}}}function He(s){let n;return{c(){n=g("10 minutes after starting, the top face of the ice cube is shrinking at a rate of 5 square centimeters per minute.")},l(t){n=h(t,"10 minutes after starting, the top face of the ice cube is shrinking at a rate of 5 square centimeters per minute.")},m(t,e){l(t,n,e)},d(t){t&&a(n)}}}function Pe(s){let n,t,e,f,p,r,c,_,m,d,v,C,R,V,u,$,o,z,A,H,P,U,E,G,J,j,K;return n=new ae({props:{sketch:me,sketchParameters:{f_type:"gen"}}}),e=new F({props:{displayMode:!0,$$slots:{default:[Ce]},$$scope:{ctx:s}}}),r=new N({props:{$$slots:{default:[Te]},$$scope:{ctx:s}}}),v=new N({props:{$$slots:{default:[Ae]},$$scope:{ctx:s}}}),R=new F({props:{displayMode:!0,$$slots:{default:[We]},$$scope:{ctx:s}}}),u=new F({props:{displayMode:!0,$$slots:{default:[Le]},$$scope:{ctx:s}}}),o=new F({props:{displayMode:!0,$$slots:{default:[De]},$$scope:{ctx:s}}}),A=new F({props:{displayMode:!0,$$slots:{default:[Oe]},$$scope:{ctx:s}}}),E=new F({props:{displayMode:!0,$$slots:{default:[ze]},$$scope:{ctx:s}}}),j=new N({props:{$$slots:{default:[He]},$$scope:{ctx:s}}}),{c(){w(n.$$.fragment),t=D(),w(e.$$.fragment),f=g(`
		1. Understand what the question is asking.
		`),p=W("br"),w(r.$$.fragment),c=D(),_=W("br"),m=g(`2. Convert the request into mathematical notation.
		`),d=W("br"),w(v.$$.fragment),C=D(),w(R.$$.fragment),V=D(),w(u.$$.fragment),$=D(),w(o.$$.fragment),z=D(),w(A.$$.fragment),H=D(),P=W("br"),U=g(`3. Solve the differential equation(s).
			`),w(E.$$.fragment),G=g(`
		4. Interpret the solution.
		`),J=W("br"),w(j.$$.fragment)},l(i){k(n.$$.fragment,i),t=O(i),k(e.$$.fragment,i),f=h(i,`
		1. Understand what the question is asking.
		`),p=L(i,"BR",{}),k(r.$$.fragment,i),c=O(i),_=L(i,"BR",{}),m=h(i,`2. Convert the request into mathematical notation.
		`),d=L(i,"BR",{}),k(v.$$.fragment,i),C=O(i),k(R.$$.fragment,i),V=O(i),k(u.$$.fragment,i),$=O(i),k(o.$$.fragment,i),z=O(i),k(A.$$.fragment,i),H=O(i),P=L(i,"BR",{}),U=h(i,`3. Solve the differential equation(s).
			`),k(E.$$.fragment,i),G=h(i,`
		4. Interpret the solution.
		`),J=L(i,"BR",{}),k(j.$$.fragment,i)},m(i,b){S(n,i,b),l(i,t,b),S(e,i,b),l(i,f,b),l(i,p,b),S(r,i,b),l(i,c,b),l(i,_,b),l(i,m,b),l(i,d,b),S(v,i,b),l(i,C,b),S(R,i,b),l(i,V,b),S(u,i,b),l(i,$,b),S(o,i,b),l(i,z,b),S(A,i,b),l(i,H,b),l(i,P,b),l(i,U,b),S(E,i,b),l(i,G,b),l(i,J,b),S(j,i,b),K=!0},p(i,b){const Q={};b&1&&(Q.$$scope={dirty:b,ctx:i}),e.$set(Q);const X={};b&1&&(X.$$scope={dirty:b,ctx:i}),r.$set(X);const Y={};b&1&&(Y.$$scope={dirty:b,ctx:i}),v.$set(Y);const Z={};b&1&&(Z.$$scope={dirty:b,ctx:i}),R.$set(Z);const y={};b&1&&(y.$$scope={dirty:b,ctx:i}),u.$set(y);const ee={};b&1&&(ee.$$scope={dirty:b,ctx:i}),o.$set(ee);const te={};b&1&&(te.$$scope={dirty:b,ctx:i}),A.$set(te);const ne={};b&1&&(ne.$$scope={dirty:b,ctx:i}),E.$set(ne);const $e={};b&1&&($e.$$scope={dirty:b,ctx:i}),j.$set($e)},i(i){K||(q(n.$$.fragment,i),q(e.$$.fragment,i),q(r.$$.fragment,i),q(v.$$.fragment,i),q(R.$$.fragment,i),q(u.$$.fragment,i),q(o.$$.fragment,i),q(A.$$.fragment,i),q(E.$$.fragment,i),q(j.$$.fragment,i),K=!0)},o(i){B(n.$$.fragment,i),B(e.$$.fragment,i),B(r.$$.fragment,i),B(v.$$.fragment,i),B(R.$$.fragment,i),B(u.$$.fragment,i),B(o.$$.fragment,i),B(A.$$.fragment,i),B(E.$$.fragment,i),B(j.$$.fragment,i),K=!1},d(i){i&&(a(t),a(f),a(p),a(c),a(_),a(m),a(d),a(C),a(V),a($),a(z),a(H),a(P),a(U),a(G),a(J)),M(n,i),M(e,i),M(r,i),M(v,i),M(R,i),M(u,i),M(o,i),M(A,i),M(E,i),M(j,i)}}}function Ue(s){let n=I`
			\begin{align*}
			S(t)&=10-0.5t \quad& V(t)=&S(t)^3 \quad& A(t)=&S(t)^2 \\ \text{} \\
			S'(t)&=-0.5t \quad& V'(t)=&3S(t)^2S'(t) \quad& A'(t)=&2S(t)S'(t) \\ \text{} \\
			\end{align*}
			\\
			\begin{align*}
			S(10)&=10-0.5(10) \\
			&=10-5 \\
			&=5 \\
			S'(10)&=-0.5 \\
			
			
			V'(10)&=3(5)^2(-0.5) \\
			&=-37.5\text{cm}^3/\text{min} \\
			A'(10)&=2(5)(-0.5) \\
			&=-5\text{cm}^2/\text{min}
			\end{align*}
		`+"",t;return{c(){t=g(n)},l(e){t=h(e,n)},m(e,f){l(e,t,f)},p:T,d(e){e&&a(t)}}}function Ee(s){let n,t;return n=new F({props:{displayMode:!0,$$slots:{default:[Ue]},$$scope:{ctx:s}}}),{c(){w(n.$$.fragment)},l(e){k(n.$$.fragment,e)},m(e,f){S(n,e,f),t=!0},p(e,f){const p={};f&1&&(p.$$scope={dirty:f,ctx:e}),n.$set(p)},i(e){t||(q(n.$$.fragment,e),t=!0)},o(e){B(n.$$.fragment,e),t=!1},d(e){M(n,e)}}}function je(s){let n,t,e,f,p,r,c,_,m,d,v,C,R,V;return n=new le({props:{heading:"Non-Motion Problems"}}),e=new x({props:{heading:"Introduction",$$slots:{default:[oe]},$$scope:{ctx:s}}}),p=new x({props:{heading:"The Melting Ice Cube",$$slots:{default:[be]},$$scope:{ctx:s}}}),c=new x({props:{heading:"Find the size of the ice cube at 10 minutes.",$$slots:{default:[ke]},$$scope:{ctx:s}}}),m=new x({props:{heading:"How fast is the ice cube shrinking at 10 minutes?",$$slots:{default:[Ve]},$$scope:{ctx:s}}}),v=new x({props:{heading:"How fast is the top face of the ice cube shrinking at 10 minutes?",$$slots:{default:[Pe]},$$scope:{ctx:s}}}),R=new x({props:{heading:"Bonus Method of Finding the Derivatives",$$slots:{default:[Ee]},$$scope:{ctx:s}}}),{c(){w(n.$$.fragment),t=D(),w(e.$$.fragment),f=D(),w(p.$$.fragment),r=D(),w(c.$$.fragment),_=D(),w(m.$$.fragment),d=D(),w(v.$$.fragment),C=D(),w(R.$$.fragment)},l(u){k(n.$$.fragment,u),t=O(u),k(e.$$.fragment,u),f=O(u),k(p.$$.fragment,u),r=O(u),k(c.$$.fragment,u),_=O(u),k(m.$$.fragment,u),d=O(u),k(v.$$.fragment,u),C=O(u),k(R.$$.fragment,u)},m(u,$){S(n,u,$),l(u,t,$),S(e,u,$),l(u,f,$),S(p,u,$),l(u,r,$),S(c,u,$),l(u,_,$),S(m,u,$),l(u,d,$),S(v,u,$),l(u,C,$),S(R,u,$),V=!0},p(u,$){const o={};$&1&&(o.$$scope={dirty:$,ctx:u}),e.$set(o);const z={};$&1&&(z.$$scope={dirty:$,ctx:u}),p.$set(z);const A={};$&1&&(A.$$scope={dirty:$,ctx:u}),c.$set(A);const H={};$&1&&(H.$$scope={dirty:$,ctx:u}),m.$set(H);const P={};$&1&&(P.$$scope={dirty:$,ctx:u}),v.$set(P);const U={};$&1&&(U.$$scope={dirty:$,ctx:u}),R.$set(U)},i(u){V||(q(n.$$.fragment,u),q(e.$$.fragment,u),q(p.$$.fragment,u),q(c.$$.fragment,u),q(m.$$.fragment,u),q(v.$$.fragment,u),q(R.$$.fragment,u),V=!0)},o(u){B(n.$$.fragment,u),B(e.$$.fragment,u),B(p.$$.fragment,u),B(c.$$.fragment,u),B(m.$$.fragment,u),B(v.$$.fragment,u),B(R.$$.fragment,u),V=!1},d(u){u&&(a(t),a(f),a(r),a(_),a(d),a(C)),M(n,u),M(e,u),M(p,u),M(c,u),M(m,u),M(v,u),M(R,u)}}}function xe(s){let n,t;return n=new re({props:{$$slots:{default:[je]},$$scope:{ctx:s}}}),{c(){w(n.$$.fragment)},l(e){k(n.$$.fragment,e)},m(e,f){S(n,e,f),t=!0},p(e,[f]){const p={};f&1&&(p.$$scope={dirty:f,ctx:e}),n.$set(p)},i(e){t||(q(n.$$.fragment,e),t=!0)},o(e){B(n.$$.fragment,e),t=!1},d(e){M(n,e)}}}function I(s){return s.raw[0]}class Ye extends fe{constructor(n){super(),ie(this,n,null,xe,se,{})}}export{Ye as component};
