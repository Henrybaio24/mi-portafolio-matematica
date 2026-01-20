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

// Función para expandir/contraer unidades
function toggleUnidad(num) {
    const content = document.getElementById('unidad-' + num);
    const icon = document.getElementById('icon-' + num);
    
    if (content.classList.contains('active')) {
        content.classList.remove('active');
        icon.classList.remove('rotated');
    } else {
        content.classList.add('active');
        icon.classList.add('rotated');
    }
}
