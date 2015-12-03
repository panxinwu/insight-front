(function() {
  'use strict';

  angular
    .module('insightFront')
    .config(routeConfig);

  function routeConfig($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: true
    });
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/people', {
        templateUrl: 'app/people/people.html',
        controller: 'PeopleController',
        controllerAs: 'People'
      })
      .when('/question', {
        templateUrl: 'app/question/question.html',
        controller: 'ListController',
        controllerAs: 'List'
      })
      .when('/search', {
        templateUrl: 'app/search/search.html',
        controller: 'ListController',
        controllerAs: 'List'
      })
      .when('/zhuanlan', {
        templateUrl: 'app/zhuanlan/zhuanlan.html',
        controller: 'ListController',
        controllerAs: 'List'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
