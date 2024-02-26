import{i as p,S as d}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g="/goit-js-hw-11/assets/error-icon-7115e62e.svg";function h(){const i="42556248-7d7b04b226b16d9af953a75af",o="https://pixabay.com/api/?key=",r=a.value,s=o+i+"&q="+r+"&image_type=photo&orientation=horizontal&safesearch=true";return fetch(s).then(e=>{if(!e.ok)throw new Error(`Error with status ${e.status}`);return e.json()}).catch(e=>{console.log(e)})}function y(i){const o=i.map(({webformatURL:r,largeImageURL:s,tags:e,likes:t,views:n,comments:f,downloads:m})=>`<li class="gallery-item">
                    <a class="gallery-link" href="${s}">
                        <img class="gallery-image"
                            src="${r}" 
                            alt="${e}" />
                    </a>
                    <ul class="list">
                        <li class="list-info">Likes<p class="info">${t}</p></li>
                        <li class="list-info">Views<p class="info">${n}</p></li>
                        <li class="list-info">Comments<p class="info">${f}</p></li>
                        <li class="list-info">Downloads<p class="info">${m}</p></li>
                    </ul>
                </li>`).join("");l.innerHTML=o,c.classList.remove("loader")}const l=document.querySelector(".gallery"),b=document.querySelector(".form"),a=document.querySelector(".input-value"),L=document.querySelector("section"),c=document.querySelector("div");b.addEventListener("submit",u);function u(i){l.innerHTML="",a.value.trim!==""&&(c.classList.add("loader"),h().then(o=>{o.total===0&&p.show({titleColor:"#fff",titleSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",messageSize:"16px",iconUrl:g,position:"topRight",backgroundColor:"#ef4040",close:!0,maxWidth:"432px"}),y(o.hits),new d(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}),L.reset())}u();
//# sourceMappingURL=commonHelpers.js.map
