// Sample data for food items
let items = [
    { name: "Classic Burger (Large)", code: "B1001", price: 750.00, discount: 0, category: "Burgers", expiry: "2024-12-31", image: "burger1.jpg" },
    { name: "Classic Burger (Regular)", code: "B1002", price: 1500.00, discount: 0, category: "Burgers", expiry: "2024-01-15", image: "burger2.jpg" },
    { name: "Turkey Burger", code: "B1003", price: 1600.00, discount: 15, category: "Burgers", expiry: "2024-12-20", image: "burger3.jpg" },
    { name: "Chicken Burger (Large)", code: "B1004", price: 1400.00, discount: 0, category: "Burgers", expiry: "2024-12-20", image: "burger4.jpg" },
    { name: "Chicken Burger (Regular)", code: "B1005", price: 800.00, discount: 0, category: "Burgers", expiry: "2024-01-05", image: "burger5.jpg" },
    { name: "Cheese Burger (Large)", code: "B1006", price: 1000.00, discount: 20, category: "Burgers", expiry: "2024-12-31", image: "burger6.jpg" },
    { name: "Cheese Burger (Regular)", code: "B1007", price: 600.00, discount: 0, category: "Burgers", expiry: "2024-12-25", image: "burger7.jpg" },
    { name: "Bacon Burger", code: "B1008", price: 650.00, discount: 0, category: "Burgers", expiry: "2023-12-15", image: "burger8.jpg" },
    { name: "Shawarma Burger", code: "B1009", price: 800.00, discount: 15, category: "Burgers", expiry: "2024-12-30", image: "burger9.jpg" },
    { name: "Olive Burger", code: "B1010", price: 1800.00, discount: 0, category: "Burgers", expiry: "2024-12-20", image: "burger10.jpg" },
    { name: "Double-Cheese Burger", code: "B1012", price: 1250.00, discount: 20, category: "Burgers", expiry: "2024-12-20", image: "burger11.jpg" },
    { name: "Crispy Chicken Burger (Regular)", code: "B1013", price: 1200.00, discount: 0, category: "Burgers", expiry: "2024-12-15", image: "burger12.jpg" },
    { name: "Crispy Chicken Burger (Large)", code: "B1014", price: 1600.00, discount: 10, category: "Burgers", expiry: "2024-12-25", image: "burger13.jpg" },
    { name: "Paneer Burger", code: "B1015", price: 900.00, discount: 0, category: "Burgers", expiry: "2024-12-15", image: "burger14.jpg" },

    // Submarines
    { name: "Crispy Chicken Submarine (Large)", code: "B1016", price: 2000.00, discount: 0, category: "Submarines", expiry: "2024-12-10", image: "submarine1.jpg" },
    { name: "Crispy Chicken Submarine (Regular)", code: "B1017", price: 1500.00, discount: 0, category: "Submarines", expiry: "2024-12-20", image: "submarine2.jpg" },
    { name: "Chicken Submarine (Large)", code: "B1018", price: 1800.00, discount: 3, category: "Submarines", expiry: "2024-12-15", image: "submarine3.jpg" },
    { name: "Chicken Submarine (Regular)", code: "B1019", price: 1400.00, discount: 0, category: "Submarines", expiry: "2024-12-30", image: "submarine4.jpg" },
    { name: "Grinder Submarine", code: "B1020", price: 2300.00, discount: 0, category: "Submarines", expiry: "2024-12-25", image: "submarine5.jpg" },
    { name: "Cheese Submarine", code: "B1021", price: 2200.00, discount: 0, category: "Submarines", expiry: "2024-12-15", image: "submarine6.jpg" },
    { name: "Double Cheese n Chicken Submarine", code: "B1022", price: 1900.00, discount: 16, category: "Submarines", expiry: "2024-12-10", image: "submarine7.jpg" },
    { name: "Special Horgie Submarine", code: "B1023", price: 2800.00, discount: 0, category: "Submarines", expiry: "2024-12-30", image: "submarine8.jpg" },
    { name: "MOS Special Submarine", code: "B1024", price: 3000.00, discount: 0, category: "Submarines", expiry: "2024-12-20", image: "submarine9.jpg" },

    // Fries
    { name: "Steak Fries (Large)", code: "B1025", price: 1200.00, discount: 0, category: "Fries", expiry: "2024-12-15", image: "fries1.jpg" },
    { name: "Steak Fries (Medium)", code: "B1026", price: 600.00, discount: 0, category: "Fries", expiry: "2024-12-15", image: "fries2.jpg" },
    { name: "French Fries (Large)", code: "B1027", price: 800.00, discount: 0, category: "Fries", expiry: "2024-12-15", image: "fries3.jpg" },
    { name: "French Fries (Medium)", code: "B1028", price: 650.00, discount: 0, category: "Fries", expiry: "2024-12-25", image: "fries4.jpg" },
    { name: "French Fries (Small)", code: "B1029", price: 450.00, discount: 0, category: "Fries", expiry: "2024-12-15", image: "fries5.jpg" },
    { name: "Sweet Potato Fries (Large)", code: "B1030", price: 600.00, discount: 0, category: "Fries", expiry: "2024-12-25", image: "fries6.jpg" },

    // Pasta
    { name: "Chicken n Cheese Pasta", code: "B1031", price: 1600.00, discount: 15, category: "Pasta", expiry: "2024-12-15", image: "pasta1.jpg" },
    { name: "Chicken Penne Pasta", code: "B1032", price: 1700.00, discount: 0, category: "Pasta", expiry: "2024-12-12", image: "pasta2.jpg" },
    { name: "Ground Turkey Pasta Bake", code: "B1033", price: 2900.00, discount: 10, category: "Pasta", expiry: "2024-12-17", image: "pasta3.jpg" },
    { name: "Creamy Shrimp Pasta", code: "B1034", price: 2000.00, discount: 0, category: "Pasta", expiry: "2024-12-19", image: "pasta4.jpg" },
    { name: "Lemon Butter Pasta", code: "B1035", price: 1950.00, discount: 0, category: "Pasta", expiry: "2024-12-14", image: "pasta5.jpg" },
    { name: "Tagliatelle Pasta", code: "B1036", price: 2400.00, discount: 0, category: "Pasta", expiry: "2024-12-19", image: "pasta6.jpg" },
    { name: "Baked Ravioli", code: "B1037", price: 2000.00, discount: 1, category: "Pasta", expiry: "2024-12-19", image: "pasta7.jpg" },

    // Chicken
    { name: "Fried Chicken (Small)", code: "B1038", price: 1200.00, discount: 0, category: "Chicken", expiry: "2024-12-25", image: "chicken1.jpg" },
    { name: "Fried Chicken (Regular)", code: "B1039", price: 2300.00, discount: 0, category: "Chicken", expiry: "2024-12-15", image: "chicken2.jpg" },
    { name: "Fried Chicken (Large)", code: "B1040", price: 3100.00, discount: 10, category: "Chicken", expiry: "2024-12-05", image: "chicken3.jpg" },
    { name: "Hot Wings (Large)", code: "B1041", price: 2400.00, discount: 5, category: "Chicken", expiry: "2024-12-27", image: "chicken4.jpg" },
    { name: "Devilled Chicken (Large)", code: "B1042", price: 900.00, discount: 0, category: "Chicken", expiry: "2024-12-29", image: "chicken5.jpg" },
    { name: "BBQ Chicken (Regular)", code: "B1043", price: 2100.00, discount: 0, category: "Chicken", expiry: "2024-12-20", image: "chicken6.jpg" },

    // Beverages
    { name: "Pepsi (330ml)", code: "B1044", price: 990.00, discount: 0, category: "Beverages", expiry: "2024-12-17", image: "pepsi.jpg" },
    { name: "Coca-Cola (330ml)", code: "B1045", price: 1230.00, discount: 5, category: "Beverages", expiry: "2024-12-15", image: "cola.jpg" },
    { name: "Sprite (330ml)", code: "B1046", price: 1500.00, discount: 0, category: "Beverages", expiry: "2024-12-18", image: "sprite.jpg" },
    { name: "Mirinda (330ml)", code: "B1047", price: 850.00, discount: 3, category: "Beverages", expiry: "2024-12-19", image: "mirinda.jpg" }
];

