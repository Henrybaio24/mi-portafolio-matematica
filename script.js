// =========================
// SCROLL
// =========================
function scrollToContent() {
    const el = document.getElementById('portafolio');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// =========================
// MODAL VIDEOS
// =========================
function verVideo(videoId, titulo) {
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    const videoTitle = document.getElementById('videoTitle');

    if (!modal || !videoPlayer || !videoTitle) return;

    videoTitle.textContent = titulo;
    videoPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function cerrarModalVideo() {
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');

    if (!modal || !videoPlayer) return;

    modal.style.display = 'none';
    videoPlayer.src = '';
    document.body.style.overflow = 'auto';
}

// =========================
// CERRAR VIDEO CLICK AFUERA
// =========================
window.addEventListener('click', function (event) {
    const videoModal = document.getElementById('videoModal');
    if (event.target === videoModal) cerrarModalVideo();
});

// =========================
// CARRUSEL PDF
// =========================
let carruselModalActual = {
    tipo: '',
    indice: 0,
    total: 0
};

const datosPortfolio = [
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-1.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-2.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-3.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-4.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-5.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-6.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-7.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-8.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-9.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-10.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-11.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-12.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-13.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-14.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-15.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-16.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-17.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-18.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-19.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-20.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-21.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-22.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-23.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-24.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-25.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-26.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-27.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-28.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-29.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-30.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-31.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-32.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-33.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-34.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-35.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-36.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-37.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-38.pdf' },
    { numero:'', titulo:'', subtitulo:'', fecha:'', tema:'', pdf:'pdfs/CamScanner 25-01-2026 17.24-39.pdf' },
];

const datosEjercicios = [
    { numero:'01', titulo:'Ejercicio 1', subtitulo:'Ejercicios de clase', fecha:'DD/MM/AAAA', unidad:'Unidad 1', descripcion:'Integral indefinida', pdf:'pdfs/ejercicios/ejercicio1.pdf' },
    { numero:'02', titulo:'Ejercicio 2', subtitulo:'Ejercicios de clase', fecha:'DD/MM/AAAA', unidad:'Unidad 2', descripcion:'Sustitución', pdf:'pdfs/ejercicios/ejercicio2.pdf' },
    { numero:'03', titulo:'Ejercicio 3', subtitulo:'Ejercicios de clase', fecha:'DD/MM/AAAA', unidad:'Unidad 3', descripcion:'Integrales definidas', pdf:'pdfs/ejercicios/ejercicio3.pdf' },
    { numero:'04', titulo:'Ejercicio 4', subtitulo:'Ejercicios de clase', fecha:'DD/MM/AAAA', unidad:'Unidad 4', descripcion:'Aplicaciones', pdf:'pdfs/ejercicios/ejercicio4.pdf' }
];

// =========================
// ABRIR CARRUSEL
// =========================
function abrirCarrusel(tipo) {
    const modal = document.getElementById('carouselModal');
    const track = document.getElementById('carousel-modal-track');
    const titulo = document.getElementById('carouselTitle');

    if (!modal || !track) return;

    carruselModalActual.tipo = tipo;
    carruselModalActual.indice = 0;

    track.innerHTML = '';

    const datos = (tipo === 'portfolio') ? datosPortfolio : datosEjercicios;
    carruselModalActual.total = datos.length;

    if (titulo) {
        titulo.textContent = tipo === 'portfolio'
            ? '📁 Portafolio de Trabajos'
            : '✏️ Ejercicios de Clase';
    }

    datos.forEach(item => {
        const slide = document.createElement('div');
        slide.className = 'carousel-modal-slide';

        if (tipo === 'portfolio') {
            slide.innerHTML = `
                <div class="carousel-pdf-full">
                    <iframe src="${item.pdf}"></iframe>
                </div>
            `;
        } else {
            slide.innerHTML = `
                <div class="modal-item-card">
                    <h3>${item.titulo}</h3>
                    <p><b>Unidad:</b> ${item.unidad}</p>
                    <iframe src="${item.pdf}" class="carousel-pdf"></iframe>
                </div>
            `;
        }

        track.appendChild(slide);
    });

    actualizarIndicadorCarrusel();
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// =========================
// MOVER CARRUSEL
// =========================
function moveCarouselModal(direction) {
    const track = document.getElementById('carousel-modal-track');

    carruselModalActual.indice += direction;

    if (carruselModalActual.indice < 0) carruselModalActual.indice = carruselModalActual.total - 1;
    if (carruselModalActual.indice >= carruselModalActual.total) carruselModalActual.indice = 0;

    if (track) {
        track.style.transform = `translateX(-${carruselModalActual.indice * 100}%)`;
    }

    actualizarIndicadorCarrusel();
}

function actualizarIndicadorCarrusel() {
    const c = document.getElementById('carousel-current');
    const t = document.getElementById('carousel-total');

    if (c) c.textContent = carruselModalActual.indice + 1;
    if (t) t.textContent = carruselModalActual.total;
}

// =========================
// CERRAR CARRUSEL
// =========================
function cerrarCarruselModal() {
    const modal = document.getElementById('carouselModal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// =========================
// TECLADO
// =========================
document.addEventListener('keydown', function (event) {
    const modal = document.getElementById('carouselModal');
    if (event.key === 'Escape') cerrarCarruselModal();

    if (modal && modal.style.display === 'flex') {
        if (event.key === 'ArrowLeft') moveCarouselModal(-1);
        if (event.key === 'ArrowRight') moveCarouselModal(1);
    }
});

// =========================
// CLICK AFUERA CARRUSEL
// =========================
document.getElementById('carouselModal')?.addEventListener('click', function (e) {
    if (e.target === this) cerrarCarruselModal();
});
