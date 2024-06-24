
// JavaScript para hacer scroll suave al principio de la página al hacer clic en el enlace
document.addEventListener('DOMContentLoaded', function () {
    var scrollToTop = document.querySelector('.scrollToTop');
    scrollToTop.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


// Obtener referencia al botón y al modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close")[0];

// Función para abrir el modal
btn.onclick = function() {
    modal.style.display = "flex";
    setTimeout(function(){
        modal.classList.add("active"); // Agregar clase para activar el modal
    }, 50); // Aseguramos un pequeño retraso para que la animación se inicie correctamente
}

// Función para cerrar el modal
span.onclick = function() {
    modal.classList.remove("active"); // Quitar clase para desactivar el modal
    setTimeout(function(){
        modal.style.display = "none";
    }, 300); // Esperamos hasta que la animación termine antes de ocultar completamente el modal
}

// Cerrar el modal si se hace clic fuera del contenido
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove("active"); // Quitar clase para desactivar el modal
        setTimeout(function(){
            modal.style.display = "none";
        }, 300); // Esperamos hasta que la animación termine antes de ocultar completamente el modal
    }
}
