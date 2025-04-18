document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    const products = [
        // Male perfumes
        { id: "0001", name: "Fahrenheit", gender: "male", type: "eau-de-parfum", price: 1500, description: "A warm and spicy fragrance with notes of leather, mandarin, and nutmeg.", imageUrl: "https://i.imgur.com/8XXOVbI.png" },
        { id: "0002", name: "Noir", gender: "male", type: "eau-de-parfum", price: 1300, description: "A dark and mysterious scent with hints of bergamot, vanilla, and musk.", imageUrl: "https://i.imgur.com/i8KsgD8.png" },
        { id: "0003", name: "Red", gender: "male", type: "body-mist", price: 290, description: "A fresh and invigorating fragrance with a zesty citrus opening.", imageUrl: "https://i.imgur.com/RlmSA4q.png" },
        { id: "0004", name: "Legend", gender: "male", type: "eau-de-parfum", price: 1400, description: "A woody fragrance with notes of lavender, oak, and apple.", imageUrl: "https://i.imgur.com/klTCBtE.png" },
        { id: "0005", name: "Bvlgari Extreme", gender: "male", type: "eau-de-parfum", price: 1600, description: "A sophisticated scent with a mix of citrus, spices, and wood.", imageUrl: "https://i.imgur.com/FAWxnn2.png" },
        { id: "0006", name: "CK One", gender: "male", type: "body-mist", price: 280, description: "A refreshing, unisex fragrance with notes of green tea, papaya, and bergamot.", imageUrl: "https://i.imgur.com/dprLibM.png" },
        { id: "0007", name: "Coolwater", gender: "male", type: "eau-de-parfum", price: 1300, description: "A clean and aquatic scent with refreshing notes of mint, lavender, and sandalwood.", imageUrl: "https://i.imgur.com/nGE9kX6.png" },
        { id: "0008", name: "Eternity Aqua", gender: "male", type: "eau-de-parfum", price: 1500, description: "A fresh and aquatic fragrance with notes of cucumber, citrus, and sandalwood.", imageUrl: "https://i.imgur.com/hzGskMV.png" },
        { id: "0009", name: "Acqua di Gio", gender: "male", type: "eau-de-parfum", price: 1700, description: "A classic aquatic fragrance with notes of jasmine, rosemary, and citrus.", imageUrl: "https://i.imgur.com/3GoOKik.png" },
        { id: "0010", name: "Aventus", gender: "male", type: "eau-de-parfum", price: 1850, description: "A bold fragrance with a blend of pineapple, birch, and musk.", imageUrl: "https://i.imgur.com/xxhvedv.png" },
        { id: "0011", name: "Benetton", gender: "male", type: "body-mist", price: 300, description: "A simple and fresh scent with citrus notes and light florals.", imageUrl: "https://i.imgur.com/lJWyvGd.png" },
        { id: "0012", name: "Bvlgari Aqua Amara", gender: "male", type: "eau-de-parfum", price: 1550, description: "A fresh and citrusy fragrance with hints of mandarin, neroli, and patchouli.", imageUrl: "https://i.imgur.com/QF3fi0m.png" },

        // Female perfumes
        { id: "0013", name: "Vanilla Lace", gender: "female", type: "body-mist", price: 250, description: "A sweet, floral fragrance with rich vanilla notes.", imageUrl: "https://i.imgur.com/1Xi6uYC.png" },
        { id: "0014", name: "Weekend", gender: "female", type: "eau-de-parfum", price: 1200, description: "A fresh and light fragrance with a blend of citrus, florals, and musk.", imageUrl: "https://i.imgur.com/nLtDzaJ.png" },
        { id: "0015", name: "Eclat d'Arpege", gender: "female", type: "eau-de-parfum", price: 1450, description: "A floral fragrance with notes of peach, lilac, and green tea.", imageUrl: "https://i.imgur.com/UGqNkcW.png" },
        { id: "0016", name: "Incanto Shine", gender: "female", type: "body-mist", price: 300, description: "A fruity and floral fragrance with notes of passionfruit, jasmine, and orange.", imageUrl: "https://i.imgur.com/J3UWAfD.png" },
        { id: "0017", name: "Fantasy", gender: "female", type: "body-mist", price: 275, description: "A sweet and fruity fragrance with notes of kiwi, cupcake, and jasmine.", imageUrl: "https://i.imgur.com/yO8378U.png" },
        { id: "0018", name: "Green Tea", gender: "female", type: "body-mist", price: 290, description: "A refreshing and clean fragrance with green tea, lemon, and mint.", imageUrl: "https://i.imgur.com/NMWgPfF.png" },
        { id: "0019", name: "Omnia Amethyste", gender: "female", type: "eau-de-parfum", price: 1600, description: "A delicate floral fragrance with notes of iris, rose, and pomegranate.", imageUrl: "https://i.imgur.com/vNyEnpU.png" },
        { id: "0020", name: "Light Blue", gender: "female", type: "eau-de-parfum", price: 1400, description: "A vibrant and refreshing fragrance with notes of Sicilian lemon, apple, and cedarwood.", imageUrl: "https://i.imgur.com/nC1jYpn.png" },
        { id: "0021", name: "Bombshell", gender: "female", type: "body-mist", price: 350, description: "A floral and fruity fragrance with notes of purple passionfruit, Shangri-la peony, and vanilla orchid.", imageUrl: "https://i.imgur.com/Ps0Mme1.png" },
        { id: "0022", name: "Bright Crystal", gender: "female", type: "eau-de-parfum", price: 1550, description: "A fresh, floral fragrance with peony, pomegranate, and lotus.", imageUrl: "https://i.imgur.com/I5ZArRs.png" },
        { id: "0023", name: "Chance", gender: "female", type: "eau-de-parfum", price: 1650, description: "A sophisticated fragrance with notes of jasmine, rose, and patchouli.", imageUrl: "https://i.imgur.com/UjUVyEm.png" },
        { id: "0024", name: "Cucumber Melon", gender: "female", type: "body-mist", price: 270, description: "A refreshing and light fragrance with cucumber and melon notes.", imageUrl: "https://i.imgur.com/QlChxuU.png" }
    ];

    const product = products.find(p => p.id === productId);

    if (product) {
        updateProductDetails(product);
        document.getElementById('add-to-cart').addEventListener('click', () => addToCart(product));
    } else {
        showProductNotFound();
    }

    document.getElementById('view-cart-btn').addEventListener('click', toggleCartDropdown);
    updateCartCount();
});

