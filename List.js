class List {

    // me recomendaron poner privadas las variables para que no afecte los get y set
    constructor(name, image, songs, app) {
        this._name = name;
        this._app = app;
        this._songs = songs;
        this._image = image;
        this._width = 250;
        this._height = 200;
        this._songItems = [];
        this._songs.forEach(song => {
            this.addSong(song);
        });
        this._isSelected = false;
    }

    display(i) {

        const offX = 270 * i + 250;



        this._app.image(this._image, offX, 30, this._width, this._height);
        this._app.fill(56, 27, 84);
        this._app.rect(offX, this._height - 70, this._width, this._height / 2);
        this._app.fill(255);
        this._app.text(this._name, offX + 20, 200);


        if (this.isMouseOver(i)) {
            fill(35, 35, 35, 150);
            this._app.rect(offX, 30, this._width, this._height);
        }


    }

    click(i) {

        if (this.isMouseOver(i)) {
            this._isSelected = true;
        } else {
            this.isSelected = false;
        }
    }

    selectList() {
        if (this._isSelected) {
            return this._songItems;
        }
    }

    addSong(song) {
        this._songItems.push(new Song(song));
    }

    isMouseOver(i) {
        const offX = 270 * i + 250;
        return (mouseX > 0 + offX && mouseX < this._width + offX && mouseY > 30 && mouseY < this._height + 50);
    }

    get isSelected() {
        return this._isSelected;
    }

    set isSelected(val) {
        this._isSelected = val;
    }

    get name() {
        return this._name;
    }

    set name(val) {
        this._name = val;
    }

    get songItems() {
        return this._songItems;
    }

    set songItems(val) {
        this._songItems = val;
    }
}