angular
    .module('MusicBand')
    .directive('mbViolin', mbViolin);

function mbViolin() {
    return {
        scope: {},
        restrict: "EA",
        templateUrl: "/modules/instruments/violin.html",
        link: function(scope) {

        }
    };
}