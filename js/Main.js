/* =====================================================================
   WOODWORKS / HALUAN MUTIARA - UNIFIED JAVASCRIPT
   Version: 3.2 | Enhanced AI | Better Responses | No Conflicts
===================================================================== */

// Product Database
const PRODUCTS = {
  images: [
    "Images/timbereality-haluan-mutiara-ceiling-paneling.jpg",
    "Images/timbereality-haluan-mutiara-door-frame-lipping.jpg",
    "Images/timbereality-haluan-mutiara-handrail-type-1.jpg",
    "Images/timbereality-haluan-mutiara-handrail-type-2.jpg",
    "Images/timbereality-haluan-mutiara-handrail-type-3.jpg",
    "Images/timbereality-haluan-mutiara-handrail-type-4.jpg",
    "Images/timbereality-haluan-mutiara-nosing.jpg",
    "Images/timbereality-haluan-mutiara-skirting-type-1.jpg",
    "Images/timbereality-haluan-mutiara-skirting-type-2.jpg",
    "Images/timbereality-haluan-mutiara-skirting-type-3.jpg",
    "Images/timbereality-haluan-mutiara-skirting-type-4.jpg",
    "Images/timbereality-haluan-mutiara-skirting-type-5.jpg",
    "Images/timbereality-haluan-mutiara-skirting-type-6.jpg",
    "Images/timbereality-haluan-mutiara-skirting-type-7.jpg",
    "Images/timbereality-haluan-mutiara-skirting-type-8.jpg",
    "Images/timbereality-haluan-mutiara-skirting-type-9.jpg",
    "Images/timbereality-haluan-mutiara-tg-merbau-flooring.jpg",
    "Images/timbereality-haluan-mutiara-window-and-door-type-1.jpg",
    "Images/timbereality-haluan-mutiara-window-and-door-type-2.jpg",
    "Images/timbereality-haluan-mutiara-window-and-door-type-3.jpg",
    "Images/timbereality-haluan-mutiara-window-and-door-type-4.jpg",
    "Images/timbereality-haluan-mutiara-window-and-door-type-5.jpg",
    "Images/timbereality-haluan-mutiara-window-and-door-type-6.jpg",
    "Images/timbereality-haluan-mutiara-window-and-door-type-7.jpg"
  ],
  data: [
    { id: 1, name: "Ceiling Paneling", desc: "High-quality hardwood for ceiling applications", price: "450", category: "mouldings", woodType: "Merbau" },
    { id: 2, name: "Door Frame Lipping", desc: "Durable hardwood for door frames", price: "320", category: "mouldings", woodType: "Chengal" },
    { id: 3, name: "Handrail Type 1", desc: "Premium handrail for staircases", price: "280", category: "handrails", woodType: "Balau" },
    { id: 4, name: "Handrail Type 2", desc: "Smooth polished handrail", price: "310", category: "handrails", woodType: "Merbau" },
    { id: 5, name: "Handrail Type 3", desc: "Contemporary handrail design", price: "295", category: "handrails", woodType: "Keruing" },
    { id: 6, name: "Handrail Type 4", desc: "Modern 3D printed handrail", price: "330", category: "handrails", woodType: "Chengal" },
    { id: 7, name: "Nosing", desc: "Stair nosing for safety", price: "150", category: "mouldings", woodType: "Balau" },
    { id: 8, name: "Skirting Type 1", desc: "Vertical skirting board", price: "180", category: "skirting", woodType: "Merbau" },
    { id: 9, name: "Skirting Type 2", desc: "Rich reddish-brown skirting", price: "190", category: "skirting", woodType: "Chengal" },
    { id: 10, name: "Skirting Type 3", desc: "Premium grade skirting", price: "200", category: "skirting", woodType: "Balau" },
    { id: 11, name: "Skirting Type 4", desc: "Traditional skirting design", price: "210", category: "skirting", woodType: "Merbau" },
    { id: 12, name: "Skirting Type 5", desc: "Classic skirting board", price: "195", category: "skirting", woodType: "Keruing" },
    { id: 13, name: "Skirting Type 6", desc: "Real render skirting", price: "220", category: "skirting", woodType: "Chengal" },
    { id: 14, name: "Skirting Type 7", desc: "Smooth finish skirting", price: "185", category: "skirting", woodType: "Balau" },
    { id: 15, name: "Skirting Type 8", desc: "100x50mm skirting board", price: "230", category: "skirting", woodType: "Merbau" },
    { id: 16, name: "Skirting Type 9", desc: "Wooden block skirting", price: "215", category: "skirting", woodType: "Chengal" },
    { id: 17, name: "TG Merbau Flooring", desc: "Premium Merbau wood flooring", price: "650", category: "flooring", woodType: "Merbau" },
    { id: 18, name: "Window & Door Type 1", desc: "Wooden column for windows", price: "520", category: "windows-doors", woodType: "Chengal" },
    { id: 19, name: "Window & Door Type 2", desc: "3D printed cube design", price: "580", category: "windows-doors", woodType: "Balau" },
    { id: 20, name: "Window & Door Type 3", desc: "Wooden block window frame", price: "610", category: "windows-doors", woodType: "Merbau" },
    { id: 21, name: "Window & Door Type 4", desc: "Natural wood window", price: "680", category: "windows-doors", woodType: "Chengal" },
    { id: 22, name: "Window & Door Type 5", desc: "Smooth finish window", price: "550", category: "windows-doors", woodType: "Keruing" },
    { id: 23, name: "Window & Door Type 6", desc: "Pine wood window", price: "720", category: "windows-doors", woodType: "Balau" },
    { id: 24, name: "Window & Door Type 7", desc: "Wooden block design", price: "780", category: "windows-doors", woodType: "Merbau" }
  ]
};