// Cart items
let cart = [];

// Previous orders
let orders = [];

// Customers
let customers = [];

// Order ID counter
let orderIdCounter = 1;

// Login credentials (for demonstration purposes)
const validCredentials = {
    username: "admin",
    password: "2254"
};

// Function to generate a sequential Order ID
function generateOrderId() {
    const orderId = `OD${String(orderIdCounter).padStart(4, '0')}`;
    orderIdCounter++; // Increment the counter for the next order
    return orderId;
}

// Function to handle login
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validCredentials.username && password === validCredentials.password) {
        // Hide login section
        document.getElementById('login-section').classList.add('hidden');

        // Show the main app section
        document.getElementById('app-section').classList.remove('hidden');

        // Show the navbar
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.classList.remove('hidden');
        }

        // Show the default section (e.g., Store Management)
        showSection('store-management');
        displayMenuItems();
        displayPreviousOrders();
        displayCustomers();
    } else {
        alert("Invalid username or password. Please try again.");
    }
});

// Function to display menu items categorically
function displayMenuItems(category = "All", query = "") {
    const menuItems = document.getElementById('menu-items');
    menuItems.innerHTML = '';

    // Filter items by category
    let filteredItems = category === "All" ? items : items.filter(item => item.category === category);

    // Apply search filter
    if (query) {
        filteredItems = filteredItems.filter(item =>
            item.name.toLowerCase().includes(query) ||
            item.code.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query)
        );
    }

    // Check for expired items
    const expiredItems = filteredItems.filter(item => new Date(item.expiry) < new Date());

    // Display filtered items
    filteredItems.forEach((item, index) => {
        const expiryDate = new Date(item.expiry);
        const today = new Date();
        const isExpired = expiryDate < today;

        const itemElement = document.createElement('div');
        itemElement.className = "col-md-4 mb-3";
        itemElement.innerHTML = `
            <div class="card ${isExpired ? 'bg-danger text-white' : ''}">
                <img src="${item.image}" class="card-img-top" alt="${item.name}">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">Code: ${item.code}</p>
                    <p class="card-text">Price: LKR ${item.price.toFixed(2)}</p>
                    <p class="card-text">Discount: ${item.discount}%</p>
                    <p class="card-text">Expiry: ${item.expiry} ${isExpired ? '(Expired)' : ''}</p>
                    <button onclick="editItem(${index})" class="btn btn-warning btn-sm">Edit</button>
                    <button onclick="deleteItem(${index})" class="btn btn-danger btn-sm">Delete</button>
                    <button onclick="addToOrder(${index})" class="btn btn-primary">Add to Order</button>
                </div>
            </div>
        `;
        menuItems.appendChild(itemElement);
    });

    // Notify user about expired items
    if (expiredItems.length > 0) {
        alert(`⚠️ Warning: There are ${expiredItems.length} expired items in the inventory. Please remove them.`);
    }
}

