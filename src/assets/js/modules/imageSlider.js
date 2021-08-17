'use strict';

const ImageSlider = (function(Globals){
    const OPEN_OVERLAY = 'js-openOverlay';
    const breakpointLarge = Globals.get().breakpointLarge;

    const overlay = document.querySelector('.overlay');
    const modalCloseButton = document.querySelector('.overlay-close-button');

    let arnelasPictures;

   
    function closeImageSliderWhenAreaOutsideImgIsClicked() {
        if (Globals.get().documentWidth < breakpointLarge) {
            const imageOfTheSliders = document.querySelectorAll('.slick-slide .pics-carousel-item img');
            const prevArrow = document.querySelector('.pics-carousel .slick-prev');
            const nextArrow = document.querySelector('.pics-carousel .slick-next');
            let justOnes = true;

            if (imageOfTheSliders !== null) {
                imageOfTheSliders.forEach((imageOfTheSlider) => {
                    imageOfTheSlider.addEventListener('click', (event) => {
                        event.stopPropagation();
                    });
                });
            }
           
            if (prevArrow !== null) {
                prevArrow.addEventListener('click', (event) => {
                    event.stopPropagation();
                });
            }
           
            if (nextArrow !== null) {
                nextArrow.addEventListener('click', (event) => {
                    event.stopPropagation();
                });
            }
           
            overlay.addEventListener('click', (event) => { 
                //for a reason I don't know it's closed twice :-(
                if (justOnes) {
                    closeImageSlider(event.target);
                    justOnes = false;
                }
            });
        }
    }
    

    function prepareImageSlider(event, totalNumerOfSlides) {
        let fromNumber = event.parentElement.lastElementChild.getAttribute('src').lastIndexOf('/');
        let toNumber = event.parentElement.lastElementChild.getAttribute('src').lastIndexOf('.');
        let picNumber = event.parentElement.lastElementChild.getAttribute('src').substr(fromNumber+1, toNumber-fromNumber-1);
        let initialSlide = parseInt(totalNumerOfSlides, 10) - parseInt(picNumber, 10);
       
        $('.pics-carousel').slick({
            slidesToShow: 1,
            adaptiveHeight: true,
            initialSlide: initialSlide, 
            responsive: [
                {
                breakpoint: breakpointLarge,
                settings: {
                            arrows: true,
                            adaptiveHeight: true
                        }
                }
            ]
        });
        toggleImageSlider(event);

        //close image slider when the area outside a picture is clicked
        closeImageSliderWhenAreaOutsideImgIsClicked();
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
        if (modalCloseButton !== null) {
            modalCloseButton.addEventListener('click', (event) => {
                closeImageSlider(event.target);
            });
        }

        //open image slider when any picture is clicked
        arnelasPictures = document.querySelectorAll('.imageWithCaption__openImageSlider');
		if (arnelasPictures !== null) {
			arnelasPictures.forEach((arnelasPicture, key, allPictures) => {
				arnelasPicture.addEventListener('click', (event) => {
                    prepareImageSlider(event.target, allPictures.length);
				});
			});
		}
    }

    //public api
    return {
        init: init
    };
})(Globals);


