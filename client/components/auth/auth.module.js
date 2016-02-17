'use strict';

angular.module('theCornerGuyApp.auth', [
  'theCornerGuyApp.constants',
  'theCornerGuyApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
