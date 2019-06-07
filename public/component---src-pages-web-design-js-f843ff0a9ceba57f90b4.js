(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{458:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),c=a.n(r),o=(a(64),a(140),a(100),a(67),a(222),a(488),a(494)),d=a(467),l=a(4),m=a(495),s=a(19),p=a(462),f=a.n(p),g=l.b.div.withConfig({displayName:"Wrapper",componentId:"bw7l0a-0"})(["overscroll-behavior-y:contain;overflow:hidden;position:relative;height:100vh;width:100%;cursor:grab;padding-top:8%;@media only screen and (max-width:1024px){height:100%;overflow:visible;padding-top:0;}"]),u=Object(l.b)(d.a.div).withConfig({displayName:"Container",componentId:"bw7l0a-1"})(["position:absolute;width:100%;height:100%;will-change:transform;display:flex;align-items:center;justify-content:flex-end;"]),h=Object(l.b)(d.a.div).withConfig({displayName:"ImgWrapper",componentId:"bw7l0a-2"})(["background-color:white;background-size:auto 85%;background-repeat:no-repeat;background-position:center center;margin-top:-10em;margin-right:6em;width:70%;max-width:1200px;height:auto;max-height:630px;will-change:transform;border-radius:10px;box-shadow:0 12.5px 30px -10px rgba(50,50,73,0.4),0 10px 10px -10px rgba(50,50,73,0.3);@media only screen and (max-width:1024px){margin-top:0;width:60%;margin-left:auto;margin-right:auto;}@media only screen and (max-width:570px){width:70%;margin-top:15%;}"]),b=function(e){var t=e.data,a=[i.a.createElement(f.a,{backgroundColor:!0,fluid:t.imageOne.childImageSharp.fluid}),i.a.createElement(f.a,{backgroundColor:!0,fluid:t.imageTwo.childImageSharp.fluid}),i.a.createElement(f.a,{backgroundColor:!0,fluid:t.imageThree.childImageSharp.fluid})],r=function(e){return{x:0,y:-4*e,scale:1,rot:20*Math.random()-10,delay:100*e}},c=function(e){var t;return(t={x:0,y:-4*e,rot:0,scale:1.5}).y=-1e3,t},o=function(e,t){return"perspective(1500px) rotateX(30deg) rotateY("+e/10+"deg) rotateZ("+e+"deg) scale("+t+")"},l=Object(n.useState)(function(){return new Set})[0],s=Object(d.e)(a.length,function(e){return Object.assign({},r(e),{from:c(e)})}),p=s[0],b=s[1],w=Object(m.a)(function(e){var t=e.args[0],n=e.down,i=e.delta[0],c=(e.distance,e.direction[0]),o=e.velocity,d=c<0?-1:1;!n&&o>1&&l.add(t),b(function(e){if(t===e){var a=l.has(t);return{x:a?(200+window.innerWidth)*d:n?i:0,rot:i/100+(a?10*d*o:0),scale:n?1.1:1,delay:void 0,config:{friction:50,tension:n?800:a?200:500}}}}),n||l.size!==a.length||setTimeout(function(){return l.clear()||b(function(e){return r(e)})},600)});return i.a.createElement(g,null,p.map(function(e,t){var n=e.x,r=e.y,c=e.rot,l=e.scale;return i.a.createElement(u,{key:t,style:{transform:Object(d.c)([n,r],function(e,t){return"translate3d("+e+"px,"+t+"px,0)"})}},i.a.createElement(h,Object.assign({},w(t),{style:{transform:Object(d.c)([c,l],o)}}),a[t]))}))},w=function(){return i.a.createElement(s.StaticQuery,{query:"2678716676",render:function(e){return i.a.createElement(b,{data:e})},data:o})},y=a(461),x=a(6),v=a.n(x),A=a(65),E=a(469),S=a(463),C=a(30),k=function(){return i.a.createElement(i.a.Fragment,null,A.f.map(function(e){return i.a.createElement(y.a,{key:e.key},i.a.createElement(v.a,{bottom:!0,delay:200,cascade:!0},i.a.createElement(S.d,null,e.title),i.a.createElement(C.a,null,e.description),i.a.createElement(S.f,null,i.a.createElement(v.a,{bottom:!0,cascade:!0,delay:100},i.a.createElement(C.d,null,"Services"),i.a.createElement("ul",null,e.services.map(function(e){return i.a.createElement(C.f,{key:e},e)})))),i.a.createElement(v.a,{delay:600},i.a.createElement(S.a,null)),i.a.createElement(E.a,null)))}))},W=function(e){function t(){var t;return(t=e.call(this)||this).state={loaded:!1},t}c()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.setState({loaded:!this.state.loaded})},a.render=function(){return i.a.createElement(i.a.Fragment,null,this.state.loaded?i.a.createElement(y.e,null,i.a.createElement(k,null),i.a.createElement(y.d,null,i.a.createElement(w,null))):null)},t}(n.Component),I=a(468),L=a(15);a.d(t,"query",function(){return T}),Object(L.setDefaultBreakpoints)([{mobile:0},{tablet:824},{desktop:1025}]);t.default=function(e){var t=e.data,a=t.site.siteMetadata.siteUrl,n=t.site.siteMetadata.webDesignImage,r=t.site.siteMetadata.logo,c=t.site.siteMetadata.author;return i.a.createElement(i.a.Fragment,null,i.a.createElement(I.Helmet,null,i.a.createElement("html",{lang:"en"}),i.a.createElement("title",null,"RKK Creative Web Design"),i.a.createElement("meta",{name:"description",content:"Custom crafted responsive websites and web applications to support brand direction and digital growth"}),i.a.createElement("meta",{property:"og:url",content:a}),i.a.createElement("meta",{property:"og:type",content:"website"}),i.a.createElement("meta",{property:"og:title",content:c}),i.a.createElement("meta",{property:"og:image",content:a+n}),i.a.createElement("meta",{property:"og:image:width",content:"1200"}),i.a.createElement("meta",{property:"og:image:height",content:"630"}),i.a.createElement("meta",{property:"og:description",content:"Custom crafted responsive websites and web applications to support brand direction and digital growth"}),i.a.createElement("meta",{property:"og:site_name",content:a}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:site",content:"@rkkcreative"}),i.a.createElement("meta",{name:"twitter:url",content:a}),i.a.createElement("meta",{name:"twitter:title",content:c}),i.a.createElement("meta",{name:"twitter:description",content:"Custom crafted responsive websites and web applications to support brand direction and digital growth"}),i.a.createElement("meta",{name:"twitter:image",content:a+n}),i.a.createElement("script",{type:"application/ld+json"},'\n          {\n              "@context": "http://schema.org",\n              "@type": "LocalBusiness",\n              "name": '+c+',\n              "description": "Web Design Paphos",\n              "image": "'+a+n+'",\n              "logo": "'+a+r+'",\n              "@id": "'+a+'",\n              "url": "'+a+'",\n              "telephone": "",\n              "address": {\n                "@type": "PostalAddress",\n                "streetAddress": "8 Panagiotou Christodoulou",\n                "addressLocality": "Koili, Paphos",\n                "postalCode": "8543",\n                "addressCountry": "cy"\n              },\n              "openingHoursSpecification": {\n                "@type": "OpeningHoursSpecification",\n                "dayOfWeek": [\n                  "Monday",\n                  "Tuesday",\n                  "Wednesday",\n                  "Thursday",\n                  "Friday",\n                  "Saturday",\n                  "Sunday"\n                ],\n                "opens": "09:00",\n                "closes": "23:59"\n              },\n              "sameAs": [\n                "'+t.site.siteMetadata.facebook+'",\n                "'+t.site.siteMetadata.insta+'",\n                "'+t.site.siteMetadata.twitter+'",\n                "'+t.site.siteMetadata.pin+'",\n                "'+t.site.siteMetadata.linked+'"\n              ],\n              "priceRange": "$"\n          }\n     ')),i.a.createElement(L.BreakpointProvider,null,i.a.createElement(W,null)))};var T="2527474503"},461:function(e,t,a){"use strict";a.d(t,"b",function(){return f}),a.d(t,"c",function(){return g}),a.d(t,"a",function(){return h}),a.d(t,"d",function(){return b}),a.d(t,"e",function(){return w});var n=a(0),i=a.n(n),r=a(4),c=a(2),o=a.n(c),d=a(15),l=a.n(d),m=a(465),s=a(466),p=a(464),f=r.b.div.withConfig({displayName:"PageWrapper",componentId:"sc-1cx54db-0"})(["display:flex;width:100%;min-height:100vh;@media only screen and (max-width:1024px){padding-bottom:5em;min-height:88vh;}"]),g=Object(r.b)(f).withConfig({displayName:"PageWrapperCenter",componentId:"sc-1cx54db-1"})(["align-items:center;overflow:hidden;@media only screen and (max-width:1024px){padding-bottom:7em;}"]),u=Object(r.b)(f).withConfig({displayName:"FlexContainer",componentId:"sc-1cx54db-2"})(["justify-content:center;align-items:center;@media only screen and (max-width:1024px){flex-direction:column-reverse;justify-content:flex-end;}"]),h=r.b.div.withConfig({displayName:"LeftWrapper",componentId:"sc-1cx54db-3"})(["width:40%;margin-left:7%;padding:0em 3em;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;@media only screen and (max-width:1024px){margin-left:0;height:50%;width:70%;}@media only screen and (max-width:824px){padding:1.5em}@media only screen and (max-width:570px){width:85%;margin-top:10%;}"]),b=r.b.div.withConfig({displayName:"RightWrapper",componentId:"sc-1cx54db-4"})(["position:relative;width:55%;@media only screen and (max-width:1024px){display:flex;justify-content:center;align-items:center;min-height:50vw;height:50%;width:90%;}@media only screen and (max-width:824px){width:100%;}@media only screen and (max-width:570px){margin-top:8%;}"]),w=function(e){var t=e.children;return i.a.createElement(p.a,null,i.a.createElement(g,null,i.a.createElement(l.a,{desktop:!0,only:!0},i.a.createElement(m.a,null)),i.a.createElement(u,null,t),i.a.createElement(l.a,{desktop:!0,only:!0},i.a.createElement(s.a,null))))};w.propTypes={children:o.a.node.isRequired}},463:function(e,t,a){"use strict";a.d(t,"c",function(){return c}),a.d(t,"g",function(){return o}),a.d(t,"a",function(){return d}),a.d(t,"d",function(){return l}),a.d(t,"b",function(){return m}),a.d(t,"f",function(){return s}),a.d(t,"e",function(){return p});var n=a(4),i=a(1),r=a(30),c=n.b.div.withConfig({displayName:"GraphicsFlexWrapper",componentId:"sc-1kcl8wb-0"})(["display:flex;align-items:flex-start;flex-direction:column;"]),o=n.b.div.withConfig({displayName:"Spacer",componentId:"sc-1kcl8wb-1"})(["height:0.8em;@media only screen and (max-width:1024px){height:2em;}@media only screen and (max-width:824px){height:2.5em;}@media only screen and (max-width:570px){height:3em;}"]),d=n.b.hr.withConfig({displayName:"Divider",componentId:"sc-1kcl8wb-2"})(["color:",";background-color:",";border:none;height:0.2em;margin-bottom:0.4em;width:7.4vw;align-self:flex-start;@media only screen and (max-width:1024px){margin-bottom:1.8em;}@media only screen and (max-width:570px){margin-bottom:3em;}"],i.a.secondary,i.a.secondary),l=Object(n.b)(r.b).withConfig({displayName:"HeadingText",componentId:"sc-1kcl8wb-3"})(["border-left:0.15em solid ",";padding-left:0.2em;margin-bottom:0.5em;@media only screen and (max-width:824px){margin-bottom:0.75em;}@media only screen and (max-width:570px){margin-bottom:1em;}"],i.a.secondary),m=n.b.div.withConfig({displayName:"FullWidthWrapper",componentId:"sc-1kcl8wb-4"})(["width:84%;margin-left:8%;margin-right:4%;@media only screen and (max-width:1024px){margin-top:5em;padding-bottom:5em;}@media only screen and (max-width:570px){margin-top:6em;}"]),s=n.b.div.withConfig({displayName:"ServicesWrapper",componentId:"sc-1kcl8wb-5"})(["margin-bottom:0.8em;@media only screen and (max-width:1024px){margin-bottom:2em;}@media only screen and (max-width:824px){margin-bottom:2.5em;}@media only screen and (max-width:570px){margin-bottom:3em;}"]),p=n.b.div.withConfig({displayName:"MobileWidthWrapper",componentId:"sc-1kcl8wb-6"})(["@media only screen and (max-width:824px){padding:0 1em;margin-top:2em;}"])},464:function(e,t,a){"use strict";a.d(t,"a",function(){return m});a(210),a(211);var n=a(0),i=a.n(n),r=a(39),c=a(66),o=a(2),d=a.n(o),l=r.b.div({hidden:{opacity:0},visable:{opacity:1}}),m=function(e){var t=e.children;return i.a.createElement(c.TransitionState,null,function(e){var a=e.transitionStatus;return i.a.createElement(l,{pose:["entering","entered"].includes(a)?"visable":"hidden"},t)})};m.propTypes={children:d.a.node.isRequired}},465:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(4),c=a(30),o=a(1),d=a(6),l=a.n(d),m=r.b.div.withConfig({displayName:"Wrapper",componentId:"adnn29-0"})(["padding-left:0.5em;@media only screen and (max-width:1024px){display:none;}"]),s={color:o.a.darkLink,fontWeight:o.d.black};t.a=function(){return i.a.createElement(l.a,{bottom:!0,cascade:!0},i.a.createElement(m,null,i.a.createElement(c.i,{exit:{length:.5},entry:{delay:.8},to:"/WebDesign",partiallyActive:!0,activeStyle:s},"01"),i.a.createElement("hr",null),i.a.createElement(c.i,{exit:{length:.5},entry:{delay:.8},to:"/WebDevelopment",partiallyActive:!0,activeStyle:s},"02"),i.a.createElement("hr",null),i.a.createElement(c.i,{exit:{length:.5},entry:{delay:.8},to:"/WebGraphics",partiallyActive:!0,activeStyle:s},"03"),i.a.createElement("hr",null),i.a.createElement(c.i,{exit:{length:.5},entry:{delay:.8},to:"/SEO",partiallyActive:!0,activeStyle:s},"04"),i.a.createElement("hr",null)))}},466:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(4),c=a(30),o=a(1),d=a(6),l=a.n(d),m=r.b.div.withConfig({displayName:"Wrapper",componentId:"sc-3f91uk-0"})(["position:absolute;right:0;bottom:0;display:flex;width:100%;justify-content:flex-end;overflow:hidden;@media only screen and (max-width:1024px){display:none;}"]),s=r.b.div.withConfig({displayName:"NavContainer",componentId:"sc-3f91uk-1"})(["display:flex;margin-bottom:1em;margin-right:1em;"]),p=Object(r.b)(c.i).withConfig({displayName:"LinkStyle",componentId:"sc-3f91uk-2"})(["padding-left:1em;padding-right:1em;"]),f={color:o.a.darkLink,fontWeight:o.d.black};t.a=function(){return i.a.createElement(m,null,i.a.createElement(l.a,{bottom:!0,cascade:!0,delay:200},i.a.createElement(s,null,i.a.createElement(p,{exit:{length:.5},entry:{delay:.8},to:"/WebDesign",partiallyActive:!0,activeStyle:f},"Web Design"),i.a.createElement("hr",null),i.a.createElement(p,{exit:{length:.5},entry:{delay:.8},to:"/WebDevelopment",partiallyActive:!0,activeStyle:f},"Web Development"),i.a.createElement("hr",null),i.a.createElement(p,{exit:{length:.5},entry:{delay:.8},to:"/WebGraphics",partiallyActive:!0,activeStyle:f},"Web Graphics"),i.a.createElement("hr",null),i.a.createElement(p,{exit:{length:.5},entry:{delay:.8},to:"/SEO",partiallyActive:!0,activeStyle:f},"SEO Optimisation"))))}},469:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(4),c=a(6),o=a.n(c),d=a(30),l=r.b.div.withConfig({displayName:"Wrapper",componentId:"sc-369ohs-0"})(["@media only screen and (max-width:1024px){margin-top:1em;margin-bottom:2.5em;}"]);t.a=function(){return i.a.createElement(o.a,{bottom:!0,delay:400},i.a.createElement(l,{"aria-label":"Link to Portfolio"},i.a.createElement(d.h,{exit:{length:.5},entry:{delay:.8},to:"/Portfolio/",partiallyActive:!0},"View Portfolio")))}},494:function(e){e.exports={data:{imageOne:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAACJ0lEQVQoz2WS+28SQRDH+3cZ/UmNj6i18SdjTKXUNgIpGsV4NKcSaBpyEHxEHjZtQVptbGvoD1CBCEpOa8SglEaq1WsNJYdIK8fdwb321oXD+JrsfjOZ2U92ZnZ7RFGEHVOhqsgKMhlpx1EAABB2IrIkSkhlBYgcKzK7GtKDcm1SVdFJluUZhkWrwbAc1+KYBkXGazTNck2m3qjXGywvfIpMry5MdGGNhP+YqioqLL5Kh63ns5kUSouCCICKimnV6MZ3+jdM03SxWMzlciRJIi0UCqVSCcWjPgd29tBMwCOh3gQR/mdtmOe5SoWuoE3TFEVtfFxHPgRgyecwndobHLegolvNJuoLdCYhSwLqsgv/XS+QBB7loSK/iS/qTu6L3hllvpXRBVq6LUCGGszzfHLG779hepaMpRZn5/xEYm7i5WN/bIpYmg97nDaf7eJCKJBILEceTUcC7nQyllvNa5NCMEtYhh3m/tcv4vdsZtzQ77YOeEx944N9TmLsvtc15XWNXdOPDB00nD5gu3QGx4Yzy/NdGEqthw49fu7I18LK2yDmNhy/fqHXbhmyj2LEzavPgy4PZjQaBwl8wKXbv+I15yfNNTLUhVVF2s5GM08mtzfy4ZGj1t49s7ec4VDwxLHD7sv61IPbd6/o7Di2WVz7sZau55/uZCOVdwmt/z8Gpiql9UJ18/NOrUpRXz7k31fLW7uVcrVEiS0eDUpB7wza7w9+fYuf56McydWqJWsAAAAASUVORK5CYII=",aspectRatio:1.9047619047619047,src:"/static/91c0d6f3160978e9a65442b2e2c50f07/4cc84/LandspaceTheme.png",srcSet:"/static/91c0d6f3160978e9a65442b2e2c50f07/fbe2f/LandspaceTheme.png 300w,\n/static/91c0d6f3160978e9a65442b2e2c50f07/26d9e/LandspaceTheme.png 600w,\n/static/91c0d6f3160978e9a65442b2e2c50f07/4cc84/LandspaceTheme.png 1200w",srcWebp:"/static/91c0d6f3160978e9a65442b2e2c50f07/10458/LandspaceTheme.webp",srcSetWebp:"/static/91c0d6f3160978e9a65442b2e2c50f07/b68c6/LandspaceTheme.webp 300w,\n/static/91c0d6f3160978e9a65442b2e2c50f07/fb57e/LandspaceTheme.webp 600w,\n/static/91c0d6f3160978e9a65442b2e2c50f07/10458/LandspaceTheme.webp 1200w",sizes:"(max-width: 1200px) 100vw, 1200px"}}},imageTwo:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAC50lEQVQozyXRW0xTBxzH8T6YqRk+bdFdHpbNBzce5sZispdlJmbZRYG4LVPU4Y1M4gM6I8FMaKZz2M3oYpDgqiNOF2MIXoJCSIukLRdbyq20ME6lUM450Au9dz3czs53B/Z/+f+fPvnl/zNMziRUz1iA5aUlDX007d+VRTylIATjTMoZxidkhkcD/NZwjb2HPufi5ZO02zpwDfkQwwmCUph+jxdJvw0BOaYOjAgs6aAsywiCgCSJ9PYNYbG7GfpbZLjPTWNDPZ/s2E3hS6+x/+18rt++SziaYi7gx2m5iaXTwoQ4twLG1UGvH0WZ12KxGMlkknQ6hSiH6HF7GRyTaGq8weGDx/ixdBePCjZg/nQjV36uZbq/lbt1X2Os+oAOWydyJIvhuTinuj0CuZyiJZMJMpkMiUSC+XlFRyMM+oL02+3cNN+hpd5I9OhG+orfoc10gbpzhRzYt5nKU+/T6XAwE81gGPHPqN1u3yq4AiXTaWLxOFkdlmYijE2E6Hpqx3TmNJdMv9BtOspfRiM3zp/kYs2HnD7xCse/fIuhZy5mEwoGz7ikdrlG+CeX07KpFOQUtMXF1WJEOcyoDjp7B2i53cix0j0UF+7kcGkJDbUV1JRvoX3fJu4d+Ri/s4vM9DgGryCrDuf/YCwUZlH/4YKirLYdmJLxCRK9Lg8DT63cr6rkStFnPKmuZtz2mNGad+koLODP6q9wNtVj+cOIwfd8VnW4vKjLy5reNLmFBeb1hMl0lmk5SjCUxdY/SfuDFnIlpSS2f0FkRxF+RztCVQHG19dzIP9Vms1H+P3qTv2HesK+YT/TUkgTpVnEqSnkyQAOey8PW7tw2624Wq7TWHkCa8UprGe+5fH3+7l1zayX9Cs/Fb/H3m0vcvCblzHVbsXgD0ZVfzCMc1DQ2qw9tDU1YXt0n0sXaimrOI/5h3IidVto/mgd372QR/P2NbQW5HG27CyOO1fpvlfGnpI8inbl88aba/kPOMlogR2k6lsAAAAASUVORK5CYII=",aspectRatio:1.935483870967742,src:"/static/e71bac0f197927d02cfa70c5abfbfc27/4cc84/MditanoTheme.png",srcSet:"/static/e71bac0f197927d02cfa70c5abfbfc27/fbe2f/MditanoTheme.png 300w,\n/static/e71bac0f197927d02cfa70c5abfbfc27/26d9e/MditanoTheme.png 600w,\n/static/e71bac0f197927d02cfa70c5abfbfc27/4cc84/MditanoTheme.png 1200w",srcWebp:"/static/e71bac0f197927d02cfa70c5abfbfc27/10458/MditanoTheme.webp",srcSetWebp:"/static/e71bac0f197927d02cfa70c5abfbfc27/b68c6/MditanoTheme.webp 300w,\n/static/e71bac0f197927d02cfa70c5abfbfc27/fb57e/MditanoTheme.webp 600w,\n/static/e71bac0f197927d02cfa70c5abfbfc27/10458/MditanoTheme.webp 1200w",sizes:"(max-width: 1200px) 100vw, 1200px"}}},imageThree:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAACXElEQVQoz2MQkRIODA0Ijw4PiwgPDQvxD/T3D/L3D/YPjQoNiwwLDY/w8PL09PR2c3P39vOLT4mPjY/28vMUlxHlE+JlkJSXePnq5f///3/+/PH//7//SODvr59/v7z9/ev3t8+fvn35/uXNi19fPwHFT585JSEjJiopzCClIP38xXOg0L9/KDqB4P3r1x8vbv/w/P7htStXdnW/Obr8x8NzQPHjx48pKsvLKEgzyCpJvXjxAmTP379A/UASbBCIvHt+/5ZGj7fPnn799vPdu48/fv7+++cPyObTpxSU5IRFBRnk1CRevES3Gar5wpFVrfFzG9v/fXz45dmFj68f/PoNEj927BgPPw+PADeDgrr0m7dvnj9/fuDAgQsXLty9e/f79+8Q/T///H/y9OXK7u4HJ3dd2zP15om1X77+BkqdOHFCUUVRUkaCQUVL/vXrV2/evD18+PCDBw++f/38++d3iCtOru3as6Tj4f1bp06d9TMxaSuuePbkGUj81EkpeUlBUQEGdT3lFy9Bfv7x48efP39+/vwJJIFeB+r+8PxWkrV+ZZjvg8MrJ5TnL5066cXzV0CVR48d5eLj5ODlYFDWloNo/vXr1+/fv/+AgwTkbJD2/7cuXTq1a2tCgLO7s62Vqf6WLVuBgoePHGbjYGPjZGNQ1JBBi6p/EB///fft6zcg88PHz/pGpuISUgKCwgsXLgSKHDp8iJ2LnZ2LjUFaWczJzc7B2dbWwdrazsrWydrJzdHH38vNy83Byd7M1NTFw1FTX1VFQ1FWQdrSxsIrwFPfRI+dG6iZHQCNHbDdAW17sgAAAABJRU5ErkJggg==",aspectRatio:1.9047619047619047,src:"/static/5caccc1f109220847600ff1f7a4a5fc6/4cc84/SignatureLeaf.png",srcSet:"/static/5caccc1f109220847600ff1f7a4a5fc6/fbe2f/SignatureLeaf.png 300w,\n/static/5caccc1f109220847600ff1f7a4a5fc6/26d9e/SignatureLeaf.png 600w,\n/static/5caccc1f109220847600ff1f7a4a5fc6/4cc84/SignatureLeaf.png 1200w",srcWebp:"/static/5caccc1f109220847600ff1f7a4a5fc6/10458/SignatureLeaf.webp",srcSetWebp:"/static/5caccc1f109220847600ff1f7a4a5fc6/b68c6/SignatureLeaf.webp 300w,\n/static/5caccc1f109220847600ff1f7a4a5fc6/fb57e/SignatureLeaf.webp 600w,\n/static/5caccc1f109220847600ff1f7a4a5fc6/10458/SignatureLeaf.webp 1200w",sizes:"(max-width: 1200px) 100vw, 1200px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-web-design-js-f843ff0a9ceba57f90b4.js.map