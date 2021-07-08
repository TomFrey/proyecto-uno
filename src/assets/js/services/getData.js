// eslint-disable-next-line no-unused-vars
const GetData = (function (Service, Render) {
    console.log('GetData');

	function loadAndRenderPictures() {
        console.log('GetData.loadAndRenderPictures');

		const promise = new Promise((resolve, reject) => {
			// alle Kursdaten lesen
			Service.call('GET', '/api/pictures.php')
				.then((pictures) => {
					// Render Pictures
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

	// public api
	return {
		loadAndRenderPictures: loadAndRenderPictures
	};
})(Service, Render);