// Function to edit an item
function editItem(index) {
    const item = items[index];

    // Create a modal form for editing the item
    const editModal = document.createElement('div');
    editModal.className = "modal fade";
    editModal.id = "editModal";
    editModal.tabIndex = "-1";
    editModal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit Item</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="edit-item-form">
                        <div class="mb-3">
                            <label for="edit-item-name" class="form-label">Item Name:</label>
                            <input type="text" id="edit-item-name" class="form-control" value="${item.name}" required>
                        </div>
                        <div class="mb-3">
                            <label for="edit-item-code" class="form-label">Item Code:</label>
                            <input type="text" id="edit-item-code" class="form-control" value="${item.code}" required>
                        </div>
                        <div class="mb-3">
                            <label for="edit-item-price" class="form-label">Price (LKR):</label>
                            <input type="number" id="edit-item-price" class="form-control" value="${item.price}" required>
                        </div>
                        <div class="mb-3">
                            <label for="edit-item-discount" class="form-label">Discount (%):</label>
                            <input type="number" id="edit-item-discount" class="form-control" value="${item.discount}" required>
                        </div>
                        <div class="mb-3">
                            <label for="edit-item-category" class="form-label">Category:</label>
                            <select id="edit-item-category" class="form-control" required>
                                <option value="Burgers" ${item.category === "Burgers" ? "selected" : ""}>Burgers</option>
                                <option value="Submarines" ${item.category === "Submarines" ? "selected" : ""}>Submarines</option>
                                <option value="Fries" ${item.category === "Fries" ? "selected" : ""}>Fries</option>
                                <option value="Pasta" ${item.category === "Pasta" ? "selected" : ""}>Pasta</option>
                                <option value="Chicken" ${item.category === "Chicken" ? "selected" : ""}>Chicken</option>
                                <option value="Beverages" ${item.category === "Beverages" ? "selected" : ""}>Beverages</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="edit-item-expiry" class="form-label">Expiry Date (YYYY-MM-DD):</label>
                            <input type="date" id="edit-item-expiry" class="form-control" value="${item.expiry}" required>
                        </div>
                        <div class="mb-3">
                            <label for="edit-item-image" class="form-label">Image URL:</label>
                            <input type="text" id="edit-item-image" class="form-control" value="${item.image}" required>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onclick="saveItem(${index})">Save changes</button>
                </div>
            </div>
        </div>
    `;

    // Append the modal to the body
    document.body.appendChild(editModal);

    // Show the modal
    const modal = new bootstrap.Modal(editModal);
    modal.show();
}

// Function to save the edited item
function saveItem(index) {
    // Get the updated values from the form
    const updatedName = document.getElementById('edit-item-name').value;
    const updatedCode = document.getElementById('edit-item-code').value;
    const updatedPrice = parseFloat(document.getElementById('edit-item-price').value);
    const updatedDiscount = parseFloat(document.getElementById('edit-item-discount').value);
    const updatedCategory = document.getElementById('edit-item-category').value;
    const updatedExpiry = document.getElementById('edit-item-expiry').value;
    const updatedImage = document.getElementById('edit-item-image').value;

    // Validate all fields
    if (updatedName && updatedCode && !isNaN(updatedPrice) && !isNaN(updatedDiscount) && updatedCategory && updatedExpiry && updatedImage) {
        // Update the item in the `items` array
        items[index] = {
            name: updatedName,
            code: updatedCode,
            price: updatedPrice,
            discount: updatedDiscount,
            category: updatedCategory,
            expiry: updatedExpiry,
            image: updatedImage
        };

        // Close the modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
        modal.hide();

        // Refresh the menu display
        displayMenuItems();
    } else {
        alert("Please fill in all fields correctly.");
    }
}

// Function to delete an item
function deleteItem(index) {
    items.splice(index, 1);
    displayMenuItems();
}

// Function to add a new item
document.getElementById('add-item-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('item-name').value;
    const code = document.getElementById('item-code').value;
    const price = parseFloat(document.getElementById('item-price').value);
    const discount = parseFloat(document.getElementById('item-discount').value);
    const category = document.getElementById('item-category').value;
    const expiry = document.getElementById('item-expiry').value;
    const image = document.getElementById('item-image').value;

    if (name && code && price && discount && category && expiry && image) {
        const newItem = {
            name,
            code,
            price,
            discount,
            category,
            expiry,
            image
        };
        items.push(newItem);
        displayMenuItems();

        // Clear form
        document.getElementById('add-item-form').reset();

        // Hide image preview
        document.getElementById('image-preview').style.display = 'none';

        // Show success message
        alert("Item added successfully!");
    } else {
        alert("Please fill in all fields.");
    }
});

// Function to filter items by category
function filterItems(category) {
    displayMenuItems(category);
}

// Function to add item to the current order
function addToOrder(index) {
    const item = items[index];
    const existingItem = cart.find(cartItem => cartItem.code === item.code);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    updateCartDisplay();
}

function removeFromCart(index) {
    // Remove the item from the cart array
    cart.splice(index, 1);

    // Update the cart display
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotalDisplay = document.getElementById('cart-total');
    const finalAmountDisplay = document.getElementById('final-amount');
    cartItems.innerHTML = '';

    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const expiryDate = new Date(item.expiry);
        const today = new Date();
        const isExpired = expiryDate < today;

        const cartItemElement = document.createElement('li');
        cartItemElement.className = "list-group-item";
        cartItemElement.innerHTML = `
            <span>${item.name} (Code: ${item.code}) - LKR ${item.price.toFixed(2)} x ${item.quantity}</span>
            <span>Expiry: ${item.expiry} ${isExpired ? '(Expired)' : ''}</span>
            <span>Total: LKR ${itemTotal.toFixed(2)}</span>
            <button onclick="removeFromCart(${index})" class="btn btn-danger btn-sm">Remove</button>
        `;
        cartItems.appendChild(cartItemElement);
    });

    cartTotalDisplay.textContent = total.toFixed(2);

    // Calculate and display the final amount with discount
    applyDiscount();
}

// Function to apply discount to the order
function applyDiscount() {
    const discountInput = document.getElementById('discount');
    const cartTotalDisplay = document.getElementById('cart-total');
    const finalAmountDisplay = document.getElementById('final-amount');

    const total = parseFloat(cartTotalDisplay.textContent);
    const discountPercentage = parseFloat(discountInput.value);

    if (isNaN(discountPercentage) || discountPercentage < 0 || discountPercentage > 100) {
        alert("Please enter a valid discount percentage (0-100).");
        discountInput.value = 0; // Reset to 0 if invalid
        return;
    }

    // Calculate the final amount
    const discountAmount = total * (discountPercentage / 100);
    const finalAmount = total - discountAmount;

    // Display the final amount
    finalAmountDisplay.textContent = finalAmount.toFixed(2);
}

// Function to place the order
function placeOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items before placing an order.");
        return;
    }

    const customerId = prompt("Enter Customer ID (Contact Number):");
    if (!customerId) return;

    const discountInput = document.getElementById('discount');
    const discountPercentage = parseFloat(discountInput.value);

    // Generate a unique Order ID
    const orderId = generateOrderId();

    const order = {
        orderId, // Add the Order ID
        customerId,
        items: cart,
        total: parseFloat(document.getElementById('cart-total').textContent),
        discount: discountPercentage,
        finalAmount: parseFloat(document.getElementById('final-amount').textContent),
        timestamp: new Date().toISOString()
    };

    orders.push(order);
    cart = [];
    updateCartDisplay();
    displayPreviousOrders();
    generateReceipt(order);

    // Associate the order with the customer
    const customer = customers.find(c => c.phone === customerId);
    if (customer) {
        customer.orders.push(order);
    }
}

// Function to display previous orders
function displayPreviousOrders() {
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = '';

    orders.forEach((order, index) => {
        const orderElement = document.createElement('li');
        orderElement.className = "list-group-item";
        orderElement.innerHTML = `
            <span>Order ID: ${order.orderId} | Customer ID: ${order.customerId} | Total: LKR ${order.total.toFixed(2)}</span>
            <span>Discount: ${order.discount}% | Final Amount: LKR ${order.finalAmount.toFixed(2)}</span>
            <button onclick="editOrder(${index})" class="btn btn-warning btn-sm">Edit</button>
            <button onclick="deleteOrder(${index})" class="btn btn-danger btn-sm">Delete</button>
        `;
        orderList.appendChild(orderElement);
    });
}

// Function to edit a previous order
function editOrder(index) {
    const order = orders[index];
    cart = order.items; // Load the order items into the cart
    updateCartDisplay();

    // Remove the order from the list
    orders.splice(index, 1);
    displayPreviousOrders();
}

// Function to delete an order
function deleteOrder(index) {
    orders.splice(index, 1);
    displayPreviousOrders();
}

// Function to generate a receipt as a text file
function generateReceipt(order) {
    const receiptContent = `
        MOS Burgers Receipt
        -------------------
        Order ID: ${order.orderId}
        Customer ID: ${order.customerId}
        Date: ${new Date().toLocaleString()}

        Items:
        ${order.items.map(item => `- ${item.name} (Code: ${item.code}) x ${item.quantity} - LKR ${item.price.toFixed(2)}`).join('\n')}

        Total: LKR ${order.total.toFixed(2)}
        Discount: ${order.discount}%
        Final Amount: LKR ${order.finalAmount.toFixed(2)}
    `;

    // Create a Blob with the receipt content
    const blob = new Blob([receiptContent], { type: "text/plain" });

    // Create a download link
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `Receipt_${order.orderId}.txt`;

    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Function to add customer
document.getElementById('add-customer-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('customer-name').value;
    const phone = document.getElementById('customer-phone').value;
    const email = document.getElementById('customer-email').value;

    const newCustomer = { name, phone, email, orders: [] };
    customers.push(newCustomer);

    // Clear form
    document.getElementById('add-customer-form').reset();

    // Update display
    displayCustomers();
});

// Function to display customers
function displayCustomers() {
    const customerList = document.getElementById('customer-list');
    customerList.innerHTML = '';

    customers.forEach((customer, index) => {
        const customerElement = document.createElement('li');
        customerElement.className = "list-group-item";
        customerElement.innerHTML = `
            <span>Name: ${customer.name} | Phone: ${customer.phone} | Email: ${customer.email}</span>
            <button onclick="editCustomer(${index})" class="btn btn-warning btn-sm">Edit</button>
            <button onclick="deleteCustomer(${index})" class="btn btn-danger btn-sm">Delete</button>
            <button onclick="viewCustomerOrders('${customer.phone}')" class="btn btn-info btn-sm">View Orders</button>
        `;
        customerList.appendChild(customerElement);
    });
}

// Function to edit a customer
function editCustomer(index) {
    const customer = customers[index];

    // Create a modal form for editing the customer
    const editModal = document.createElement('div');
    editModal.className = "modal fade";
    editModal.id = "editCustomerModal";
    editModal.tabIndex = "-1";
    editModal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit Customer</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="edit-customer-form">
                        <div class="mb-3">
                            <label for="edit-customer-name" class="form-label">Customer Name:</label>
                            <input type="text" id="edit-customer-name" class="form-control" value="${customer.name}" required>
                        </div>
                        <div class="mb-3">
                            <label for="edit-customer-phone" class="form-label">Customer Phone:</label>
                            <input type="text" id="edit-customer-phone" class="form-control" value="${customer.phone}" required>
                        </div>
                        <div class="mb-3">
                            <label for="edit-customer-email" class="form-label">Customer Email:</label>
                            <input type="email" id="edit-customer-email" class="form-control" value="${customer.email}">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onclick="saveCustomer(${index})">Save changes</button>
                </div>
            </div>
        </div>
    `;

    // Append the modal to the body
    document.body.appendChild(editModal);

    // Show the modal
    const modal = new bootstrap.Modal(editModal);
    modal.show();
}

