module.exports = function (api) {
	// api.cache(true);
	api.cache.never();
	return {
		plugins: ['macros'],
	};
};
