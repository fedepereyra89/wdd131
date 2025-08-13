
const items = [
    
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

    
    { page: 'recommendations', name: '1. Fill a thermos with hot water', description: 'So that the temperature of your mate is at its right point, make sure that it is neither lukewarm nor boiling. The advisable thing is that it is between 80 and 90º C.', image: 'images/mate_1.png' },
    { page: 'recommendations', name: '2. Throw yerba into the mate and shake', description: 'Fill up to three quarters of the container. Then, cover the mouth of the mate and shake it a couple of times to remove the dust.', image: 'images/mate_2.png' },
    { page: 'recommendations', name: '3. Lie down, form a hole and pour warm water', description: 'Lay the yerba on one of the walls of the mate to form a hole in the opposite wall, and then gently pour warm water.', image: 'images/mate_3.png' },
    { page: 'recommendations', name: '4. Insert the bulb', description: 'Cover the upper hole of the bulb with a finger and place it in the hole you created earlier. This prevents the mate from being covered.', image: 'images/mate_4.png' },
    { page: 'recommendations', name: '5. "Cebar" Prime or pour the water', description: 'Now with the ideal temperature, begin to pour the water. Little water should be placed in turn and always in the same place.', image: 'images/mate_5.png' },
    { page: 'recommendations', name: '6. Share a moment', description: 'The round begins and it is essential to respect the turns. Share some good dunks and celebrate that precise moment.', image: 'images/mate_6.png' }
];


function initializePage() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    
    if (currentPage.includes('index') || currentPage === '') {
        setupHomePage();
    } else if (currentPage.includes('products')) {
        setupProductsPage();
    } else if (currentPage.includes('recommendations')) {
        setupRecommendationsPage();
    }
    
    
    initializeBackToTop();
    
    
    initializeLoginForm();
}


function setupHomePage() {
    const homeGrid = document.querySelector('.home-grid');
    if (!homeGrid) return;

    const productsToShow = [
        items.find(item => item.name === 'Hexagonal Mate'),
        items.find(item => item.name === 'Carob Tree Mate'),
        items.find(item => item.name === 'Personalized Mate')
    ];
    
    const validProducts = productsToShow.filter(item => item);

    const productHTML = validProducts.map(product => `
        <section class="home-card">
            <img class="card-img" src="${product.image}" alt="${product.name}" loading="lazy">
            <h2>${product.name}</h2>
        </section>
    `).join('');

    homeGrid.innerHTML = productHTML;

    
    updateWelcomeMessage();
}


function setupProductsPage() {
    const productGrid = document.querySelector('.products-grid');
    if (!productGrid) return;

    const productsToShow = items.filter(item => item.page === 'products');

    const productHTML = productsToShow.map(product => `
        <section class="product-card">
            <img class="card-img" src="${product.image}" alt="${product.name}" loading="lazy">
            <h2>${product.name}</h2>
            <p class="price">Price: $${product.price}</p>
        </section>
    `).join('');

    productGrid.innerHTML = productHTML;
}


function setupRecommendationsPage() {
    const recommendationsGrid = document.querySelector('.recommendations-grid');
    if (!recommendationsGrid) return;

    const recsToShow = items.filter(item => item.page === 'recommendations');

    const recsHTML = recsToShow.map(rec => `
        <section class="recommendation-card">
            <img class="card-imgr" src="${rec.image}" alt="${rec.name}" loading="lazy">
            <h2>${rec.name}</h2>
            <p>${rec.description}</p>
        </section>
    `).join('');

    recommendationsGrid.innerHTML = recsHTML;
}


function updateWelcomeMessage() {
    const welcomeMessage = document.getElementById('welcome-message');
    if (!welcomeMessage) return;
    
    const storedUser = localStorage.getItem('username');
    if (storedUser) {
        welcomeMessage.textContent = `Welcome back, ${storedUser}!`;
    } else {
        welcomeMessage.textContent = 'Welcome to Arkadia Deco!';
    }
}


function initializeBackToTop() {
    const myBtn = document.getElementById("myBtn");
    if (!myBtn) return;

    
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            myBtn.style.display = "block";
        } else {
            myBtn.style.display = "none";
        }
    };
}


function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}


function initializeLoginForm() {
    const modal = document.getElementById('id01');
    const loginForm = document.querySelector('.modal-content.animate');
    
    if (!modal || !loginForm) return;

    
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.querySelector('input[name="uname"]').value;
        const password = document.querySelector('input[name="psw"]').value;
        
        if (username && password) {
            
            localStorage.setItem('username', username);
            
            
            alert(`Welcome, ${username}!`);
            
            
            modal.style.display = "none";
            
            
            updateWelcomeMessage();
            
            
            loginForm.reset();
        }
    });
}


function toggleLoginModal(show) {
    const modal = document.getElementById('id01');
    if (modal) {
        modal.style.display = show ? "block" : "none";
    }
}


function filterProductsByCategory(category) {
    return items.filter(item => item.page === 'products' && item.category === category);
}


function searchProducts(searchTerm) {
    return items.filter(item => 
        item.page === 'products' && 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
}


function getProductByName(name) {
    return items.find(item => item.page === 'products' && item.name === name);
}


function getProductsByPriceRange(minPrice, maxPrice) {
    return items.filter(item => 
        item.page === 'products' && 
        item.price >= minPrice && 
        item.price <= maxPrice
    );
}


function getProductStats() {
    const products = items.filter(item => item.page === 'products');
    const prices = products.map(product => product.price).filter(price => price > 0);
    
    return {
        totalProducts: products.length,
        averagePrice: prices.reduce((sum, price) => sum + price, 0) / prices.length,
        minPrice: Math.min(...prices),
        maxPrice: Math.max(...prices),
        categories: [...new Set(products.map(product => product.category))]
    };
}


document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    
    
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});


window.addEventListener('resize', function() {
    
    console.log('Window resized to:', window.innerWidth, 'x', window.innerHeight);
});


document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('Page is now hidden');
    } else {
        console.log('Page is now visible');
    }
});


window.topFunction = topFunction;
window.toggleLoginModal = toggleLoginModal;