const carouselData = {
    portfolio: {
        title: '📁 Portafolio de Trabajos',
        items: [
            {
                title: 'Portafolio Digital',
                description: 'Integral Indefinida - Ejercicios básicos',
                pdf: 'pdfs/PORTAFOLIO DIGITAL - HENRY MONTENEGRO.pdf',
                thumbnail: 'thumbnails/trabajo1.jpg'
            }
        ]
    },
    exercises: {
        title: '✏️ Materia y Ejercicios de Clase',
        items: [
            {
                title: 'Cuaderno',
                description: 'Antiderivadas y primitivas',
                pdf: 'pdfs/MATERIA Y EJERCICIOS - HENRY MONTENEGRO.pdf',
                thumbnail: 'thumbnails/ejercicio1.jpg'
            }
        ]
    },
    slides: {
        title: '📊 Diapositivas',
        items: [
            {
                title: 'Diapositivas de las Unidades',
                description: 'Integral Indefinida',
                pdf: 'pdfs/DIAPOSITIVAS - HENRY MONTENEGRO.pdf',
                thumbnail: 'thumbnails/slides1.jpg'
            }
        ]
    },
    tests: {
        title: '📝 Pruebas',
        items: [
            {
                title: 'Capturas de las evaluaciones de las 4 unidades',
                description: 'Evaluación Unidad 1-2-3-4',
                pdf: 'pdfs/PRUEBAS - HENRY MONTENEGRO.pdf',
                thumbnail: 'thumbnails/test1.jpg'
            },
        ]
    }
};

// ============================================
// VARIABLES GLOBALES PARA EL CARRUSEL
// ============================================

let currentCarouselType = '';
let currentCarouselIndex = 0;
let currentCarouselItems = [];

// ============================================
// FUNCIÓN PARA ABRIR EL CARRUSEL - MUESTRA PDF DIRECTO
// ============================================

function abrirCarrusel(type) {
    const data = carouselData[type];
    
    if (!data) {
        console.error('Tipo de carrusel no encontrado:', type);
        return;
    }
    
    currentCarouselType = type;
    currentCarouselItems = data.items;
    currentCarouselIndex = 0;
    
    // ABRIR DIRECTAMENTE EL PRIMER PDF
    if (currentCarouselItems.length > 0) {
        const firstItem = currentCarouselItems[0];
        verPDF(firstItem.pdf, firstItem.title);
    }
}

// ============================================
// CARGAR ITEMS EN EL CARRUSEL
// ============================================

function loadCarouselItems() {
    const track = document.getElementById('carousel-modal-track');
    track.innerHTML = '';
    
    currentCarouselItems.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'carousel-modal-item';
        itemDiv.innerHTML = `
            <div class="carousel-item-content">
                <div class="carousel-item-preview" onclick="verPDF('${item.pdf}', '${item.title}')">
                    <div class="pdf-preview-placeholder">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14 2 14 8 20 8"/>
                        </svg>
                        <p>Click para ver PDF</p>
                    </div>
                </div>
                <div class="carousel-item-info">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <div class="carousel-item-actions">
                        <button onclick="verPDF('${item.pdf}', '${item.title}')" class="btn-view-pdf">
                            👁️ Ver PDF
                        </button>
                        <a href="${item.pdf}" download class="btn-download-pdf">
                            💾 Descargar
                        </a>
                    </div>
                </div>
            </div>
        `;
        track.appendChild(itemDiv);
    });
}

// ============================================
// ACTUALIZAR VISTA DEL CARRUSEL
// ============================================

function updateCarouselView() {
    const track = document.getElementById('carousel-modal-track');
    const offset = -currentCarouselIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
    
    document.getElementById('carousel-current').textContent = currentCarouselIndex + 1;
    
    // Actualizar estado de los botones
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
    prevBtn.disabled = currentCarouselIndex === 0;
    nextBtn.disabled = currentCarouselIndex === currentCarouselItems.length - 1;
}

// ============================================
// MOVER CARRUSEL
// ============================================

function moveCarouselModal(direction) {
    const newIndex = currentCarouselIndex + direction;
    
    if (newIndex >= 0 && newIndex < currentCarouselItems.length) {
        currentCarouselIndex = newIndex;
        updateCarouselView();
    }
}

// ============================================
// CERRAR CARRUSEL
// ============================================

function cerrarCarruselModal() {
    const modal = document.getElementById('carouselModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// ============================================
// VER PDF EN MODAL - PANTALLA COMPLETA CON HEADER
// ============================================

function verPDF(pdfUrl, title) {
    const modal = document.getElementById('pdfModal');
    const viewer = document.getElementById('pdfViewer');
    const titleElement = document.getElementById('pdfTitle');
    
    titleElement.textContent = title;
    viewer.src = pdfUrl;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function cerrarModal() {
    const modal = document.getElementById('pdfModal');
    const viewer = document.getElementById('pdfViewer');
    modal.style.display = 'none';
    viewer.src = '';
    document.body.style.overflow = 'auto';
}

// ============================================
// VER VIDEO EN MODAL
// ============================================

function verVideo(videoId, title) {
    const modal = document.getElementById('videoModal');
    const player = document.getElementById('videoPlayer');
    const titleElement = document.getElementById('videoTitle');
    
    titleElement.textContent = title;
    player.src = `https://www.youtube.com/embed/${videoId}`;
    modal.style.display = 'flex';
}

function cerrarModalVideo() {
    const modal = document.getElementById('videoModal');
    const player = document.getElementById('videoPlayer');
    modal.style.display = 'none';
    player.src = '';
}

// ============================================
// SCROLL A CONTENIDO
// ============================================

function scrollToContent() {
    document.getElementById('portafolio').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// ============================================
// CERRAR MODALES CON ESC
// ============================================

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        cerrarCarruselModal();
        cerrarModal();
        cerrarModalVideo();
    }
});

// ============================================
// CERRAR MODALES AL HACER CLICK FUERA
// ============================================

window.onclick = function(event) {
    const carouselModal = document.getElementById('carouselModal');
    const pdfModal = document.getElementById('pdfModal');
    const videoModal = document.getElementById('videoModal');
    
    if (event.target === carouselModal) {
        cerrarCarruselModal();
    }
    if (event.target === pdfModal) {
        cerrarModal();
    }
    if (event.target === videoModal) {
        cerrarModalVideo();
    }
}

// ============================================
// NAVEGACIÓN CON TECLADO EN CARRUSEL
// ============================================

document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('carouselModal');
    if (modal.style.display === 'flex') {
        if (e.key === 'ArrowLeft') {
            moveCarouselModal(-1);
        } else if (e.key === 'ArrowRight') {
            moveCarouselModal(1);
        }
    }
});

