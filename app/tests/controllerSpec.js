describe('kleinApp', function () {

  describe('Main Controller', function () {

    it('initiates loading of the ad', function () {
      scope.$digest();
      expect(adService.load).toHaveBeenCalled();
    });

    it('adds loaded ad to scope', function () {
      expect(scope.ad).not.toBeDefined();
      scope.$digest();
      expect(scope.ad).toBeDefined();
      expect(scope.ad.title).toBe('Anzeigentitel');
    });

    it('shows first image by default', function () {
      scope.$digest();
      expect(scope.currentImage).toBeDefined();
      expect(scope.currentImage).toBe(adJson.images[0]);
    });


    var controller, adService;

    beforeEach(inject(function ($rootScope, $controller, $q, AdService) {
      scope = $rootScope.$new();

      adService = AdService;
      spyOn(AdService, "load").andReturn($q.when(adJson));

      controller = $controller('MainCtrl', {
        '$scope': scope,
        'AdService':AdService
      });

    }));

  });

  var scope;

  beforeEach(function () {
    module('kleinApp');
  });

  var adJson = {
    "title": "Anzeigentitel",
    "images": [{
      "full": "1.jpg",
      "thumb": "1-thumb.jpg"
    }, {
      "full": "2.jpg",
      "thumb": "2-thumb.jpg"
    }, {
      "full": "3.jpg",
      "thumb": "3-thumb.jpg"
    }, {
      "full": "4.jpg",
      "thumb": "4-thumb.jpg"
    }]
  };


});
