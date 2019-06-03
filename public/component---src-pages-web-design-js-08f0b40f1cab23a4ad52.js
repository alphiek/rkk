(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{458:function(e,A,t){"use strict";t.r(A);var a=t(0),c=t.n(a),n=t(9),l=t.n(n),i=(t(64),t(140),t(100),t(67),t(222),t(491),t(497)),r=t(468),d=t(4),o=t(498),m=t(19),s=t(462),h=t.n(s),g=d.b.div.withConfig({displayName:"Wrapper",componentId:"bw7l0a-0"})(["overscroll-behavior-y:contain;overflow:hidden;position:relative;height:100vh;width:100%;cursor:grab;padding-top:8%;@media only screen and (max-width:1024px){height:100%;overflow:visible;padding-top:0;}"]),p=Object(d.b)(r.a.div).withConfig({displayName:"Container",componentId:"bw7l0a-1"})(["position:absolute;width:100%;height:100%;will-change:transform;display:flex;align-items:center;justify-content:flex-end;"]),f=Object(d.b)(r.a.div).withConfig({displayName:"ImgWrapper",componentId:"bw7l0a-2"})(["background-color:white;background-size:auto 85%;background-repeat:no-repeat;background-position:center center;margin-top:-10em;margin-right:6em;width:70%;max-width:1200px;height:auto;max-height:630px;will-change:transform;border-radius:10px;box-shadow:0 12.5px 30px -10px rgba(50,50,73,0.4),0 10px 10px -10px rgba(50,50,73,0.3);@media only screen and (max-width:1024px){margin-top:0;width:60%;margin-left:auto;margin-right:auto;}@media only screen and (max-width:570px){width:70%;margin-top:15%;}"]),v=function(e){var A=e.data,t=[c.a.createElement(h.a,{backgroundColor:!0,fluid:A.imageOne.childImageSharp.fluid}),c.a.createElement(h.a,{backgroundColor:!0,fluid:A.imageTwo.childImageSharp.fluid}),c.a.createElement(h.a,{backgroundColor:!0,fluid:A.imageThree.childImageSharp.fluid})],n=function(e){return{x:0,y:-4*e,scale:1,rot:20*Math.random()-10,delay:100*e}},l=function(e){var A;return(A={x:0,y:-4*e,rot:0,scale:1.5}).y=-1e3,A},i=function(e,A){return"perspective(1500px) rotateX(30deg) rotateY("+e/10+"deg) rotateZ("+e+"deg) scale("+A+")"},d=Object(a.useState)(function(){return new Set})[0],m=Object(r.e)(t.length,function(e){return Object.assign({},n(e),{from:l(e)})}),s=m[0],v=m[1],w=Object(o.a)(function(e){var A=e.args[0],a=e.down,c=e.delta[0],l=(e.distance,e.direction[0]),i=e.velocity,r=l<0?-1:1;!a&&i>1&&d.add(A),v(function(e){if(A===e){var t=d.has(A);return{x:t?(200+window.innerWidth)*r:a?c:0,rot:c/100+(t?10*r*i:0),scale:a?1.1:1,delay:void 0,config:{friction:50,tension:a?800:t?200:500}}}}),a||d.size!==t.length||setTimeout(function(){return d.clear()||v(function(e){return n(e)})},600)});return c.a.createElement(g,null,s.map(function(e,A){var a=e.x,n=e.y,l=e.rot,d=e.scale;return c.a.createElement(p,{key:A,style:{transform:Object(r.c)([a,n],function(e,A){return"translate3d("+e+"px,"+A+"px,0)"})}},c.a.createElement(f,Object.assign({},w(A),{style:{transform:Object(r.c)([l,d],i)}}),t[A]))}))},w=function(){return c.a.createElement(m.StaticQuery,{query:"975756115",render:function(e){return c.a.createElement(v,{data:e})},data:i})},u=t(461),b=t(6),C=t.n(b),y=t(65),E=t(471),x=t(463),I=t(30),B=function(){return c.a.createElement(c.a.Fragment,null,y.f.map(function(e){return c.a.createElement(u.a,{key:e.key},c.a.createElement(C.a,{bottom:!0,delay:200,cascade:!0},c.a.createElement(x.d,null,e.title),c.a.createElement(I.a,null,e.description),c.a.createElement(x.f,null,c.a.createElement(C.a,{bottom:!0,cascade:!0,delay:100},c.a.createElement(I.d,null,"Services"),c.a.createElement("ul",null,e.services.map(function(e){return c.a.createElement(I.f,{key:e},e)})))),c.a.createElement(C.a,{delay:600},c.a.createElement(x.a,null)),c.a.createElement(E.a,null)))}))},Q=function(e){function A(){var A;return(A=e.call(this)||this).state={loaded:!1},A}l()(A,e);var t=A.prototype;return t.componentDidMount=function(){this.setState({loaded:!this.state.loaded})},t.render=function(){return c.a.createElement(c.a.Fragment,null,this.state.loaded?c.a.createElement(u.e,null,c.a.createElement(B,null),c.a.createElement(u.d,null,c.a.createElement(w,null))):null)},A}(a.Component),S=t(469),k=t(499),D=t.n(k),L=t(464),W=t.n(L),T=t(15);Object(T.setDefaultBreakpoints)([{mobile:0},{tablet:824},{desktop:1025}]);A.default=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(S.Helmet,null,c.a.createElement("html",{lang:"en"}),c.a.createElement("title",null,"RKK Creative Web Design"),c.a.createElement("meta",{name:"description",content:"Custom crafted responsive websites and web applications to support brand direction and digital growth"}),c.a.createElement("meta",{property:"og:url",content:"https://rkkcreative.xyz"}),c.a.createElement("meta",{property:"og:type",content:"website"}),c.a.createElement("meta",{property:"og:title",content:"Web Design"}),c.a.createElement("meta",{property:"og:image",content:D.a}),c.a.createElement("meta",{property:"og:image:width",content:"1200"}),c.a.createElement("meta",{property:"og:image:height",content:"630"}),c.a.createElement("meta",{property:"og:description",content:"Custom crafted responsive websites and web applications to support brand direction and digital growth"}),c.a.createElement("meta",{property:"og:site_name",content:"RKK Creative"}),c.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),c.a.createElement("meta",{name:"twitter:site",content:"@rkkcreative"}),c.a.createElement("meta",{name:"twitter:url",content:"https://rkkcreative.xyz"}),c.a.createElement("meta",{name:"twitter:title",content:"RKK Creative"}),c.a.createElement("meta",{name:"twitter:description",content:"Custom crafted responsive websites and web applications to support brand direction and digital growth"}),c.a.createElement("meta",{name:"twitter:image",content:D.a}),c.a.createElement("script",{type:"application/ld+json"},'\n          {\n              "@context": "http://schema.org",\n              "@type": "LocalBusiness",\n              "name": "RKK Creative",\n              "description": "Web Design Paphos",\n              "image": '+D.a+',\n              "logo": '+W.a+',\n              "@id": "https://rkkcreative.xyz/",\n              "url": "https://rkkcreative.xyz/",\n              "telephone": "",\n              "address": {\n                "@type": "PostalAddress",\n                "streetAddress": "8 Panagiotou Christodoulou",\n                "addressLocality": "Koili, Paphos",\n                "postalCode": "8543",\n                "addressCountry": "cy"\n              },\n              "openingHoursSpecification": {\n                "@type": "OpeningHoursSpecification",\n                "dayOfWeek": [\n                  "Monday",\n                  "Tuesday",\n                  "Wednesday",\n                  "Thursday",\n                  "Friday",\n                  "Saturday",\n                  "Sunday"\n                ],\n                "opens": "09:00",\n                "closes": "23:59"\n              },\n              "sameAs": [\n                "https://www.facebook.com/rkkcreative/",\n                "https://www.instagram.com/rkkcreative/"\n                "https://www.twitter.com/rkkcreative/"\n              ],\n              "priceRange": "$"\n          }\n     ')),c.a.createElement(T.BreakpointProvider,null,c.a.createElement(Q,null)))}},461:function(e,A,t){"use strict";t.d(A,"b",function(){return h}),t.d(A,"c",function(){return g}),t.d(A,"a",function(){return f}),t.d(A,"d",function(){return v}),t.d(A,"e",function(){return w});var a=t(0),c=t.n(a),n=t(4),l=t(2),i=t.n(l),r=t(15),d=t.n(r),o=t(466),m=t(467),s=t(465),h=n.b.div.withConfig({displayName:"PageWrapper",componentId:"sc-1cx54db-0"})(["display:flex;width:100%;min-height:100vh;@media only screen and (max-width:1024px){padding-bottom:5em;min-height:88vh;}"]),g=Object(n.b)(h).withConfig({displayName:"PageWrapperCenter",componentId:"sc-1cx54db-1"})(["align-items:center;overflow:hidden;@media only screen and (max-width:1024px){padding-bottom:7em;}"]),p=Object(n.b)(h).withConfig({displayName:"FlexContainer",componentId:"sc-1cx54db-2"})(["justify-content:center;align-items:center;@media only screen and (max-width:1024px){flex-direction:column-reverse;justify-content:flex-end;}"]),f=n.b.div.withConfig({displayName:"LeftWrapper",componentId:"sc-1cx54db-3"})(["width:40%;margin-left:7%;padding:0em 3em;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;@media only screen and (max-width:1024px){margin-left:0;height:50%;width:70%;}@media only screen and (max-width:824px){padding:1.5em}@media only screen and (max-width:570px){width:85%;margin-top:10%;}"]),v=n.b.div.withConfig({displayName:"RightWrapper",componentId:"sc-1cx54db-4"})(["position:relative;width:55%;@media only screen and (max-width:1024px){display:flex;justify-content:center;align-items:center;min-height:50vw;height:50%;width:90%;}@media only screen and (max-width:824px){width:100%;}@media only screen and (max-width:570px){margin-top:8%;}"]),w=function(e){var A=e.children;return c.a.createElement(s.a,null,c.a.createElement(g,null,c.a.createElement(d.a,{desktop:!0,only:!0},c.a.createElement(o.a,null)),c.a.createElement(p,null,A),c.a.createElement(d.a,{desktop:!0,only:!0},c.a.createElement(m.a,null))))};w.propTypes={children:i.a.node.isRequired}},463:function(e,A,t){"use strict";t.d(A,"c",function(){return l}),t.d(A,"g",function(){return i}),t.d(A,"a",function(){return r}),t.d(A,"d",function(){return d}),t.d(A,"b",function(){return o}),t.d(A,"f",function(){return m}),t.d(A,"e",function(){return s});var a=t(4),c=t(1),n=t(30),l=a.b.div.withConfig({displayName:"GraphicsFlexWrapper",componentId:"sc-1kcl8wb-0"})(["display:flex;align-items:flex-start;flex-direction:column;"]),i=a.b.div.withConfig({displayName:"Spacer",componentId:"sc-1kcl8wb-1"})(["height:0.8em;@media only screen and (max-width:1024px){height:2em;}@media only screen and (max-width:824px){height:2.5em;}@media only screen and (max-width:570px){height:3em;}"]),r=a.b.hr.withConfig({displayName:"Divider",componentId:"sc-1kcl8wb-2"})(["color:",";background-color:",";border:none;height:0.2em;margin-bottom:0.4em;width:7.4vw;align-self:flex-start;@media only screen and (max-width:1024px){margin-bottom:1.8em;}@media only screen and (max-width:570px){margin-bottom:3em;}"],c.a.secondary,c.a.secondary),d=Object(a.b)(n.b).withConfig({displayName:"HeadingText",componentId:"sc-1kcl8wb-3"})(["border-left:0.15em solid ",";padding-left:0.2em;margin-bottom:0.5em;@media only screen and (max-width:824px){margin-bottom:0.75em;}@media only screen and (max-width:570px){margin-bottom:1em;}"],c.a.secondary),o=a.b.div.withConfig({displayName:"FullWidthWrapper",componentId:"sc-1kcl8wb-4"})(["width:84%;margin-left:8%;margin-right:4%;@media only screen and (max-width:1024px){margin-top:5em;padding-bottom:5em;}@media only screen and (max-width:570px){margin-top:6em;}"]),m=a.b.div.withConfig({displayName:"ServicesWrapper",componentId:"sc-1kcl8wb-5"})(["margin-bottom:0.8em;@media only screen and (max-width:1024px){margin-bottom:2em;}@media only screen and (max-width:824px){margin-bottom:2.5em;}@media only screen and (max-width:570px){margin-bottom:3em;}"]),s=a.b.div.withConfig({displayName:"MobileWidthWrapper",componentId:"sc-1kcl8wb-6"})(["@media only screen and (max-width:824px){padding:0 1em;margin-top:2em;}"])},464:function(e,A){e.exports="data:image/png;base64,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"},465:function(e,A,t){"use strict";t.d(A,"a",function(){return o});t(210),t(211);var a=t(0),c=t.n(a),n=t(39),l=t(66),i=t(2),r=t.n(i),d=n.b.div({hidden:{opacity:0},visable:{opacity:1}}),o=function(e){var A=e.children;return c.a.createElement(l.TransitionState,null,function(e){var t=e.transitionStatus;return c.a.createElement(d,{pose:["entering","entered"].includes(t)?"visable":"hidden"},A)})};o.propTypes={children:r.a.node.isRequired}},466:function(e,A,t){"use strict";var a=t(0),c=t.n(a),n=t(4),l=t(30),i=t(1),r=t(6),d=t.n(r),o=n.b.div.withConfig({displayName:"Wrapper",componentId:"adnn29-0"})(["padding-left:0.5em;@media only screen and (max-width:1024px){display:none;}"]),m={color:i.a.darkLink,fontWeight:i.d.black};A.a=function(){return c.a.createElement(d.a,{bottom:!0,cascade:!0},c.a.createElement(o,null,c.a.createElement(l.i,{exit:{length:.5},entry:{delay:.8},to:"/WebDesign",partiallyActive:!0,activeStyle:m},"01"),c.a.createElement("hr",null),c.a.createElement(l.i,{exit:{length:.5},entry:{delay:.8},to:"/WebDevelopment",partiallyActive:!0,activeStyle:m},"02"),c.a.createElement("hr",null),c.a.createElement(l.i,{exit:{length:.5},entry:{delay:.8},to:"/WebGraphics",partiallyActive:!0,activeStyle:m},"03"),c.a.createElement("hr",null),c.a.createElement(l.i,{exit:{length:.5},entry:{delay:.8},to:"/SEO",partiallyActive:!0,activeStyle:m},"04"),c.a.createElement("hr",null)))}},467:function(e,A,t){"use strict";var a=t(0),c=t.n(a),n=t(4),l=t(30),i=t(1),r=t(6),d=t.n(r),o=n.b.div.withConfig({displayName:"Wrapper",componentId:"sc-3f91uk-0"})(["position:absolute;right:0;bottom:0;display:flex;width:100%;justify-content:flex-end;overflow:hidden;@media only screen and (max-width:1024px){display:none;}"]),m=n.b.div.withConfig({displayName:"NavContainer",componentId:"sc-3f91uk-1"})(["display:flex;margin-bottom:1em;margin-right:1em;"]),s=Object(n.b)(l.i).withConfig({displayName:"LinkStyle",componentId:"sc-3f91uk-2"})(["padding-left:1em;padding-right:1em;"]),h={color:i.a.darkLink,fontWeight:i.d.black};A.a=function(){return c.a.createElement(o,null,c.a.createElement(d.a,{bottom:!0,cascade:!0,delay:200},c.a.createElement(m,null,c.a.createElement(s,{exit:{length:.5},entry:{delay:.8},to:"/WebDesign",partiallyActive:!0,activeStyle:h},"Web Design"),c.a.createElement("hr",null),c.a.createElement(s,{exit:{length:.5},entry:{delay:.8},to:"/WebDevelopment",partiallyActive:!0,activeStyle:h},"Web Development"),c.a.createElement("hr",null),c.a.createElement(s,{exit:{length:.5},entry:{delay:.8},to:"/WebGraphics",partiallyActive:!0,activeStyle:h},"Web Graphics"),c.a.createElement("hr",null),c.a.createElement(s,{exit:{length:.5},entry:{delay:.8},to:"/SEO",partiallyActive:!0,activeStyle:h},"SEO Optimisation"))))}},471:function(e,A,t){"use strict";var a=t(0),c=t.n(a),n=t(4),l=t(6),i=t.n(l),r=t(30),d=n.b.div.withConfig({displayName:"Wrapper",componentId:"sc-369ohs-0"})(["@media only screen and (max-width:1024px){margin-top:1em;margin-bottom:2.5em;}"]);A.a=function(){return c.a.createElement(i.a,{bottom:!0,delay:400},c.a.createElement(d,{"aria-label":"Link to Portfolio"},c.a.createElement(r.h,{exit:{length:.5},entry:{delay:.8},to:"/Portfolio/",partiallyActive:!0},"View Portfolio")))}},497:function(e){e.exports={data:{imageOne:{childImageSharp:{fluid:{tracedSVG:"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='400' height='210'%3e%3cpath d='M342 16l1 4-1 2c-2 1-2 1-2-1 1-1 0-2-1-3-3-1-3-1-2 1v1c-1 0-2 1-2 3-1 3-5 6-6 5l1 6 1 6 3 1 5-2h1c-1 2 0 3 2 1h1l7 1h8V28c0-11-1-14-2-11h-2c-2-2-2-2-4 0s-2 2-1 3c2 2 1 4-1 4-3 0-4-1-1-3 1-1 1-1-1-1-1-1-2-2-1-3 0-1-2-2-3-1M216 26v8l-1 2 1 1 1 4-1 4c-2 1-1 2 1 2v1c-3 2-3 1-3-4l-1-5v-8l-1-3h-1l-1 4c1 1 0 2-1 3l-1 1 1 1c2-2 1 2-1 4s-3 4-1 3c1-1 1 0 1 1 0 2 0 2-1 1s-2-1-2 1c-1 2-1 2-2 1-1-2-6 1-5 3l1 1 2-2h3l1 1v6c0 3 0 4-2 4l-2-1 1-2v-5c0-2 0-2-2 0l-3 3-1 1v-1l-1-2-2 4v5c-1 1-1 1 1 1l3 1-1 1-2 2 1 1 1 1c0 2 1 5 3 5v1c-1 1-1 2 1 3 1 1 1 1-2 2h-4v3l-1 2c-2-1-3 1-2 3h1c0-2 0-2 1 0l2 1 1 1-1 2v6l3 1c2-1 3-1 4 2s2 3 4 3c1 0 4 5 3 6h-1c-2-1-4 0-3 2l1 2c-1 1 2 3 4 3 4 0 2 2-2 2-3 0-4 0-2-1l2-1h-7c-1 1-2 0-2-1 0-2-6-4-6-2l3 1c2 0 2 0 1 1h-9l-19 1c-17 0-18 0-18 2l-1 2-1-2c1-2 0-2-2-2l-2 1c1 2 0 3-1 1l-3-2v1l-1 1-1-1-9-1h-7l1 2c1 4 0 4-3 1l-2-3H95v12c0 10 0 12 2 12 1 0 2 4 0 6-2 1-2 18-1 18l1 2-1 1-1 12c0 11 1 15 2 11 1-2 6-3 7-2l-3 3-2 2h11c9 0 11-1 13-3l8-5c4-1 6-3 7-4l2-1 2-1 6-4 8-6 7-5 7-4c4-2 7-3 4 0l-1 1 2-1 2-1c1-1 1 0 1 8 0 7 0 8-1 2v-6h-4l-4-1v31h85v-12h18v-9c0-10 0-10-5-10s-5 0-4-3c0-2 0-3-2-4l-4-4 3 1 6 4 7 4 2 2h1l6 3 9 6c5 4 5 4 3-3l-1-5c2 0 4 1 4 4 0 1 0 2 2 2s2 0 2-2c-1-1 0-5 1-4 2 2 2 6 0 7l-3 3-1 1v5c3 2 11 3 11 1s-1-2-3-2c-2 1-2 1-2-1l4-1c2 0 3-1 2-2l1-1v-3c-1-1-1-3 1-5v-11l1 2 1 3c1 1 4 2 3 0s1-5 3-5c1 0 1-1-1-2l-3-4c0-2 2-1 5 2 1 2 3 3 3 2l2-1v4c-2 0-5 1-5 4 0 1 0 2 1 1h5l-1 1-1 2h3c0-3 3-2 4 0 1 1 1 1 1-1s0-3-2-3-2-4 1-7l2-2v2c1 3 5 5 5 2l-2-1-1-1 3-2c2 0 4 2 2 5v3l-1 4c0 2-1 3-3 0h-1l-1 3-2 3h1c3-2 4 1 1 4v5l2 3 2-2c2-3 3-4 2-7 0-5 1-5 5-4l6 2v1h-2c-2 0-3 1-1 4v4c-1 2-1 3 4 3s6-2 4-5c-3-4-3-8-2-9 3 0 2-1 0-4-3-3-4-4-4-1l-1 3c-3 2-4-1-4-6l-2-7c-1-2-1-2 1-4l2-4c0-2 4-2 7-1 3 2 3-1 3-11 0-7 0-7-3-7-2 0-3-1-3-4-1-5-3-5-3-1-1 3-1 3-3 3l-5-1c-2 0-2 0 0-2 1-1 1-1 0 0h-9c0 2-1 3-2 1v-2c2-2 1-2-7-2l-9 1h-1l-18-1-18-1-2-1-2-1h2c4 0 2-3-2-3l-6-1c-2 0-2 0-2 3l-1 5h-1c0-1-6-2-6 0h-5c-4 0-5-1-2-2h3c3 0 2-4-1-5-1 0-2-1-2-3-1-1-2-2-3-1-1 0-2-2 0-4l-1-2h-3v-2l1-1 1-2-1-3v-3c-1-1-4 3-5 8 0 3-1 4-2 3-2 0-1-4 1-4v-1l-1-2h1l1-1v-1l1-2c1 0 1-1 0 0l-1-1 5-2 2-3 1-3c-2 1-2 0-1-2l-1-3v3h-1l-2-3c0-2 3-2 4-1h2v-2l-1-2h-2c0 2-1 2-1 1h-1l-1-1 3-1c1-1 2-1 1-2v-4c0-2-1-3-2-3-2 0-2 0-2-2s0-2-2-2c-1 1-2 1-2-1l-2-2-2-1 5 1c1 1 3-1 2-3v-3c-2-1-3-2-1-2l1-1c0-2-1-3-3-1h-1l1-1 1-1h-1l-1-2v-3c-1-1-1-1-2 2l-1 2-2-2 1-1v-2c1-1 2-7 0-8v3c0 2 0 3-2 3l-1 2c1 2 0 2-1 2h-1l-1-1V27c-1-2-3-1-2 1l-2 3c-2 1-2 1-2-2v-5c-1 0-2 0-1-1l-1-1-2 4m-97 49v9h2c2 0 3 0 2-3 0-3 0-3 3-3 6-1 6-11 0-12v1l1 6c0 3 0 4-2 4s-2 0-2-5l-1-5c-3-2-3-1-3 8m-80 47v29l1 2 2 3c2 2 1 2-1 5-3 3-4 6-1 6v4l-2 4 1 2c1-1 3 2 3 3-1 2 5 2 6 0 2-2 3-3 3 0h1l3-1 2-1c1-1 1 0 1 1v3h12c13 0 13 0 11-6v-3l1-6c0-2-1-2-4-2h-2l4-2c1 0 2-1 2-3 1-4 0-18-1-18v-1l1-4 1-8c1-11 1-11-12-11-9 0-11 0-10 1 2 2 4 9 2 8-1 0-2-1-1-2 0-2 0-2-1-1H46c-5 0-5 0-4-2 3-2 3-4 0-3h-2l-1 3m164 37v2h12c11 0 12 0 6 1h-12l-6 1 2 1c18 0 37 0 35-1s-2-1 0-2c3-1 1-2-8-2l-9-1 9-1h9l-13-1c-11 0-12 0-12 2 1 1 1 1-1 1l-7-1c-4 0-4 0-1-1l3-1h-4c-3 0-3 0-3 3m75 13h-4v5c0 5 1 6 7 6 3 0 3 0 3-5 0-7 0-7-6-6m-121 12v11h11v-5l-1-10v-6l-5-1h-5v11m-20 4v3l-1 2v1l8 1h7v-8h-7l-7 1' fill='%23d3d3d3' fill-rule='evenodd'/%3e%3c/svg%3e",aspectRatio:1.9047619047619047,src:"/static/91c0d6f3160978e9a65442b2e2c50f07/4cc84/LandspaceTheme.png",srcSet:"/static/91c0d6f3160978e9a65442b2e2c50f07/fbe2f/LandspaceTheme.png 300w,\n/static/91c0d6f3160978e9a65442b2e2c50f07/26d9e/LandspaceTheme.png 600w,\n/static/91c0d6f3160978e9a65442b2e2c50f07/4cc84/LandspaceTheme.png 1200w",srcWebp:"/static/91c0d6f3160978e9a65442b2e2c50f07/10458/LandspaceTheme.webp",srcSetWebp:"/static/91c0d6f3160978e9a65442b2e2c50f07/b68c6/LandspaceTheme.webp 300w,\n/static/91c0d6f3160978e9a65442b2e2c50f07/fb57e/LandspaceTheme.webp 600w,\n/static/91c0d6f3160978e9a65442b2e2c50f07/10458/LandspaceTheme.webp 1200w",sizes:"(max-width: 1200px) 100vw, 1200px"}}},imageTwo:{childImageSharp:{fluid:{tracedSVG:"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='400' height='207'%3e%3cpath d='M145 1c-2 3-2 8 0 8l3-1c1-2 2-1 1 1l-2 3 6 1c8 1 15 0 15-1l-1-1c-1 1-4 0-3-1 1-2 4-1 5 1 0 2 1 2 5 2 36 1 40 1 41-1h3v3c1 2 4 2 3 0 0-3 2-1 4 2l1 4 1-3c1-2 1-1 1 3-1 4 0 5 2 6l2 3v1c1-1 2 0 2 1l1 1v-3c0-2 1-3 3-1h3c3-1 7 0 6 2l2 1c1 0 2 0 1-1l-1-1h1l3 1h2l3 2c3 0 3 0 3-3l1-4v3l1 1 2 1h-2c2 2-1 4-5 3-9-2-21 0-29 5-4 3-14 13-14 15l-1 2c-2 1-2 1-2-1 0-3-7-5-11-3s-4 4 2 5c8 3 8 3 7 6-1 2-2 3-4 1l-2-1-1-1c0-2-6-4-8-3l-3 2-2 2-1 2-3 7 3 1 9 5 9 3c1-1 2-1 1 1l3 9c2 8 2 9-4 9-3 0-4 0-3 1h3c2 0 2 0 1 1-1 2-2 2-3 1h-1l-3 1c-4 1-6 3-3 3l2 2v1l-1 1-1 3c-1 2-1 2 3 0s5-1 3 3c-1 2-2 3-1 5 0 2 0 2 3 0l1-2c-1-2 2-2 4 0l4 3 1 1h5v2c-3 1-2 3 0 2 2 0 2 0 1 2l-2 2v-1l-1-1-2 3c0 2-2 6-4 6l-1 2c0 1 1 1 7-4 4-3 5-3 2 1-2 3-4 8-2 8l4-3c3-3 4-3 4-2l-1 3v1c3 1 2 3-1 4l-2 2h4c6 0 9 1 9 4l-6 1-8 1v24l12 1 12 1-4 5-5 5h-13l-12-1-8-24c-1-4-3-6-4-6v16l3 7c1 5 2 6 4 7 4 1-13 2-47 2a499 499 0 0 0-53 3c-1 1-1 1 1 1s2 0 1-1c-3-2 1-1 5 1l6 1h7v2l1 2 1 4h6c3 0 5 0 4-1v-2l2 2 5 1c2 0 3 0 2-1-3-1-3-4-1-4l2 2c0 2 4 4 5 2h2c4 3 10-1 8-5v-3h-1c-1 1-1 0-1-1l1-2c1 0 7 10 6 11l6 1h5l-2-3c-3-2-5-6-4-7l2 2 3 1h3l5 2 3 1 2 1-1-2c-1-1-1-1 1-1h4c1-2 2-1 1 3 0 3 0 3 2 3a506 506 0 0 0 89-2c0-2 0-3 1-2l1 2v1h2c0 2 2 1 2-1h1l1-1 1-4v4c0 3 0 3 3 3l3-1v-1l1-2c0-2 1-3 2-3l1-4-1-2h-1l-9-1-7-1v-3l-3-1-3-1c0-1-5-1-16 1-9 2-11 2-13 1-4-5 0-7 14-7h12v-8c1-14 0-17-4-18-3 0-3 0-2-2v-2c-1-2-1-4 1-4v-3l-4 2-2 2v-4c0-4 1-5 2-5l4-1 5-4 3-1c0-3 2-1 2 1-1 2 0 2 1 2 2 0 2 0 1 1s-1 1 2 1c3-1 3-2 6 11v9l1 2 2 3c0 7 17 30 22 30 1 0 2-2 0-2l-8-10 8 5 3 4c3 4 3 4 0 7l-2 2c3 3 6 3 6 1 1-1 0-2-1-2-2 0-2 0 0-2 1-1 2-2 3-1 2 0 2 0 1-1s-1-1 1-1c3 0 4 1 1 3v4l-1 1 1 2 2-2 1-1v-5c2-1 2-1 2 1-1 1-1 2 1 3 3 2 3 3 0 3l-3 3 14 1c13 0 14 0 17-3 4-2 7-2 4 0-2 3-1 3 15 3h15v-8c0-10-1-12-3-12v1l1 3c0 3-3 2-9-2-10-7-13-8-17-5-3 3-4 2-1-2 2-4 1-7-2-4 0 2-1 2-1 1h-3c-3 0-3 0-3-3 0-2 1-3 7-6 9-5 13-6 14-2v5c-3 0-3 2 0 3 2 2 11 2 16 1l1-5-4 2c-5 2-5 1 0-2l4-3v-12l-1-11-25 15-9 6c1-2 0-3-2-1-1 1-1 0-1-3l1-4v-7c-1-1-1 0-2 1l-2 3c-1 0-2-4-1-5s1-1-1-1l-2 1h-2c-3 0-3 0-3 2 0 1 0 2-2 1l-1-2c1-1 0-3-1-4-1-2-1-2 1-2l3-1v-4h7l2 2c1 3 3 3 3 0 0-2 0-3-2-2v-1c3-2 3-11 0-11l-1 2c1 2-1 3-1 0l-2-1h-1l1-1v-1c-2-2-1-3 1-1 2 1 2 1 2-1l2-2 1-3c0-3 0-4-2-4h-2l2-2c3-2 3-16 0-17h-2l2-2c2-2 2-3 2-10l1-9c3-2-6-4-14-3-7 1-8 1-6 3h1l1-1v1c-1 1 0 2 2 3 2 2 2 2 0 2-2 1-3 0-4-2-2-3-3-4-2-1 0 1-1 1-4-1l-8-3c-1 1-2 1-1-1 0-1-3 0-11 4l-4 1-2 1v2l2 2c1 0 1 1-2 1-3 1-4 3-6 8s-4 23-3 24l4-4 5-4c1 0 0 3-3 5l-3 4c0 1-6 7-8 7s-3 7 0 8l1 2 2 1c3 2 3 4 0 5s-3 1 1 5c2 2 3 2 5 1 4-2 8 0 10 4 1 5 1 7-1 5l-2-2a1666 1666 0 0 0-2 2v2c-1 0 0 2 2 3 3 2 6 7 6 10h-1l-2-1v-1l-2-1-2 1-2 1-3 2c-2 2-3 1-4-3l-1-5c1 1 1 1 3-1l4-2c1 0 1-1-1-2l-3-2c-2 0-4 3-4 5 0 3-3-4-5-12-2-10-3-25-1-33v-8c0-3 0-3 1-2 1 2 3-5 2-8v-3h-1c-2 3-3-1-2-7 1-12 1-17-1-22-1-5-4-11-6-13l-1-2-3-4c-2-2-3-4-2-6l-1-2c-2 0-2 1-1 3v1l-2-1-5-3-3-3c0-1-1-2-3-1-3 0-3 0-2-2l2-2c1-1 0-5-1-5l-1-2v-2l1 2c0 2 1 1 4-1l2-2v2c0 3 0 3 3 2 3 0 3 0 3 2s0 2 1 1l1-1c0 2 1 2 3 0s2-2 0-2l-2-1h-3c-2 0-2-1-2-2 0-2 1-3 2-3h3l-1-1-3-2c-2-2-2-2-5 0l-3 3c-2 0 2-5 4-5 5-2 7-2 7-1l1 1 2-1 1-1 1 2h1v-1l4-1c2 0 3 0 2-1-2 0-2-3 0-7 0-2 0-2-2 0-2 1-3 2-3 4 0 3-4 4-6 1l-3-2V6l2-2 2 1V4c-1-1-1-2 1-3s2-1-2-1l-6 1h-2l-3-1c-2 0-2 0-1 1v3l-2 1 2 1c2-1 4 1 2 2-1 1-8-2-9-3h1c3 0 2-1 0-3s-3-2-13-2l-11 1-2 1-3-1-4-1-4 1h-3l-2 1-1 2 1 2h-1l-2-3c0-1-3-2-6-1l-1-1c1-1 0-1-1-1v2c0 2 0 2-2 1h-4c-2 0-3-1-1-2 1-1-7-1-17-1-19 0-19 1-20 2l-1 3-1-1c1-1-2-2-3-1h-4c-1 1-2 1-3-2h-2l-1 1V1l-2-1-4 1m202 54c-7 3-14 7-20 12-3 2-2 3 2 0 4-1 4-1 5 1l-1 2c-3 2 5 3 11 2l4-3c-1-2 1-3 7-3l5-1c2 0 3-5 1-5l-17 8c-5 4-6 4-2-1l11-7c7-3 9-5 4-4-2 1-2 1-1-1 4-4 1-4-9 0M65 66l-1 49 1 48h91l1-49V66l-46-1-46 1m1 49v47h90V68l-45-1H66v48m167-39c-5 4 0 12 6 11v4c0 4 2 9 4 9v-1c-2-3 0-11 2-9v2l1 2 1-1 1-4 2-3h-4l-3-1 1-3c1-2-4-5-7-4l-1-1v-2c1-2-2-1-3 1m-6 0l-1 1-3 2v1c2 0 4 5 3 6v3c0 2 0 2-1 1l-2 1 2 1v3c-1 1-2 2-1 3h-1c-2 0-2-2 0-3v-1c-5 0-6 0-5-1v-3c-2-2-3-1-3 2l1 2 1 1c-1 3 14 22 17 20v1h1c2 0 2 0 1 1s-1 1 1 1h3c2 0 2 0 1 1h1l5 1c2 0 2 0 1 1-2 1 0 1 5 1s5 0 2-1c-5 0-5 0-4-2 0-1 0-2-2-3l-5-4-1-1-2 1h-1l-3-1h-3l7-1 2-1h7c5-1 5-1 6-5 1-7-7-9-12-2l-2 3-3-4-4-6-1-1-2-3-1-2v-1l-1-1c-1 0-3-5-2-9v-3l-1 1m59 16l-1 3c0 2-4 6-5 5l-1 2h-1c-3-3-8-1-12 3-3 4-4 8-2 8v1l-2 1c-1-1-2 0-2 1l-1 2-1-1-3-1-3 1c0 2 2 3 9 3l4-1c-2-1-2-1 1-1l3-2 2-1 2 1c-2 2 1 1 2-1l3-2c2 0 4-2 2-2v-1h2c-1-1 0-2 1-3s2-2 1-3l1-2c1 0 3-2 3-4 2-5 2-5 0-4v-1c1-2 0-3-2-1m61 2l-5 1-2 2c0 1 4 0 7-2 5-2 4 0-1 3l-4 3c0 2-4 7-6 7-5 0-24 8-24 10s2 1 10-2c12-4 15-5 16-4l2 1v-2c-1-2-1-3 4-7l6-6c4 0 4 0 3-3s-2-4-6-1' fill='%23d3d3d3' fill-rule='evenodd'/%3e%3c/svg%3e",aspectRatio:1.935483870967742,src:"/static/e71bac0f197927d02cfa70c5abfbfc27/4cc84/MditanoTheme.png",srcSet:"/static/e71bac0f197927d02cfa70c5abfbfc27/fbe2f/MditanoTheme.png 300w,\n/static/e71bac0f197927d02cfa70c5abfbfc27/26d9e/MditanoTheme.png 600w,\n/static/e71bac0f197927d02cfa70c5abfbfc27/4cc84/MditanoTheme.png 1200w",srcWebp:"/static/e71bac0f197927d02cfa70c5abfbfc27/10458/MditanoTheme.webp",srcSetWebp:"/static/e71bac0f197927d02cfa70c5abfbfc27/b68c6/MditanoTheme.webp 300w,\n/static/e71bac0f197927d02cfa70c5abfbfc27/fb57e/MditanoTheme.webp 600w,\n/static/e71bac0f197927d02cfa70c5abfbfc27/10458/MditanoTheme.webp 1200w",sizes:"(max-width: 1200px) 100vw, 1200px"}}},imageThree:{childImageSharp:{fluid:{tracedSVG:"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='400' height='210'%3e%3cpath d='M0 105v105h401V0H0v105m39-1v90h211v-13l-1-15v-2l1-5v-3h13c14 0 14 0 10-9l-1-4 1 1c0 1 7 7 9 6l-1 2-2 3 2-1c4-3 10-4 15-1 3 3 4 3 10 2h6v39h47V14H39v90m228-62l-7 4-3 2c0-2-2 1-2 3 0 1 2 2 8 3 11 0 26-1 24-2l-3-4c-4-5-11-8-17-6m-56 22c-6 4-8 11-4 15 2 3 2 3 5 2 3-2 6-2 10 1l2 1V73c0-8 0-10-2-10-3-2-8-1-11 1m18 29v16h2c3 0 13-6 15-9l1-8-1 3-3 5h-1c2-6 2-8 0-9-2 0-2-1-2-5 0-5-1-7-6-9s-5-2-5 16m47 21c-10 4-11 16-4 24 9 9 23 2 23-10 0-10-10-18-19-14m-79 11l2 7c2 3 7 6 8 4h5l1-1v-1c2 2 7-7 6-11-1-2-2-2-12-2h-10v4m22 9v1h-2c1 1 0 3-1 4v13c1 3 2 3 3 2 1-2 4-3 4-1l-1 2c-2 2 0 3 5 2 10 0 15-13 8-21-3-3-4-3-9-3l-7 1' fill='%23d3d3d3' fill-rule='evenodd'/%3e%3c/svg%3e",aspectRatio:1.9047619047619047,src:"/static/5caccc1f109220847600ff1f7a4a5fc6/4cc84/SignatureLeaf.png",srcSet:"/static/5caccc1f109220847600ff1f7a4a5fc6/fbe2f/SignatureLeaf.png 300w,\n/static/5caccc1f109220847600ff1f7a4a5fc6/26d9e/SignatureLeaf.png 600w,\n/static/5caccc1f109220847600ff1f7a4a5fc6/4cc84/SignatureLeaf.png 1200w",srcWebp:"/static/5caccc1f109220847600ff1f7a4a5fc6/10458/SignatureLeaf.webp",srcSetWebp:"/static/5caccc1f109220847600ff1f7a4a5fc6/b68c6/SignatureLeaf.webp 300w,\n/static/5caccc1f109220847600ff1f7a4a5fc6/fb57e/SignatureLeaf.webp 600w,\n/static/5caccc1f109220847600ff1f7a4a5fc6/10458/SignatureLeaf.webp 1200w",sizes:"(max-width: 1200px) 100vw, 1200px"}}}}}},499:function(e,A,t){e.exports=t.p+"static/Webdesign-55e8e17b78ca66f848ff8d8343a8057b.png"}}]);
//# sourceMappingURL=component---src-pages-web-design-js-08f0b40f1cab23a4ad52.js.map