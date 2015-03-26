/**
 * Created by stran on 26/03/2015.
 */
'use strict';

// Creating modules
angular.module('routingApp', ['routingApp.controllers', 'ngRoute']);
angular.module('routingApp.controllers', []);

// Routing
angular.module('routingApp').config(function ($routeProvider) {
    $routeProvider
        .when('/view1', {
            controller: 'Controller1',
            templateUrl: 'partials/view1.html'
        })
        .when('/view2', {
            controller: 'Controller2',
            templateUrl: 'partials/view2.html'
        });
});

angular.module('routingApp.controllers')
    .controller('Controller1', ['$scope', function ($scope) {
        $scope.message = 'Hello World!';
    }])
    .controller('Controller2', ['$scope', function ($scope) {
        $scope.now = new Date();
    }]);