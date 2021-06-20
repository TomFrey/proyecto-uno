// eslint-disable-next-line no-unused-vars
const Navigation = (function (Globals) {
	
	const SELECTED = 'js-isSelected';

	let kontakt;
	let cv;
	let aktuell;
	let portfolio;


	function setSettingsDependingOnUrl() {
		const whereAmI = Globals.get().nameOfCurrentSite;
		const allLinksFromMainNavigation = [];

		const kontakt = document.querySelector('nav ul li.nav-item__kontakt a');
		allLinksFromMainNavigation.push(kontakt);
		const cv = document.querySelector('nav ul li.nav-item__cv a');
		allLinksFromMainNavigation.push(cv);
		const aktuell = document.querySelector('nav ul li.nav-item__aktuell a');
		allLinksFromMainNavigation.push(aktuell);
		const portfolio = document.querySelector('nav ul li.nav-item__portfolio a');
		allLinksFromMainNavigation.push(portfolio);

		allLinksFromMainNavigation.forEach((url) => {
			url.classList.remove(SELECTED);
		});

		switch (whereAmI) {
			case 'kontakt':
				kontakt.classList.add(SELECTED);
				break;

			case 'cv':
				cv.classList.add(SELECTED);
				break;

			case 'aktuell':
				aktuell.classList.add(SELECTED);
				break;

			default: // Startseite ist das Portolio
                portfolio.classList.add(SELECTED);
		}
	}


	function initiate() {
		setSettingsDependingOnUrl();

	}

	// public api
	return {
		init: initiate
	};
})(Globals);
