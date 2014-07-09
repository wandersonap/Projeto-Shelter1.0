(function() {
	var app = angular.module('app',['ngRoute']);

	app.directive('menuLayout',['$http',function($http) {
		return {
			restrict : 'E',
			templateUrl : 'includes/menu_layout.html',
			controller : function(){
				var menu = this;
				menu.itens = [ ];
				$http.get('json/menus.json').success(function(data){
					menu.itens = data;
				});
			},
			controllerAs : 'menus'
		};
	}]);

	app.config(function($routeProvider, $locationProvider) {
		
		$locationProvider.html5Mode(true);

		$routeProvider.when('/grid-menu',{templateUrl:'grids/grid_menu.html',controller:'HomeCtrl'});
	});

	app.controller('HomeCtrl', function($rootScope, $location){
		$rootScope.activetab = $location.path();
	});
})();