// Function to save the edited customer
function saveCustomer(index) {
    // Get the updated values from the form
    const updatedName = document.getElementById('edit-customer-name').value;
    const updatedPhone = document.getElementById('edit-customer-phone').value;
    const updatedEmail = document.getElementById('edit-customer-email').value;

    // Validate all fields
    if (updatedName && updatedPhone) {
        // Update the customer in the `customers` array
        customers[index] = {
            name: updatedName,
            phone: updatedPhone,
            email: updatedEmail
        };

        // Close the modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('editCustomerModal'));
        modal.hide();

        // Refresh the customer list display
        displayCustomers();
    } else {
        alert("Please fill in all required fields.");
    }
}

// Function to delete a customer
function deleteCustomer(index) {
    customers.splice(index, 1);
    displayCustomers();
}

// Function to view customer orders
function viewCustomerOrders(customerPhone) {
    const customer = customers.find(c => c.phone === customerPhone);
    if (!customer) {
        alert("Customer not found.");
        return;
    }

    const customerOrders = document.getElementById('customer-orders');
    customerOrders.innerHTML = '';

    if (customer.orders.length === 0) {
        const noOrdersElement = document.createElement('li');
        noOrdersElement.className = "list-group-item";
        noOrdersElement.textContent = "No orders found for this customer.";
        customerOrders.appendChild(noOrdersElement);
    } else {
        customer.orders.forEach((order, index) => {
            const orderElement = document.createElement('li');
            orderElement.className = "list-group-item";
            orderElement.innerHTML = `
                <span>Order ID: ${order.orderId} | Total: LKR ${order.total.toFixed(2)}</span>
                <span>Discount: ${order.discount}% | Final Amount: LKR ${order.finalAmount.toFixed(2)}</span>
            `;
            customerOrders.appendChild(orderElement);
        });
    }
}

