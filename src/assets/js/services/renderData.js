// eslint-disable-next-line no-unused-vars
const Render = (function (Globals) {
	

    /* 
        Creates something like this...

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

    
    /*
        Creates something like this...

        <ul>
            <li>Myriam Arnelas</li>
            <li>Lauriedhofweg 15</li>
            <li>(Eingang Mattenstrasse)</li>
            <li>6300 Zug</li>
        </ul>
    */
    function createAddressContent(contactData) {
		const contactAddressElement = document.createElement('ul');

        const nameElement = document.createElement('li');
        nameElement.innerText = contactData[0].name;
        const addressElement = document.createElement('li');
        addressElement.innerText = contactData[0].address;
        const additionalElement = document.createElement('li');
        additionalElement.innerText = contactData[0].additional;
        const cityAndZipElement = document.createElement('li');
        cityAndZipElement.innerText = contactData[0].zip + ' ' + contactData[0].city;

        contactAddressElement.appendChild(nameElement);
        contactAddressElement.appendChild(addressElement);
        contactAddressElement.appendChild(additionalElement);
        contactAddressElement.appendChild(cityAndZipElement);

		return contactAddressElement;
	}


    /*
        Creates something like this...

        <ul>
            <li>myriam@arnelas.ch</li>
            <li>079 486 00 51</li>
        </ul>
    */
    function createPhoneAndEmailContent(contactData) {
        const phoneEmailElement = document.createElement('ul');

        const emailElement = document.createElement('li');
        emailElement.innerText = contactData[0].email;
        const phoneElement = document.createElement('li');
        phoneElement.innerText = contactData[0].phone;

        phoneEmailElement.appendChild(emailElement);
        phoneEmailElement.appendChild(phoneElement);

        return phoneEmailElement;
    }


    /*
        Creates something like this...

         <div class="cv-body">
            <p class="cv-item">
                <span class="cv-item__date">2008</span> 
                <span class="cv-item__text">Atelierstipendium in Havanna, Kuba, Fundación Carolina, Madrid</span> 
            </p>

            <p class="cv-item">
                <span class="cv-item__date">2006 / 07</span> 
                <span class="cv-item__text">Atelierstipendium in Kairo, Konferenz der Schweizer Städte für Kulturfragen</span> 
            </p>

            <p class="cv-item">
                Ankäufe von Stadt und Kanton Zug, Gemeinde Baar, privaten Stiftungen und Kunstsammlern
            </p>
        </div>
    */
    function createCvContent(cvData) {
        const cvBodyElement = document.createElement('div');
        cvBodyElement.classList.add('cv-body');

        cvData.forEach((rec) => {
            const cvItemElement = document.createElement('p');
            cvItemElement.classList.add('cv-item');

            if (rec.year) {
                const cvDateElement = document.createElement('span');
                cvDateElement.classList.add('cv-item__date');
                cvDateElement.innerText = rec.year;
        
                const cvTextElement = document.createElement('span');
                cvTextElement.classList.add('cv-item__text');
                cvTextElement.innerText= rec.description;
        
                cvItemElement.appendChild(cvDateElement);
                cvItemElement.appendChild(cvTextElement);
            } else {
                cvItemElement.innerText = rec.description;
            }
            cvBodyElement.appendChild(cvItemElement);
        })
        return cvBodyElement;
    }
    

	function renderPicturesIntoPortfolioSite(pictures) {
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


    function renderActualDataIntoAktuellSite(actualData) {
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


    function renderContactDataIntoKontaktSite(contactData) {
        const contactDataContainer = document.querySelector('.address');

        if (contactDataContainer !== null) {
            // delete all current children
            while (contactDataContainer.firstChild) {
                contactDataContainer.removeChild(contactDataContainer.firstChild);
            }
           let addressContent = createAddressContent(contactData);
           let phoneAndEmailContent = createPhoneAndEmailContent(contactData);
           contactDataContainer.appendChild(addressContent);       
           contactDataContainer.appendChild(phoneAndEmailContent);                
        }
	}


    function renderCvDataIntoCVSite(cvData) {
        const cvEducationContainer = document.querySelector('.cv--education');
        const cvAwardContainer = document.querySelector('.cv--award');
        const cvSingleExhibitionContainer = document.querySelector('.cv--single-exhibition');
        const cvMultibleExhibitionContainer = document.querySelector('.cv--multiple-exhibition');

        if (cvEducationContainer !== null) {
            // delete all current children
            while (cvEducationContainer.firstChild) {
                cvEducationContainer.removeChild(cvEducationContainer.firstChild);
            }

            let cvEducationContent = createCvContent(cvData.filter(rec => rec.category === 'Ausbildung'));
            cvEducationContainer.appendChild(cvEducationContent);                
        }

        if (cvAwardContainer !== null) {
            // delete all current children
            while (cvAwardContainer.firstChild) {
                cvAwardContainer.removeChild(cvAwardContainer.firstChild);
            }

            let cvAwardContent = createCvContent(cvData.filter(rec => rec.category === 'Stipendien, Auszeichnungen und Ankäufe'));
            cvAwardContainer.appendChild(cvAwardContent);                
        }

        if (cvSingleExhibitionContainer !== null) {
            // delete all current children
            while (cvSingleExhibitionContainer.firstChild) {
                cvSingleExhibitionContainer.removeChild(cvSingleExhibitionContainer.firstChild);
            }

            let cvSingleExhibitionContent = createCvContent(cvData.filter(rec => rec.category === 'Einzelausstellungen'));
            cvSingleExhibitionContainer.appendChild(cvSingleExhibitionContent);                
        }

        if (cvMultibleExhibitionContainer !== null) {
            // delete all current children
            while (cvMultibleExhibitionContainer.firstChild) {
                cvMultibleExhibitionContainer.removeChild(cvMultibleExhibitionContainer.firstChild);
            }

            let cvMultipleExhibitionContent = createCvContent(cvData.filter(rec => rec.category === 'Kollektivausstellungen'));
            cvMultibleExhibitionContainer.appendChild(cvMultipleExhibitionContent);                
        }
	}


	// public api
	return {
		createPortfolio: renderPicturesIntoPortfolioSite,
        createActual: renderActualDataIntoAktuellSite,
        createContact: renderContactDataIntoKontaktSite,
        createCv: renderCvDataIntoCVSite
	};
})(Globals);
