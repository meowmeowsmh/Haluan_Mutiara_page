
/* =====================================================================
   HALUAN MUTIARA - INDEX PAGE WITH SMART DISPLAY
   Swipeable carousels for all categories
===================================================================== */

// Add CSS styles dynamically
const addStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
        /* Product Card Styles - FIXED FOR ZOOM */
        .product-card {
            background: white;
            border-radius: 15px;
            overflow: visible;
            box-shadow: 0 5px 15px rgba(0,0,0,0.08);
            transition: all 0.3s ease;
            height: auto;
            min-height: 420px;
            display: flex;
            flex-direction: column;
            border: 1px solid rgba(0,0,0,0.05);
        }
        
        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }
        
        .product-image {
            position: relative;
            height: 200px;
            overflow: hidden;
            flex-shrink: 0;
            background: linear-gradient(135deg, #f5f1eb 0%, #ede6dc 100%);
        }
        
        .product-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }
        
        .product-card:hover .product-image img {
            transform: scale(1.05);
        }
        
        .category-badge {
            position: absolute;
            top: 15px;
            left: 15px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1rem;
            box-shadow: 0 3px 8px rgba(0,0,0,0.2);
            z-index: 2;
        }
        
        .product-info {
            padding: 20px;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        
        .product-name {
            margin: 0 0 10px 0;
            font-size: 1.2rem;
            font-weight: 600;
            color: #333;
            line-height: 1.3;
            min-height: 2.6em;
        }
        
        .product-desc {
            margin: 0 0 20px 0;
            color: #666;
            font-size: 0.9rem;
            line-height: 1.4;
            flex: 1;
            min-height: 4.2em;
        }
        
        .product-specs {
            margin-bottom: 15px;
        }
        
        .wood-type {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            background: rgba(139, 69, 19, 0.08);
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.85rem;
            color: #8B4513;
        }
        
        .wood-type i {
            color: #8B4513;
        }
        
        .product-footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: auto;
            padding-top: 15px;
            padding-bottom: 10px;
            border-top: 1px solid rgba(0,0,0,0.05);
        }
        
        .product-price {
            font-size: 1.3rem;
            font-weight: 700;
            color: #2c3e50;
        }
        
        .view-details-btn {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 8px 20px;
            border-radius: 25px;
            cursor: pointer;
            font-weight: 500;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 0.3s ease;
        }
        
        .view-details-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }
        
        /* Swiper Custom Styles */
        .swiper {
            width: 100%;
            min-height: 420px;
        }
        
        .swiper-slide {
            height: auto;
        }
        
        .swiper-pagination-bullet {
            background: #ccc;
            opacity: 1;
        }
        
        .swiper-pagination-bullet-active {
            background: #667eea;
        }
        
        .swiper-button-prev,
        .swiper-button-next {
            background: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
            border: 1px solid rgba(0,0,0,0.05);
        }
        
        .swiper-button-prev:after,
        .swiper-button-next:after {
            font-size: 1rem;
            color: #333;
        }
        
        /* Modal Styles - BEAUTIFUL REDESIGN */
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.85);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
            padding: 20px;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .modal-overlay.active {
            opacity: 1;
            visibility: visible;
        }
        
        .modal-content {
            background: white;
            width: 90%;
            max-width: 800px;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            transform: translateY(20px);
            transition: transform 0.3s ease;
            max-height: 90vh;
            overflow-y: auto;
        }
        
        .modal-overlay.active .modal-content {
            transform: translateY(0);
        }
        
        .modal-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 25px 30px;
            position: relative;
        }
        
        .modal-title-wrapper {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        
        .modal-title-wrapper h2 {
            margin: 0;
            font-size: 1.8rem;
            font-weight: 700;
            color: white;
        }
        
        .modal-category {
            display: inline-block;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            padding: 6px 16px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .close-modal {
            position: absolute;
            top: 20px;
            right: 20px;
            background: rgba(255, 255, 255, 0.2);
            border: none;
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            font-size: 1.2rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }
        
        .close-modal:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: rotate(90deg);
        }
        
        .modal-body {
            padding: 30px;
        }
        
        .modal-layout {
            display: grid;
            grid-template-columns: 1fr;
            gap: 30px;
        }
        
        @media (min-width: 768px) {
            .modal-layout {
                grid-template-columns: 1fr 1fr;
            }
        }
        
        .modal-image-container {
            background: #f8f9fa;
            border-radius: 12px;
            padding: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 300px;
            overflow: hidden;
        }
        
        .modal-image-container img {
            max-width: 100%;
            max-height: 350px;
            object-fit: contain;
            border-radius: 8px;
            transition: transform 0.5s ease;
        }
        
        .modal-image-container img:hover {
            transform: scale(1.05);
        }
        
        .modal-details {
            display: flex;
            flex-direction: column;
        }
        
        .modal-description {
            font-size: 1rem;
            line-height: 1.6;
            color: #555;
            margin-bottom: 25px;
            padding-bottom: 25px;
            border-bottom: 2px solid #f0f0f0;
        }
        
        .details-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 15px;
            margin-bottom: 30px;
        }
        
        .detail-item {
            background: #f8f9fa;
            padding: 18px 20px;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            border-left: 4px solid #667eea;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .detail-item:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .detail-label {
            font-size: 0.85rem;
            font-weight: 600;
            color: #667eea;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .detail-label i {
            font-size: 1rem;
        }
        
        .detail-value {
            font-size: 1rem;
            font-weight: 500;
            color: #333;
            line-height: 1.4;
        }
        
        .modal-actions {
            display: flex;
            gap: 15px;
            margin-top: auto;
        }
        
        .modal-btn {
            flex: 1;
            padding: 15px 25px;
            border-radius: 12px;
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            text-decoration: none;
            border: none;
            min-height: 50px;
        }
        
        .modal-btn.primary {
            background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
            color: white;
        }
        
        .modal-btn.primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(37, 211, 102, 0.3);
        }
        
        .modal-btn.secondary {
            background: #f8f9fa;
            color: #333;
            border: 2px solid #ddd;
        }
        
        .modal-btn.secondary:hover {
            background: #667eea;
            color: white;
            border-color: #667eea;
        }
        
        /* Zoom fixes */
        @media (min-resolution: 120dpi) {
            .product-card {
                min-height: 450px;
            }
            
            .product-footer {
                padding-bottom: 15px;
            }
        }
    `;
    document.head.appendChild(style);
};

// COMPLETE PRODUCT DATA - ALL 24 PRODUCTS
const PRODUCTS = [
    {
        id: 1,
        name: "Ceiling Paneling",
        description: "High-quality hardwood for ceiling applications",
        price: "XX",
        category: "ceiling",
        woodType: "Merbau",
        material: "Premium Malaysian Hardwood",
        dimensions: "Various sizes available",
        finish: "Natural wood finish",
        application: "Ceiling installations",
        image: "Images/timbereality-haluan-mutiara-ceiling-paneling.jpg"
    },
    {
        id: 2,
        name: "Door Frame Lipping",
        description: "Durable hardwood for door frames",
        price: "XX",
        category: "mouldings",
        woodType: "Chengal",
        material: "Solid Malaysian Hardwood",
        dimensions: "Various sizes available",
        finish: "Smooth polished",
        application: "Door frames and edges",
        image: "Images/timbereality-haluan-mutiara-door-frame-lipping.jpg"
    },
    {
        id: 3,
        name: "Handrail Type 1",
        description: "Premium handrail for staircases",
        price: "XX",
        category: "handrails",
        woodType: "Balau",
        material: "Premium Hardwood",
        dimensions: "Various sizes available",
        finish: "Polished smooth",
        application: "Staircase handrails",
        image: "Images/timbereality-haluan-mutiara-handrail-type-1.jpg"
    },
    {
        id: 4,
        name: "Handrail Type 2",
        description: "Smooth polished handrail",
        price: "XX",
        category: "handrails",
        woodType: "Merbau",
        material: "Malaysian Hardwood",
        dimensions: "Various sizes available",
        finish: "High gloss polish",
        application: "Staircase and balcony rails",
        image: "Images/timbereality-haluan-mutiara-handrail-type-2.jpg"
    },
    {
        id: 5,
        name: "Handrail Type 3",
        description: "Contemporary handrail design",
        price: "XX",
        category: "handrails",
        woodType: "Keruing",
        material: "Hardwood",
        dimensions: "Various sizes available",
        finish: "Matte finish",
        application: "Modern staircase designs",
        image: "Images/timbereality-haluan-mutiara-handrail-type-3.jpg"
    },
    {
        id: 6,
        name: "Handrail Type 4",
        description: "Modern 3D printed handrail",
        price: "XX",
        category: "handrails",
        woodType: "Chengal",
        material: "Premium Hardwood",
        dimensions: "Various sizes available",
        finish: "3D printed texture",
        application: "Contemporary designs",
        image: "Images/timbereality-haluan-mutiara-handrail-type-4.jpg"
    },
    {
        id: 7,
        name: "Nosing",
        description: "Stair nosing for safety",
        price: "XX",
        category: "mouldings",
        woodType: "Balau",
        material: "Durable Hardwood",
        dimensions: "Various sizes available",
        finish: "Anti-slip surface",
        application: "Stair edges",
        image: "Images/timbereality-haluan-mutiara-nosing.jpg"
    },
    {
        id: 8,
        name: "Skirting Type 1",
        description: "Vertical skirting board",
        price: "XX",
        category: "skirting",
        woodType: "Merbau",
        material: "Malaysian Hardwood",
        dimensions: "Various sizes available",
        finish: "Natural finish",
        application: "Wall-floor junction",
        image: "Images/timbereality-haluan-mutiara-skirting-type-1.jpg"
    },
    {
        id: 9,
        name: "Skirting Type 2",
        description: "Rich reddish-brown skirting",
        price: "XX",
        category: "skirting",
        woodType: "Chengal",
        material: "Premium Hardwood",
        dimensions: "Various sizes available",
        finish: "Polished red finish",
        application: "Premium interiors",
        image: "Images/timbereality-haluan-mutiara-skirting-type-2.jpg"
    },
    {
        id: 10,
        name: "Skirting Type 3",
        description: "Premium grade skirting",
        price: "XX",
        category: "skirting",
        woodType: "Balau",
        material: "High-density Hardwood",
        dimensions: "Various sizes available",
        finish: "Smooth polished",
        application: "Commercial spaces",
        image: "Images/timbereality-haluan-mutiara-skirting-type-3.jpg"
    },
    {
        id: 11,
        name: "Skirting Type 4",
        description: "Traditional skirting design",
        price: "XX",
        category: "skirting",
        woodType: "Merbau",
        material: "Solid Hardwood",
        dimensions: "Various sizes available",
        finish: "Classic wood finish",
        application: "Traditional homes",
        image: "Images/timbereality-haluan-mutiara-skirting-type-4.jpg"
    },
    {
        id: 12,
        name: "Skirting Type 5",
        description: "Classic skirting board",
        price: "XX",
        category: "skirting",
        woodType: "Keruing",
        material: "Hardwood",
        dimensions: "Various sizes available",
        finish: "Matte finish",
        application: "General use",
        image: "Images/timbereality-haluan-mutiara-skirting-type-5.jpg"
    },
    {
        id: 13,
        name: "Skirting Type 6",
        description: "Real render skirting",
        price: "XX",
        category: "skirting",
        woodType: "Chengal",
        material: "Premium Hardwood",
        dimensions: "Various sizes available",
        finish: "Textured surface",
        application: "Modern interiors",
        image: "Images/timbereality-haluan-mutiara-skirting-type-6.jpg"
    },
    {
        id: 14,
        name: "Skirting Type 7",
        description: "Smooth finish skirting",
        price: "XX",
        category: "skirting",
        woodType: "Balau",
        material: "Hardwood",
        dimensions: "Various sizes available",
        finish: "Ultra-smooth",
        application: "Minimalist designs",
        image: "Images/timbereality-haluan-mutiara-skirting-type-7.jpg"
    },
    {
        id: 15,
        name: "Skirting Type 8",
        description: "100x50mm skirting board",
        price: "XX",
        category: "skirting",
        woodType: "Merbau",
        material: "Thick Hardwood",
        dimensions: "Various sizes available",
        finish: "Natural wood",
        application: "Heavy-duty use",
        image: "Images/timbereality-haluan-mutiara-skirting-type-8.jpg"
    },
    {
        id: 16,
        name: "Skirting Type 9",
        description: "Wooden block skirting",
        price: "XX",
        category: "skirting",
        woodType: "Chengal",
        material: "Solid Hardwood Blocks",
        dimensions: "Various sizes available",
        finish: "Block pattern",
        application: "Decorative walls",
        image: "Images/timbereality-haluan-mutiara-skirting-type-9.jpg"
    },
    {
        id: 17,
        name: "TG Merbau Flooring",
        description: "Premium Merbau wood flooring",
        price: "XX",
        category: "flooring",
        woodType: "Merbau",
        material: "Tongue & Groove Merbau",
        dimensions: "Various sizes available",
        finish: "Premium flooring finish",
        application: "Flooring installation",
        image: "Images/timbereality-haluan-mutiara-tg-merbau-flooring.jpg"
    },
    {
        id: 18,
        name: "Window & Door Type 1",
        description: "Wooden column for windows",
        price: "XX",
        category: "windows",
        woodType: "Chengal",
        material: "Solid Hardwood Column",
        dimensions: "Various sizes available",
        finish: "Natural column finish",
        application: "Window and door frames",
        image: "Images/timbereality-haluan-mutiara-window-and-door-type-1.jpg"
    },
    {
        id: 19,
        name: "Window & Door Type 2",
        description: "3D printed cube design",
        price: "XX",
        category: "windows",
        woodType: "Balau",
        material: "3D Printed Hardwood",
        dimensions: "Various sizes available",
        finish: "3D textured surface",
        application: "Modern window frames",
        image: "Images/timbereality-haluan-mutiara-window-and-door-type-2.jpg"
    },
    {
        id: 20,
        name: "Window & Door Type 3",
        description: "Wooden block window frame",
        price: "XX",
        category: "windows",
        woodType: "Merbau",
        material: "Hardwood Blocks",
        dimensions: "Various sizes available",
        finish: "Natural block finish",
        application: "Window frames",
        image: "Images/timbereality-haluan-mutiara-window-and-door-type-3.jpg"
    },
    {
        id: 21,
        name: "Window & Door Type 4",
        description: "Natural wood window",
        price: "XX",
        category: "windows",
        woodType: "Chengal",
        material: "Premium Hardwood",
        dimensions: "Various sizes available",
        finish: "Natural wood grain",
        application: "Complete window frames",
        image: "Images/timbereality-haluan-mutiara-window-and-door-type-4.jpg"
    },
    {
        id: 22,
        name: "Window & Door Type 5",
        description: "Smooth finish window",
        price: "XX",
        category: "windows",
        woodType: "Keruing",
        material: "Hardwood",
        dimensions: "Various sizes available",
        finish: "Smooth polished",
        application: "Window and door frames",
        image: "Images/timbereality-haluan-mutiara-window-and-door-type-5.jpg"
    },
    {
        id: 23,
        name: "Window & Door Type 6",
        description: "Pine wood window",
        price: "XX",
        category: "windows",
        woodType: "Balau",
        material: "Hardwood with pine finish",
        dimensions: "Various sizes available",
        finish: "Pine-like appearance",
        application: "Window installations",
        image: "Images/timbereality-haluan-mutiara-window-and-door-type-6.jpg"
    },
    {
        id: 24,
        name: "Window & Door Type 7",
        description: "Wooden block design",
        price: "XX",
        category: "windows",
        woodType: "Merbau",
        material: "Hardwood Blocks",
        dimensions: "Various sizes available",
        finish: "Decorative block pattern",
        application: "Architectural windows",
        image: "Images/timbereality-haluan-mutiara-window-and-door-type-7.jpg"
    }
];

const categoryIcons = {
    'skirting': 'fa-grip-lines',
    'windows': 'fa-border-style',
    'handrails': 'fa-th-large',
    'flooring': 'fa-layer-group',
    'mouldings': 'fa-ruler-combined',
    'ceiling': 'fa-columns'
};

const categoryColors = {
    'skirting': '#856260',
    'windows': '#62403c',
    'handrails': '#462520',
    'flooring': '#3d221d',
    'mouldings': '#754e43',
    'ceiling': '#412520'
};

let productsGrid, modal, closeModalBtns;
let swiperInstances = {};

document.addEventListener('DOMContentLoaded', function() {
    // Add CSS styles first
    addStyles();
    
    productsGrid = document.getElementById('all-products-grid');
    modal = document.getElementById('product-modal');
    closeModalBtns = document.querySelectorAll('#close-modal, #close-modal-btn');
    
    displayAllProducts();
    setupModalEvents();
    setupImageErrorHandling();
    detectZoomAndAdjust();
});

function displayAllProducts() {
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    productsGrid.style.display = 'block';
    
    // ALL categories use Swiper
    const sections = [
        { key: 'skirting', name: 'Skirting' },
        { key: 'windows', name: 'Windows & Doors' },
        { key: 'handrails', name: 'Handrails' },
        { key: 'flooring', name: 'Flooring' },
        { key: 'mouldings', name: 'Mouldings' },
        { key: 'ceiling', name: 'Ceiling' }
    ];
    
    const productsByCategory = {};
    PRODUCTS.forEach(product => {
        if (!productsByCategory[product.category]) {
            productsByCategory[product.category] = [];
        }
        productsByCategory[product.category].push(product);
    });
    
    sections.forEach(section => {
        const products = productsByCategory[section.key];
        if (!products || products.length === 0) return;
        
        const icon = categoryIcons[section.key];
        const color = categoryColors[section.key];
        
        // Section container
        const sectionDiv = document.createElement('div');
        sectionDiv.style.marginBottom = '30px';
        
        // Header
sectionDiv.innerHTML = `
    <div style="margin-bottom: 15px;">
        <div style="display:flex; align-items:center; gap:8px; padding:8px 12px; background:${color}; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.1);">
            <i class="fas ${icon}" style="font-size:1rem; color:white;"></i>
            <h2 style="color:white; margin:0; font-size:1rem; font-weight:600; flex:1;">
                ${section.name}
            </h2>
            <span style="background:rgba(255,255,255,0.25); padding:2px 8px; border-radius:12px; color:white; font-size:0.8rem;">
                ${products.length}
            </span>
        </div>
    </div>
