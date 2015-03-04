/**
 * Created by stran on 04/03/2015.
 */
var addApp = angular.module('addApp', []);

addApp.controller('AddController', ['$scope', function ($scope) {
    $scope.counter = 0;

    $scope.add = function (amount) {
        $scope.counter += amount;
    };

    $scope.subtract = function (amount) {
        $scope.counter -= amount;
    };
}]);