(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name kleinApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the appApp
   */
  angular
    .module('kleinApp')
    .controller('MainCtrl', MainCtrl);

  /* @ngInject */
  function MainCtrl($scope, AdService) {
    var ad;

    $scope.showImage = showImage;

    activate();

    ////////////////

    function activate() {
      AdService.load()
        .then(function(data){
          $scope.ad = ad = data;
          if (ad.images && ad.images.length > 0){
            showImage(0);
          }
        });
    }

    function showImage(idx){
      var img = ad.images[idx];
      $scope.currentImage = img;
    }
  }
})();
