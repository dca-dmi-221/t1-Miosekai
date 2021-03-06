class Song {
  constructor({
    name,
    artist,
    cover,
    song
  }) {
    this._name = name;
    this._artist = artist;
    this._cover = cover;
    this._song = song;
    this._isSelected = false;
    this._width = 400;


  }

  //// +display(i: Any, j:Any): void
  display(i, j) {
    const offY = 60 * i;
    const offX = this._width * j + 250;

    if (this.isMouseOver(i)) {
      fill(35);
      rect(250, 327.5 + offY, this._width, 60);
    }


    image(this._cover, offX + 30, 335 + offY, 45, 45);

    stroke(255);
    strokeWeight(0.2);
    fill(255);
    text(i, 10 + offX, offY + 360);
    text(this._name, 77 + offX, 352 + offY);
    noStroke();
    text(this._artist, 77 + offX, 372 + offY);

    if (this._song.isPlaying()) {
      fill(190, 49, 49);
      rect(322 + offX, 347 + offY, 5, 20);
      rect(334 + offX, 347 + offY, 5, 20);
    } else {
      if (this._isSelected) fill(190, 49, 49);
      else fill(255);
      triangle(325 + offX, 347 + offY, 325 + offX, 367 + offY, 343 + offX, 357 + offY)
    }
  }

  toggleSong() {
    if (this._song.isPlaying()) this._song.pause();
    else this._song.play();
  }

  getSongProgress() {
    return this._song.currentTime() / this._song.duration();
  }

  setVolumeSong(val) {
    this._song.setVolume(val);
  }

  getTimestamp() {
    const time = this._song.currentTime();
    const min = Math.floor(time / 60);
    const sec = Math.floor(time - (min * 60));
    return `${min}:${sec < 10 ? `0${sec}` : sec}`;
  }

  getTotalTime() {
    const time = this._song.duration();
    const min = Math.floor(time / 60);
    const sec = Math.floor(time - (min * 60));
    return `${min}:${sec < 10 ? `0${sec}` : sec}`;
  }

  isMouseOver(i) {
    const offY = 60 * i;
    return (mouseX > 300 && mouseX < this._width + 300 && mouseY > 331 + offY && mouseY < 388 + offY);
  }

  get cover() {
    return this._cover;
  }
  get song() {
    return this._song;
  }
  get artist() {
    return this._artist;
  }
  get name() {
    return this._name;
  }
  get isSelected() {
    return this._isSelected;
  }
  set isSelected(val) {
    this._isSelected = val;
  }
}