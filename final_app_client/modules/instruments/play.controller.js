angular
    .module('MusicBand')
    .controller('PlayCtrl', PlayCtrl)
    .directive('keyboard', keyboard);

function PlayCtrl($rootScope, $scope, userService, $stateParams, musicNotes) {
    $scope.currentUser = $stateParams.username;
    $scope.instrument = $stateParams.instrument;
    $scope.playNote = playNote;

    $scope.users = userService.users;

    $scope.$watchCollection(function () {
        return userService.users;
    }, function (newVal, oldVal, scope) {
        if (newVal) { 
            $scope.users = userService.users;
        }
    }, true);

    function playNote(keyCode) {
        musicNotes.playMusicNote($scope.instrument, keyCode);
    }
}

function keyboard($document) {

    return {
        link: function(scope, element, attrs) {
            var handler = scope.$eval(attrs.keyboard);

            // Bind to document keydown event
            $document.on("keydown", function(event) {
                if (handler) {
                    event.preventDefault();
                    scope.$apply(function() {
                        handler(event.keyCode);
                    });
                }
            });
        }
    };
}