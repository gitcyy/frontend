angular.module('countryFilters', []).filter('checkMark', function() {
	return function(input) {
		return input.toLowerCase().indexOf('uk') != -1 ? '\u2713' : '\u2718';
	};
});