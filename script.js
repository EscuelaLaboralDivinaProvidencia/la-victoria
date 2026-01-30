document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header-container');
    const title = document.getElementById('title');
    const form = document.getElementById('inscripcionForm');
    const btn = document.getElementById('submitBtn');

    // 1. Manejo de la imagen (usa el nombre real que subiste)
    const img = document.createElement('img');
    img.src = 'photo-jpg.p.png'; 
    img.className = 'foto-perfil';
    img.alt = 'Sor Mercedes';
    img.onerror = () => { img.src = 'photo-jpg.p.png'; }; 
    header.insertBefore(img, title);

    // 2. Enlaces de WhatsApp (¡Asegúrate de poner los links reales!)
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

        // CORRECCIÓN: Buscamos por 'name' porque en tu HTML no pusiste 'id="curso"'
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
                if (linkGrupo && linkGrupo !== "LINK_AQUI") {
                    window.location.href = linkGrupo;
                } else {
                    alert("¡Inscripción recibida!");
                    btn.disabled = false;
                    btn.textContent = "Enviar Inscripción";
                }
            }, 1500);
        })
        .catch(() => {
            alert("Error de conexión");
            btn.disabled = false;
        });
    });
});



