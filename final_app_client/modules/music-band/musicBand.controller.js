angular
    .module('MusicBand')
    .controller('MusicBandCtrl', MusicBandCtrl);

function MusicBandCtrl($scope, socketDataService, $state) {
    $scope.userName = '';
    $scope.play = play;

    // test socket
    var message = 'd';
    socketDataService.sendMessage(message);
    
    function play(instrument) {
        console.log('Now playing the ', instrument, '!');
        $state.go('play');
    }
}