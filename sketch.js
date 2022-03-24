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
let cancion1;
let misSonidos = [];
let currentSoundIndex = 0;

function setup() {
  createCanvas(1280, 720);
  imageMode(CENTER);
}


function preload(){
  pantalla1 = loadImage("imagenes/pantalla 1.png");
  cancion1 = loadImage("imagenes/1.png");
  cancion1 = loadImage("imagenes/2.png");
  cancion1 = loadImage("imagenes/3.png");

  soundFormats('mp3');
  misSonidos = [
    loadSound('./canciones/1.mp3'),
    loadSound('./canciones/2.mp3'),
    loadSound('./canciones/3.mp3'),
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

function cambiar(mode){
  console.log(currentSoundIndex);
  let jumper = 1;
  let verify = false;
  if (mode === 'next') {
    jumper = 1;
    verify = currentSoundIndex + 1 <misSonidos.length
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
  image(pantalla1, width/2, height/2,width,height);

}
