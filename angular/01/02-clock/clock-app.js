/**
 * Created by stran on 02/03/2015.
 */
var myApp = angular.module('myApp',[]);

myApp.controller('ClockController', ['$scope', function($scope) {
    $scope.clock = new Date();

    var updateClock = function () {
        $scope.clock = new Date();
    };

    var ticked = function () {
        $scope.$apply(updateClock);
    };

    setInterval(ticked, 1000);
    updateClock();
}]);