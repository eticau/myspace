/* Estilos generales */
body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #f4f4f4, #e0e0e0);
    color: #333;
    transition: background 0.3s ease, color 0.3s ease;
}

/* Modo oscuro */
body.dark-mode {
    background: linear-gradient(135deg, #1a1a1a, #333);
    color: #fff;
}

/* Ajuste de sección "About Me" en modo oscuro */
body.dark-mode .about-me {
    background-color: #444;
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
    transition: background-color 0.3s ease;
}

body.dark-mode header {
    background-color: #333;
}

header nav a {
    margin-right: 20px;
    color: #333;
    text-decoration: none;
    transition: color 0.3s ease;
}

body.dark-mode header nav a {
    color: #fff;
}

header nav a:hover {
    color: #00bfa6;
}

/* Logo */
.logo {
    font-size: 24px;
    font-weight: bold;
}

/* Botones de tema e idioma con iconos */
.controls {
    display: flex;
    gap: 10px;
}

.theme-toggle img, .language-toggle img {
    width: 30px;
    height: 30px;
    cursor: pointer;
}

/* Imagen de perfil */
.profile-pic {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 5px solid #00bfa6;
    transition: transform 0.3s ease;
}

.profile-pic:hover {
    transform: scale(1.1);
}

/* Contenedor del perfil */
.profile-container {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
}

.profile-text {
    margin-left: 20px;
}

h1 .highlight {
    color: #00bfa6;
}

ul.details {
    list-style-type: none;
    padding: 0;
}

/* Botón principal */
.main-btn {
    padding: 10px 20px;
    background-color: #00bfa6;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.main-btn:hover {
    background-color: #008f76;
}

/* Iconos de redes sociales */
.socials {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
}

.socials a {
    margin: 5px 10px;
}

.socials img {
    width: 40px;
    height: 40px;
    transition: filter 0.3s ease, transform 0.3s ease;
}

.socials img:hover {
    transform: scale(1.2);
}

body.dark-mode .socials img {
    filter: invert(1);
}

/* Sección About Me */
.about-me {
    background: #f8f9fa;
    padding: 40px 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
}

.about-me h2 {
    font-size: 28px;
    color: #00bfa6;
    text-align: center;
    letter-spacing: 1px;
}

.about-me p {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 15px;
    text-align: justify;
}

.about-me .highlight {
    color: #00bfa6;
}

/* Formulario de contacto */
.contact {
    padding: 40px;
    background-color: #f4f4f4;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.contact h2 {
    font-size: 28px;
    color: #00bfa6;
    text-align: center;
}

#contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#contact-form input, #contact-form textarea {
    width: 80%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
}

#contact-form button {
    padding: 10px 20px;
    background-color: #00bfa6;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

#contact-form button:hover {
    background-color: #008f76;
}

#form-status {
    margin-top: 10px;
    font-size: 14px;
    color: red;
}

/* Modal de agradecimiento */
#thank-you-modal {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 400px;
    background-color: white;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    text-align: center;
    z-index: 1000;
}

#thank-you-modal h3 {
    color: #00bfa6;
    font-size: 24px;
    margin-bottom: 15px;
}

#thank-you-modal p {
    font-size: 18px;
    margin-bottom: 20px;
}

#thank-you-modal button {
    padding: 10px 20px;
    background-color: #00bfa6;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

#thank-you-modal button:hover {
    background-color: #008f76;
}

#thank-you-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
}
