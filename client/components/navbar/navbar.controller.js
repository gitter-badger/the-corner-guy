'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  }, {
    'title': 'Menu',
    'state': 'menu'
  }, {
    'title': 'Order',
    'state': 'order'
  }, {
    'title': 'News',
    'state': 'news'
  }, {
    'title': 'About',
    'state': 'about'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('theCornerGuyApp')
  .controller('NavbarController', NavbarController);
