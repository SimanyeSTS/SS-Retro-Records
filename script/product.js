document.addEventListener('DOMContentLoaded', () => {
  let allProducts = JSON.parse(localStorage.getItem('products')).products;

  function displayProducts(productsData) {
      let productsContainer = document.querySelector('#productsContainer');
      productsContainer.innerHTML = '';

      if (productsData.length === 0) {
          let notFoundMessage = document.createElement('div');
          notFoundMessage.className = 'not-found';
          notFoundMessage.innerHTML = '<h2>Product Not Found</h2>';
          productsContainer.appendChild(notFoundMessage);
          return;
      }

      productsData.forEach(product => {
          let productCard = document.createElement('div');
          productCard.className = 'card';

          productCard.innerHTML = `
              <img src="${product.image}" alt="${product.name} ${product.model}" loading="lazy">
              <h1>${product.name}</h1>
              <h1>${product.model}</h1>
              <h4>${product.type}</h4>
              <p>Available: ${product.available ? 'Yes' : 'No'}</p>
              <button class="descriptionButton" data-id="${product.id}">Description</button>
              <p>Price: R${product.price}</p>
              <button class="addToCartButton" data-id="${product.id}">Add to Cart</button>
          `;

          productsContainer.appendChild(productCard);

          productCard.querySelector('.addToCartButton').addEventListener('click', () => {
              addToCart(product);
          });

          productCard.querySelector('.descriptionButton').addEventListener('click', () => {
              showModal(product);
          });
      });
  }

  function showModal(product) {
      let modalTitle = document.querySelector('.modal-title');
      let modalBody = document.querySelector('.modal-body p');

      modalTitle.textContent = `${product.name} - ${product.model}`;
      modalBody.textContent = product.description;


      let modal = new bootstrap.Modal(document.getElementById('productModal'));
      modal.show();
  }

  let searchInput = document.querySelector('#searchInput');
  let searchButton = document.querySelector('#searchButton');
  let sortLowHighButton = document.querySelector('#sortLowHigh');
  let sortHighLowButton = document.querySelector('#sortHighLow');
  let mediaButton = document.querySelector('#mediaButton');
  let playersButton = document.querySelector('#playersButton');
  let resetButton = document.querySelector('#resetButton');

  searchButton.addEventListener('click', () => {
      let query = searchInput.value.toLowerCase();
      let filteredProducts = allProducts.filter(product =>
          product.name.toLowerCase().includes(query)
      );
      displayProducts(filteredProducts);
  });

  sortLowHighButton.addEventListener('click', () => {
      let sortedProducts = [...allProducts].sort((a, b) => a.price - b.price);
      displayProducts(sortedProducts);
  });

  sortHighLowButton.addEventListener('click', () => {
      let sortedProducts = [...allProducts].sort((a, b) => b.price - a.price);
      displayProducts(sortedProducts);
  });

  mediaButton.addEventListener('click', () => {
      let mediaProducts = allProducts.filter(product => ['Vinyl', 'VHS', 'Cassette Tape'].includes(product.type));
      displayProducts(mediaProducts);
  });

  playersButton.addEventListener('click', () => {
      let playerProducts = allProducts.filter(product => ['Turntable', 'VHS Player', 'Cassette Stereo'].includes(product.type));
      displayProducts(playerProducts);
  });

  resetButton.addEventListener('click', () => {
      displayProducts(allProducts);
  });

  function addToCart(product) {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      
      let existingProduct = cart.find(item => item.id === product.id);
      if (existingProduct) {
          existingProduct.quantity++;
      } else {
          cart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(cart));

      updateCartCounter(cart.length);
  }

  function updateCartCounter(count) {
      document.querySelector('#cartCounter').textContent = count;
  }

  displayProducts(allProducts);
});
