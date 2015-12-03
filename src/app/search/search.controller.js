(function() {
  'use strict';

  angular
    .module('insightFront')
    .controller('ListController', ListController);

  /** @ngInject */
  function ListController($timeout, webDevTec, toastr) {
    console.log('ListController');
    }
})();
