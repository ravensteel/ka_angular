'use strict';

describe('Service: AdService', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var AdService;
  beforeEach(inject(function (_AdService_) {
    AdService = _AdService_;
  }));

  it('should do something', function () {
    expect(!!AdService).toBe(true);
  });

});
