'use strict';

(function() {

  class AboutCtrl {

    constructor($http, $scope, socket, Auth, $window) {
      this.$http = $http;
      this.$window = $window;
      this.data = {};
      this.location = '長興街口';
      this.wait = 15;
      this.isAdmin = Auth.isAdmin;

      $http.get('/api/locations').then(res => {
        this.data = res.data;
        socket.syncUpdates('location', this.data, function(event, location, locations) {
          return locations.reverse();
        });
      });

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('location');
      });
    }

    update(status) {
      this.$http.post('/api/locations', {
        location: this.location,
        business: status,
        wait: this.wait
      });
    }

    redirect() {
      this.$window.open('https://www.facebook.com/cornerbro/', '_blank');
    }
  }

  angular.module('theCornerGuyApp')
    .controller('AboutCtrl', AboutCtrl);

})();
