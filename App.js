class App {
    constructor (app) {
      this._app = app;
      this._canciones = [];
      this._currentSong = null;
  
      this._list = [];
      this._currentList = null;
      listFiles.forEach(file =>  {
        
        this._list.push(new List(file.name, file.image, file.songs,this._app));
      });
  
      this._dragging = false;
  
      noStroke();
      textSize(16);
    }
  
    draw() {
      this._displayCurrentSong();
  
  
      this._list.forEach((list,index) => {
        list.display(index);
      });
  
      if(this._canciones.length >0){
        this._canciones.forEach((song,index) => {
          song.display(index,0);
        });
      }
    }
  
    _displayCurrentSong() {
      const currIndex = this._currentSong;
      const currSong = this._canciones[currIndex];
      if(currIndex === null) {
        fill(125);
        rect(20, 235, width - 40, 4, 2);
        rect(20, 190, 100, 12, 6);
        rect(20, 215, 70, 8, 4);
  
        ellipse(width / 2, 285, 50, 50);
        fill(51);
        triangle(182, 296, 182, 273, 197, 285);
  
        fill(125);
      } else {
        image(currSong.cover, 0, 0, width, width);
        this._displayGradient(0, 0, width, width, color(51, 0.5), color(51));
        
        fill(255);
        textStyle(BOLD);
        text(currSong.name, 20, 200);
        textStyle(NORMAL);
        text(currSong.artist, 20, 220);
        text(currSong.getTimestamp(), 20, 260);
        textAlign(RIGHT);
        text(currSong.getTotalTime(), width - 20, 260);
        textAlign(LEFT);
        rect(20, 235, width - 40, 4, 2);
  
        ellipse(width / 2, 285, 50, 50);
        
        fill(190, 49, 49);
        rect(20, 235, ((width - 40) * currSong.getSongProgress()), 4, 2);
        
        fill(51);
  
        if(currSong.song.isPlaying()) {
          rect(179, 275, 5, 20);
          rect(191, 275, 5, 20);
  
          fill(190, 49, 49);
          ellipse(20 + ((width - 40) * currSong.getSongProgress()), 237, 10, 10);
        } else {
          triangle(182, 296, 182, 273, 197, 285);
        }
  
        fill(255);
      }
  
      triangle(235, 275, 235, 295, 248, 285);
      rect(250, 275, 5, 20);
      triangle(140, 275, 140, 295, 126, 285);
      rect(119, 275, 5, 20);
    }
  
    click() {
  
      this._list.forEach((list, index) => {
        list.click(index);
        if(list.isSelected){
          this._canciones = [];
          this._currentList = null;
          list.selectList().forEach(data => {
            this._canciones.push(new Song(data));
          });
        }
        
      })
  
      let currSong = this._canciones[this._currentSong] || null;
      this._canciones.forEach((song, i) => {
        if(song.isMouseOver(i)) {
          if(song.isSelected) {
            currSong.toggleSong();
          } else {
            if(this._currentSong || this._currentSong === 0) {
              currSong.song.stop();
              currSong.isSelected = false;
            }
            this._currentSong = i;
            currSong = this._canciones[this._currentSong];
            currSong.song.play();
            currSong.isSelected = true;
          }
        }
      });
  
      if(dist(mouseX, mouseY, width / 2, 285) <= 25 && currSong) currSong.toggleSong();
      if(currSong) {
        if(mouseX > 235 && mouseX < 255 && mouseY > 275 && mouseY < 295) {
          currSong.song.stop();
          currSong.isSelected = false;
          this._currentSong = this._currentSong === this._canciones.length - 1 ? 0 : this._currentSong + 1;
          this._canciones[this._currentSong].song.play();
          this._canciones[this._currentSong].isSelected = true;
        }
        if(mouseX > 120 && mouseX < 140 && mouseY > 275 && mouseY < 295) {
          currSong.song.stop();
          currSong.isSelected = false;
          this._currentSong = this._currentSong === 0 ? this._canciones.length - 1 : this._currentSong - 1;
          this._canciones[this._currentSong].song.play();
          this._canciones[this._currentSong].isSelected = true;
        }
      }
    }
  
    press() {
      if(this._currentSong !== null && mouseX < width-20 && mouseX > 20 && mouseY < 243 && mouseY > 232) {
        this._dragging = true;
        const currSong = this._canciones[this._currentSong];
        currSong.song.jump(map(mouseX, 20, width - 20, 0, currSong.song.duration()));
      }
    }
  
    drag() {
      if(frameCount % 10 === 0 && this._currentSong !== null) {
        const currSong = this._canciones[this._currentSong];
        if(this._dragging) currSong.song.jump(map(mouseX, 20, width - 20, 0, currSong.song.duration()));
      }
    }
  
    release() {
      if(this._dragging && this._currentSong !== null) this._dragging = false;
    }
  
    _displayGradient(x, y, w, h, c1, c2) {
      noFill();
      strokeWeight(2);
  
      for (let i = y; i <= y + h; i++) {
        let inter = map(i, y, y + h, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x + w, i);
      }
      noStroke();
  
    }
  }