// Function to show a specific section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('active');
            section.style.display = 'block'; // Ensure the section is visible
        } else {
            section.classList.remove('active');
            section.style.display = 'none'; // Hide other sections
        }
    });
}

// Function to remove all expired items
function removeExpiredItems() {
    items = items.filter(item => new Date(item.expiry) >= new Date());
    displayMenuItems();
    alert("All expired items have been removed.");
}

// Add a button to remove expired items
document.getElementById('store-management').innerHTML += `
    <button onclick="removeExpiredItems()" class="btn btn-danger mt-3">Remove Expired Items</button>
`;

// Function to search previous orders
document.getElementById('search-order').addEventListener('input', function () {
    const searchQuery = this.value.toLowerCase();
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = '';

    const filteredOrders = orders.filter(order => {
        return order.customerId.toLowerCase().includes(searchQuery) || order.orderId.toLowerCase().includes(searchQuery);
    });

    filteredOrders.forEach((order, index) => {
        const orderElement = document.createElement('li');
        orderElement.className = "list-group-item";
        orderElement.innerHTML = `
            <span>Order ID: ${order.orderId} | Customer ID: ${order.customerId} | Total: LKR ${order.total.toFixed(2)}</span>
            <span>Discount: ${order.discount}% | Final Amount: LKR ${order.finalAmount.toFixed(2)}</span>
            <button onclick="editOrder(${index})" class="btn btn-warning btn-sm">Edit</button>
            <button onclick="deleteOrder(${index})" class="btn btn-danger btn-sm">Delete</button>
        `;
        orderList.appendChild(orderElement);
    });
});

