/* Estilos generales */
body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #f4f4f4, #e0e0e0);
    color: #333;
    transition: background 0.3s ease, color 0.3s ease;
}

/* Barra de Progreso */
#progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 5px;
    background-color: #00bfa6;
    z-index: 1000;
    transition: width 0.3s ease;
}

/* Modo oscuro */
body.dark-mode {
    background: linear-gradient(135deg, #1a1a1a, #333);
    color: #fff;
}

/* Header */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

header a {
    margin-right: 20px;
    color: #333;
    text-decoration: none;
    transition: color 0.3s ease;
}

header a:hover {
    color: #00bfa6;
}

body.dark-mode header a {
    color: #fff;
}

.logo {
    font-size: 24px;
    font-weight: bold;
}

/* Botón de tema */
.theme-toggle {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
}

/* Animaciones al desplazarse */
[data-aos="fade-up"] {
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
}

[data-aos].aos-animate {
    opacity: 1;
    transform: translateY(0);
}

/* Barra de progreso */
#progress-bar {
    background-color: #00bfa6;
    height: 5px;
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    z-index: 999;
}

/* Otros estilos como el perfil, botones, etc., se mantienen como en versiones anteriores */
