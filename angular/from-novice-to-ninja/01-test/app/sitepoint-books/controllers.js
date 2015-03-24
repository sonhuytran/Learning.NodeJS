/**
 * Created by stran on 24/03/2015.
 */
angular.module('booksApp.controllers').controller(
    'SiteController', ['$scope', function ($scope) {
        $scope.publisher = 'SitePoint';
        $scope.type = 'Web Development';
        $scope.name = 'Scope for SiteController';
    }]
);

angular.module('booksApp.controllers').controller(
    'BookController', ['$scope', function ($scope) {
        $scope.books = [
            'Jump Start HTML5',
            'Jump Start CSS',
            'Jump Start Responsive Web Design'];
        $scope.name = 'Scope for BookController';
    }]
);