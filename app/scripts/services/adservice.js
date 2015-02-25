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
        .then(function (response) {
          return response.data;
        })
        .catch(function (err) {
          $log.error("Failed to load ad data.", err);
        });
      return promise;
    }

  }
})();
