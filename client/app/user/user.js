'use strict';

angular.module('theCornerGuyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('user', {
        url: '/user',
        templateUrl: 'app/user/user.html',
        controller: 'UserCtrl',
        controllerAs: 'user'
      });
  });
