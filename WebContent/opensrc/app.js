// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', [ 'ngRoute', 'ngAnimate', 'countryFilters' ]);

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {

	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
});

// , $locationProvider
scotchApp.config(function($routeProvider) {
	// route for the home page
	$routeProvider.when('/home', {
		templateUrl : 'pages/home.html',
		controller : 'mainController'
	})
	// route for the about page
	.when('/about', {
		templateUrl : 'pages/about.html',
		controller : 'aboutController'
	})
	// route for the contact page
	.when('/contact/:phoneId', {
		templateUrl : 'pages/contact.html',
		controller : 'contactController'
	});
	// use the HTML5 History API
	// $locationProvider.html5Mode(true);
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope, $http) {
	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
	$scope.pageClass = 'page-home';
	var site = "http://www.w3schools.com";
    var page = "/website/Customers_MySQL.php";
    $http.get(site + page).success(function(response) {$scope.names = response;});
});
scotchApp.controller('aboutController', function($scope) {
	$scope.message = 'Look! I am an about page.';
	$scope.pageClass = 'page-about';
});
scotchApp.controller('contactController', function($scope, $routeParams) {
	$scope.message = 'Contact us! JK. This is just a demo.';
	$scope.pageClass = 'page-contact';
	$scope.phoneId = $routeParams.phoneId;
});