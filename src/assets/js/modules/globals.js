// eslint-disable-next-line no-unused-vars
const Globals = (function () {
	function get() {
		return {
			nameOfCurrentSite: location.pathname.split('/')[1].split('.')[0]
		};
	}

	// public api
	return {
		get
	};
})();
