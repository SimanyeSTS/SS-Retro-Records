//Comment//
let products = {
    "products": [
      {
        "id": "P1",
        "name": "Dr. Dre",
        "model": "2001",
        "type": "Vinyl",
        "available": true,
        "price": "R800",
        "image": "https://simanyests.github.io/SS-Retro-pictures/Dr Dre.jpg"
      },
      {
        "id": "P2",
        "name": "Dragon Ball",
        "model": "Z - Collection",
        "type": "VHS",
        "available": true,
        "price": "R1200",
        "image": "https://simanyests.github.io/SS-Retro-pictures/Dragon Ball VHS.jpg"
      },
      {
        "id": "P3",
        "name": "Mafika",
        "model": "Killer",
        "type": "Cassette Tape",
        "available": true,
        "price": "R120",
        "image": "https://simanyests.github.io/SS-Retro-pictures/mafika cassette.jpg"
      },
      {
        "id": "P4",
        "name": "Yamaha",
        "model": "1982#1",
        "type": "Turntable",
        "available": true,
        "price": "R3500",
        "image": "https://simanyests.github.io/SS-Retro-pictures/turntable.jpg"
      },
      {
        "id": "P5",
        "name": "Phillips",
        "model": "DVJ/73",
        "type": "VHS Player",
        "available": true,
        "price": "R530",
        "image": "https://simanyests.github.io/SS-Retro-pictures/vhs system.webp"
      },
      {
        "id": "P6",
        "name": "Sharp",
        "model": "Stereo 550",
        "type": "Cassette Stereo",
        "available": true,
        "price": "R600",
        "image": "https://simanyests.github.io/SS-Retro-pictures/cassette player.jpg"
      }
    ]
  };
  
  localStorage.setItem('products', JSON.stringify(products));
  