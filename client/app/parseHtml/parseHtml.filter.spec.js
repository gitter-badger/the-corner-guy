'use strict';

describe('Filter: parseHtml', function () {

  // load the filter's module
  beforeEach(module('theCornerGuyApp'));

  // initialize a new instance of the filter before each test
  var parseHtml;
  beforeEach(inject(function ($filter) {
    parseHtml = $filter('parseHtml');
  }));

  // it('should return the input prefixed with "parseHtml filter:"', function () {
  //   var text = 'angularjs';
  //   expect(parseHtml(text)).to.equal('parseHtml filter: ' + text);
  // });

});
