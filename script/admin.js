let products = JSON.parse(localStorage.getItem('products')).products;

function displayAdminProducts(productsData) {
    let productsTable = document.querySelector('#productsTable').getElementsByTagName('tbody')[0];
    productsTable.innerHTML = '';

    productsData.forEach(product => {
        let row = productsTable.insertRow();

        row.innerHTML = `
            <td><img src="${product.image}" alt="${product.name}" width="50"></td>
            <td>${product.name}</td>
            <td>${product.model}</td>
            <td>${product.type}</td>
            <td>R${product.price}</td>
            <td>
                <button class="btn btn-sm btn-warning editBtn" data-id="${product.id}">Edit</button>
                <button class="btn btn-sm btn-danger deleteBtn" data-id="${product.id}">Delete</button>
            </td>
        `;

        row.querySelector('.editBtn').addEventListener('click', () => {
            openEditModal(product);
        });

        row.querySelector('.deleteBtn').addEventListener('click', () => {
            deleteProduct(product.id);
        });
    });
}

function openEditModal(product) {
    document.querySelector('#productId').value = product.id;
    document.querySelector('#productName').value = product.name;
    document.querySelector('#productModel').value = product.model;
    document.querySelector('#productType').value = product.type;
    document.querySelector('#productPrice').value = product.price;
    document.querySelector('#productImage').value = product.image;
    document.querySelector('#productDescription').value = product.description;

    let modal = new bootstrap.Modal(document.querySelector('productModal'));
    modal.show();
}

document.querySelector('#productForm').addEventListener('submit', (event) => {
    event.preventDefault();
    
    let id = document.querySelector('#productId').value;
    let name = document.querySelector('#productName').value;
    let model = document.querySelector('#productModel').value;
    let type = document.querySelector('#productType').value;
    let price = document.querySelector('#productPrice').value;
    let image = document.querySelector('#productImage').value;
    let description = document.querySelector('#productDescription').value;

    if (id) {

        updateProduct(id, { name, model, type, price, image, description });
    } else {

        addProduct({ name, model, type, price, image, description });
    }

    const modal = bootstrap.Modal.getInstance(document.getElementById('productModal'));
    modal.hide();
    displayAdminProducts(products);
});

function updateProduct(id, updatedProduct) {
    products = products.map(product => 
        product.id === id ? { ...product, ...updatedProduct } : product
    );
    localStorage.setItem('products', JSON.stringify({ products }));
    displayAdminProducts(products);
    displayProducts(products);
}

function addProduct(newProduct) {
    let id = 'P' + (products.length + 1).toString();
    products.push({ id, ...newProduct });
    localStorage.setItem('products', JSON.stringify({ products }));
    displayAdminProducts(products);
    displayProducts(products);
}