/**
 * Created by stran on 25/03/2015.
 */
angular.module('timeoutApp', []);

angular.module('timeoutApp').controller('TimeoutController',
    ['$scope', '$timeout', function ($scope, $timeout) {
        $scope.fetchMessage = function () {
            $timeout(function () {
                $scope.message = 'Fetched after 3 seconds';
                console.log("message = " + $scope.message);
            }, 3000);
        }
    }]);