// Enhanced Knowledge Base for Chatbot - BETTER RESPONSES
const KNOWLEDGE_BASE = {
  greeting: {
    keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'],
    response: () => `👋 <strong>Hello! Welcome to Haluan Mutiara!</strong><br><br>I'm your Wood Assistant. I can help you with:<br><br>• Our premium hardwood products<br>• Pricing and quotes<br>• Delivery information<br>• Contact details<br>• Company information<br><br>What would you like to know?`
  },
  products: {
    keywords: ['product', 'products', 'sell', 'offer', 'available', 'wood', 'log', 'timber', 'hardwood', 'species', 'type', 'materials', 'show me', 'what do you have'],
    response: () => `🪵 <strong>Our Premium Hardwood Products:</strong><br><br>
    We have <strong>24 premium Malaysian wood products</strong> across 6 categories:<br><br>
    🏠 <strong>Interior Products:</strong><br>
    • Ceiling Paneling • Skirting Boards (9 types)<br>
    • Handrails (4 types) • Window & Door Frames (7 types)<br><br>
    🛠️ <strong>Construction Materials:</strong><br>
    • Door Frame Lipping • Nosing<br>
    • TG Merbau Flooring • Various Wood Types<br><br>
    <strong>Wood Types:</strong> Merbau, Chengal, Balau, Keruing<br><br>
    <strong>Which category interests you?</strong>`
  },
  pricing: {
    keywords: ['price', 'cost', 'how much', 'rate', 'quote', 'pricing', 'expensive', 'cheap', 'budget', 'affordable', 'costs', 'price list'],
    response: () => `💰 <strong>Pricing Information:</strong><br><br>
    Our products range from <strong>RM150 to RM780</strong> depending on:<br><br>
    • <strong>Product type</strong> & quality<br>
    • <strong>Quantity</strong> ordered<br>
    • <strong>Delivery</strong> location<br>
    • <strong>Wood type</strong> (Merbau, Chengal, Balau, Keruing)<br><br>
    📞 <strong>For Exact Quotes:</strong><br>
    WhatsApp: <strong>(+60)12-278-6182</strong><br>
    Email: <strong>haluanmutiara@hotmail.com</strong><br><br>
    We provide <strong>custom quotes within 24 hours!</strong>`
  },
  delivery: {
    keywords: ['deliver', 'shipping', 'transport', 'delivery', 'ship', 'logistics', 'freight', 'deliveries', 'shipped', 'when will it arrive', 'delivery time'],
    response: () => `🚚 <strong>Delivery Services:</strong><br><br>
    ✅ <strong>Delivery across Malaysia</strong><br>
    ✅ <strong>Quick turnaround times</strong> (1-3 days)<br>
    ✅ <strong>Careful handling guaranteed</strong><br>
    ✅ <strong>Bulk order support</strong><br>
    ✅ <strong>Tracking available</strong><br><br>
    📦 <strong>Contact us for delivery quote!</strong><br>
    We can deliver anywhere in Malaysia.`
  },
  contact: {
    keywords: ['contact', 'reach', 'call', 'email', 'phone', 'number', 'address', 'location', 'visit', 'where', 'office', 'shop', 'store'],
    response: () => `📞 <strong>Contact Haluan Mutiara:</strong><br><br>
    <strong>WhatsApp:</strong> (+60)12-278-6182<br>
    <strong>Email:</strong> haluanmutiara@hotmail.com<br>
    <strong>Hours:</strong> Mon-Fri, 8am-6pm<br>
    <strong>Address:</strong> Timberland Road, Woodville<br><br>
    <strong>We respond within 24 hours!</strong><br>
    Feel free to reach out for quotes, questions, or consultations.`
  },
  about: {
    keywords: ['about', 'company', 'who are you', 'history', 'experience', 'story', 'background', 'established', 'what is haluan mutiara', 'tell me about'],
    response: () => `🏢 <strong>Haluan Mutiara - Premium Hardwood Supplier</strong><br><br>
    ✅ <strong>Established:</strong> 2000 (20+ years)<br>
    ✅ <strong>Experience:</strong> 20+ years in hardwood<br>
    ✅ <strong>Products:</strong> 24+ premium items<br>
    ✅ <strong>Specialization:</strong> Tropical hardwood<br>
    ✅ <strong>Quality:</strong> Guaranteed<br>
    ✅ <strong>Delivery:</strong> Nationwide<br><br>
    We're <strong>Malaysia's trusted hardwood supplier!</strong> Serving builders, furniture makers, and craftsmen nationwide.`
  },
  woodTypes: {
    keywords: ['merbau', 'chengal', 'balau', 'keruing', 'wood type', 'species', 'hardwood type', 'what wood', 'which wood'],
    response: () => `🌳 <strong>Our Wood Types:</strong><br><br>
    <strong>1. Merbau:</strong> Dense, durable, reddish-brown - Perfect for flooring & decking<br>
    <strong>2. Chengal:</strong> Very hard, golden-brown - Great for structural work<br>
    <strong>3. Balau:</strong> Extremely durable, yellowish-brown - Ideal for heavy construction<br>
    <strong>4. Keruing:</strong> Medium-hard, reddish-brown - Good for general carpentry<br><br>
    <strong>All our wood is:</strong><br>
    • 100% Malaysian sourced<br>
    • Sustainably harvested<br>
    • Properly seasoned<br>
    • Quality guaranteed`
  }
};

