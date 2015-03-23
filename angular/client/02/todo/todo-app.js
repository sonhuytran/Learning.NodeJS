/**
 * Created by stran on 04/03/2015.
 */

var model = {
    user: "Son-Huy",
    items: [
        {action: "Buy Flowers", done: false},
        {action: "Get Shoes", done: false},
        {action: "Collect Tickets", done: true},
        {action: "Call Joe", done: false}
    ]
};

var todoApp = angular.module('todoApp', []);

todoApp.controller('ToDoController', ['$scope', function ($scope) {
    $scope.todo = model;

    $scope.incompleteCount = function () {
        var count = 0;

        angular.forEach($scope.todo.items, function (item) {
            if (!item.done) {
                count++;
            }
        });

        return count;
    };

    $scope.warningLevel = function () {
        return $scope.incompleteCount() < 3 ? "label-success" : "label-warning";
    };

    $scope.addNewItem = function (actionText) {
        if (actionText.length <= 0) {
            return;
        }

        $scope.todo.items.push({
            action: actionText,
            done: false
        });
    };
}]);