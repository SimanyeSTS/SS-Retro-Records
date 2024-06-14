let products = {
  "products": [
      {
          id: "P1",
          name: "Dr. Dre",
          model: 2001,
          type: "Vinyl",
          available: true,
          price: 800,
          image: "https://simanyests.github.io/SS-Retro-pictures/Dr Dre.jpg"
      },
      {
          id: "P2",
          name: "Dragon Ball",
          model: "Z - Collection",
          type: "VHS",
          available: true,
          price: 1200,
          image: "https://simanyests.github.io/SS-Retro-pictures/Dragon Ball VHS.jpg"
      },
      {
          id: "P3",
          name: "Mafika",
          model: "Killer",
          type: "Cassette Tape",
          available: true,
          price: 120,
          image: "https://simanyests.github.io/SS-Retro-pictures/mafika cassette.jpg"
      },
      {
          id: "P4",
          name: "Yamaha",
          model: "1982#1",
          type: "Turntable",
          available: true,
          price: 3500,
          image: "https://simanyests.github.io/SS-Retro-pictures/turntable.jpg"
      },
      {
          id: "P5",
          name: "Phillips",
          model: "DVJ/73",
          type: "VHS Player",
          available: true,
          price: 530,
          image: "https://simanyests.github.io/SS-Retro-pictures/vhs system.webp"
      },
      {
          id: "P6",
          name: "Sharp",
          model: "Stereo 550",
          type: "Cassette Stereo",
          available: true,
          price: 600,
          image: "https://simanyests.github.io/SS-Retro-pictures/cassette player.jpg"
      }
  ]
};

localStorage.setItem('products', JSON.stringify(products));

function displayProducts(productsData) {
  let productsContainer = document.getElementById('productsContainer');
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
          <button>Description</button>
          <p>Price: R${product.price}</p>
          <button>Add to Cart</button>
      `;

      productsContainer.appendChild(productCard);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  let allProducts = JSON.parse(localStorage.getItem('products')).products;
  displayProducts(allProducts);
});
