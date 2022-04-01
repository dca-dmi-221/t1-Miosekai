const SONGS_DATA = [{

  name: "Future Nostalgia",
  artist: "Dua Lipa",
  cover: "imagenes/1.png",
  file: './canciones/1.mp3'

  
},

{
  name: "You Right",
  artist: "Doja Cat y The Weeknd",
  cover: "imagenes/2.png",
  file: './canciones/2.mp3'
},

{
  name: "Unlock it",
  artist: "Charlie XCX",
  cover: "imagenes/3.png",
  file: './canciones/3.mp3'
},

{
  name: "Enemy",
  artist: "Imagine Dragon",
  cover: "imagenes/4.png",
  file: './canciones/4.mp3'
},


{

  name: "Sweetest Pie",
  artist: "Dua Lipa, Megan Thee Stallion",
  cover: "imagenes/5.png",
  file: './canciones/5.mp3'
},

{

  name: "Jenny - Hearteye Speed Mix",
  artist: "Studio Killers",
  cover: "imagenes/6.png",
  file: './canciones/6.mp3'
},

{

  name: "Rose",
  artist: "Nana by Anna Tsuchiya ",
  cover: "imagenes/7.png",
  file: './canciones/7.mp3'
},

{

  name: "Dalla Dalla",
  artist: "ITZY",
  cover: "imagenes/8.png",
  file: './canciones/8.mp3'
},

{

  name: "I’m Not Okay (I Promise)",
  artist: "My Chemical Romance",
  cover: "imagenes/9.png",
  file: './canciones/9.mp3'
},

{

  name: "Love Again",
  artist: "Dua Lipa",
  cover: "imagenes/10.png",
  file: './canciones/10.mp3'
},

{

  name: "Heart Of Glass",
  artist: "Miley Cyrus",
  cover: "imagenes/15.png",
  file: './canciones/15.mp3'
},

{

  name: "Hot",
  artist: "Avril Lavigne",
  cover: "imagenes/16.png",
  file: './canciones/16.mp3'
},

{

  name: "Take On Me",
  artist: "a-ha",
  cover: "imagenes/17.png",
  file: './canciones/17.mp3'
},

];

const LIST_DATA = [{
  name: "Imagine Dragons PlayList",
  image: "imagenes/list1.jpg",
  songs: [{
    name: "Enemy",
    artist: "Imagine Dragons",
    cover: "imagenes/4.png",
    file: './canciones/4.mp3'
  }, {
    name: "Believer",
    artist: "Imagine Dragons",
    cover: "imagenes/11.png",
    file: './canciones/11.mp3'
  }, {
    name: "Warriors",
    artist: "Imagine Dragons",
    cover: "imagenes/12.png",
    file: './canciones/12.mp3'
  },
  {
    name: "Whatever It Takes",
    artist: "Imagine Dragons",
    cover: "imagenes/13.png",
    file: './canciones/13.mp3'
  },
  {
    name: "Love",
    artist: "Imagine Dragons",
    cover: "imagenes/14.png",
    file: './canciones/14.mp3'
  }

  ]

},{
  name: "Random PlayList",
  image: "imagenes/list2.jpg",
  songs: [{

    name: "Future Nostalgia",
    artist: "Dua Lipa",
    cover: "imagenes/1.png",
    file: './canciones/1.mp3'
  
  
  },
  
  {
    name: "You Right",
    artist: "Doja Cat y The Weeknd",
    cover: "imagenes/2.png",
    file: './canciones/2.mp3'
  },
  
  {
    name: "Unlock it",
    artist: "Charlie XCX",
    cover: "imagenes/3.png",
    file: './canciones/3.mp3'
  },
  
  {
    name: "Enemy",
    artist: "Imagine Dragon",
    cover: "imagenes/4.png",
    file: './canciones/4.mp3'
  },
  
  
  {
  
    name: "Sweetest Pie",
    artist: "Dua Lipa, Megan Thee Stallion",
    cover: "imagenes/5.png",
    file: './canciones/5.mp3'
  },
  
  {
  
    name: "Jenny - Hearteye Speed Mix",
    artist: "Studio Killers",
    cover: "imagenes/6.png",
    file: './canciones/6.mp3'
  },
  
  {
  
    name: "Rose",
    artist: "Nana by Anna Tsuchiya ",
    cover: "imagenes/7.png",
    file: './canciones/7.mp3'
  },
  
  {
  
    name: "Dalla Dalla",
    artist: "ITZY",
    cover: "imagenes/8.png",
    file: './canciones/8.mp3'
  },
  
  {
  
    name: "I’m Not Okay (I Promise)",
    artist: "My Chemical Romance",
    cover: "imagenes/9.png",
    file: './canciones/9.mp3'
  },
  
  {
  
    name: "Love Again",
    artist: "Dua Lipa",
    cover: "imagenes/10.png",
    file: './canciones/10.mp3'
  },
  
  {
  
    name: "Heart Of Glass",
    artist: "Miley Cyrus",
    cover: "imagenes/15.png",
    file: './canciones/15.mp3'
  },
  
  {
  
    name: "Hot",
    artist: "Avril Lavigne",
    cover: "imagenes/16.png",
    file: './canciones/16.mp3'
  },
  
  {
  
    name: "Take On Me",
    artist: "a-ha",
    cover: "imagenes/17.png",
    file: './canciones/17.mp3'
  },]
}]