// Initial display
document.getElementById('login-section').classList.remove('hidden');
document.getElementById('app-section').classList.add('hidden');

// Function to generate a monthly report
function generateMonthlyReport() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Months are zero-based
    const currentYear = currentDate.getFullYear();

    const monthlyOrders = orders.filter(order => {
        const orderDate = new Date(order.timestamp);
        return orderDate.getMonth() + 1 === currentMonth && orderDate.getFullYear() === currentYear;
    });

    if (monthlyOrders.length === 0) {
        alert("No orders found for the current month.");
        return;
    }

    let reportContent = `
        MOS Burgers Monthly Sales Report
        --------------------------------
        Month: ${currentMonth}/${currentYear}

        Order ID | Customer ID | Total (LKR) | Discount (%) | Final Amount (LKR)
        -----------------------------------------------------------------------
    `;

    monthlyOrders.forEach(order => {
        reportContent += `
            ${order.orderId} | ${order.customerId} | ${order.total.toFixed(2)} | ${order.discount} | ${order.finalAmount.toFixed(2)}
        `;
    });

    // Add a section to rank customers with the highest rate of orders
    const customerOrderCounts = {};
    monthlyOrders.forEach(order => {
        if (customerOrderCounts[order.customerId]) {
            customerOrderCounts[order.customerId]++;
        } else {
            customerOrderCounts[order.customerId] = 1;
        }
    });

    const sortedCustomers = Object.entries(customerOrderCounts).sort((a, b) => b[1] - a[1]);

    reportContent += `

        Top Customers with the Highest Rate of Orders:
        ----------------------------------------------
        Customer ID | Number of Orders
        -----------------------------
    `;

    sortedCustomers.forEach(([customerId, orderCount]) => {
        reportContent += `
            ${customerId} | ${orderCount}
        `;
    });

    // Create a Blob with the report content
    const blob = new Blob([reportContent], { type: "text/plain" });

    // Create a download link
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `Monthly_Sales_Report_${currentMonth}_${currentYear}.txt`;

    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Function to generate an annual sales report
