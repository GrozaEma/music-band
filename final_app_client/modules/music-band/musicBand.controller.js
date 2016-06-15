angular
    .module('MusicBand')
    .controller('MusicBandCtrl', MusicBandCtrl);

function MusicBandCtrl($rootScope, $scope, socketDataService, $state, musicNotes, userService) {
    $scope.userName = '';
    $scope.instrument = '';
    $scope.play = play;

    console.log('SET listener on service');
    socketDataService.listener = socketListener;

    // test socket
    var message = 'd';
    socketDataService.sendMessage(message);

    // $scope.$rootScope('userService.users.length', function() {
    //     console.info('WATCH MB.CTRL: ', userService.users);
    // });


    function socketListener(message) {
        console.log("Received data from websocket: ", message);
        var msg = message.data;
        if (msg.user) {
            // show user
            console.log('USER: ', msg.user);
            // if (msg.name !== $scope.userName) {
                // new user - display instrument
                userService.users.push(msg.user);
                $rootScope.$apply();
            // }
        } else {
            playMusicSound(msg);
        }
    }

    function playMusicSound(message) {
        console.log(musicNotes[message]);
        var sound = new Howl({
            urls: [musicNotes[message]]
        });
        console.log(sound);
        sound.play();
    }
    
    function play(instrument) {
        $scope.instrument = instrument;
        // send to server user info
        var msg = {
            user: {
                name: $scope.userName,
                instrument: instrument
            }
        };
        socketDataService.sendMessage(msg);

        console.log('Now playing the ', instrument, '!');
        $state.go('play', {
            username: $scope.userName,
            instrument: $scope.instrument
        });
    }
}