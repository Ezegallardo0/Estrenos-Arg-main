const movie = [
  {
    number: 1,
    title: "Oppenheimer",
    imgSrc: "https://image.tmdb.org/t/p/original/ncKCQVXgk4BcQV6XbvesgZ2zLvZ.jpg",
    genre: "Biografía, Drama, Historia",
    synopsis: "Basada en la vida del físico teórico J. Robert Oppenheimer, quien desempeñó un papel crucial en el desarrollo de la primera bomba atómica durante la Segunda Guerra Mundial.",
    cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Jr."],
    duration: "180 minutos",
    releaseYear: 2023,
    director: "Christopher Nolan",
    fondo: "https://media.es.wired.com/photos/64c001e7532fc59e0e8d522d/master/pass/robert%20oppenheimer%20cientificos%20que%20aparecen%20en%20la%20pelicula.jpg"

  },
  {
    number: 2,
    title: "Ferrari",
    imgSrc: "https://image.tmdb.org/t/p/original/dAP9QTLVvglGvtsa0VesaOgHcTW.jpg",
    "genre": "Biografía, Drama, Deporte",
    "synopsis": "La vida del icónico fundador de Ferrari, Enzo Ferrari, y su viaje desde un piloto de carreras hasta construir una de las marcas de automóviles más famosas del mundo.",
    "cast": ["Adam Driver", "Penélope Cruz", "Shailene Woodley"],
    "duration": "130 minutos",
    "releaseYear": 2023,
    "director": "Michael Mann",
    "fondo": "https://image.tmdb.org/t/p/original/Ac3rRrduoKoXwQ6ZDgWh8euKhN5.jpg"
  },
  {
    "number": 3,
    "title": "Mi Villano Favorito 4",
    "imgSrc": "https://www.americatv.com.pe/cinescape/wp-content/uploads/2023/12/cihfEI1cwTORZ9W0nDPgxiVCoiZ-scaled.jpg",
    "genre": "Animación, Comedia, Familia",
    "synopsis": "Continúan las aventuras de Gru, sus hijas adoptivas y los traviesos Minions.",
    "cast": ["Steve Carell", "Kristen Wiig", "Pierre Coffin"],
    "duration": "90 minutos",
    "releaseYear": 2024,
    "director": "Kyle Balda",
    "fondo": "https://image.tmdb.org/t/p/original/lgkPzcOSnTvjeMnuFzozRO5HHw1.jpg"
  },
  {
    "number": 4,
    "title": "Kun Fu Panda 4",
    "imgSrc": "https://image.tmdb.org/t/p/original/bqe5pdLIoLeZSszA8N5ZvoIS4aB.jpg",
    "genre": "Animación, Acción, Comedia, Familia",
    "synopsis": "Po y sus amigos regresan para enfrentar una nueva amenaza en el Valle de la Paz.",
    "cast": ["Jack Black", "Dustin Hoffman", "Angelina Jolie"],
    "duration": "95 minutos",
    "releaseYear": 2024,
    "director": "Mike Mitchell",
    "fondo": "https://image.tmdb.org/t/p/original/3ffPx9jqg0yj9y1KWeagT7D20CB.jpg"
  },
  {
    "number": 5,
    "title": "Intensamente 2",
    "imgSrc": "https://i.pinimg.com/736x/7d/9d/d5/7d9dd59eb9abb04c8e43494f150af4b7.jpg",
    "genre": "Animación, Aventura, Comedia, Familia",
    "synopsis": "Las emociones de Riley se enfrentan a nuevos desafíos mientras ella crece y enfrenta la adolescencia.",
    "cast": ["Amy Poehler", "Phyllis Smith", "Bill Hader"],
    "duration": "100 minutos",
    "releaseYear": 2024,
    "director": "Kelsey Mann",
    "fondo": "https://image.tmdb.org/t/p/original/p5ozvmdgsmbWe0H8Xk7Rc8SCwAB.jpg"
  },
  {
    "number": 6,
    "title": "2 Fast 2 Furious",
    "imgSrc": "https://m.media-amazon.com/images/S/pv-target-images/8a9cf8e5d13c3f2968eace5f17c6bd8db972917a8d580ba31a7106022b7316ef.jpg",
    "genre": "Acción, Crimen, Thriller",
    "synopsis": "Brian O'Conner y su amigo Roman Pearce se infiltran en el mundo de las carreras ilegales en Miami para derribar a un narcotraficante.",
    "cast": ["Paul Walker", "Tyrese Gibson", "Eva Mendes"],
    "duration": "107 minutos",
    "releaseYear": 2003,
    "director": "John Singleton"
  },
  {
    "number": 7,
    "title": "The Fast and the Furious",
    "imgSrc": "https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "genre": "Acción, Crimen, Thriller",
    "synopsis": "Brian O'Conner, un policía encubierto, se infiltra en la comunidad de carreras callejeras de Los Ángeles para investigar una serie de robos.",
    "cast": ["Vin Diesel", "Paul Walker", "Michelle Rodriguez"],
    "duration": "106 minutos",
    "releaseYear": 2001,
    "director": "Rob Cohen"
  },
  {
    "number": 8,
    "title": "The Fast and the Furious: Tokyo Drift",
    "imgSrc": "https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_FMjpg_UX1000_.jpg",
    "genre": "Acción, Crimen, Thriller",
    "synopsis": "Un joven piloto de carreras se muda a Tokio y se ve envuelto en el mundo de las carreras de drift.",
    "cast": ["Lucas Black", "Sung Kang", "Bow Wow"],
    "duration": "104 minutos",
    "releaseYear": 2006,
    "director": "Justin Lin"
  },
  {
    "number": 9,
    "title": "Fast & Furious",
    "imgSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpIL9HKNMSqipY1tna3dALx8x6yxSaZ4MeUw&s",
    "genre": "Acción, Crimen, Thriller",
    "synopsis": "Dominic Toretto y Brian O'Conner se reúnen para derribar a un narcotraficante en Los Ángeles.",
    "cast": ["Vin Diesel", "Paul Walker", "Jordana Brewster"],
    "duration": "107 minutos",
    "releaseYear": 2009,
    "director": "Justin Lin"
  },
  {
    "number": 10,
    "title": "Transformer",
    "imgSrc": "https://cdn11.bigcommerce.com/s-mmafe1g4n3/images/stencil/1280x1280/products/3942/3965/MM00234001__72303.1640172894.jpg?c=1",
    "genre": "Acción, Aventura, Ciencia Ficción",
    "synopsis": "Un joven adolescente se ve atrapado en una batalla entre los Autobots y los Decepticons, dos razas de robots alienígenas.",
    "cast": ["Shia LaBeouf", "Megan Fox", "Josh Duhamel"],
    "duration": "144 minutos",
    "releaseYear": 2007,
    "director": "Michael Bay"
  },
  {
    "number": 11,
    "title": "Transformer: La venganza de los caidos",
    "imgSrc": "https://www.aceprensa.com/wp-content/uploads/2009/06/8373-0.jpg",
    "genre": "Acción, Aventura, Ciencia Ficción",
    "synopsis": "Los Autobots y los Decepticons se enfrentan nuevamente mientras un antiguo enemigo resurge en la Tierra.",
    "cast": ["Shia LaBeouf", "Megan Fox", "Josh Duhamel"],
    "duration": "150 minutos",
    "releaseYear": 2009,
    "director": "Michael Bay"
  },
  {
    "number": 12,
    "title": "Transformer: El lado oscuro de la Luna",
    "imgSrc": "https://play-lh.googleusercontent.com/BNcyvziuxvHD5vzur-N83oXla4QFV8ZpoYYvXmE0gG4e5yDAT3pYN8YrENEfXsB1FZA6aw",
    "genre": "Acción, Aventura, Ciencia Ficción",
    "synopsis": "Un misterioso evento del pasado de Cybertron amenaza a la Tierra, y los Autobots deben enfrentarse a los Decepticons para salvar la humanidad.",
    "cast": ["Shia LaBeouf", "Rosie Huntington-Whiteley", "Josh Duhamel"],
    "duration": "154 minutos",
    "releaseYear": 2011,
    "director": "Michael Bay"
  },
  {
    "number": 13,
    "title": "Transformers: La era de la extinción",
    "imgSrc": "https://play-lh.googleusercontent.com/-_elya146ZNLmU0wPkGMfMQsd_vORb6OENN5iFw0qYc5TjQ24obJQfe7GElKuEO61TZ8",
    "genre": "Acción, Aventura, Ciencia Ficción",
    "synopsis": "Los Autobots deben enfrentar una nueva amenaza mientras un inventor descubre una tecnología que puede cambiar el destino del mundo.",
    "cast": ["Mark Wahlberg", "Stanley Tucci", "Nicola Peltz"],
    "duration": "165 minutos",
    "releaseYear": 2014,
    "director": "Michael Bay"
  },
  {
    "number": 14,
    "title": "Transformers: El último caballero",
    "imgSrc": "https://play-lh.googleusercontent.com/LRIZYkExNKDGqpOlOXaAnKPbxwsqAEYo3BeTJJGMhGFCD3gVt7-rEEWgpboL26FCYq-I2w",
    "genre": "Acción, Aventura, Ciencia Ficción",
    "synopsis": "Optimus Prime encuentra su hogar, Cybertron, destruido y descubre que él es el responsable. Busca un antiguo artefacto en la Tierra para restaurar su planeta.",
    "cast": ["Mark Wahlberg", "Anthony Hopkins", "Josh Duhamel"],
    "duration": "154 minutos",
    "releaseYear": 2017,
    "director": "Michael Bay"
  },
  {
    "number": 15,
    "title": "Transformers: El despertar de las bestias",
    "imgSrc": "https://i.blogs.es/72f9a1/cartel-de-transformers-7/650_1200.jpeg",
    "genre": "Acción, Aventura, Ciencia Ficción",
    "synopsis": "Una nueva amenaza emerge cuando los Autobots y los Decepticons se encuentran con los Maximals, Predacons y Terrorcons.",
    "cast": ["Anthony Ramos", "Dominique Fishback", "Luna Lauren Velez"],
    "duration": "127 minutos",
    "releaseYear": 2023,
    "director": "Steven Caple Jr."
  },
  {
    "number": 16,
    "title": "Bad Boys",
    "imgSrc": "https://i.pinimg.com/474x/55/cd/e6/55cde6abba6f916646f46bf6210799aa.jpg",
    "genre": "Acción, Comedia, Crimen",
    "synopsis": "Dos detectives de narcóticos de Miami deben proteger a una testigo de asesinato mientras investigan un robo de heroína en su comisaría.",
    "cast": ["Will Smith", "Martin Lawrence", "Téa Leoni"],
    "duration": "119 minutos",
    "releaseYear": 1995,
    "director": "Michael Bay"
  },
  {
    "number": 17,
    "title": "Bad Boys II",
    "imgSrc": "https://m.media-amazon.com/images/I/81pQr-MbePL._AC_UF894,1000_QL80_.jpg",
    "genre": "Acción, Comedia, Crimen",
    "synopsis": "Los detectives Mike Lowrey y Marcus Burnett investigan el flujo de éxtasis en Miami, lo que los lleva a una conspiración peligrosa.",
    "cast": ["Will Smith", "Martin Lawrence", "Gabrielle Union"],
    "duration": "147 minutos",
    "releaseYear": 2003,
    "director": "Michael Bay"
  },
  {
    "number": 18,
    "title": "Bad Boys For Life",
    "imgSrc": "https://pics.filmaffinity.com/Bad_Boys_for_Life-343590773-large.jpg",
    "genre": "Acción, Comedia, Crimen",
    "synopsis": "Mike Lowrey y Marcus Burnett se reúnen nuevamente cuando un mercenario albanés, cuya hermano mataron, promete vengarse.",
    "cast": ["Will Smith", "Martin Lawrence", "Vanessa Hudgens"],
    "duration": "124 minutos",
    "releaseYear": 2020,
    "director": ["Adil El Arbi", "Bilall Fallah"]
  },
  {
    "number": 19,
    "title": "Bad Boys IV",
    "imgSrc": "https://blog.apis.cineplanet.com.pe/uploads/bab_boys_4_poster_cineplanet_6c7fbdcbed.jpg",
    "genre": "Acción, Comedia, Crimen",
    "synopsis": "Los detectives Mike Lowrey y Marcus Burnett enfrentan un nuevo caso que los lleva al límite en su carrera.",
    "cast": ["Will Smith", "Martin Lawrence"],
    "duration": "130 minutos",
    "releaseYear": 2024,
    "director": ["Adil El Arbi", "Bilall Fallah"]
  },
  {
    "number": 20,
    "title": "Mi Villano Favorito",
    "imgSrc": "https://m.media-amazon.com/images/S/pv-target-images/8fae92382e8c4e08637fc3e714f50ff37975f515b6d33921f6518d6b6721739f.jpg",
    "genre": "Animación, Comedia, Familia",
    "synopsis": "Gru, un villano supergenio, planea robar la Luna con la ayuda de sus pequeños secuaces amarillos, los Minions.",
    "cast": ["Steve Carell", "Jason Segel", "Russell Brand"],
    "duration": "95 minutos",
    "releaseYear": 2010,
    "director": ["Pierre Coffin", "Chris Renaud"]
  },
  {
    "number": 21,
    "title": "Mi Villano Favorito 2",
    "imgSrc": "https://es.web.img2.acsta.net/pictures/210/090/21009000_2013052817374835.jpg",
    "genre": "Animación, Comedia, Familia",
    "synopsis": "Gru es reclutado por una organización para detener a un nuevo supervillano mientras se adapta a la vida familiar.",
    "cast": ["Steve Carell", "Kristen Wiig", "Benjamin Bratt"],
    "duration": "98 minutos",
    "releaseYear": 2013,
    "director": ["Pierre Coffin", "Chris Renaud"]
  },
  {
    "number": 22,
    "title": "Minions",
    "imgSrc": "https://http2.mlstatic.com/D_NQ_NP_823534-MLA50961474298_082022-O.webp",
    "genre": "Animación, Aventura, Comedia, Familia",
    "synopsis": "Los Minions buscan un nuevo maestro villano a quien servir después de la desaparición de sus anteriores amos.",
    "cast": ["Sandra Bullock", "Jon Hamm", "Michael Keaton"],
    "duration": "91 minutos",
    "releaseYear": 2015,
    "director": ["Pierre Coffin", "Kyle Balda"]
  },
  {
    "number": 23,
    "title": "Mi Villano Favorito 3",
    "imgSrc": "https://image.tmdb.org/t/p/original/jDUBPQLBiQZDwO3K3Zn6h343cbO.jpg",
    "genre": "Animación, Acción, Aventura, Comedia, Familia",
    "synopsis": "Gru descubre que tiene un hermano gemelo perdido hace mucho tiempo, Dru, y se une a él para derrotar a un nuevo enemigo.",
    "cast": ["Steve Carell", "Kristen Wiig", "Trey Parker"],
    "duration": "90 minutos",
    "releaseYear": 2017,
    "director": ["Pierre Coffin", "Kyle Balda"]
  },
  {
    "number": 24,
    "title": "Minions: Nace un villano",
    "imgSrc": "https://dx35vtwkllhj9.cloudfront.net/universalstudios/minions-the-rise-of-gru/images/regions/ar/onesheet.jpg",
    "genre": "Animación, Aventura, Comedia, Familia",
    "synopsis": "La historia de cómo Gru, un niño de 12 años, sueña con convertirse en el mayor supervillano del mundo.",
    "cast": ["Steve Carell", "Pierre Coffin", "Taraji P. Henson"],
    "duration": "87 minutos",
    "releaseYear": 2022,
    "director": ["Kyle Balda", "Brad Ableson", "Jonathan del Val"]
  }
  ];

  export default movie