`;
        
        // Swiper container
        const swiperId = `swiper-${section.key}`;
        const swiperContainer = document.createElement('div');
        swiperContainer.className = `swiper ${swiperId}`;
        swiperContainer.style.cssText = 'padding: 5px 0 20px 0;';
        
        const swiperWrapper = document.createElement('div');
        swiperWrapper.className = 'swiper-wrapper';
        
        // Add product cards as swiper slides
        products.forEach(p => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';
            slide.innerHTML = createProductCardHTML(p);
            swiperWrapper.appendChild(slide);
        });
        
        swiperContainer.appendChild(swiperWrapper);
        
        // Add pagination and navigation
        const pagination = document.createElement('div');
        pagination.className = 'swiper-pagination';
        
        const prevButton = document.createElement('div');
        prevButton.className = 'swiper-button-prev';
        
        const nextButton = document.createElement('div');
        nextButton.className = 'swiper-button-next';
        
        swiperContainer.appendChild(pagination);
        swiperContainer.appendChild(prevButton);
        swiperContainer.appendChild(nextButton);
        
        sectionDiv.appendChild(swiperContainer);
        productsGrid.appendChild(sectionDiv);
        
        // Initialize Swiper
        setTimeout(() => {
            swiperInstances[section.key] = new Swiper(`.${swiperId}`, {
                slidesPerView: 'auto',
                spaceBetween: 15,
                slidesPerGroup: 1,
                centeredSlides: false,
                loop: false,
                slideShadows: false,
                observer: true,
                observeParents: true,
                navigation: {
                    nextEl: `.${swiperId} .swiper-button-next`,
                    prevEl: `.${swiperId} .swiper-button-prev`,
                },
                pagination: {
                    el: `.${swiperId} .swiper-pagination`,
                    clickable: true,
                },
            });
        }, 100);
    });
}

function createProductCardHTML(product) {
    return `
        <div class="product-card" onclick="openProductModal(${product.id})">
            <div class="product-image">
               <img loading="lazy" src="${product.image}" alt="${product.name}" onerror="handleImageError(this)">
                <div class="category-badge category-${product.category}" style="background: ${categoryColors[product.category]};">
                    <i class="fas ${categoryIcons[product.category]}"></i>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <div class="product-specs">
                    <span class="wood-type"><i class="fas fa-tree"></i> ${product.woodType}</span>
                </div>
                <div class="product-footer">
                    <div class="product-price">RM ${product.price}</div>
                    <button class="view-details-btn" onclick="event.stopPropagation(); openProductModal(${product.id})">
                        <i class="fas fa-eye"></i> View
                    </button>
                </div>
            </div>
        </div>
    `;
}

window.openProductModal = function(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    
    // CLOSE CHAT WINDOW IF OPEN (FIX FOR OVERLAPPING)
    const chatWindow = document.getElementById('chatWindow');
    if (chatWindow && chatWindow.classList.contains('active')) {
        chatWindow.classList.remove('active');
    }
    
    // Update modal content with beautiful design
    document.getElementById('modal-product-name').textContent = product.name;
    document.getElementById('modal-description').textContent = product.description;
    document.getElementById('modal-image').loading = 'lazy';
    document.getElementById('modal-image').src = product.image;
    document.getElementById('modal-image').alt = product.name;
    
    // Set category badge with icon
    const categoryBadge = document.getElementById('modal-category');
    const categoryIcon = categoryIcons[product.category];
    categoryBadge.innerHTML = `<i class="fas ${categoryIcon}"></i> ${product.category.charAt(0).toUpperCase() + product.category.slice(1)}`;
    categoryBadge.style.background = categoryColors[product.category];
    
    // Update specs with beautiful card design and icons
    document.getElementById('modal-specs').innerHTML = `
        <div class="detail-item">
            <div class="detail-label"><i class="fas fa-tag"></i> Price</div>
            <div class="detail-value">RM ${product.price}</div>
        </div>
        <div class="detail-item">
            <div class="detail-label"><i class="fas fa-tree"></i> Wood Type</div>
            <div class="detail-value">${product.woodType}</div>
        </div>
        <div class="detail-item">
            <div class="detail-label"><i class="fas fa-cube"></i> Material</div>
            <div class="detail-value">${product.material}</div>
        </div>
        <div class="detail-item">
            <div class="detail-label"><i class="fas fa-ruler-combined"></i> Dimensions</div>
            <div class="detail-value">${product.dimensions}</div>
        </div>
        <div class="detail-item">
            <div class="detail-label"><i class="fas fa-paint-roller"></i> Finish</div>
            <div class="detail-value">${product.finish}</div>
        </div>
        <div class="detail-item">
            <div class="detail-label"><i class="fas fa-tools"></i> Application</div>
            <div class="detail-value">${product.application}</div>
        </div>
    `;
    
    // Update WhatsApp button
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const message = `Hello! I'm interested in your ${product.name} (${product.woodType} wood). Price: RM ${product.price}. Can you provide more details and availability?`;
    whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i> Inquire on WhatsApp';
    whatsappBtn.onclick = () => window.open(`https://wa.me/60122786182?text=${encodeURIComponent(message)}`, '_blank');
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

function closeProductModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

window.handleImageError = function(img) {
    img.src = 'https://via.placeholder.com/400x300?text=No+Image';
    img.onerror = null; // Prevent infinite loop
};

function setupModalEvents() {
    if (!closeModalBtns) return;
    closeModalBtns.forEach(btn => btn.addEventListener('click', closeProductModal));
    modal.addEventListener('click', e => { if (e.target === modal) closeProductModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('active')) closeProductModal(); });
}

function setupImageErrorHandling() {
    document.addEventListener('error', e => {
        if (e.target.tagName === 'IMG' && !e.target.src.includes('placeholder')) {
            window.handleImageError(e.target);
        }
    }, true);
}

// Detect zoom level and adjust cards
function detectZoomAndAdjust() {
    const zoom = Math.round(window.devicePixelRatio * 100);
    if (zoom > 100) {
        document.body.classList.add(`zoomed-${zoom}`);
        
        // Adjust swiper heights for zoom
        Object.keys(swiperInstances).forEach(key => {
            if (swiperInstances[key]) {
                setTimeout(() => {
                    swiperInstances[key].update();
                }, 100);
            }
        });
    }
}

// Add zoom detection on resize
window.addEventListener('resize', detectZoomAndAdjust);


window.closeProductModal = closeProductModal;
