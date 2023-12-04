
document.addEventListener('DOMContentLoaded', function () {
    var loginContainer = document.getElementById('login-container');
    loginContainer.classList.add('active');
});

function checkLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Verifica los credenciales
    if (username === 'admin' && password === 'admin') {
        alert('Bienvenido, Administrador!');
      // Redirecciona a la página de administrador
        window.location.href = 'templates/productos_admin.html';
    } else if (username === 'usuario' && password === 'user') {
        alert('Bienvenido, Usuario!');
      // Redirecciona a la página de usuario
        window.location.href = 'templates/productos_usuario.html';
    } else {
        openPopup('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
}

function openPopup(message) {
    var overlay = document.getElementById('overlay');
    var popup = document.getElementById('popup');
    var popupMessage = document.getElementById('popup-message');

    overlay.style.display = 'block';
    popup.style.display = 'block';
    popupMessage.innerText = message;
}

function closePopup() {
    var overlay = document.getElementById('overlay');
    var popup = document.getElementById('popup');

    overlay.style.display = 'none';
    popup.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    var loginContainer = document.getElementById('login-container');
    loginContainer.classList.add('active');
});