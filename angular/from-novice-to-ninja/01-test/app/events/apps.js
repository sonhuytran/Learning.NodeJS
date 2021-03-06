/**
 * Created by stran on 25/03/2015.
 */
angular.module('eventsApp', ['eventsApp.controllers']);
angular.module('eventsApp.controllers', []);

angular.module('eventsApp.controllers').controller('MessageController', [
    '$scope', '$timeout', function ($scope, $timeout) {
        $scope.messages = [{
            sender: 'user1',
            text: 'message1'
        }];

        var timer;
        var count = 0;

        $scope.loadMessage = function () {
            count++;
            $scope.messages.push({
                sender: 'user1',
                text: 'random message #' + count
            });
            timer = $timeout($scope.loadMessage, 2000);

            if (count == 3) {
                $scope.$broadcast('EVENT_NO_DATA', 'Not Connected', 'red');
                $timeout.cancel(timer);
            }
        };

        timer = $timeout($scope.loadMessage, 2000);

        $scope.$on('EVENT_RECEIVED', function () {
            console.log('Received emitted event');
        })
    }
]);

angular.module('eventsApp.controllers').controller(
    'StatsController', ['$scope', function ($scope) {
        $scope.name = 'World';
        $scope.status = 'Connected';
        $scope.statusColor = 'green';
        $scope.$on('EVENT_NO_DATA', function (event, status, statusColor) {
            console.log('Received broadcast event');
            $scope.status = status;
            $scope.statusColor = statusColor;
            $scope.$emit('EVENT_RECEIVED');
        });
    }]);