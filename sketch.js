const input = document.querySelector('input');


// El monitor de los martes me ayudo con este mecanismo de importar archivos
console.log(input)
input.addEventListener('input', e => {
  let file = e.target.files[0];
  const soundFile = new p5.SoundFile(file);
  misSonidos.push(soundFile)
})

function createObjectURL(file) {
  if (window.webkitURL) {
    return window.webkitURL.createObjectURL(file);
  } else if (window.URL && window.URL.createObjectURL) {
    return window.URL.createObjectURL(file);
  } else {
    return null;
  }
}

let pantalla1;
let vol;
let cancion1;
let misSonidos = [];
let listaImagineDragons = new Lista("PlayList Imagine Dragons");

let currentSoundIndex = 0;

function setup() {
  createCanvas(1280, 720);
  imageMode(CENTER);
  vol = createSlider(0, 100, 30, 10);
  vol.position(100,360);

  listaImagineDragons.agregarCancion("Enemy", "Imagine Dragons", cancion4, sonido4,sonido4.duration());
  listaImagineDragons.agregarCancion("Enemy", "Imagine Dragons", cancion4, sonido4,sonido4.duration());
  listaImagineDragons.agregarCancion("Enemy", "Imagine Dragons", cancion4, sonido4,sonido4.duration());
  console.log({listaImagineDragons});
}


function preload() {
  pantalla1 = loadImage("imagenes/pantalla 1.png");
  cancion1 = loadImage("imagenes/1.png");
  cancion2 = loadImage("imagenes/2.png");
  cancion3 = loadImage("imagenes/3.png");
  cancion4 = loadImage("imagenes/4.png");
  /*cancion5 = loadImage("imagenes/5.png");
  cancion6 = loadImage("imagenes/6.png");
  cancion7 = loadImage("imagenes/7.png");*/
  cancion8 = loadImage("imagenes/8.png");
  /*cancion9 = loadImage("imagenes/9.png");
  cancion10 = loadImage("imagenes/10.png"); */

  soundFormats('mp3');
  misSonidos = [
    sonido1 = loadSound('./canciones/1.mp3'),
    sonido2 = loadSound('./canciones/2.mp3'),
    sonido3 = loadSound('./canciones/3.mp3'),
    sonido4 = loadSound('./canciones/4.mp3'),
   /* sonido5 = loadSound('./canciones/5.mp3'),
    sonido6 = loadSound('./canciones/6.mp3'),
    sonido7 = loadSound('./canciones/7.mp3'),*/
    sonido8 = loadSound('./canciones/8.mp3'),
    /*sonido9 = loadSound('./canciones/9.mp3'),
    sonido10 = loadSound('./canciones/10.mp3'),*/
  ];
}

function keyPressed() {
  switch (keyCode) {
    case 39:
      //arrow right
      cambiar('next');
      misSonidos[currentSoundIndex].play();
      break;
    case 37:
      //arrow left
      cambiar('prev');
      misSonidos[currentSoundIndex].play();
      break;
    case 32:
      //space bar
      if (misSonidos[currentSoundIndex].isPlaying()) {
        misSonidos[currentSoundIndex].pause();
        background(255, 0, 0);
      } else {
        misSonidos[currentSoundIndex].play();
        background(0, 255, 0);
      }
      break;
    case 82:
      //r key
      misSonidos[currentSoundIndex].jump(25);
      break;
  }
}

/////////

function cambiar(mode) {
  console.log(currentSoundIndex);
  let jumper = 1;
  let verify = false;
  if (mode === 'next') {
    jumper = 1;
    verify = currentSoundIndex + 1 < misSonidos.length
  } else if (mode === 'prev') {
    jumper = -1;
    verify = currentSoundIndex - 1 > 0
  }

  if (verify) {
    console.log('aaaa')
    misSonidos[currentSoundIndex].stop();
    currentSoundIndex += jumper;
  } else {
    misSonidos[currentSoundIndex].stop();
    currentSoundIndex = 0;
  }
}

function draw() {
  background(220);
  //image(pantalla1, width / 2, height / 2, width, height);
  
  rect(800, 400, 60, 60);
  rect(15, 400, 60, 60);
  
    misSonidos[currentSoundIndex].setVolume(vol.value()/100);
    fill(0);
    listaImagineDragons.canciones.forEach((element,index) => {
      //console.log(element);
      text(element.nombre, 50,50)
      text(element.artista, 50,70)
      image(element.imagen,50,100,50,50);
      text(element.duracion,50,150);
    });
    //console.log(vol.value())

    
}


/* new Cancion("Future Nostalgia", "Dua Lipa", cancion1, sonido1,),
            new Cancion("You Right", "Doja cat", cancion2, sonido2,),
            new Cancion("Unlock it", "Charli XCX", cancion3, sonido3,),
            new Cancion(),
            new Cancion("Enemy", "Imagine Dragons", cancion5, sonido5,),
            new Cancion("Enemy", "Imagine Dragons", cancion6, sonido6,),
            new Cancion("Enemy", "Imagine Dragons", cancion7, sonido7,),
            new Cancion("Enemy", "Imagine Dragons", cancion8, sonido8,),
            new Cancion("Enemy", "Imagine Dragons", cancion9, sonido9,),
            new Cancion("Enemy", "Imagine Dragons", cancion10, sonido10,), */