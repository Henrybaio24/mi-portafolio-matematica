// Función para ingresar al portafolio desde la portada
function ingresarPortafolio() {
    document.getElementById('portada').style.display = 'none';
    document.getElementById('navbar').style.display = 'block';
    document.getElementById('portafolio').classList.add('active');
}

// Función para volver a la portada
function volverPortada() {
    document.getElementById('portada').style.display = 'flex';
    document.getElementById('navbar').style.display = 'none';
    document.getElementById('portafolio').classList.remove('active');
    document.getElementById('ejercicios').classList.remove('active');
    document.getElementById('materia').classList.remove('active');
    
    // Reset nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.nav-btn')[0].classList.add('active');
}

// Función para mostrar secciones del menú
function mostrarSeccion(seccion) {
    // Ocultar todas las secciones
    document.querySelectorAll('.main-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Mostrar la sección seleccionada
    document.getElementById(seccion).classList.add('active');
    
    // Actualizar botones activos
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Función para ver PDFs en modal
function verPDF(url, titulo) {
    const modal = document.getElementById('pdfModal');
    const pdfViewer = document.getElementById('pdfViewer');
    const pdfTitle = document.getElementById('pdfTitle');
    
    pdfTitle.textContent = titulo;
    pdfViewer.src = url;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Función para cerrar modal de PDF
function cerrarModal() {
    const modal = document.getElementById('pdfModal');
    const pdfViewer = document.getElementById('pdfViewer');
    
    modal.style.display = 'none';
    pdfViewer.src = '';
    document.body.style.overflow = 'auto';
}

// Función para ver videos de YouTube en modal
function verVideo(videoId, titulo) {
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    const videoTitle = document.getElementById('videoTitle');
    
    videoTitle.textContent = titulo;
    videoPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Función para cerrar modal de video
function cerrarModalVideo() {
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    
    modal.style.display = 'none';
    videoPlayer.src = '';
    document.body.style.overflow = 'auto';
}

// Cerrar modales al hacer clic fuera de ellos
window.onclick = function(event) {
    const pdfModal = document.getElementById('pdfModal');
    const videoModal = document.getElementById('videoModal');
    
    if (event.target === pdfModal) {
        cerrarModal();
    }
    if (event.target === videoModal) {
        cerrarModalVideo();
    }
}

// Cerrar modales con la tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        cerrarModal();
        cerrarModalVideo();
    }
});

