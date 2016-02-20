'use strict';

angular.module('theCornerGuyApp')
  .filter('parseHtml', function ($sce) {
    return function(str)
    {
      return $sce.trustAsHtml(str);
    };
  });