/* =====================================================================
   INITIALIZATION - FIXED VERSION
===================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  console.log('🔨 Haluan Mutiara - Enhanced Version Initializing...');
  
  // Core Initializations
  initNavigation();
  initActiveNavLink();
  initDynamicContent();
  
  // Page-Specific Initializations
  const currentPage = window.location.pathname.split('/').pop();
  
  switch(currentPage) {
    case 'index.html':
    case '':
      initIndexPage();
      break;
    case 'gallery.html':
      initGalleryPage();
      break;
    case 'contact.html':
      initContactPage();
      break;
    case 'about.html':
      initAboutPage();
      break;
  }
  
  // Common Features - INITIALIZE ONLY ONCE
  initWhatsAppButton();
  initEnhancedChatbot();
  
  console.log('✅ Website initialized successfully!');
});

/* =====================================================================
   CORE FUNCTIONS - OPTIMIZED
===================================================================== */

// Initialize Navigation
function initNavigation() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (!hamburger || !navLinks) return;
  
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('active');
    
    const spans = hamburger.querySelectorAll('span');
    if (navLinks.classList.contains('show')) {
      spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });
  
  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
      hamburger.classList.remove('active');
      const spans = hamburger.querySelectorAll('span');
      spans.forEach(span => {
        span.style.transform = 'none';
        span.style.opacity = '1';
      });
    });
  });
}

