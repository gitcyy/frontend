//通过重构掉底层的$http服务，把它放在一个新的服务Phone
angular.module('phonecatServices', [ 'ngResource' ]).factory('Phone',
		function($resource) {
			return $resource('phones/:phoneId.json', {}, {
				query : {
					method : 'GET',
					params : {
						phoneId : 'phones'
					},
					isArray : true
				}
			});
		});