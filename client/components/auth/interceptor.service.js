'use strict';

(function() {

function authInterceptor($rootScope, $q, $injector, Util, $localStorage) {
  // var state;
  return {
    // Add authorization token to headers
    request(config) {
      config.headers = config.headers || {};
      if ($localStorage.token && Util.isSameOrigin(config.url)) {
        config.headers.Authorization = 'Bearer ' + $localStorage.token;
      }
      return config;
    },

    // Intercept 401s and redirect you to login
    // responseError(response) {
    //   if (response.status === 401) {
    //     (state || (state = $injector.get('$state'))).go('login');
    //     // remove any stale tokens
    //     delete $localStorage.token;
    //   }
    //   return $q.reject(response);
    // }
  };
}

angular.module('theCornerGuyApp.auth')
  .factory('authInterceptor', authInterceptor);

})();
