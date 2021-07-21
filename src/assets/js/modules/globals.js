// eslint-disable-next-line no-unused-vars
const Globals = (function () {

	function getWidth() {
		return Math.max(
		  document.body.scrollWidth,
		  document.documentElement.scrollWidth,
		  document.body.offsetWidth,
		  document.documentElement.offsetWidth,
		  document.documentElement.clientWidth
		);
	}

	function get() {
		return {
			breakpointLarge: 1050,
			breakpointMedium: 440,
			nameOfCurrentSite: location.pathname.split('/')[1].split('.')[0],
			documentWidth: getWidth()
		};
	}

	// public api
	return {
		get
	};
})();
