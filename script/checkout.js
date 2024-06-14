document.addEventListener('DOMContentLoaded', () => {
    function displayCheckoutTable() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let checkoutTable = document.createElement('table');
        checkoutTable.className = 'table table-striped';

        checkoutTable.innerHTML = `
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Model</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody id="checkoutBody">
            </tbody>
            <br>
            <p id="overTotal"></p>
            <button id="purchaseNowButton">Purchase Now</button>
        `;


        let tableBody = checkoutTable.querySelector('#checkoutBody');


        function calculateTotalPrice(price, quantity) {
            return price * quantity;
        }


        function updateTotalPrice(productRow, quantity) {
            let priceCell = productRow.querySelector('.product-price');
            let totalPriceCell = productRow.querySelector('.total-price');
            let price = parseFloat(priceCell.dataset.price);
            let total = calculateTotalPrice(price, quantity);
            totalPriceCell.textContent = `R${total}`;
        }

        function handleQuantityChange(productRow, increase) {
            let quantityCell = productRow.querySelector('.product-quantity');
            let quantity = parseInt(quantityCell.textContent);
            if (increase) {
                quantity++;
            } else {
                if (quantity > 1) {
                    quantity--;
                }
            }
            quantityCell.textContent = quantity;
            updateTotalPrice(productRow, quantity);

            updateCart(productRow.dataset.productId, quantity);
        }

        function updateCart(productId, quantity) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            let productIndex = cart.findIndex(item => item.id === productId);
            if (productIndex !== -1) {
                cart[productIndex].quantity = quantity;
                localStorage.setItem('cart', JSON.stringify(cart));
            }
        }

        cart.forEach(product => {
            let productRow = document.createElement('tr');
            productRow.setAttribute('data-product-id', product.id);
            productRow.innerHTML = `
                <td><img src="${product.image}" alt="${product.name} ${product.model}" style="max-width: 100px;"></td>
                <td>${product.name}</td>
                <td>${product.model}</td>
                <td>${product.type}</td>
                <td class="product-price" data-price="${product.price}">R${product.price}</td>
                <td class="product-quantity">${product.quantity}</td>
                <td class="total-price">R${calculateTotalPrice(product.price, product.quantity)}</td>
                <td>
                    <button class="btn btn-sm btn-outline-primary" onclick="handleQuantityChange(this.parentElement.parentElement, true)">+</button>
                    <button class="btn btn-sm btn-outline-primary" onclick="handleQuantityChange(this.parentElement.parentElement, false)">-</button>
                </td>
            `;
            tableBody.appendChild(productRow);
        });

        document.querySelector('main').appendChild(checkoutTable);
    }

    displayCheckoutTable();

    document.querySelector('#purchaseNowButton').addEventListener('click', () => {
        alert('Thank you for your purchase! Best regards.');
        localStorage.removeItem('cart');
        displayCheckoutTable();
    });
});
