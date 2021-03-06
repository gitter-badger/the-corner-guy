'use strict';

angular.module('theCornerGuyApp', [
  'theCornerGuyApp.auth',
  'theCornerGuyApp.admin',
  'theCornerGuyApp.constants',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
