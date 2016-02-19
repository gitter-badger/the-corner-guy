'use strict';

class FooterController {
  constructor($window) {
    this.$window = $window;
  }

  shian48263(){
    this.$window.open('https://github.com/shian48263', '_blank');
  }

  theCornerGuy(){
    this.$window.open('https://github.com/shian48263/the-corner-guy', '_blank');
  }
}

angular.module('theCornerGuyApp')
  .controller('FooterController', FooterController);
