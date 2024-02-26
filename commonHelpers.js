import{i as p,S as d}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="/goit-js-hw-11/assets/error-icon-7115e62e.svg";function h(){const r="42556248-7d7b04b226b16d9af953a75af",o="https://pixabay.com/api/?key=",s=c.value,i=o+r+"&q="+s+"&image_type=photo&orientation=horizontal&safesearch=true";return fetch(i).then(e=>{if(!e.ok)throw new Error(`Error with status ${e.status}`);return e.json()}).catch(e=>{console.log(e)})}function y(r){const o=r.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:l,comments:f,downloads:m})=>`<li class="gallery-item">
                    <a class="gallery-link" href="${i}">
                        <img class="gallery-image"
                            src="${s}" 
                            alt="${e}" />
                    </a>
                    <ul class="list">
                        <li class="list-info">Likes<p class="info">${t}</p></li>
                        <li class="list-info">Views<p class="info">${l}</p></li>
                        <li class="list-info">Comments<p class="info">${f}</p></li>
                        <li class="list-info">Downloads<p class="info">${m}</p></li>
                    </ul>
                </li>`).join("");n.innerHTML=o,u.classList.remove("loader")}const n=document.querySelector(".gallery"),a=document.querySelector(".form"),c=document.querySelector(".input-value");document.querySelector("section");const u=document.querySelector("div");a.addEventListener("submit",b);function b(r){r.preventDefault(),n.innerHTML="",c.value.trim!==""&&(u.classList.add("loader"),h().then(o=>{o.total===0&&p.show({titleColor:"#fff",titleSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",messageSize:"16px",iconUrl:g,position:"topRight",backgroundColor:"#ef4040",close:!0,maxWidth:"432px"}),y(o.hits),new d(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}),a.reset())}
//# sourceMappingURL=commonHelpers.js.map
