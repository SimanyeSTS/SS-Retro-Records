document.addEventListener('DOMContentLoaded', () => {
  let allProducts = JSON.parse(localStorage.getItem('products')).products;

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
              <button>Description</button>
              <p>Price: R${product.price}</p>
              <button>Add to Cart</button>
          `;

          productsContainer.appendChild(productCard);
      });
  }

  let searchInput = document.querySelector('#searchInput');
  let searchButton = document.querySelector('#searchButton');
  let sortLowHighButton = document.querySelector('#sortLowHigh');
  let sortHighLowButton = document.querySelector('#sortHighLow');
  let mediaButton = document.querySelector('#mediaButton');
  let playersButton = document.querySelector('#playersButton');
  let resetButton = document.querySelector('#resetBtn');

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

