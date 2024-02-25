import{i as f,S as m}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="/goit-js-hw-11/assets/error-icon-7115e62e.svg";function d(){const r="42556248-7d7b04b226b16d9af953a75af",o="https://pixabay.com/api/?key=",s=a.value,i=o+r+"&q="+s+"&image_type=photo&orientation=horizontal&safesearch=true";return fetch(i).then(e=>{if(!e.ok)throw new Error(`Error with status ${e.status}`);return e.json()}).catch(e=>{console.log(e)})}function g(r){const o=r.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:n,comments:c,downloads:u})=>`<li class="gallery-item">
                    <a class="gallery-link" href="${i}">
                        <img class="gallery-image" 
                            src="${s}" 
                            alt="${e}" />
                    </a>
                    <ul class="list">
                        <li class="list-info">Likes<p class="info">${t}</p></li>
                        <li class="list-info">Views<p class="info">${n}</p></li>
                        <li class="list-info">Comments<p class="info">${c}</p></li>
                        <li class="list-info">Downloads<p class="info">${u}</p></li>
                    </ul>
                </li>`).join("");l.innerHTML=o,b.classList.remove("loader")}const l=document.querySelector(".gallery"),h=document.querySelector(".form"),a=document.querySelector(".input-value"),y=document.querySelector("section"),b=document.querySelector("div");h.addEventListener("submit",L);function L(r){r.preventDafault(),l.innerHTML="",a.value.trim!==""&&(loading.classList.add("loading"),d().then(o=>{o.total===0&&f.show({titleColor:"#fff",titleSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",messageSize:"16px",iconUrl:p,position:"topRight",backgroundColor:"#ef4040",close:!0,maxWidth:"432px"}),g(o.hits),new m(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}),y.reset())}
//# sourceMappingURL=commonHelpers.js.map
