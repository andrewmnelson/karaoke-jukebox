require('../app.js');


(function () {
'use strict'

  angular.module('kvoxapp').controller('SongBookCtrl', ['socket', '$location', '$log', '$http', function (socket, $location, $log, $http) {

    var vm = this;
    // vm.user = socket.user;
    // // vm.songs = socket.songList;
    vm.songs = socket.songlist;
    vm.user = socket.user;

    // sample songs for testing views
/*    var songSampleOne = {
      title:  'Cherry Pie',
      author: 'Poison'
    };
    var songSampleTwo = {
      title: 'American Pie',
      author: 'Don Mclean'
    };
    vm.songs.push(songSampleTwo);
    vm.songs.push(songSampleOne);*/

    disconnectUser();

    vm.enterSong = function (song) {
      if (!vm.user.queued) {
        // enter song into queue
        $http.post('/api/queue', {song: song})
        .success(function (resp) {
          $location.url('/kvox/queue');
        })
        .error(errorHandler);
      } else {
        // update song in queue
        $http.patch('/api/queue', {song: song})
        .success(function (resp) {
          $location.url('/kvox/queue');
        })
      }
    }

    function disconnectUser () {
      socket.on('disconnectUser', function () {
        $location.url('/kvox');
      });
    }

    function errorHandler (response) {
      $log.error('response', response);
    }

    var sweetAlert = require('./sweetalert');
    socket.on('onDeck', function () {
      sweetAlert();
    });


  }]);

})();




// .controller('insidecontroller', ['socket', function(socket){
//  socket.on('updateQueue', function(data){
//    $rootScope.queue = data.queue;
//  })

// }])
