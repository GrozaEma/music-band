angular
    .module('MusicBand')
    .factory('musicNotes', musicNotes);

function musicNotes() {
    var notes = {
        'd': 'assets/do.wav'
    };

    return notes;
}