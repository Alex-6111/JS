// Створити об'єкт для керування медіаплеєром. Об'єкт повинен мати методи для додавання пісень, видалення пісень, переключення наступної та попередньої пісні та паузи/продовження відтворення. Також повинен бути метод для відображення поточної пісні та загальної тривалості плейлисту.

const mediaPlayer = {
    songs: [],
    currentSongIndex: 0,
    isPlaying: false,
    duration: 0,
    addSong(title, artist, duration) {
        this.songs.push({
            title: title,
            artist: artist,
            duration: duration
        });
    },
    removeSong(index) {
        this.songs.splice(index, 1);
        console.log(`${this.songs[this.currentSongIndex].title} from ${this.songs[this.currentSongIndex].artist} has been removed from the playlist.`);
    },
    play() {
        this.isPlaying = true;
        console.log(`Play ${this.songs[this.currentSongIndex].title} from ${this.songs[this.currentSongIndex].artist}.`);
    },
    pause() {
        this.isPlaying = false;
        console.log(`Paused ${this.songs[this.currentSongIndex].title} from ${this.songs[this.currentSongIndex].artist}.`);
    },
    next() {
        this.currentSongIndex++;
        if(this.currentSongIndex === this.songs.length){
            this.currentSongIndex = 0;
        }
        if (this.isPlaying) {
            this.play();
            } else {
            console.log(`Switched to ${this.songs[this.currentSongIndex].title}.`);
        }
    },
    previous() {
        this.currentSongIndex--;
        if(this.currentSongIndex < 0){
            this.currentSongIndex = this.songs.length - 1;
        }
        if(this.isPlaying){
            this.play();
        }else{
            console.log(`Switched to ${this.songs[this.currentSongIndex].title}.`);
        }
    },
    displayCurrentSong() {
        console.log(`Now playing: ${this.songs[this.currentSongIndex].title} from ${this.songs[this.currentSongIndex].artist}.`);
    },
    calculateDuration() {
        let totalDuration = 0;
        for(let i = 0; i < this.songs.length; i++) {
            totalDuration += this.songs[i].duration
        }
        this.duration = totalDuration;
        console.log(`The total duration of the playlist is ${this.duration} seconds.`);
    },
  };
  
  //Для перевірки
  mediaPlayer.addSong('Bohemian Rhapsody', 'Queen', 355);
  mediaPlayer.addSong('Stairway to Heaven', 'Led Zeppelin', 482);
  mediaPlayer.addSong('Hotel California', 'The Eagles', 390);
  
  mediaPlayer.calculateDuration(); // The total duration of the playlist is 1227 seconds.
  
  mediaPlayer.play(); // Playing Bohemian Rhapsody by Queen.
  
  mediaPlayer.next(); // Playing Stairway to Heaven by Led Zeppelin.
  
  mediaPlayer.displayCurrentSong(); // Now playing: Stairway to Heaven by Led Zeppelin.
  
  mediaPlayer.pause(); // Paused Stairway to Heaven.
  
  mediaPlayer.previous(); // Playing Bohemian Rhapsody by Queen.
  
  mediaPlayer.removeSong(1); // Hotel California by The Eagles has been removed from the playlist.
  