// Set Active Navigation Link
function initActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop().toLowerCase() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href').toLowerCase();
    
    if (href === currentPage || 
        (currentPage === '' && href === 'index.html') ||
        (currentPage.includes('index') && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// Initialize Dynamic Content
function initDynamicContent() {
  // Set current year in footer
  const yearElements = document.querySelectorAll('.current-year');
  if (yearElements.length > 0) {
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
      el.textContent = currentYear;
    });
  }
  
  // Initialize smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const targetElement = document.querySelector(href);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/* =====================================================================
   PAGE-SPECIFIC FUNCTIONS
===================================================================== */

// Index Page Functions
function initIndexPage() {
  console.log('Initializing Index Page...');
  
  // Load product sliders if they exist
  if (document.getElementById('woodSlider')) {
    loadSwiperProducts();
  }
}

// Load Swiper products
function loadSwiperProducts() {
  const woodSlider = document.getElementById('woodSlider');
  if (!woodSlider) return;

  // Clear existing content
  woodSlider.innerHTML = '';

  PRODUCTS.data.forEach((product, index) => {
    const imageUrl = PRODUCTS.images[index] || 'https://via.placeholder.com/370x420';
    const rating = (4 + Math.random()).toFixed(1);
    
    const slide = document.createElement('div');
    slide.className = 'swiper-slide tranding-slide';
    slide.innerHTML = `
      <div class="tranding-slide-img">
        <img src="${imageUrl}" alt="${product.name}" loading="lazy">
      </div>
      <div class="tranding-slide-content">
        <h1 class="food-price">RM${product.price}</h1>
        <div class="tranding-slide-content-bottom">
          <h2 class="food-name">${product.name}</h2>
          <h3 class="food-rating">
            <span>${rating}</span>
            <div class="rating">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
            </div>
          </h3>
        </div>
      </div>
    `;
    
    slide.addEventListener('click', () => {
      inquireProduct(product.id);
    });
    
    woodSlider.appendChild(slide);
  });
  
  // Initialize Swiper if available
  if (typeof Swiper !== 'undefined') {
    new Swiper('.tranding-slider', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
  }
}

// Gallery Page Functions
function initGalleryPage() {
  console.log('Initializing Gallery Page...');
  // Gallery functions would go here
}

// Contact Page Functions
function initContactPage() {
  console.log('Initializing Contact Page...');
  // Contact form functions would go here
}

// About Page Functions
function initAboutPage() {
  console.log('Initializing About Page...');
  // About page functions would go here
}

/* =====================================================================
   ENHANCED CHATBOT FUNCTIONS - FIXED AND WORKING
===================================================================== */
function initEnhancedChatbot() {
  console.log('Initializing Enhanced AI Chatbot...');
  
  const chatContainer = document.getElementById('chat-container');
  const chatHeader = document.getElementById('chat-header');
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const chatMessages = document.getElementById('chat-messages');
  const closeBtn = document.getElementById('close-chat');
  const typingIndicator = document.getElementById('typing-indicator');
  const quickRepliesContainer = document.getElementById('quick-replies');
  const chatbotToggle = document.querySelector('.chatbot-toggle');
  
  if (!chatbotToggle || !chatContainer) {
    console.log('Chatbot elements not found');
    return;
  }
  
  // Position chatbot toggle to bottom-left
  chatbotToggle.style.position = 'fixed';
  chatbotToggle.style.bottom = '20px';
  chatbotToggle.style.left = '20px';
  chatbotToggle.style.width = '60px';
  chatbotToggle.style.height = '60px';
  chatbotToggle.style.zIndex = '999';
  chatbotToggle.style.fontSize = '24px';
  chatbotToggle.style.cursor = 'pointer';
  
  // Reposition WhatsApp button to top-right
  const whatsappBtn = document.querySelector('.whatsapp-float');
  if (whatsappBtn) {
    whatsappBtn.style.position = 'fixed';
    whatsappBtn.style.top = '80px';
    whatsappBtn.style.right = '20px';
    whatsappBtn.style.width = '60px';
    whatsappBtn.style.height = '60px';
    whatsappBtn.style.zIndex = '999';
    whatsappBtn.style.fontSize = '28px';
  }
  
  // Add message function
  function addMessage(text, sender) {
    if (!chatMessages) return;
    
    const msg = document.createElement('div');
    msg.classList.add('message', sender);
    msg.innerHTML = text;
    
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  
  // Typing indicator
  function showTyping(show) {
    if (!typingIndicator) return;
    
    typingIndicator.classList.toggle('show', show);
    if (show && chatMessages) {
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }
  
  // Quick replies
  function showQuickReplies(replies) {
    if (!quickRepliesContainer) return;
    
    quickRepliesContainer.innerHTML = '';
    replies.forEach(reply => {
      const btn = document.createElement('button');
      btn.className = 'quick-reply-btn';
      btn.textContent = reply;
      btn.onclick = () => {
        if (chatInput) chatInput.value = reply;
        if (chatForm) {
          const submitEvent = new Event('submit', { bubbles: true });
          chatForm.dispatchEvent(submitEvent);
        }
      };
      quickRepliesContainer.appendChild(btn);
    });
  }
  
  // Get bot response - ENHANCED
  function getBotResponse(userMessage) {
    const msg = userMessage.toLowerCase().trim();
    
    console.log('User asked:', msg);
    
    // Check for specific products FIRST (most important)
    for (const product of PRODUCTS.data) {
      const productName = product.name.toLowerCase();
      if (msg.includes(productName) || productName.includes(msg)) {
        return `<strong>${product.name}</strong><br><br>
        ${product.desc}<br><br>
        <strong>Price:</strong> RM ${product.price}<br>
        <strong>Wood Type:</strong> ${product.woodType || 'Premium Hardwood'}<br>
        <strong>Category:</strong> ${product.category}<br><br>
        Interested in this product? Contact us for more details!`;
      }
    }
    
    // Check wood types
    const woodTypes = ['merbau', 'chengal', 'balau', 'keruing'];
    for (const wood of woodTypes) {
      if (msg.includes(wood)) {
        const knowledge = KNOWLEDGE_BASE.woodTypes.response();
        return knowledge;
      }
    }
    
    // Check general categories
    for (const [key, data] of Object.entries(KNOWLEDGE_BASE)) {
      if (data.keywords.some(keyword => msg.includes(keyword))) {
        return data.response();
      }
    }
    
    // Check for question words
    if (msg.includes('?') || msg.includes('what') || msg.includes('how') || msg.includes('where') || msg.includes('when') || msg.includes('why')) {
      return `I'd be happy to help! I can answer questions about:<br><br>
      • Our <strong>24 premium hardwood products</strong><br>
      • <strong>Pricing and quotes</strong> for your project<br>
      • <strong>Delivery information</strong> across Malaysia<br>
      • <strong>Wood types</strong> (Merbau, Chengal, Balau, Keruing)<br>
      • <strong>Contact details</strong> for Haluan Mutiara<br><br>
      What specific information are you looking for?`;
    }
    
    // Default response
    return `👋 <strong>Hello! I'm your Wood Assistant.</strong><br><br>
    I can help you with:<br><br>
    🪵 <strong>Product Information</strong> - 24 premium Malaysian woods<br>
    💰 <strong>Pricing & Quotes</strong> - Get custom quotes<br>
    🚚 <strong>Delivery Details</strong> - Malaysia-wide delivery<br>
    📞 <strong>Contact Info</strong> - Reach Haluan Mutiara<br>
    🌳 <strong>Wood Types</strong> - Merbau, Chengal, Balau, Keruing<br><br>
    What would you like to know about?`;
  }
  
  // Handle form submission
  if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!chatInput) return;
      
      const userMsg = chatInput.value.trim();
      if (!userMsg) return;
      
      addMessage(userMsg, 'user');
      chatInput.value = '';
      if (quickRepliesContainer) quickRepliesContainer.innerHTML = '';
      
      showTyping(true);
      
      setTimeout(() => {
        showTyping(false);
        const botReply = getBotResponse(userMsg);
        addMessage(botReply, 'bot');
        
        // Show quick replies based on message
        const msg = userMsg.toLowerCase();
        if (msg.includes('product') || msg.includes('wood') || msg.includes('material')) {
          showQuickReplies(['Ceiling Paneling', 'Skirting Boards', 'Handrails', 'Flooring']);
        } else if (msg.includes('price') || msg.includes('cost') || msg.includes('quote')) {
          showQuickReplies(['Get Quote', 'Contact Sales', 'Pricing List']);
        } else if (msg.includes('delivery') || msg.includes('shipping')) {
          showQuickReplies(['Delivery Cost', 'Shipping Time', 'Bulk Orders']);
        } else if (msg.includes('wood type') || msg.includes('merbau') || msg.includes('chengal')) {
          showQuickReplies(['Merbau', 'Chengal', 'Balau', 'Keruing']);
        } else {
          showQuickReplies(['Products', 'Pricing', 'Delivery', 'Contact Us']);
        }
      }, 800);
    });
  }
  
  // Toggle chatbot
  function toggleChat() {
    chatContainer.classList.toggle('open');
    
    if (chatContainer.classList.contains('open')) {
      // Show welcome message if empty
      if (!chatMessages.innerHTML.trim()) {
        setTimeout(() => {
          addMessage("👋 <strong>Hello! Welcome to Haluan Mutiara!</strong><br><br>I'm your Wood Assistant. I can help you with product information, pricing, delivery, and more. What would you like to know?", 'bot');
          showQuickReplies(['Show Products', 'Get Price Quote', 'Delivery Info', 'Contact Us']);
        }, 300);
      }
      
      // Focus input
      setTimeout(() => {
        if (chatInput) chatInput.focus();
      }, 350);
    }
  }
  
  // Set up event listeners
  chatbotToggle.addEventListener('click', toggleChat);
  
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      chatContainer.classList.remove('open');
    });
  }
  
  if (chatHeader) {
    chatHeader.addEventListener('click', (e) => {
      if (e.target !== closeBtn && e.target !== chatHeader.querySelector('span')) {
        chatContainer.classList.toggle('minimized');
      }
    });
  }
  
  // Auto-open chatbot on first visit (after 3 seconds)
  const hasVisited = localStorage.getItem('haluan_chat_visited');
  if (!hasVisited) {
    setTimeout(() => {
      if (chatContainer && !chatContainer.classList.contains('open')) {
        chatContainer.classList.add('open');
        localStorage.setItem('haluan_chat_visited', 'true');
        
        // Show welcome message
        setTimeout(() => {
          addMessage("👋 <strong>Hello! Welcome to Haluan Mutiara!</strong><br><br>I'm your Wood Assistant. I can help you with:<br><br>• Our 24 premium hardwood products<br>• Pricing and custom quotes<br>• Delivery across Malaysia<br>• Wood type information<br>• Contact details<br><br>What would you like to know?", 'bot');
          showQuickReplies(['Show Products', 'Get Price Quote', 'Delivery Info', 'Contact Us']);
        }, 300);
      }
    }, 3000);
  }
}

