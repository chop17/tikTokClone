(this.webpackJsonptiktok=this.webpackJsonptiktok||[]).push([[0],{51:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},62:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),r=n(12),a=n.n(r),i=(n(51),n(27)),o=n.n(i),j=n(36),l=n(15),d=(n(53),n(54),n(55),n(38)),u=n.n(d),b=n(37),h=n(2);var O=function(e){var t=e.channel,n=e.desc,c=e.song;return Object(h.jsxs)("div",{className:"videoFooter",children:[Object(h.jsxs)("div",{className:"videoFooter_text",children:[Object(h.jsxs)("h3",{children:["@",t]}),Object(h.jsx)("p",{children:n}),Object(h.jsxs)("div",{className:"videoFooter_ticker",children:[Object(h.jsx)(u.a,{className:"videoFooter_icon"}),Object(h.jsx)(b.a,{mode:"smooth",children:function(e){e.index;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("p",{children:c})})}})]})]}),Object(h.jsx)("img",{src:"https://static.thenounproject.com/png/934821-200.png",alt:"",className:"videoFooter_record"})]})},v=(n(62),n(42)),x=n.n(v),p=n(40),f=n.n(p),m=n(43),g=n.n(m),k=n(41),N=n.n(k),S=n(97);var _=function(e){var t=e.likes,n=e.msgs,s=e.share,r=Object(c.useState)(!1),a=Object(l.a)(r,2),i=a[0],o=a[1];return Object(h.jsxs)("div",{className:"videoSidebar",children:[Object(h.jsxs)("div",{className:"videoSidebar_button",children:[Object(h.jsx)(S.a,{className:"videoSidebar_iconbutton",children:i?Object(h.jsx)(f.a,{fontSize:"large",onClick:function(e){return o(!1)}}):Object(h.jsx)(N.a,{fontSize:"large",onClick:function(e){return o(!0)}})}),Object(h.jsx)("p",{children:i?t+1:t})]}),Object(h.jsxs)("div",{className:"videoSidebar_button",children:[Object(h.jsx)(S.a,{className:"videoSidebar_iconbutton",children:Object(h.jsx)(x.a,{fontSize:"large"})}),Object(h.jsx)("p",{children:n})]}),Object(h.jsxs)("div",{className:"videoSidebar_button",children:[Object(h.jsx)(S.a,{className:"videoSidebar_iconbutton",children:Object(h.jsx)(g.a,{fontSize:"large"})}),Object(h.jsx)("p",{children:s})]})]})};var F=function(e){var t=e.url,n=e.channel,s=e.desc,r=e.song,a=e.likes,i=e.msgs,o=e.share,j=Object(c.useState)(!1),d=Object(l.a)(j,2),u=d[0],b=d[1],v=Object(c.useRef)(null);return Object(h.jsxs)("div",{className:"video",children:[Object(h.jsx)("video",{onClick:function(){u?(v.current.pause(),b(!1)):(v.current.play(),b(!0))},ref:v,loop:!0,className:"video_player",src:t}),Object(h.jsx)(O,{channel:n,desc:s,song:r}),Object(h.jsx)(_,{likes:a,msgs:i,share:o})]})},C=n(44),y=n.n(C).a.create({baseURL:"https://merntiktok1.herokuapp.com/"});var w=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("/v2/posts");case 2:return t=e.sent,s(t.data),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(n),Object(h.jsx)("div",{className:"app",children:Object(h.jsx)("div",{className:"app_videos",children:n.map((function(e){var t=e.url,n=e.channel,c=e.desc,s=e.song,r=e.likes,a=e.msgs,i=e.share;return Object(h.jsx)(F,{url:t,song:s,desc:c,channel:n,share:i,msgs:a,likes:r})}))})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,98)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root")),z()}},[[82,1,2]]]);
//# sourceMappingURL=main.47612e5a.chunk.js.map