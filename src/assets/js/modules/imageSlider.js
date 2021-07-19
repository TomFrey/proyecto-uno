'use strict';

const ImageSlider = (function(Globals){
    console.log('inside ImageSlider IIFE');

    const OPEN_OVERLAY = 'js-openOverlay';
    const breakpointLarge = Globals.get().breakpointLarge;

    const overlay = document.querySelector('.overlay');
    const modalCloseButton = document.querySelector('.overlay-close-button');

    let arnelasPictures;
    

    function prepareImageSlider(event) {
        console.log(event.parentElement.lastElementChild.getAttribute('src'));

        let fromNumber = event.parentElement.lastElementChild.getAttribute('src').lastIndexOf('/');
        let toNumber = event.parentElement.lastElementChild.getAttribute('src').lastIndexOf('.');
        let picNumber = event.parentElement.lastElementChild.getAttribute('src').substr(fromNumber+1, toNumber-fromNumber-1);

        console.log(fromNumber);
        console.log(toNumber);
        console.log(parseInt(picNumber, 10)-1);

        $('.pics-carousel').slick({
            slidesToShow: 1,
            adaptiveHeight: true,
            //variableWidth: true,
            initialSlide: parseInt(picNumber, 10)-1,
            responsive: [
                {
                breakpoint: breakpointLarge,
                settings: {
                            arrows: true,
                            adaptiveHeight: true,
                            variableWidth: false,
                        }
                }
            ]
        });
        toggleImageSlider(event);
	}


    function closeImageSlider(event) {
        $('.pics-carousel').slick('unslick');
        toggleImageSlider(event.target);
	}


    function toggleImageSlider(event) {
		overlay.classList.toggle(OPEN_OVERLAY);
        $('.pics-carousel').slick('setPosition');
	}


    function init(){
        console.log('init() of ImageSlider called');

        if (modalCloseButton !== null) {
            modalCloseButton.addEventListener('click', (event) => {
                closeImageSlider(event.target);
                console.log('Close Button angeklickt....');
            });
        }

        arnelasPictures = document.querySelectorAll('.imageWithCaption__openImageSlider');
		if (arnelasPictures !== null) {
			arnelasPictures.forEach((arnelasPicture) => {
				arnelasPicture.addEventListener('click', (event) => {
                    prepareImageSlider(event.target);
                    console.log('Image angeklickt....');
				});
			});
		}
    }

    //public api
    return {
        init: init
    };
})(Globals);