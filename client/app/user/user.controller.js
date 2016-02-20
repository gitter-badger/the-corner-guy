'use strict';

(function() {

  class UserCtrl {

    constructor(Auth, $state) {
      this.Auth = Auth;
      this.$state = $state;

      this.active = true;
      this.isLoggedIn = Auth.isLoggedIn();
      this.isAdmin = Auth.isAdmin();
      this.getCurrentUser = Auth.getCurrentUser();

      this.login = {};
      this.login.submitted = false;
      this.login.user = {};
      this.login.errors = {};
    }

    toggle(str) {
      if (str === 'login') {
        this.active = true;
      }
      if (str === 'signup') {
        this.active = false;
      }
    }

    loginSubmit(loginForm) {
      this.login.submitted = true;

      if (loginForm.$valid) {
        this.Auth.login({
            email: this.login.user.email,
            password: this.login.user.password
          })
          .then(() => {
            // Logged in, redirect to home
            this.$state.go('main');
          })
          .catch(err => {
            this.login.errors.other = err.message;
          });
      }
    }
  }

  angular.module('theCornerGuyApp')
    .controller('UserCtrl', UserCtrl);

})();
