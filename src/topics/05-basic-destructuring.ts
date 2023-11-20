interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer={
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const { song, songDuration: duration, details} = audioPlayer;
const {author} = details;


console.log('Song', song);
console.log('Duration', duration);
console.log('Author', author);

//Array Destructuring

const [p1, p2, p3] : string [] = ['Goku', 'Veggeta', 'Trunks'];
const trunk = p3 || 'Not Found';

console.log('Trunk: ', trunk);