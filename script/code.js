let products = {
  "products": [
      {
          id: "P1",
          name: "Dr. Dre",
          model: 2001,
          type: "Vinyl",
          available: true,
          price: 800,
          image: "https://simanyests.github.io/SS-Retro-pictures/Dr Dre.jpg",
          description: "'2001' exhibits an expansion on Dre's debut G-funk sound and contains gangsta rap themes such as violence, promiscuity, drug use, street gangs, sex and crime."
      },
      {
          id: "P2",
          name: "Dragon Ball",
          model: "Z - Collection",
          type: "VHS",
          available: true,
          price: 1200,
          image: "https://simanyests.github.io/SS-Retro-pictures/Dragon Ball VHS.jpg",
          description: "Dragon Ball Z is a TV series that ran from 1989–1996 that follows the adventures of Son Goku, Earth's martial arts defender, as he and his allies defend the planet from a variety of villains. The show features action-packed adventures that reinforce the concept of good versus evil and teach valuable character virtues such as teamwork, loyalty, and trustworthiness."
      },
      {
          id: "P3",
          name: "Mafika",
          model: "Killer",
          type: "Cassette Tape",
          available: true,
          price: 120,
          image: "https://simanyests.github.io/SS-Retro-pictures/mafika cassette.jpg",
          description: "A1 Killer 5:14 A2 Selborne 4:59 A3 King (Martin Luther) 5:04 B1 Drive Safely Now 5:13 B2 Shitokofela 3:35 B3 Lala Mtwana (For Michael) 5:14."
      },
      {
          id: "P4",
          name: "Yamaha",
          model: "YP -800",
          type: "Turntable",
          available: true,
          price: 3500,
          image: "https://simanyests.github.io/SS-Retro-pictures/turntable.jpg",
          description: " The Yamaha YP-800 is a 2-speed, direct-drive turntable that is fitted with a Jelco spurced static balance type tonearm. These are built solid! The Yamaha can play 33.3 and 45 rpm records and has pitch control and a strobe to assure speed accuracy."
      },
      {
          id: "P5",
          name: "Phillips",
          model: "DVJ/73",
          type: "VHS Player",
          available: true,
          price: 530,
          image: "https://simanyests.github.io/SS-Retro-pictures/vhs system.webp",
          description: "Invented in 1976 by Phillips Cmpany. It was the dominant home video format throughout the tape media period in the late 1970s, 1980s, 1990s, and early 2000s."
      },
      {
          id: "P6",
          name: "Sharp",
          model: "Stereo 550",
          type: "Cassette Stereo",
          available: true,
          price: 600,
          image: "https://simanyests.github.io/SS-Retro-pictures/cassette player.jpg",
          description: "Sharp released the Searcher Double, a double cassette stereo player that offered features like instant editing, dual playback, continuous playback, and multiple recording in one unit. This product introduced a new way to enjoy cassette tape music for the 1980s. Sharps in general tend to sound a bit brassy. This one is no exception. It has 16cm woofers and “horn tweeters”, and it is powered by a Toshiba TA7246AP amplifier chip. According to the service manual, the output power is 2x7W RMS. There was a label on the tape door saying 32W, but that is PMPO (Peak Momentary Power Ouput), which is nonsense. Sharp says the tape deck offers a frequency response of 30 to 17,000 Hz when using Metal tape, which is quite good for a boombox.."
      }
  ]
};

localStorage.setItem('products', JSON.stringify(products));

function displayProducts(productsData) {
  let productsContainer = document.querySelector('#productsContainer');
  productsContainer.innerHTML = '';

  productsData.forEach(product => {
      let productCard = document.createElement('div');
      productCard.className = 'card';

      productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name} ${product.model}" loading="lazy">
          <h1>${product.name}</h1>
          <h1>${product.model}</h1>
          <h4>${product.type}</h4>
          <p>Available: ${product.available ? 'Yes' : 'No'}</p>
          <button class="descriptionBtn" data-id="${product.id}">Description</button>
          <p>Price: R${product.price}</p>
          <button class="addToCartBtn" data-id="${product.id}">Add to Cart</button>
      `;

      productsContainer.appendChild(productCard);

      productCard.querySelector('.descriptionBtn').addEventListener('click', () => {
          showModal(product);
      });
  });
}

function showModal(product) {
  const modalTitle = document.querySelector('.modal-title');
  const modalBody = document.querySelector('.modal-body p');

  modalTitle.textContent = `${product.name} - ${product.model}`;
  modalBody.textContent = product.description;

  const modal = new bootstrap.Modal(document.getElementById('productModal'));
  modal.show();
}

document.addEventListener('DOMContentLoaded', () => {
  let allProducts = JSON.parse(localStorage.getItem('products')).products;
  displayProducts(allProducts);
});
