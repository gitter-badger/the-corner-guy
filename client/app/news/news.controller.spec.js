'use strict';

describe('Controller: NewsCtrl', function () {

  // load the controller's module
  beforeEach(module('theCornerGuyApp'));

  var NewsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewsCtrl = $controller('NewsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
