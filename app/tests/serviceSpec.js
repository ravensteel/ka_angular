describe('kleinApp', function () {

  describe('Ad Service', function () {

    it('loads the ad asynchronously', function () {
      $httpBackend.expectGET(expectedUrl).respond(200, adJson);

      promise = adService.load();
      promise.then(successCallback);

      $httpBackend.flush();
      expect(successCallback).toHaveBeenCalled();
      expect(successCallback).toHaveBeenCalledWith(adJson);
    });


    var $httpBackend,
      expectedUrl = 'data/ad.json',
      promise,
      successCallback,
      adService;

    beforeEach(inject(function ($rootScope, _$httpBackend_, $injector) {
      $httpBackend = _$httpBackend_;
      successCallback = jasmine.createSpy();
      adService = $injector.get( 'AdService' );
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

  });


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
