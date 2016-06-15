angular
    .module('MusicBand')
    .controller('PlayCtrl', PlayCtrl);

function PlayCtrl($rootScope, $scope, userService, $stateParams) {
    $scope.currentUser = $stateParams.username;
    $scope.instrument = $stateParams.instrument;

    $scope.users = userService.users;
    console.log('PlayCtrl: ', $scope.users);

    $scope.$watchCollection(function () {
        return userService.users;
    }, function (newVal, oldVal, scope) {
        console.info('watch USERS');
        if (newVal) { 
            $scope.users = userService.users;
        }
    }, true);
}