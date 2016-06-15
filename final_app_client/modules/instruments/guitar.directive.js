angular
    .module('MusicBand')
    .directive('mbGuitar', mbGuitar);

function mbGuitar() {
    return {
        scope: {},
        restrict: "EA",
        templateUrl: "/modules/instruments/guitar.html",
        link: function(scope) {

        }
    };
}