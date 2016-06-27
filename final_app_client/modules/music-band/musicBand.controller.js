angular
    .module('MusicBand')
    .controller('MusicBandCtrl', MusicBandCtrl);

function MusicBandCtrl($rootScope, $scope, socketDataService, $state, musicNotes, userService) {
    $scope.userName = '';
    $scope.instrument = '';
    $scope.play = play;

    console.log('SET listener on service');
    socketDataService.listener = socketListener;

    function socketListener(message) {
        console.log("Received data from websocket: ", message);
        if (message.user) {
            // show user
            console.log('USER: ', message.user);
            if (message.user.name !== $scope.userName) {
                // new user - display instrument
                userService.users.push(message.user);
                $rootScope.$apply();
            }
        } else if (message.sound) {
            playMusicSound(message.sound);
        }
    }

    function playMusicSound(message) {
        var sound = new Howl({
            urls: [musicNotes[message.instrument][message.keyCode]]
        });
        console.log('PLAY sound: ', message.instrument, message.keyCode);
        sound.play();
    }
    
    function play(instrument) {
        $scope.instrument = instrument;
        // send to server user info
        var msg = {
            name: $scope.userName,
            instrument: instrument
        };
        socketDataService.sendMessage(msg, 'user');

        console.log('Now playing the ', instrument, '!');
        $state.go('play', {
            username: $scope.userName,
            instrument: $scope.instrument
        });
    }
}