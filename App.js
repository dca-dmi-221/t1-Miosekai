class App {
  constructor(app) {
    this._app = app;
    this._songs = [];
    this._currentSong = null;

    this._list = [];
    this._currentList = null;
    listFiles.forEach(file => {

      this._list.push(new List(file.name, file.image, file.songs, this._app));
    });

    this._dragging = false;

    this.modal = document.getElementById("modal_list");

    this.modal.style = `position: absolute; width: 100%; height: 100%; left : ${this._list.length * 300 + 200}px; top: 50px; margin:0; color: white`

    this.modalSong = document.getElementById("modal_song");
    this.modalSong.style = `position: absolute; width: 100%; height: 100%;  top: 250px; margin:0; margin-left: 30px; color: white`

    this.slider = createSlider(0,100,10,5);
    this.slider.position(710,310);
    this.slider.style('width','80px');
    noStroke();
    textSize(16);
  }

  draw() {
    this._displayCurrentSong();

    this._list.forEach((list, index) => {
      list.display(index);
    });
    //cuadro de agregar canciones se acopla al form
    this._app.fill(56, 27, 84);
    this._app.rect(this._list.length * 270 + 250, 30, 320, 200);
    this._app.fill(255);
    if(this._currentList){
      this._app.text( this._currentList.name,  330, 303);
    }

    if (this._songs.length > 0) {
      this._songs.forEach((song, index) => {
        song.display(index, 0);
      });
    }

    this._displayTimeCurrentSong();
  }

  _displayCurrentSong() {
    const currIndex = this._currentSong;
    const currSong = this._songs[currIndex];
    if (currIndex === null) {
      ellipse(907, 645, 50, 50);
    } else {
      image(currSong.cover, 835, 330, 260, 260);
      

      fill(255);

      
      fill(51);

      //pausa central, la del display song a la derecha, con una canción seleccionada la primerva vez
      ellipse(907, 645, 50, 50);
      fill(255);
      
      if (currSong.song.isPlaying()) {
        rect(894, 633, 10, 30);
        rect(910, 633, 10, 30);

       
      } else {
        fill(190, 49, 49)
        //triangulo pause
        triangle(895, 663, 895, 625, 927, 641);
      }

      fill(255);
    }
    // siguiente canción botones
    triangle(960, 625, 960, 660, 982, 642);
    rect(985, 625, 10, 30);
    //anterior cnación botones
    triangle(862, 625, 862, 660, 840, 642);
    rect(828, 625, 10, 30);

    //text(mouseX + " " + mouseY, mouseX, mouseY);
    this._handleSliderVolume();
  
  }

  click() {


    this._list.forEach((list, index) => {
      list.click(index);
      if (list.isSelected) {
        this._songs = [];
        
        if(this._currentList){
          
        }
        
        
        this._currentList = list;
        console.log(this._currentList);
        list.selectList().forEach(data => {
          this._songs.push(new Song(data));
        });
      }

    })



    let currSong = this._songs[this._currentSong] || null;
    this._songs.forEach((song, i) => {
      if (song.isMouseOver(i)) {
        if (song.isSelected) {
          currSong.toggleSong();
        } else {
          if (this._currentSong || this._currentSong === 0) {
            currSong.song.stop();
            currSong.isSelected = false;
          }
          this._currentSong = i;
          currSong = this._songs[this._currentSong];
          currSong.song.play();
          currSong.isSelected = true;
        }
      }
    });
    //pausar canción actual
    if (dist(mouseX, mouseY, 907, 645) <= 25 && currSong) currSong.toggleSong();
    if (currSong) {
      //sgte canción actual
      if (mouseX > 960 && mouseX < 985 && mouseY > 625 && mouseY < 660) {
        currSong.song.stop();
        currSong.isSelected = false;
        this._currentSong = this._currentSong === this._songs.length - 1 ? 0 : this._currentSong + 1;
        this._songs[this._currentSong].song.play();
        this._songs[this._currentSong].isSelected = true;
      }
      //anterior canción actual
      if (mouseX > 828 && mouseX < 862 && mouseY > 625 && mouseY < 660) {
        currSong.song.stop();
        currSong.isSelected = false;
        this._currentSong = this._currentSong === 0 ? this._songs.length - 1 : this._currentSong - 1;
        this._songs[this._currentSong].song.play();
        this._songs[this._currentSong].isSelected = true;
      }
    }
  }

  press() {
    if (this._currentSong !== null && mouseX < 1240 && mouseX > 685 && mouseY < 695 && mouseY > 690) {
      this._dragging = true;
      const currSong = this._songs[this._currentSong];
      currSong.song.jump(map(mouseX, 550, 1240, 0, currSong.song.duration()));
    }
  }

  drag() {
    if (frameCount % 10 === 0 && this._currentSong !== null) {
      const currSong = this._songs[this._currentSong];
      if (this._dragging) currSong.song.jump(map(mouseX, 550, 1240, 0, currSong.song.duration()));
    }

   
  }

  release() {
    if (this._dragging && this._currentSong !== null) this._dragging = false;
  }


  _displayTimeCurrentSong(){
    const currIndex = this._currentSong;
    const currSong = this._songs[currIndex];

    textStyle(NORMAL);
    if(currSong){
      fill(255);
      
      text(currSong.getTimestamp(), 690, 710);
      textAlign(RIGHT);
      text(currSong.getTotalTime(), 1240, 710);
      textAlign(LEFT);
      //TOTAL TIME LINE
      rect(690, 690, 550, 4, 2);

      textStyle(NORMAL);

      fill(190, 49, 49);
      //Tiempo actual canción time
      rect(690, 690, ((550) * currSong.getSongProgress()), 4, 2);

      if (currSong.song.isPlaying()) {
        fill(190, 49, 49);
        ellipse(690 + ((550) * currSong.getSongProgress()), 695, 10, 10);
      }
    }

  }



  _handleSliderVolume(){

    const currIndex = this._currentSong;
    if(currIndex!= null){      
    const currSong = this._songs[currIndex];
    currSong.setVolumeSong(this.slider.value()/100);
    console.log(currSong);
      }

     
    
    
  }

  onSubmitList() {
    let allow = true;
    this.modal.addEventListener("submit", e => {
      e.preventDefault();
      this.modal.disabled = true;
      if (allow) {
        const data = Object.fromEntries(
          new FormData(e.target)
        )

        let listFile;

        let fileReader = new FileReader();
        fileReader.onload = e => {
          e.preventDefault();
          var dataFile = fileReader.result; 
          listFile = dataFile;
          listFile = this._app.loadImage(listFile);

          const listName = data.list_name;


          allow = false;
          if (this._list.some(list => listName === list.name )) {
                
          } else {
            this._list.push(new List(listName, listFile, [], this._app))
          }

          this.modal.style = `position: absolute; width: 100%; height: 100%; left : ${this._list.length * 300 + 200}px; top: 50px; margin:0`;
          this.modal.disabled = false;
        };
        fileReader.readAsDataURL(data.list_cover);
      }



      console.log(this._list)

    })
  }

  onSubmitSong() {
    this.modalSong.addEventListener('submit', e => {
      e.preventDefault();
      const data = Object.fromEntries(
        new FormData(e.target)
      );

      let songName = data.song_name;
      let songArtist = data.song_artist;
      let songCover;
      let songSong;

      let fileReader = new FileReader();
      fileReader.onload = e => {
        e.preventDefault();
        let dataFile = fileReader.result;  
        songCover = dataFile;
        songCover = this._app.loadImage(songCover);

        let songFile = data.song_song;
        songSong = new p5.SoundFile(songFile);
        
        if(this._list[this._list.indexOf(this._currentList)].songItems.some(song => song.name === songName)){

        } else {
          this._list[this._list.indexOf(this._currentList)].addSong({name:songName,artist:songArtist,cover:songCover,song:songSong})
        }


      };
      fileReader.readAsDataURL(data.song_cover);


    })
  }



}