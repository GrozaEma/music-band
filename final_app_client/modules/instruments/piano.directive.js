angular
    .module('MusicBand')
    .directive('mbPiano', mbPiano);

function mbPiano() {
    return {
        scope: {},
        restrict: "EA",
        templateUrl: "/modules/instruments/piano.html",
        link: function(scope) {

        }
    };
}