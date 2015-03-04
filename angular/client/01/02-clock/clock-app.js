/**
 * Created by stran on 02/03/2015.
 */
var clockApp = angular.module('clockApp', []);

clockApp.controller('ClockController', ['$scope', function ($scope) {
    $scope.clock = {
        now: new Date()
    };

    var updateClock = function () {
        $scope.clock.now = new Date();
    };

    var ticked = function () {
        $scope.$apply(updateClock);
    };

    setInterval(ticked, 1000);
    updateClock();
}]);