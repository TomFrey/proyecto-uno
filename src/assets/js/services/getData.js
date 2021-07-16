// eslint-disable-next-line no-unused-vars
const GetData = (function (Service, Render) {
    
	function loadAndRenderPictures() {
		const promise = new Promise((resolve, reject) => {
			// load all pictures
			Service.call('GET', '/api/pictures.php')
				.then((pictures) => {
                    console.log(pictures);
					// render pictures in portfolio side
					Render.createPortfolio(pictures);
					resolve();
				})
				.catch((error) => {
					console.log(error);
					reject(error);
				});
		});
		return promise;
	}

	function loadAndRenderActualData() {
		const promise = new Promise((resolve, reject) => {
			// load all data from site 'Aktuell'
			Service.call('GET', '/api/actual.php')
				.then((actual) => {
                    console.log(actual);
					// render actual data into 'Aktuell' site
					Render.createActual(actual);
					resolve();
				})
				.catch((error) => {
					console.log(error);
					reject(error);
				});
		});
		return promise;
	}

	function loadAndRenderCvData() {
		const promise = new Promise((resolve, reject) => {
			// load all data from site 'CV'
			Service.call('GET', '/api/cv.php')
				.then((cv) => {
                    console.log(cv);
					// render actual data into 'CV' site
					Render.createCv(cv);
					resolve();
				})
				.catch((error) => {
					console.log(error);
					reject(error);
				});
		});
		return promise;
	}

	function loadAndRenderContactData() {
		const promise = new Promise((resolve, reject) => {
			// load all data from site 'Kontakt'
			Service.call('GET', '/api/contact.php')
				.then((contact) => {
                    console.log(contact);
					// render actual data into 'Kontakt' site
					Render.createContact(contact);
					resolve();
				})
				.catch((error) => {
					console.log(error);
					reject(error);
				});
		});
		return promise;
	}

	function loadAndRenderData() {
		const promise = new Promise((resolve, reject) => {
			Promise.all([loadAndRenderActualData(), loadAndRenderContactData(), loadAndRenderCvData()])
			.then(() => {
				resolve();
			})
			.catch((error) => {
				console.log(error);
				reject(error);
			});
		});
		return promise;
	}

	// public api
	return {
		loadAndRenderPictures: loadAndRenderPictures,
		loadAndRenderData: loadAndRenderData
	};
})(Service, Render);
