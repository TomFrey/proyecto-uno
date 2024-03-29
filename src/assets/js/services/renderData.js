// eslint-disable-next-line no-unused-vars
const Render = (function (Globals) {
	
     /*
      Creates something like this...
      
       <picture class="imageWithCaption__picture">
            <source srcset="assets/images/pics/large/01.jpg" media="(min-width: 1050px)">
            <source srcset="assets/images/pics/medium/01.jpg" media="(min-width: 440px)">
            <img class="imageWithCaption__img" src="assets/images/pics/small/01.jpg"  alt="" title="">
        </picture>
     */
        function createPictureElementForPortfolio(picture){
            const breakPointLarge = Globals.get().breakpointLarge;
            const breakpointMedium = Globals.get().breakpointMedium;
            const pictureElement = document.createElement('picture');
           
            const sourceElementOne = document.createElement('source');
            sourceElementOne.setAttribute('srcset', picture.path + 'small/' + picture.name);
            sourceElementOne.setAttribute('media', '(min-width: ' + breakPointLarge + 'px)');
    
            const sourceElementTwo = document.createElement('source');
            sourceElementTwo.setAttribute('srcset', picture.path + 'small/' + picture.name);
            sourceElementTwo.setAttribute('media', '(min-width: ' + breakpointMedium + 'px)');
    
            const imgElement = document.createElement('img');
            imgElement.setAttribute('src', picture.path + 'small/' + picture.name);
            imgElement.setAttribute('title', 'Bild von Myriam Arnelas: ' + picture.title);
            imgElement.setAttribute('alt', 'Bild von Myriam Arnelas: ' + picture.title);
    
            pictureElement.classList.add('imageWithCaption__picture');
            imgElement.classList.add('imageWithCaption__img');
            
            pictureElement.appendChild(sourceElementOne);
            pictureElement.appendChild(sourceElementTwo);
            pictureElement.appendChild(imgElement);
    
            return pictureElement;
        }


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
		const portfolioItemElement = document.createElement('div');
		portfolioItemElement.classList.add('portfolio-item');

        const imageWithCaptionElement = document.createElement('div');
		imageWithCaptionElement.classList.add('imageWithCaption');

        const openImageSliderElement = document.createElement('a');
		openImageSliderElement.classList.add('imageWithCaption__openImageSlider');
		openImageSliderElement.setAttribute('href', 'javascript:;');
		
        const captionElement = document.createElement('span');
        captionElement.classList.add('imageWithCaption__caption');
        captionElement.innerHTML = picture.title + '<br>' + picture.description;

        openImageSliderElement.appendChild(createPictureElementForPortfolio(picture));
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

        const pageItemVernissage1 = document.createElement('div');
        pageItemVernissage1.classList.add('page-item');
        if (actualData[0].vernissageTitle1) {
            const vernissageTitle1 = document.createElement('p');
            vernissageTitle1.classList.add('page-title');
            vernissageTitle1.innerHTML = actualData[0].vernissageTitle1;
            pageItemVernissage1.appendChild(vernissageTitle1);
        }
        if (actualData[0].vernissageText1) {
            const vernissageText1 = document.createElement('p');
            vernissageText1.classList.add('page-text');
            vernissageText1.innerHTML = actualData[0].vernissageText1;
            pageItemVernissage1.appendChild(vernissageText1);
        }
        actualDataWrapper.appendChild(pageItemVernissage1);

        const pageItemVernissage2 = document.createElement('div');
        pageItemVernissage2.classList.add('page-item');
        if (actualData[0].vernissageTitle2) {
            const vernissageTitle2 = document.createElement('p');
            vernissageTitle2.classList.add('page-title');
            vernissageTitle2.innerHTML = actualData[0].vernissageTitle2;
            pageItemVernissage2.appendChild(vernissageTitle2);
        }
        if (actualData[0].vernissageText2) {
            const vernissageText2 = document.createElement('p');
            vernissageText2.classList.add('page-text');
            vernissageText2.innerHTML = actualData[0].vernissageText2;
            pageItemVernissage2.appendChild(vernissageText2);
        }
        actualDataWrapper.appendChild(pageItemVernissage2);

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
            <li>
                <a href="tel:+41794860051">079 486 00 51</a>
            </li>
        </ul>
    */
    function createPhoneAndEmailContent(contactData) {
        const phoneEmailElement = document.createElement('ul');

        const encryptedEMail = Crypto.encryptEMail(contactData[0].email);
        const emailElement = document.createElement('li');
        const emailLinkElement = document.createElement('a');
		emailLinkElement.classList.add('email');
		emailLinkElement.setAttribute('href', 'javascript:Crypto.linkToUnCryptMailto(\'' + encryptedEMail + '\');');
        emailLinkElement.innerText = contactData[0].emailText;
        emailElement.appendChild(emailLinkElement);
        
        const phoneNumberWithoutLeedingZeroAndSpaces = contactData[0].phone.replace(/^([0\s]+)|\s+/g, '');
        const phoneElement = document.createElement('li');
        const phoneLinkElement = document.createElement('a');
		phoneLinkElement.classList.add('phone-number');
		phoneLinkElement.setAttribute('href', 'tel:+41' + phoneNumberWithoutLeedingZeroAndSpaces);
        phoneLinkElement.innerText = contactData[0].phone;
        phoneElement.appendChild(phoneLinkElement);

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


    /*
      Creates something like this...
      
       <picture class="imageWithCaption__picture">
            <source srcset="assets/images/pics/large/01.jpg" media="(min-width: 1050px)">
            <source srcset="assets/images/pics/medium/01.jpg" media="(min-width: 440px)">
            <img src="assets/images/pics/small/01.jpg"  alt="" title="">
        </picture>
     */
    function createPictureElementForCarousel(picture){
        const breakPointLarge = Globals.get().breakpointLarge;
        const breakpointMedium = Globals.get().breakpointMedium;
        const pictureElement = document.createElement('picture');
        
        const sourceElementOne = document.createElement('source');
        sourceElementOne.setAttribute('srcset', picture.path + 'large/' + picture.name);
        sourceElementOne.setAttribute('media', '(min-width: ' + breakPointLarge + 'px)');

        const sourceElementTwo = document.createElement('source');
        sourceElementTwo.setAttribute('srcset', picture.path + 'medium/' + picture.name);
        sourceElementTwo.setAttribute('media', '(min-width: ' + breakpointMedium + 'px)');

        const imgElement = document.createElement('img');
        imgElement.setAttribute('src', picture.path + 'small/' + picture.name);
        imgElement.setAttribute('title', 'Bild von Myriam Arnelas: ' + picture.title);
        imgElement.setAttribute('alt', 'Bild von Myriam Arnelas: ' + picture.title);

        pictureElement.appendChild(sourceElementOne);
        pictureElement.appendChild(sourceElementTwo);
        pictureElement.appendChild(imgElement);

        return pictureElement;
    }
    

    /*
         <div class="pics-carousel">
            <div class="pics-carousel-item">
                <picture class="imageWithCaption__picture">
                    <source srcset="assets/images/pics/large/01.jpg" media="(min-width: 740px)">
                    <img class="imageWithCaption__img" src="assets/images/pics/small/01.jpg"  alt="" title="">
                </picture>
            </div>
            <div class="pics-carousel-item">
                <picture class="imageWithCaption__picture">
                    <source srcset="assets/images/pics/large/01.jpg" media="(min-width: 740px)">
                    <img class="imageWithCaption__img" src="assets/images/pics/small/01.jpg"  alt="" title="">
                </picture>
            </div>
            ...
         </div>
    
    */
    function createPictureCarouselContent(pictures) {

        const picsCarouselElement = document.createElement('div');
        picsCarouselElement.classList.add('pics-carousel');

        pictures.forEach((picture) => {
            const picsCarouselItem = document.createElement('div');
            picsCarouselItem.classList.add('pics-carousel-item');
            picsCarouselItem.appendChild(createPictureElementForCarousel(picture))
            picsCarouselElement.appendChild(picsCarouselItem);
        })
        
        return picsCarouselElement;
    }    


	function renderPicturesIntoPortfolioSite(pictures) {
        const portfolioWrapper = document.querySelector('.portfolio-wrapper');

        if (portfolioWrapper !== null) {
            // delete all current children
            while (portfolioWrapper.firstChild) {
                portfolioWrapper.removeChild(portfolioWrapper.firstChild);
            }

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


    function renderPicturesIntoImageSlider(pictures) {

        const promise = new Promise((resolve, reject) => {
            const pictureCarouselContainer = document.querySelector('.image-carousel-wrapper');

            if (pictureCarouselContainer !== null) {
                // delete all current children
                while (pictureCarouselContainer.firstChild) {
                    pictureCarouselContainer.removeChild(pictureCarouselContainer.firstChild);
                }
    
               let pictureCarouselContent = createPictureCarouselContent(pictures);
               pictureCarouselContainer.appendChild(pictureCarouselContent);
               resolve();
            }
		});
		return promise;
	}


	// public api
	return {
		createPortfolio: renderPicturesIntoPortfolioSite,
        createActual: renderActualDataIntoAktuellSite,
        createContact: renderContactDataIntoKontaktSite,
        createCv: renderCvDataIntoCVSite,
        createPicturesForImageSlider: renderPicturesIntoImageSlider
	};
})(Globals);
