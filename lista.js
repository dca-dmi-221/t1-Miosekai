class Lista{

    constructor(
        nombre
    ){
        this.nombre = nombre;
        this.canciones = [];

        this.currentSoundIndex = 0;
        
    }

    agregarCancion(nombre,artista,imagen,archivo,duracion){
        this.canciones.push(new Cancion(nombre,artista,imagen,archivo,duracion));
    }

    

    eliminarCancion(cancionIndex){
        this.canciones.splice(cancionIndex,1);
    }





   

}