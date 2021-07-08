// eslint-disable-next-line no-unused-vars
const Render = (function (Globals) {
	

    /* 
        <div class="portfolio-item">
            <div class="imageWithCaption">
                <a  href="javascript:;"
                    class="imageWithCaption__openImageSlider"
                >
                    <picture class="imageWithCaption__picture">
                        <source srcset="assets/images/pics/large/01.jpg" media="(min-width: 740px)">
                        <img class="imageWithCaption__img" src="assets/images/pics/small/01.jpg"  alt="" title="">
                    </picture>
                    <span class="imageWithCaption__caption">
                        Hoja de palmera<br>
                        Acryl auf Leinwand, 120 x 120 cm, 2002
                    </span>
                </a>
            </div>
        </div>
    */
    function createPortfolioPictureItem(picture) {
		const breakPointLarge = Globals.get().breakpointLarge;

		const portfolioItemElement = document.createElement('div');
		portfolioItemElement.classList.add('portfolio-item');

        const imageWithCaptionElement = document.createElement('div');
		imageWithCaptionElement.classList.add('imageWithCaption');

        const openImageSliderElement = document.createElement('a');
		openImageSliderElement.classList.add('imageWithCaption__openImageSlider');
		openImageSliderElement.setAttribute('href', 'javascript:;');
		
		const pictureElement = document.createElement('picture');
        pictureElement.classList.add('imageWithCaption__picture');

		const sourceElement = document.createElement('source');
		sourceElement.setAttribute('srcset', picture.path + 'large/' + picture.name);
		sourceElement.setAttribute('media', '(min-width: ' + breakPointLarge + 'px)');

		const imgElement = document.createElement('img');
        imgElement.classList.add('imageWithCaption__img');
		imgElement.setAttribute('src', picture.path + 'large/' + picture.name);
		imgElement.setAttribute('title', 'Bild von Myriam Arnelas: ' + picture.title);
		imgElement.setAttribute('alt', 'Bild von Myriam Arnelas: ' + picture.title);

		pictureElement.appendChild(sourceElement);
		pictureElement.appendChild(imgElement);

        const captionElement = document.createElement('span');
        captionElement.classList.add('imageWithCaption__caption');
        captionElement.innerHTML = picture.title + '<br>' + picture.description;


        openImageSliderElement.appendChild(pictureElement);
        openImageSliderElement.appendChild(captionElement);
        imageWithCaptionElement.appendChild(openImageSliderElement);
        portfolioItemElement.appendChild(imageWithCaptionElement);
		return portfolioItemElement;
	}


	function renderPicturesInPortfolio(pictures) {
		
        const portfolioWrapper = document.querySelector('.portfolio-wrapper');

        if (portfolioWrapper !== null) {
            // delete all current children
            while (portfolioWrapper.firstChild) {
                portfolioWrapper.removeChild(portfolioWrapper.firstChild);
            }

            // add the course dates
            pictures.forEach((picture) => {
                const portfolioItem = createPortfolioPictureItem(picture);
                portfolioWrapper.appendChild(portfolioItem);
            });
        }
	}


	// public api
	return {
		createPortfolio: renderPicturesInPortfolio
	};
})(Globals);
