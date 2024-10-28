let index = 0;
const testimonios = document.querySelectorAll('.testimonio');
const totalTestimonios = testimonios.length;

// Muestra el primer testimonio
testimonios[index].style.display = 'flex';

function mover(direccion) {
    // Oculta el testimonio actual
    testimonios[index].style.display = 'none';

    if (direccion === 'derecha') {
        index = (index + 1) % totalTestimonios; // Incrementa el índice
    } else {
        index = (index - 1 + totalTestimonios) % totalTestimonios; // Decrementa el índice
    }

    // Muestra el nuevo testimonio
    testimonios[index].style.display = 'flex';
}