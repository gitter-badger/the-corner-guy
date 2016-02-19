'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': '<i class="fa fa-info"></i>',
    'state': 'about'
  }, {
    'title': '<i class="fa fa-cutlery"></i>',
    'state': 'menu'
  }, {
    'title': '<i class="fa fa-shopping-cart"></i>',
    'state': 'order'
  }, {
    'title': '<i class="fa fa-comment"></i>',
    'state': 'news'
  }];
  //end-non-standard

  // constructor(Auth) {
  //   this.isLoggedIn = Auth.isLoggedIn;
  //   this.isAdmin = Auth.isAdmin;
  //   this.getCurrentUser = Auth.getCurrentUser;
  // }
}

angular.module('theCornerGuyApp')
  .controller('NavbarController', NavbarController);
