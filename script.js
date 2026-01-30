document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header-container');
    const title = document.getElementById('title');
    const form = document.getElementById('inscripcionForm');
    const btn = document.getElementById('submitBtn');

    // 1. Manejo de la imagen CORREGIDO para PC y Celular
    const img = document.createElement('img');
    img.src = 'photo-jpg.p.jpg'; // Extensión corregida a .jpg
    img.className = 'foto-perfil';
    img.alt = 'Sor Mercedes';
    
    // Si la imagen falla, intentamos cargarla de nuevo o mostramos error en consola
    img.onerror = () => { 
        console.error("Error cargando la foto de Sor Mercedes. Verifica el nombre del archivo.");
    }; 
    header.insertBefore(img, title);

    // 2. Enlaces de WhatsApp (Actualiza los que faltan)
    const enlacesGrupos = {
        "Informatica": "https://chat.whatsapp.com/GvzP65tpi6f0wPszWDBWjC",
        "Ensamblado": "LINK_AQUI",
        "Sistemas": "LINK_AQUI",
        "Redes": "LINK_AQUI",
        "Masaje": "LINK_AQUI",
        "Reposteria": "LINK_AQUI",
        "Tapiceria": "LINK_AQUI",
        "Hacker Etico": "LINK_AQUI"
    };

    form.addEventListener('submit', function(e) {
        e.preventDefault(); 

        const cursoSeleccionado = form.querySelector('select[name="Curso"]').value;
        const linkGrupo = enlacesGrupos[cursoSeleccionado];

        btn.disabled = true;
        btn.textContent = "Registrando...";

        // Enviar a Google Sheets
        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            mode: 'no-cors' 
        })
        .then(() => {
            btn.textContent = "¡Éxito! Entrando al grupo...";
            setTimeout(() => {
                // Si existe el link y no es el texto por defecto, redirigir
                if (linkGrupo && linkGrupo !== "LINK_AQUI") {
                    window.location.href = linkGrupo;
                } else {
                    alert("¡Inscripción recibida! Pronto te contactaremos.");
                    btn.disabled = false;
                    btn.textContent = "Enviar Inscripción";
                }
            }, 1500);
        })
        .catch(() => {
            alert("Error de conexión al enviar el formulario.");
            btn.disabled = false;
            btn.textContent = "Enviar Inscripción";
        });
    });
});


