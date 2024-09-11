function mostrarDetalle(proyectoId) {
    const detalle = document.getElementById('detalle');
    if (proyectoId === 'proyecto1') {
        detalle.innerHTML = '<h3>Proyecto 1</h3><p>Detalles del proyecto 1.</p>';
    } else if (proyectoId === 'proyecto2') {
        detalle.innerHTML = '<h3>Proyecto 2</h3><p>Detalles del proyecto 2.</p>';
    }
}

document.getElementById('form-contacto').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado correctamente.');
});
