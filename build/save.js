(()=>{"use strict";var t={609:t=>{t.exports=window.React},715:t=>{t.exports=window.wp.blockEditor}},e={};function o(r){var n=e[r];if(void 0!==n)return n.exports;var d=e[r]={exports:{}};return t[r](d,d.exports,o),d.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{o(609),o(715);const t=document.querySelectorAll(".spacer-custom");for(const e of t){const r=e.getAttribute("data-desktop"),n=e.getAttribute("data-tablet"),d=e.getAttribute("data-mobile");function i(){var t,o=(t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)>=1025?r:t>=768?n:d;e&&(e.style.paddingTop=o+"px",e.style.paddingBottom=o+"px")}i(),window.addEventListener("resize",i)}})()})();