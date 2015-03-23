/**
 * Created by stran on 23/03/2015.
 */
controllers.controller('FinanceController', ['$scope', function ($scope) {
    $scope.salary = 1000;
    $scope.percentage = 10;
    $scope.result = function () {
        return $scope.salary * $scope.percentage * 0.01;
    }
}]);