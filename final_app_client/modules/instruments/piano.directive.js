angular
    .module('MusicBand')
    .directive('mbPiano', mbPiano);

function mbPiano() {
    return {
        scope: {
            play: '=keyboard'
        },
        restrict: "EA",
        templateUrl: "/modules/instruments/piano.html",
        link: function(scope) {

        }
    };
}