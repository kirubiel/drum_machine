(this.webpackJsonpdrum_machine=this.webpackJsonpdrum_machine||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(4),s=a.n(i),r=(a(10),a(3)),d=(a(11),a(5)),o=a.p+"static/media/sound (20).e6d6cf8c.wav",u=a.p+"static/media/04 - Snap [LCJ].cf131330.wav",p=a.p+"static/media/Chant_15.bb085f94.wav",f=a.p+"static/media/20inchbell.bbbe7517.wav",m=a.p+"static/media/Hat_Open_07.fd28e521.wav",l=a.p+"static/media/Hat_Closed_06.40d04e13.wav",b=a.p+"static/media/Kick (1).7980ce1a.wav",v=a.p+"static/media/Snare (34).7df48ea1.wav",h=a.p+"static/media/02 - RimShot [LCJ].e0383ada.wav",j=a.p+"static/media/Chord Hit.ac743ba6.svg",w=a.p+"static/media/Snap.cbf96bd2.svg",g=a.p+"static/media/Chant.d3a7af69.svg",C=a.p+"static/media/Ride.8fffa6ee.svg",O=a.p+"static/media/Open Hat.c304ace6.svg",x=a.p+"static/media/Closed Hat.930b8b4b.svg",S=a.p+"static/media/Kick.802d391a.svg",L=a.p+"static/media/Snare.93a05ed3.svg",k=a.p+"static/media/Rimshot.203e0340.svg",y=function e(t,a,n,c){Object(d.a)(this,e),this.name=t,this.src=a,this.text=n,this.svg=c},H=[new y("q",o,"Chord Hit",j),new y("w",u,"Snap",w),new y("e",p,"Chant",g),new y("a",f,"Ride",C),new y("s",m,"Open Hat",O),new y("d",l,"Closed Hat",x),new y("z",b,"Kick",S),new y("x",v,"Snare",L),new y("c",h,"Rimshot",k)],R=a(0);var _=function(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(null),s=Object(r.a)(i,2),d=s[0],o=s[1],u=Object(n.useRef)(),p=Object(n.useRef)([]);return Object(n.useEffect)((function(){u.current.focus(),p.current=p.current.slice(0,H.length)})),Object(R.jsxs)("div",{id:"drum-machine",children:[Object(R.jsx)("div",{className:"drum-pads",tabIndex:"0",autoFocus:!0,ref:u,onBlur:function(e){return e.target.focus()},onKeyDown:function(e){return function(e){var t=p.current.findIndex((function(t){return t.id.toLowerCase()===e.key.toLowerCase()}));if(t>-1){var a=p.current[t];a.parentNode.classList.add("change"),a.load(),a.play(),c(H[t].text),o(H[t].svg)}}(e)},onKeyUp:function(e){return function(e){var t=p.current.findIndex((function(t){return t.id.toLowerCase()===e.key.toLowerCase()}));t>-1&&p.current[t].parentNode.classList.remove("change")}(e)},children:H.map((function(e,t){return Object(R.jsxs)("button",{id:t,className:"drum-pad",onClick:function(t){return function(e,t,a){var n=e.target.firstChild;n.load(),n.play(),c(t),o(a)}(t,e.text,e.svg)},children:[Object(R.jsx)("audio",{id:e.name.toUpperCase(),ref:function(e){return p.current[t]=e},className:"clip",src:e.src,preload:"none"}),e.name.toUpperCase()]},t)}))}),Object(R.jsxs)("div",{children:[Object(R.jsx)("div",{className:"waveform",children:Object(R.jsx)("img",{src:d,alt:""})}),Object(R.jsx)("p",{id:"display",children:a})]})]})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};s.a.render(Object(R.jsx)(c.a.StrictMode,{children:Object(R.jsx)(_,{})}),document.getElementById("root")),N()}},[[13,1,2]]]);
//# sourceMappingURL=main.8305513c.chunk.js.map