/*const input = document.querySelector('input');
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
}*/

let pantalla1;
let vol;
//let cancion1;
let misSonidos = [];
const listFiles = [];
const songsFiles = [];
let app;
//let listaImagineDragons = new Lista("PlayList Imagine Dragons");
let currentSoundIndex = 0;

function setup() {

  createCanvas(1280, 720 + (30 * songsFiles.length));
  app = new App(this);
  console.log(listFiles);
  //imageMode(CENTER);
  vol = createSlider(0, 100, 30, 10);
  vol.position(100, 360);

 /* listaImagineDragons.agregarCancion("Enemy", "Imagine Dragons", cancion4, sonido4, sonido4.duration());
  listaImagineDragons.agregarCancion("Beliver", "Imagine Dragons", cancion4, sonido11, sonido11.duration());
  listaImagineDragons.agregarCancion("Warriors", "Imagine Dragons", cancion4, sonido12, sonido12.duration());
  listaImagineDragons.agregarCancion("Whatever it Takes", "Imagine Dragons", cancion4, sonido13, sonido13.duration());
  listaImagineDragons.agregarCancion("Love", "Imagine Dragons", cancion4, sonido14, sonido14.duration());
  console.log({
    listaImagineDragons
  }); 
  */
}


function preload() {
  pantalla1 = loadImage("imagenes/pantalla 1.png");
 /*cancion1 = loadImage("imagenes/1.png");
  cancion2 = loadImage("imagenes/2.png");
  cancion3 = loadImage("imagenes/3.png");
  cancion4 = loadImage("imagenes/4.png");
  cancion5 = loadImage("imagenes/5.png");
  cancion6 = loadImage("imagenes/6.png");
  cancion7 = loadImage("imagenes/7.png");
  cancion8 = loadImage("imagenes/8.png");
  cancion9 = loadImage("imagenes/9.png");
  cancion10 = loadImage("imagenes/10.png");
  cancion11 = loadImage("imagenes/11.png");
  cancion12 = loadImage("imagenes/12.png");
  cancion13 = loadImage("imagenes/13.png");
  cancion14 = loadImage("imagenes/14.png");
  cancion15 = loadImage("imagenes/15.png");
  cancion16 = loadImage("imagenes/16.png");
  cancion17 = loadImage("imagenes/17.png");*/


  soundFormats('mp3');
  misSonidos = [
    sonido1 = loadSound('./canciones/1.mp3'),
    sonido2 = loadSound('./canciones/2.mp3'),
    sonido3 = loadSound('./canciones/3.mp3'),
    sonido4 = loadSound('./canciones/4.mp3'),
    sonido5 = loadSound('./canciones/5.mp3'),
    sonido6 = loadSound('./canciones/6.mp3'),
    sonido7 = loadSound('./canciones/7.mp3'),
    sonido8 = loadSound('./canciones/8.mp3'),
    sonido9 = loadSound('./canciones/9.mp3'),
    sonido10 = loadSound('./canciones/10.mp3'),
    sonido11 = loadSound('./canciones/11.mp3'),
    sonido12 = loadSound('./canciones/12.mp3'),
    sonido13 = loadSound('./canciones/13.mp3'),
    sonido14 = loadSound('./canciones/14.mp3'),
    sonido15 = loadSound('./canciones/15.mp3'),
    sonido16 = loadSound('./canciones/16.mp3'),
    sonido17 = loadSound('./canciones/17.mp3'),
  ]; 


  SONGS_DATA.forEach(({ file, cover, name, artist }) => {
    songsFiles.push({
      name,
      artist,
      song: loadSound(file),
      cover: loadImage(cover),
    });
  });

  LIST_DATA.forEach(({image,name,songs}) => {
    listFiles.push({
      name,
      image: loadImage(image),
      songs: songs.map(({file, cover, name, artist}) =>{
        return {
          name,
          artist,
          song: loadSound(file),
          cover: loadImage(cover),
        }
      })
    })
  })

}
/*
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
*/

/////////
/*
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
*/
function draw() {
  background(51);
  
  //image(pantalla1, width / 2, height / 2, width, height);

  /*rect(800, 400, 60, 60);
  rect(15, 400, 60, 60); */

  misSonidos[currentSoundIndex].setVolume(vol.value() / 100);
  fill(0);
  /*listaImagineDragons.canciones.forEach((element, index) => {
    //console.log(element);
    text(element.nombre, 50, 50 + (index * 120))
    text(element.artista, 50, 70 + (index * 120))
    image(element.imagen, 50, 100 + (index * 120), 50, 50);
    text(element.duracion, 50, 150 + (index * 120));
  });*/
  //console.log(vol.value())

  app.draw();
}

function mouseClicked() {
  app.click();
}

function mousePressed() {
  app.press();
}

function mouseDragged() {
  app.drag();
}


function mouseReleased() {
  app.release();
}