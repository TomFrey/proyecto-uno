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


    function createActualContent(actualData) {
        const actualDataWrapper = document.createElement('div');
        actualDataWrapper.classList.add('actual-data-wrapper');

        const pageItemHeadline = document.createElement('div');
        pageItemHeadline.classList.add('page-item');   
        if (actualData[0].headlineTitle) {
            const headlineTitle = document.createElement('p');
            headlineTitle.classList.add('page-title');
            headlineTitle.innerHTML = actualData[0].headlineTitle;
            pageItemHeadline.appendChild(headlineTitle);
        }
        if (actualData[0].headlineText) {
            const headlineText = document.createElement('p');
            headlineText.classList.add('page-text');
            headlineText.innerHTML = actualData[0].headlineText;
            pageItemHeadline.appendChild(headlineText);
        }
        actualDataWrapper.appendChild(pageItemHeadline);

        const pageItemVernissage = document.createElement('div');
        pageItemVernissage.classList.add('page-item');
        if (actualData[0].vernissageTitle) {
            const vernissageTitle = document.createElement('p');
            vernissageTitle.classList.add('page-title');
            vernissageTitle.innerHTML = actualData[0].vernissageTitle;
            pageItemVernissage.appendChild(vernissageTitle);
        }
        if (actualData[0].vernissageText) {
            const vernissageText = document.createElement('p');
            vernissageText.classList.add('page-text');
            vernissageText.innerHTML = actualData[0].vernissageText;
            pageItemVernissage.appendChild(vernissageText);
        }
        actualDataWrapper.appendChild(pageItemVernissage);

        if (actualData[0].address) {
            const pageItemAddress = document.createElement('div');
            pageItemAddress.classList.add('page-item');
            
            const addressTitle = document.createElement('p');
            addressTitle.classList.add('page-title');
            addressTitle.innerText = 'Adresse';

            const addressText = document.createElement('p');
            addressText.classList.add('page-text');
            addressText.innerHTML = actualData[0].address;

            pageItemAddress.appendChild(addressTitle);
            pageItemAddress.appendChild(addressText);

            actualDataWrapper.appendChild(pageItemAddress);
        }
        
        if (actualData[0].openingHours) {
            const pageItemOpeningHours = document.createElement('div');
            pageItemOpeningHours.classList.add('page-item');
            
            const openingHoursTitle = document.createElement('p');
            openingHoursTitle.classList.add('page-title');
            openingHoursTitle.innerText = 'Öffnungszeiten';

            const openingHoursText = document.createElement('p');
            openingHoursText.classList.add('page-text');
            openingHoursText.innerHTML = actualData[0].openingHours;

            pageItemOpeningHours.appendChild(openingHoursTitle);
            pageItemOpeningHours.appendChild(openingHoursText);

            actualDataWrapper.appendChild(pageItemOpeningHours);
        }

        return actualDataWrapper;
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


    function renderActualDataInAktuell(actualData) {
        const actualDataContainer = document.querySelector('.actual-data');

        if (actualDataContainer !== null) {
            // delete all current children
            while (actualDataContainer.firstChild) {
                actualDataContainer.removeChild(actualDataContainer.firstChild);
            }

            const noVernissage = document.createElement('p');
            noVernissage.classList.add('page-text');
            noVernissage.innerHTML = 'Zur Zeit finden keine Ausstellungen statt.' + '<br>' + 'Ich bin im Atelier am arbeiten...';

            let actualContent = noVernissage;
            
            if (actualData[0].isValid === 'true') {
                actualContent = createActualContent(actualData);
            }
         
            actualDataContainer.appendChild(actualContent);                
        }
	}


	// public api
	return {
		createPortfolio: renderPicturesInPortfolio,
        createActual: renderActualDataInAktuell
	};
})(Globals);
