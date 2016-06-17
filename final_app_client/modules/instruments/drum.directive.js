angular
    .module('MusicBand')
    .directive('mbDrum', mbDrum);

function mbDrum() {
    return {
        scope: {},
        restrict: "EA",
        templateUrl: "/modules/instruments/drum.html",
        link: function(scope) {
        }
    };
}