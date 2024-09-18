// Array to store inventory items and orders
let inventory = [
    { name: 'Chocolate Bar', quantity: 50, price: 1.99 },
    { name: 'Lollipop', quantity: 100, price: 0.5 },
    { name: 'Candy Cane', quantity: 30, price: 1.5 }
];
let orders = [];

// Function to handle adding candy to inventory
document.getElementById('inventory-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const candyName = document.getElementById('candy-name').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;

    const candy = { name: candyName, quantity: parseInt(quantity), price: parseFloat(price) };
    inventory.push(candy);

    updateInventoryTable(inventory);
    document.getElementById('inventory-form').reset(); // Reset form after adding candy
});

// Update the inventory table dynamically
function updateInventoryTable(inventoryToShow) {
    const tableBody = document.querySelector('#inventory-table tbody');
    tableBody.innerHTML = ''; // Clear previous table data

    inventoryToShow.forEach((candy, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${candy.name}</td>
            <td>${candy.quantity}</td>
            <td>$${candy.price.toFixed(2)}</td>
            <td><button onclick="removeCandy(${index})">Remove</button></td>
        `;

        tableBody.appendChild(row);
    });
}

// Function to remove candy from inventory
function removeCandy(index) {
    inventory.splice(index, 1); // Remove item from the inventory array
    updateInventoryTable(inventory); // Update the table after removing item
}

// Handle the search functionality for the product list
document.getElementById('search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase(); // Convert search term to lowercase for case-insensitive search
    searchInventory(searchTerm);
});

// Function to filter the inventory based on the search term
function searchInventory(searchTerm) {
    const filteredInventory = inventory.filter(item => {
        return (
            item.name.toLowerCase().includes(searchTerm) || 
            item.price.toString().includes(searchTerm)
        );
    });
    updateInventoryTable(filteredInventory); // Update the table with filtered results
}

// Handle order form submission
document.getElementById('order-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const customerName = document.getElementById('customer-name').value;
    const candyOrder = document.getElementById('candy-order').value;
    const orderQuantity = document.getElementById('order-quantity').value;

    const order = { customer: customerName, candy: candyOrder, quantity: parseInt(orderQuantity) };
    orders.push(order);

    updateOrderList(); // Update the order list display
    document.getElementById('order-form').reset(); // Reset order form after submission
});

// Update the order list display dynamically
function updateOrderList() {
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = ''; // Clear previous order data

    orders.forEach(order => {
        const listItem = document.createElement('li');
        listItem.textContent = `${order.customer} ordered ${order.quantity} of ${order.candy}`;
        orderList.appendChild(listItem);
    });
}

// Initial population of inventory table with default items
updateInventoryTable(inventory);
