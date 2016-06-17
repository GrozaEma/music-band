angular
    .module('MusicBand')
    .factory('musicNotes', musicNotes);

function musicNotes() {
    var service = {
        'd': 'assets/do.wav',
        piano: {
            // 65: 'assets/do.wav',
            65: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_middle_C.mp3',
            87: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_C_sharp.mp3',
            83: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_D.mp3',
            69: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_D_sharp.mp3',
            68: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_E.mp3',
            70: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_F.mp3',
            82: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_F_sharp.mp3',
            71: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_G.mp3',
            84: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_G_sharp.mp3',
            72: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_A.mp3',
            89: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_A_sharp.mp3',
            74: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_B.mp3',

            75: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_middle_C.mp3',
            85: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_C_sharp.mp3',
            76: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_D.mp3',
            73: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_D_sharp.mp3',
            186: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_E.mp3',
            79: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_F.mp3',
            222: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_F_sharp.mp3',
            80: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_G.mp3',
            191: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_G_sharp.mp3',
            219: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_A.mp3',
            190: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_A_sharp.mp3',
            221: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_B.mp3',

            90: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_middle_C.mp3',
            88: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_C_sharp.mp3',
            67: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_D.mp3',
            86: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_D_sharp.mp3',
            66: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_E.mp3',
            78: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_F.mp3',
            77: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_F_sharp.mp3',
            188: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_G.mp3',
            81: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_A_sharp.mp3',
            220: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_E.mp3'
        },

        guitar: {
            // 81: 'assets/guitarSounds/1.wav',
            // 87: 'assets/guitarSounds/2.wav',
            // 69: 'assets/guitarSounds/3.wav',
            // 82: 'assets/guitarSounds/4.wav',
            // 84: 'assets/guitarSounds/5.wav',
            // 89: 'assets/guitarSounds/6.wav',
            // 85: 'assets/guitarSounds/7.wav',
            // 73: 'assets/guitarSounds/8.wav',
            // 79: 'assets/guitarSounds/9.wav',
            // 80: 'assets/guitarSounds/10.wav',
            // 219: 'assets/guitarSounds/11.wav',
            // 221: 'assets/guitarSounds/12.wav',
            // 220: 'assets/guitarSounds/13.wav',
            // 65: 'assets/guitarSounds/14.wav',
            // 83: 'assets/guitarSounds/15.wav',
            // 68: 'assets/guitarSounds/16.wav',
            // 70: 'assets/guitarSounds/17.wav',
            // 71: 'assets/guitarSounds/18.wav',
            // 72: 'assets/guitarSounds/19.wav',
            // 74: 'assets/guitarSounds/20.wav',
            // 75: 'assets/guitarSounds/21.wav',
            // 76: 'assets/guitarSounds/22.wav',
            // 186: 'assets/guitarSounds/23.wav',
            // 222: 'assets/guitarSounds/1.wav',
            // 90: 'assets/guitarSounds/2.wav',
            // 88: 'assets/guitarSounds/3.wav',
            // 67: 'assets/guitarSounds/4.wav',
            // 86: 'assets/guitarSounds/5.wav',
            // 66: 'assets/guitarSounds/6.wav',
            // 78: 'assets/guitarSounds/7.wav',
            // 77: 'assets/guitarSounds/8.wav',
            // 188: 'assets/guitarSounds/9.wav',
            // 190: 'assets/guitarSounds/10.wav',
            // 191: 'assets/guitarSounds/11.wav'

            81: 'assets/guitarSounds2/1.wav',
            87: 'assets/guitarSounds2/2.wav',
            69: 'assets/guitarSounds2/3.wav',
            82: 'assets/guitarSounds2/4.wav',
            84: 'assets/guitarSounds2/5.wav',
            89: 'assets/guitarSounds2/6.wav',
            85: 'assets/guitarSounds2/7.wav',
            73: 'assets/guitarSounds2/8.wav',
            79: 'assets/guitarSounds2/9.wav',
            80: 'assets/guitarSounds2/10.wav',
            219: 'assets/guitarSounds2/11.wav',
            221: 'assets/guitarSounds2/12.wav',
            220: 'assets/guitarSounds2/13.wav',
            65: 'assets/guitarSounds2/14.wav',
            83: 'assets/guitarSounds2/15.wav',
            68: 'assets/guitarSounds2/16.wav',
            70: 'assets/guitarSounds2/17.wav',
            71: 'assets/guitarSounds2/18.wav',
            72: 'assets/guitarSounds2/19.wav',
            74: 'assets/guitarSounds2/20.wav',
            75: 'assets/guitarSounds2/21.wav',
            76: 'assets/guitarSounds2/22.wav',
            186: 'assets/guitarSounds2/23.wav',
            222: 'assets/guitarSounds2/1.wav',
            90: 'assets/guitarSounds2/2.wav',
            88: 'assets/guitarSounds2/3.wav',
            67: 'assets/guitarSounds2/4.wav',
            86: 'assets/guitarSounds2/5.wav',
            66: 'assets/guitarSounds2/6.wav',
            78: 'assets/guitarSounds2/7.wav',
            77: 'assets/guitarSounds2/8.wav',
            188: 'assets/guitarSounds2/9.wav',
            190: 'assets/guitarSounds2/10.wav',
            191: 'assets/guitarSounds2/11.wav'
        },

        violin: {
            81: 'assets/violinSounds/1.wav',
            87: 'assets/violinSounds/2.wav',
            69: 'assets/violinSounds/3.wav',
            82: 'assets/violinSounds/4.wav',
            84: 'assets/violinSounds/5.wav',
            89: 'assets/violinSounds/6.wav',
            85: 'assets/violinSounds/7.wav',
            73: 'assets/violinSounds/8.wav',
            79: 'assets/violinSounds/9.wav',
            80: 'assets/violinSounds/10.wav',
            219: 'assets/violinSounds/11.wav',
            221: 'assets/violinSounds/12.wav',
            220: 'assets/violinSounds/13.wav',
            65: 'assets/violinSounds/1.wav',
            83: 'assets/violinSounds/2.wav',
            68: 'assets/violinSounds/3.wav',
            70: 'assets/violinSounds/4.wav',
            71: 'assets/violinSounds/5.wav',
            72: 'assets/violinSounds/6.wav',
            74: 'assets/violinSounds/7.wav',
            75: 'assets/violinSounds/8.wav',
            76: 'assets/violinSounds/9.wav',
            186: 'assets/violinSounds/10.wav',
            222: 'assets/violinSounds/11.wav',
            90: 'assets/violinSounds/12.wav',
            88: 'assets/violinSounds/13.wav',
            67: 'assets/violinSounds/1.wav',
            86: 'assets/violinSounds/2.wav',
            66: 'assets/violinSounds/3.wav',
            78: 'assets/violinSounds/7.wav',
            77: 'assets/violinSounds/8.wav',
            188: 'assets/violinSounds/9.wav',
            190: 'assets/violinSounds/10.wav',
            191: 'assets/violinSounds/11.wav'
        },

        drum: {
            81: 'assets/drumSounds/1.wav',
            87: 'assets/drumSounds/2.wav',
            69: 'assets/drumSounds/3.wav',
            82: 'assets/drumSounds/4.wav',
            84: 'assets/drumSounds/5.wav',
            89: 'assets/drumSounds/6.wav',
            85: 'assets/drumSounds/7.wav',
            73: 'assets/drumSounds/8.wav',
            79: 'assets/drumSounds/9.wav',
            80: 'assets/drumSounds/10.wav',
            219: 'assets/drumSounds/11.wav',
            221: 'assets/drumSounds/12.wav',
            220: 'assets/drumSounds/13.wav',
            65: 'assets/drumSounds/14.wav',
            83: 'assets/drumSounds/15.wav',
            68: 'assets/drumSounds/16.wav',
            70: 'assets/drumSounds/17.wav',
            71: 'assets/drumSounds/18.wav',
            72: 'assets/drumSounds/19.wav',
            74: 'assets/drumSounds/20.wav',
            75: 'assets/drumSounds/21.wav',
            76: 'assets/drumSounds/22.wav',
            186: 'assets/drumSounds/23.wav',
            222: 'assets/drumSounds/24.wav',
            90: 'assets/drumSounds/25.wav',
            88: 'assets/drumSounds/26.wav',
            67: 'assets/drumSounds/27.wav',
            86: 'assets/drumSounds/28.wav',
            66: 'assets/drumSounds/13.wav',
            78: 'assets/drumSounds/14.wav',
            77: 'assets/drumSounds/15.wav',
            188: 'assets/drumSounds/16.wav',
            190: 'assets/drumSounds/1.wav',
            191: 'assets/drumSounds/2.wav',
        }
    };

    service.playMusicNote = playMusicNote;

    function playMusicNote(instrument, keyCode) {
        var sound = new Howl({
            urls: [service[instrument][keyCode]]
        });
        sound.play();
    }

    return service;
}