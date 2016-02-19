'use strict';

angular.module('theCornerGuyApp')
  .directive('footer', function() {
    return {
      templateUrl: 'components/footer/footer.html',
      restrict: 'E',
      link: function(scope, element) {
        element.addClass('footer');
      },
      controller: 'FooterController',
      controllerAs: 'foot'
    };
  });
