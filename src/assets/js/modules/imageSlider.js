'use strict';

const ImageSlider = (function(){
    console.log('inside ImageSlider IIFE');

    let arnelasPictures;


    function toggleImageSlider(event) {
		
	}

    function init(){
        console.log('init() of ImageSlider called');
    
        arnelasPictures = document.querySelectorAll('.imageWithCaption__openImageSlider');
		if (arnelasPictures !== null) {
			arnelasPictures.forEach((arnelasPicture) => {
				arnelasPicture.addEventListener('click', (event) => {
					toggleImageSlider(event.target);
                    console.log('Image angeklickt...');
				});
			});
		}
    }

    //public api
    return {
        init: init
    };
})();