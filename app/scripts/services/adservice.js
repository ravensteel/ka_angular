(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name kleinApp.AdService
   * @description
   * # AdService
   * Loads ad data and provide it to the app.
   */

  angular
    .module('kleinApp')
    .factory('AdService', AdService);

  /* @ngInject */
  function AdService($http, $log) {

    var service = {
      load: load
    };

    return service;

    ////////////////

    function load() {
      var promise = $http.get('data/ad.json')
        .then(loadSuccess)
        .catch(loadFailed);
      return promise;
    }

    function loadSuccess(response) {
      return response.data;
    }

    function loadFailed(err) {
      $log.error('Failed to load ad data.', err);
    }
  }
})();
