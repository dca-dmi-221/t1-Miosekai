const SONGS_DATA = [{

  name: "Future Nostalgia",
  artist: "Dua Lipa",
  cover: "./imagenes/1.png",
  file: './canciones/1.mp3'

  
},

{
  name: "You Right",
  artist: "Doja Cat y The Weeknd",
  cover: "./imagenes/2.png",
  file: './canciones/2.mp3'
},

{
  name: "Unlock it",
  artist: "Charlie XCX",
  cover: "./imagenes/3.png",
  file: './canciones/3.mp3'
},

{
  name: "Enemy",
  artist: "Imagine Dragon",
  cover: "./imagenes/4.png",
  file: './canciones/4.mp3'
},


{

  name: "Sweetest Pie",
  artist: "Dua Lipa, Megan Thee Stallion",
  cover: "./imagenes/5.png",
  file: './canciones/5.mp3'
},

{

  name: "Jenny - Hearteye Speed Mix",
  artist: "Studio Killers",
  cover: "./imagenes/6.png",
  file: './canciones/6.mp3'
},

{

  name: "Rose",
  artist: "Nana by Anna Tsuchiya ",
  cover: "./imagenes/7.png",
  file: './canciones/7.mp3'
},

{

  name: "Dalla Dalla",
  artist: "ITZY",
  cover: "./imagenes/8.png",
  file: './canciones/8.mp3'
},

{

  name: "I’m Not Okay (I Promise)",
  artist: "My Chemical Romance",
  cover: "./imagenes/9.png",
  file: './canciones/9.mp3'
},

{

  name: "Love Again",
  artist: "Dua Lipa",
  cover: "./imagenes/10.png",
  file: './canciones/10.mp3'
},

{

  name: "Heart Of Glass",
  artist: "Miley Cyrus",
  cover: "./imagenes/15.png",
  file: './canciones/15.mp3'
},

{

  name: "Hot",
  artist: "Avril Lavigne",
  cover: "./imagenes/16.png",
  file: './canciones/16.mp3'
},

{

  name: "Take On Me",
  artist: "a-ha",
  cover: "./imagenes/17.png",
  file: './canciones/17.mp3'
},

];

// listas de canciones
const LIST_DATA = [{
  name: "Imagine Dragons PlayList",
  image: "./imagenes/punto.jpg",
  songs: [{
    name: "Enemy",
    artist: "Imagine Dragons",
    cover: "./imagenes/4.png",
    file: './canciones/4.mp3'
  }, {
    name: "Believer",
    artist: "Imagine Dragons",
    cover: "./imagenes/11.png",
    file: './canciones/11.mp3'
  }, {
    name: "Warriors",
    artist: "Imagine Dragons",
    cover: "./imagenes/12.png",
    file: './canciones/12.mp3'
  },
  {
    name: "Whatever It Takes",
    artist: "Imagine Dragons",
    cover: "./imagenes/13.png",
    file: './canciones/13.mp3'
  },
  {
    name: "Love",
    artist: "Imagine Dragons",
    cover: "./imagenes/14.png",
    file: './canciones/14.mp3'
  }

  ]

},{
  name: "Segunda PlayList",
  image: "./imagenes/segunda.jpg",
  songs: [{

    name: "Future Nostalgia",
    artist: "Dua Lipa",
    cover: "./imagenes/1.png",
    file: './canciones/1.mp3'
  
  
  },
  
  {
    name: "You Right",
    artist: "Doja Cat y The Weeknd",
    cover: "./imagenes/2.png",
    file: './canciones/2.mp3'
  },
  
  {
    name: "Unlock it",
    artist: "Charlie XCX",
    cover: "./imagenes/3.png",
    file: './canciones/3.mp3'
  },
  
  {
    name: "Enemy",
    artist: "Imagine Dragon",
    cover: "./imagenes/4.png",
    file: './canciones/4.mp3'
  },
  
  
  {
  
    name: "Sweetest Pie",
    artist: "Dua Lipa, Megan Thee Stallion",
    cover: "./imagenes/5.png",
    file: './canciones/5.mp3'
  },
  
  {
  
    name: "Jenny - Hearteye Speed Mix",
    artist: "Studio Killers",
    cover: "./imagenes/6.png",
    file: './canciones/6.mp3'
  },
  
  {
  
    name: "Rose",
    artist: "Nana by Anna Tsuchiya ",
    cover: "./imagenes/7.png",
    file: './canciones/7.mp3'
  },
  
  {
  
    name: "Dalla Dalla",
    artist: "ITZY",
    cover: "./imagenes/8.png",
    file: './canciones/8.mp3'
  },
  
  {
  
    name: "I’m Not Okay (I Promise)",
    artist: "My Chemical Romance",
    cover: "./imagenes/9.png",
    file: './canciones/9.mp3'
  },
  
  {
  
    name: "Love Again",
    artist: "Dua Lipa",
    cover: "./imagenes/10.png",
    file: './canciones/10.mp3'
  },
  
  {
  
    name: "Heart Of Glass",
    artist: "Miley Cyrus",
    cover: "./imagenes/15.png",
    file: './canciones/15.mp3'
  },
  
  {
  
    name: "Hot",
    artist: "Avril Lavigne",
    cover: "./imagenes/16.png",
    file: './canciones/16.mp3'
  },
  
  {
  
    name: "Take On Me",
    artist: "a-ha",
    cover: "./imagenes/17.png",
    file: './canciones/17.mp3'
  },]
}]

// un metodo que me explico el monitor
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
const listFiles = [];
const songsFiles = [];
let app;
let currentSoundIndex = 0;

function setup() {

  createCanvas(1280, 336 + (60 * songsFiles.length));
  app = new App(this);

  console.log(listFiles);
}


function preload() {
  pantalla1 = loadImage("./imagenes/fondo.png");

  soundFormats('mp3');

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

function draw() {
  background(56,26,84); // cambio fondo
  image(pantalla1,0,0); 
    
  app.draw();
}

function mouseClicked() {
  app.click();
  app.onSubmitList();
  app.onSubmitSong();
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