function generateAnnualReport() {
    const currentYear = new Date().getFullYear();

    const annualOrders = orders.filter(order => {
        const orderDate = new Date(order.timestamp);
        return orderDate.getFullYear() === currentYear;
    });

    if (annualOrders.length === 0) {
        alert("No orders found for the current year.");
        return;
    }

    let reportContent = `
        MOS Burgers Annual Sales Report
        -------------------------------
        Year: ${currentYear}

        Order ID | Customer ID | Total (LKR) | Discount (%) | Final Amount (LKR)
        -----------------------------------------------------------------------
    `;

    annualOrders.forEach(order => {
        reportContent += `
            ${order.orderId} | ${order.customerId} | ${order.total.toFixed(2)} | ${order.discount} | ${order.finalAmount.toFixed(2)}
        `;
    });

    // Create a Blob with the report content
    const blob = new Blob([reportContent], { type: "text/plain" });

    // Create a download link
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `Annual_Sales_Report_${currentYear}.txt`;

    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Function to generate a food items count report
function generateFoodItemsCountReport() {
    const itemCounts = {};

    orders.forEach(order => {
        order.items.forEach(item => {
            const itemName = item.name;
            if (itemCounts[itemName]) {
                itemCounts[itemName] += item.quantity;
            } else {
                itemCounts[itemName] = item.quantity;
            }
        });
    });

    let reportContent = `
        MOS Burgers Food Items Count Report
        -----------------------------------
        Item Name | Quantity Sold
        --------------------------
    `;

    for (const [itemName, quantity] of Object.entries(itemCounts)) {
        reportContent += `
            ${itemName} | ${quantity}
        `;
    }

    // Create a Blob with the report content
    const blob = new Blob([reportContent], { type: "text/plain" });

    // Create a download link
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `Food_Items_Count_Report.txt`;

    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Function to update the discounted price in real-time
document.getElementById('item-price').addEventListener('input', updateDiscountedPrice);
document.getElementById('item-discount').addEventListener('input', updateDiscountedPrice);

function updateDiscountedPrice() {
    const price = parseFloat(document.getElementById('item-price').value) || 0;
    const discount = parseFloat(document.getElementById('item-discount').value) || 0;
    const discountedPrice = price - (price * (discount / 100));
    document.getElementById('discounted-price').textContent = discountedPrice.toFixed(2);
}

// Function to preview the image
document.getElementById('item-image').addEventListener('input', function () {
    const imageUrl = this.value;
    const imagePreview = document.getElementById('image-preview');
    if (imageUrl) {
        imagePreview.src = imageUrl;
        imagePreview.style.display = 'block';
    } else {
        imagePreview.style.display = 'none';
    }
});

// Toggle the visibility of the Add Item form
document.getElementById('toggle-add-item-form').addEventListener('click', function () {
    const addItemFormContainer = document.getElementById('add-item-form-container');
    if (addItemFormContainer.style.display === 'none') {
        addItemFormContainer.style.display = 'block';
    } else {
        addItemFormContainer.style.display = 'none';
    }
});

// Function to handle search input changes
document.getElementById('search-menu').addEventListener('input', function () {
    const query = this.value.toLowerCase(); // Get the search query and convert to lowercase
    displayMenuItems(currentCategory, query); // Pass the query to displayMenuItems
});

// Variable to keep track of the current category filter
let currentCategory = "All";

// Function to filter items by category and search query
function displayMenuItems(category = "All", query = "") {
    currentCategory = category; // Update the current category
    const menuItems = document.getElementById('menu-items');
    menuItems.innerHTML = '';

    // Filter items by category
    let filteredItems = category === "All" ? items : items.filter(item => item.category.toLowerCase() === category.toLowerCase());

    // Apply search filter
    if (query) {
        filteredItems = filteredItems.filter(item =>
            item.name.toLowerCase().includes(query) ||
            item.code.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query)
        );
    }

    // Check for expired items
    const expiredItems = filteredItems.filter(item => new Date(item.expiry) < new Date());

    // Display filtered items
    filteredItems.forEach((item, index) => {
        const expiryDate = new Date(item.expiry);
        const today = new Date();
        const isExpired = expiryDate < today;

        const itemElement = document.createElement('div');
        itemElement.className = "col-md-4 mb-3";
        itemElement.innerHTML = `
            <div class="card ${isExpired ? 'bg-danger text-white' : ''}">
                <img src="${item.image}" class="card-img-top" alt="${item.name}">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">Code: ${item.code}</p>
                    <p class="card-text">Price: LKR ${item.price.toFixed(2)}</p>
                    <p class="card-text">Discount: ${item.discount}%</p>
                    <p class="card-text">Expiry: ${item.expiry} ${isExpired ? '(Expired)' : ''}</p>
                    <button onclick="editItem(${index})" class="btn btn-warning btn-sm">Edit</button>
                    <button onclick="deleteItem(${index})" class="btn btn-danger btn-sm">Delete</button>
                    <button onclick="addToOrder(${index})" class="btn btn-primary">Add to Order</button>
                </div>
            </div>
        `;
        menuItems.appendChild(itemElement);
    });

    // Notify user about expired items
    if (expiredItems.length > 0) {
        alert(`⚠️ Warning: There are ${expiredItems.length} expired items in the inventory. Please remove them.`);
    }
}

// Update the filterItems function to call displayMenuItems with the category and empty query
function filterItems(category) {
    displayMenuItems(category);
}