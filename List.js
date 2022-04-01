class List {
    constructor(name, image, songs, app) {
        this._name = name;
        this._app = app;
        this._songs = songs;
        this._image = image;
        this._width = 280;
        this._height = 280;
        this._songItems = [];
        this._songs.forEach(song => {
            this.addSong(song);
        });
        this._isSelected = false;
    }

    display(i) {

        const offX = 300 * i;



        this._app.image(this._image, offX, 100, this._width, this._height);
        this._app.fill(56, 27, 84);
        this._app.rect(offX,  this._height-40 , this._width, this._height/2);
        this._app.fill(255);
        this._app.text(this._name, offX + 20, 270);

        
        if (this.isMouseOver(i)) {
            fill(35,35,35,150);
            this._app.rect(offX,100, this._width, this._height);
        }

/*         this._songItems.forEach((song, index) => {
            song.display(index, i);
        }) */
    }

    click(i){
        
        if(this.isMouseOver(i)){
            this._isSelected = true;
        } else {
            this.isSelected = false;
        }
    }

    selectList() {
        if(this._isSelected){
            return this._songItems;
        }
    }

    addSong(song) {
        this._songItems.push(new Song(song));
    }

    isMouseOver(i) {
        const offX = 300 * i;
        return (mouseX > 0 + offX && mouseX < this._width + offX && mouseY > 100 && mouseY < this._height+100);
    }

    get isSelected() {
        return this._isSelected;
    }

    set isSelected(val) {
        this._isSelected = val;
    }
}