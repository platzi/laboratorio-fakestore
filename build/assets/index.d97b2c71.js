(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();function m(t){return`<article class="Card">
  <img 
    src=${t.images[0]} 
    alt=${t.title} 
    width="350px"
    height="350px"
  />
  <h2>
    ${t.title}
    <small>$ ${t.price}</small>
  </h2>
</article>`}const a=document.getElementById("app"),l=document.getElementById("observe"),u="https://api.escuelajs.co/api/v1/products";window.localStorage.setItem("pagination",5);const p=async t=>{try{const r=await(await fetch(t)).json();if(r.length!==0){const i=r.map(m),e=document.createElement("section");e.classList.add("Items"),e.innerHTML=i.join(""),a.appendChild(e)}else{c.unobserve(l);const i=document.createElement("p");i.classList.add("Items"),i.innerText="Todos los productos Obtenidos",a.appendChild(i)}}catch(n){console.log(n)}},f=async()=>{const n=Number(window.localStorage.getItem("pagination"));window.localStorage.setItem("pagination",n+10),await p(`${u}?offset=${n}&limit=${10}`)},c=new window.IntersectionObserver(t=>{t[0].isIntersecting&&f()},{root:null,rootMargin:"0px 0px 0px 0px",tracehold:0});c.observe(l);const d=t=>{window.localStorage.removeItem("pagination"),window.removeEventListener(d)};window.addEventListener("onbeforeunload",d);
