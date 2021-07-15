// eslint-disable-next-line no-unused-vars
const GetData = (function (Service, Render) {
    console.log('GetData');

	function loadAndRenderPictures() {
        console.log('GetData.loadAndRenderPictures');

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

	function loadAndRenderData() {
        console.log('GetData.loadAndRenderData');

		const promise = new Promise((resolve, reject) => {
			// load all pictures
			Service.call('GET', '/api/actual.php')
				.then((actual) => {
                    console.log(actual);
					// render actual data in 'Aktuell' side
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

	// public api
	return {
		loadAndRenderPictures: loadAndRenderPictures,
		loadAndRenderData: loadAndRenderData
	};
})(Service, Render);
