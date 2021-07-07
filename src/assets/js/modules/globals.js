// eslint-disable-next-line no-unused-vars
const Globals = (function () {
	function get() {
		return {
			breakpointLarge: 1050,
			breakpointMedium: 440,
			nameOfCurrentSite: location.pathname.split('/')[1].split('.')[0]
		};
	}

	// public api
	return {
		get
	};
})();
