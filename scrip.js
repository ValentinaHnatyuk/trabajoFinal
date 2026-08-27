document.addEventListener('DOMContentLoaded', () => {
    const btnCotizar = document.getElementById('btnCotizar');

    btnCotizar.addEventListener('click', () => {
        // Capturamos los valores del formulario
        const evento = document.getElementById('evento').value;
        const modelo = document.getElementById('modelo').value;
        const material = document.getElementById('material').value;
        const nombrePersonalizado = document.getElementById('nombrePersonalizado').value || 'Sin especificar';
        const fechaPersonalizada = document.getElementById('fechaPersonalizada').value || 'Sin especificar';

        // Armamos el mensaje detallado para WhatsApp
        const mensaje = `Hola ValentinaHechoAmano! Me interesa encargar un calzado personalizado:%0A- Evento: ${evento}%0A- Modelo: ${modelo}%0A- Material/Color: ${material}%0A- Nombre/Iniciales: ${nombrePersonalizado}%0A- Fecha del evento: ${fechaPersonalizada}`;

        // Número de WhatsApp (reemplazar con el real de la marca)
        const numeroWhatsApp = "5492613973261"; 

        // Generar enlace y abrir WhatsApp
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
        window.open(urlWhatsApp, '_blank');
    });
});