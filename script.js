document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header-container');
    const title = document.getElementById('title');
    const form = document.getElementById('inscripcionForm');
    const btn = document.getElementById('submitBtn');

    // Carga de la imagen
    const img = document.createElement('img');
    img.src = 'photo-jpg.png'; 
    img.className = 'foto-perfil';
    img.alt = 'Sor Mercedes';
    img.onerror = () => { img.src = 'photo-jpg.png.png'; };
    header.insertBefore(img, title);

    // DICCIONARIO DE GRUPOS (Reemplaza los enlaces con tus links reales de WhatsApp)
    const enlacesGrupos = {
        "Informatica": "https://chat.whatsapp.com/GvzP65tpi6f0wPszWDBWjC_INFORMATICA",
        "Ensamblado": "https://chat.whatsapp.com/LINK_DE_ENSAMBLADO",
        "Sistemas": "https://chat.whatsapp.com/LINK_DE_SISTEMAS",
        "Redes": "https://chat.whatsapp.com/LINK_DE_REDES",
        "Masaje": "https://chat.whatsapp.com/LINK_DE_MASAJE",
        "Reposteria": "https://chat.whatsapp.com/LINK_DE_REPOSTERIA",
        "Tapiceria": "https://chat.whatsapp.com/LINK_DE_TAPICERIA",
        "Hacker Etico": "https://chat.whatsapp.com/LINK_DE_CYBERSEGURIDAD"
    };

    // Manejo del envío
    form.addEventListener('submit', function(e) {
        // Obtenemos el curso seleccionado ANTES de que se limpie el formulario
        const cursoSeleccionado = document.getElementById('curso').value;
        const linkGrupo = enlacesGrupos[cursoSeleccionado];

        btn.disabled = true;
        btn.textContent = "Enviando e ingresando al grupo...";

        // Dejamos que Formspree haga su trabajo y luego redirigimos
        setTimeout(() => {
            if (linkGrupo) {
                window.location.href = linkGrupo;
            } else {
                alert("¡Inscripción enviada! Pronto te contactaremos.");
                btn.disabled = false;
                btn.textContent = "Enviar Inscripción";
            }
        }, 2000); // Esperamos 2 segundos para asegurar el envío de datos
    });
});

// Registro del Service Worker para la PWA
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log("App lista para instalar"))
    .catch((err) => console.log("Error de App", err));
}