import{S as f,i as a}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="/goit-js-hw-11/assets/error-icon-7115e62e.svg";function p(i){const o="42556248-7d7b04b226b16d9af953a75af",r="https://pixabay.com/api/?key=",l=i,e=r+o+"&q="+l+"&image_type=photo&orientation=horizontal&safesearch=true";return fetch(e).then(t=>{if(!t.ok)throw new Error(`Error with status ${t.status}`);return t.json()}).catch(t=>{console.log(t)})}const s={gallery:document.querySelector(".gallery"),formSubmit:document.querySelector(".form"),input:document.querySelector(".input-value"),section:document.querySelector("section"),loader:document.querySelector("div")};function d(i){const o=i.map(({webformatURL:r,largeImageURL:l,tags:e,likes:t,views:n,comments:c,downloads:u})=>`<li class="gallery-item">
                    <a class="gallery-link" href="${l}">
                        <img class="gallery-image"
                            src="${r}" 
                            alt="${e}" />
                    </a>
                    <ul class="list">
                        <li class="list-info">Likes<p class="info">${t}</p></li>
                        <li class="list-info">Views<p class="info">${n}</p></li>
                        <li class="list-info">Comments<p class="info">${c}</p></li>
                        <li class="list-info">Downloads<p class="info">${u}</p></li>
                    </ul>
                </li>`).join("");s.gallery.innerHTML=o,s.loader.classList.remove("loader")}s.formSubmit.addEventListener("submit",y);const g=new f(".gallery a",{captionsData:"alt",captionDelay:250});function y(i){i.preventDefault(),s.gallery.innerHTML="";const o=s.input.value.trim();if(o===""){a.show({titleColor:"#fff",titleSize:"16px",message:"Please, enter your search query!!!",messageColor:"#fff",messageSize:"16px",position:"topRight",backgroundColor:"#59A10D",close:!1});return}s.loader.classList.add("loader"),p(o).then(r=>{r.total===0&&a.show({titleColor:"#fff",titleSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",messageSize:"16px",iconUrl:m,position:"topRight",backgroundColor:"#ef4040",close:!0,maxWidth:"432px"}),d(r.hits),g.refresh()}),s.formSubmit.reset()}
//# sourceMappingURL=commonHelpers.js.map
