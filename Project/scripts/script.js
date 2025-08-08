// ===========================================
// script.js - CÓDIGO BÁSICO PARA TODO EL SITIO
// ===========================================

// -------------------------------------------
// 1. Array de productos y recomendaciones
// -------------------------------------------
const items = [

    // Products for the 'Products' page
    { page: 'products', name: 'Hexagonal Mate', category: 'wood', price: 1500, image: 'images/Hexagonal.jpg' },
    { page: 'products', name: 'Carob Tree Mate', category: 'wood', price: 1200, image: 'images/mate-algarrobo.jpg' },
    { page: 'products', name: 'Personalized Mate', category: 'wood', price: 1800, image: 'images/rsz_mate-personalizado.jpg' },
    { page: 'products', name: 'Mate and Yerbatero Set', category: 'yerbatero', price: 2500, image: 'images/Juego-mate-y-yerbatero.jpeg' },
    { page: 'products', name: 'Gift Box', category: 'box', price: 3000, image: 'images/Box-regalo-bolsa.jpg' },
    { page: 'products', name: 'Nordic Mate', category: 'wood', price: 1700, image: 'images/rsz_mate-nordico.jpg' },
    { page: 'products', name: 'Painted Mates', category: 'wood', price: 1600, image: 'images/cuatro-mates-claros.jpg' },
    { page: 'products', name: 'Bowl Mate Box', category: 'box', price: 2800, image: 'images/mate-cuenco-box.jpg' },
    { page: 'products', name: 'Products in sight', category: 'general', price: 0, image: 'images/productos-a-la-vista.jpg' },
    { page: 'products', name: 'Blue Triangle Mate', category: 'wood', price: 1600, image: 'images/Mate-triangulo-azul.jpg' },
    { page: 'products', name: 'Mate Box', category: 'box', price: 2500, image: 'images/Mate-box.jpg' },
    { page: 'products', name: 'Dark Mates', category: 'wood', price: 1600, image: 'images/cuatro-mates-oscuros.jpg' },

    // Recommendations for the 'Recommenations' page
    { page: 'recommenations', name: '1. Fill a thermos with hot water', description: 'So that the temperature of your mate is at its right point, make sure that it is neither lukewarm nor boiling. The advisable thing is that it is between 80 and 90º C.', image: 'images/mate_1.png' },
    { page: 'recommenations', name: '2. Throw yerba into the mate and shake', description: 'Fill up to three quarters of the container. Then, cover the mouth of the mate and shake it a couple of times to remove the dust.', image: 'images/mate_2.png' },
    { page: 'recommenations', name: '3. Lie down, form a hole and pour warm water', description: 'Lay the yerba on one of the walls of the mate to form a hole in the opposite wall, and then gently pour warm water.', image: 'images/mate_3.png' },
    { page: 'recommenations', name: '4. Insert the bulb', description: 'Cover the upper hole of the bulb with a finger and place it in the hole you created earlier. This prevents the mate from being covered.', image: 'images/mate_4.png' },
    { page: 'recommenations', name: '5. "Cebar" Prime or pour the water', description: 'Now with the ideal temperature, begin to pour the water. Little water should be placed in turn and always in the same place.', image: 'images/mate_5.png' },
    { page: 'recommenations', name: '6. Share a moment', description: 'The round begins and it is essential to respect the turns. Share some good dunks and celebrate that precise moment.', image: 'images/mate_6.png' }
];

// -------------------------------------------
// 2. Funciones principales
// -------------------------------------------

// Función para inicializar las funcionalidades de la página actual
function initializePage() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    
    if (currentPage.includes('project')) {
        setupHomePage();
    } else if (currentPage.includes('products')) {
        setupProductsPage();
    } else if (currentPage.includes('recommenations')) {
        setupRecommendationsPage();
    }
}

// =====================================================================
// === Funciones para cada página (DOM, Eventos, localStorage) ===
// =====================================================================

// Lógica de la página de inicio
function setupHomePage() {
    const homeGrid = document.querySelector('.home-grid');
    if (!homeGrid) return;

    const productsToShow = [
        items.find(item => item.name === 'Hexagonal Mate'),
        items.find(item => item.name === 'Carob Tree Mate'),
        items.find(item => item.name === 'Mate Hexagonal Algarrobo')
    ];
    
    const validProducts = productsToShow.filter(item => item);

    const productHTML = validProducts.map(product => `
        <section class="home-card">
            <img class="card-img" src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
        </section>
    `).join('');

    homeGrid.innerHTML = productHTML;

    const welcomeMessage = document.getElementById('welcome-message');
    const storedUser = localStorage.getItem('username');
    if (welcomeMessage) {
        if (storedUser) {
            welcomeMessage.textContent = `Welcome back, ${storedUser}!`;
        } else {
            welcomeMessage.textContent = 'Welcome to Arkadia Deco!';
        }
    }
}

// Lógica de la página de productos
function setupProductsPage() {
    const productGrid = document.querySelector('.products-grid');
    if (!productGrid) return;

    const productsToShow = items.filter(item => item.page === 'products');

    const productHTML = productsToShow.map(product => `
        <section class="product-card">
            <img class="card-img" src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
        </section>
    `).join('');

    productGrid.innerHTML = productHTML;
}

// Lógica de la página de recomendaciones
function setupRecommendationsPage() {
    const recommendationsGrid = document.querySelector('.recommenations-grid');
    if (!recommendationsGrid) return;

    const recsToShow = items.filter(item => item.page === 'recommenations');

    const recsHTML = recsToShow.map(rec => `
        <section class="recommendation-card">
            <img class="card-imgr" src="${rec.image}" alt="${rec.name}">
            <h2>${rec.name}</h2>
            <p>${rec.description}</p>
        </section>
    `).join('');

    recommendationsGrid.innerHTML = recsHTML;
}

// ===========================================
// === Inicialización de la página ===
// ===========================================

// Escuchamos el evento de carga de la página
document.addEventListener('DOMContentLoaded', initializePage);

