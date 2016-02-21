'use strict';

angular.module('theCornerGuyApp.auth', [
  'theCornerGuyApp.constants',
  'theCornerGuyApp.util',
  'ngStorage',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
