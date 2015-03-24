/**
 * Created by stran on 24/03/2015.
 */

'use strict';

angular.module('booksApp.controllers', []);
angular.module('booksApp', ['booksApp.controllers']);
angular.module('booksApp').run(function ($rootScope) {
    $rootScope.title = 'Famous Books';
    $rootScope.name = 'Root Scope';
});