
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import errorIcon from "../src/img/error-icon.svg";

import { getImages} from "./js/pixabay-api";
import { createMarkup } from "./js/render-functions";

// ====================================================================

export const gallery = document.querySelector('.gallery');
const formSubmit = document.querySelector('.form');
export const inputValue = document.querySelector('.input-value');
const section = document.querySelector('section');
export const loading = document.querySelector('div');

// ======================================================================

formSubmit.addEventListener('submit', onButtonSubmitForm);

function onButtonSubmitForm(event) {
    event.preventDafault();

    gallery.innerHTML = '';
        
    if (inputValue.value.trim === '') {
        return 
    }

    loading.classList.add('loading');

    getImages().then(data => {
        if (data.total === 0) {
                iziToast.show({
                    titleColor: '#fff',
                    titleSize: '16px',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    messageColor: '#fff',
                    messageSize: '16px',
                    iconUrl: errorIcon,
                    position: 'topRight',
                    backgroundColor: '#ef4040',
                    close: true,
                    maxWidth: '432px',
                })
        }
        createMarkup(data.hits);

        const lightbox = new SimpleLightbox('.gallery a',
                                        { 
                                        captionsData: 'alt',
                                        captionDelay: 250,
            });
        lightbox.refresh();

        })

    section.reset();

}