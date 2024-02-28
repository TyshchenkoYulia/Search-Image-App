
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import errorIcon from "../src/img/error-icon.svg";

import { getImages} from "./js/pixabay-api";
import { renderGalleryMarkup } from "./js/render-functions";

import { refs } from "./js/refs";

// ====================================================================


refs.formSubmit.addEventListener('submit', onButtonSubmitForm);

const lightbox = new SimpleLightbox('.gallery a',
                                        { 
                                        captionsData: 'alt',
                                        captionDelay: 250,
    });
            
    
function onButtonSubmitForm(event) {
    event.preventDefault();

    refs.gallery.innerHTML = '';
    
    const inputValue = refs.input.value.trim();

    if (inputValue === '') {
            iziToast.show({
                    
                    titleColor: '#fff',
                    titleSize: '16px',
                    message: `Please, enter your search query!!!`,
                    messageColor: '#fff',
                    messageSize: '16px',
                    position: 'topRight',
                    backgroundColor: '#59A10D',
                    close: false,
                })

        return;
    }

    refs.loader.classList.add('loader');

    getImages(inputValue).then(data => {
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
        renderGalleryMarkup(data.hits);

        
        lightbox.refresh();

        })

    refs.formSubmit.reset();

    
}

