class Modal {
    constructor(type) {
        this._type = type;
    }

    display() {
        let div = document.createElement("div");
        div.className = "modal"


        let inputName = document.createElement("input");
        inputName.type = "text";

        let inputArtist = document.createElement("input");
        inputArtist.type = "text";

        let inputCover = document.createElement("input");
        inputCover.type = "file";

        let inputSong = document.createElement("input");
        inputSong.type = "file";
        switch (type) {
            case "list":


                break;
            case "song":

                break;
        }

        return div;
    }
}