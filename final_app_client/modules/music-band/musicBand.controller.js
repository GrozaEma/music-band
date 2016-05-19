angular
    .module('MusicBand')
    .controller('MusicBandCtrl', MusicBandCtrl);

function MusicBandCtrl($scope) {
    $scope.userName = 'Mumu';
}