// Initialize WhatsApp Button
function initWhatsAppButton() {
  const whatsappBtn = document.querySelector('.whatsapp-float');
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
      console.log('WhatsApp button clicked');
      // You can add analytics tracking here
    });
  }
}

/* =====================================================================
   UTILITY FUNCTIONS
===================================================================== */

function toggleChatbot() {
  const chatContainer = document.getElementById('chat-container');
  if (!chatContainer) return;
  
  chatContainer.classList.toggle('open');
  
  if (chatContainer.classList.contains('open')) {
    const chatInput = document.getElementById('chat-input');
    if (chatInput) setTimeout(() => chatInput.focus(), 350);
  }
}

function inquireProduct(productId) {
  let product;
  
  if (typeof productId === 'number') {
    product = PRODUCTS.data.find(p => p.id === productId);
  } else {
    product = { name: String(productId) };
  }
  
  if (product) {
    const message = `Hello Haluan Mutiara, I'm interested in ${product.name}. Can you provide more info and pricing?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/60122786182?text=${encodedMessage}`, '_blank');
  }
}

/* =====================================================================
   COMPACT SPACE OPTIMIZATION
===================================================================== */

function optimizeSpacing() {
  // Reduce padding on sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const currentPadding = window.getComputedStyle(section).padding;
    if (parseInt(currentPadding) > 40) {
      section.style.padding = 'var(--space-xl) var(--space-md)';
    }
  });
  
  // Reduce hero section size
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.padding = 'var(--space-xl) var(--space-md)';
    
    // Reduce hero title size on mobile
    if (window.innerWidth < 768) {
      const heroTitle = hero.querySelector('h1');
      if (heroTitle) {
        heroTitle.style.fontSize = 'var(--font-size-2xl)';
      }
    }
  }
}

// Initialize space optimization on load and resize
window.addEventListener('load', optimizeSpacing);
window.addEventListener('resize', optimizeSpacing);

// Export for use in HTML
window.toggleChatbot = toggleChatbot;
window.inquireProduct = inquireProduct;

// Auto-optimize on load
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(optimizeSpacing, 100);
});