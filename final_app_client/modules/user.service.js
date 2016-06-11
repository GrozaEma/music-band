angular
    .module('MusicBand')
    .factory('userService', userService);

function userService() {
    var Service = {
        users: []
    };

    return Service;
}