function updateProductDetails(product) {
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = `₱${product.price.toLocaleString()}`;
    document.getElementById("product-description").textContent = product.description;

    const img = document.getElementById("product-image");
    img.src = product.imageUrl;
    img.onerror = () => {
        img.src = 'fallback-image.jpg'; // Add a fallback image for missing product images
    };
}

function showProductNotFound() {
    document.getElementById("product-name").textContent = "Product not found.";
    document.getElementById("product-image").style.display = 'none';
    document.getElementById("product-description").textContent = "Sorry, this product doesn't exist.";
}

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const index = cart.findIndex(item => item.id === product.id);
    if (index === -1) {
        cart.push({ id: product.id, name: product.name, price: product.price, quantity: 1 });
        showToast(`${product.name} added to cart.`);
    } else {
        cart[index].quantity += 1;
        showToast(`Increased quantity of ${product.name}.`);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function removeItemFromCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showToast('Item removed from cart.');
    toggleCartDropdown();
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

function toggleCartDropdown() {
    const dropdown = document.getElementById('cart-dropdown');
    dropdown.classList.toggle('hidden');

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const container = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('cart-total');

    container.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.className = 'cart-item';
        li.innerHTML = `
            <span>${item.name}</span>
            <span>₱${item.price.toLocaleString()}</span>
            <span>Quantity: <button class="decrease" data-id="${item.id}">-</button> ${item.quantity} <button class="increase" data-id="${item.id}">+</button></span>
            <button class="remove-item" data-id="${item.id}">Remove</button>
        `;
        container.appendChild(li);
        total += item.price * item.quantity;
    });

    totalDisplay.textContent = `Total: ₱${total.toLocaleString()}`;

    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');
            removeItemFromCart(id);
        });
    });

    document.querySelectorAll('.increase').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');
            changeItemQuantity(id, 1);
        });
    });

    document.querySelectorAll('.decrease').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');
            changeItemQuantity(id, -1);
        });
    });
}

function changeItemQuantity(id, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const index = cart.findIndex(item => item.id === id);

    if (index !== -1) {
        if (cart[index].quantity + change > 0) {
            cart[index].quantity += change;
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            toggleCartDropdown();
            showToast(`${cart[index].name} quantity updated.`);
        }
    }
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
}
