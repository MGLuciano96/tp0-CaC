function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
}

function toggleCategoria(id) {
    var categoria = document.getElementById(id);
    categoria.style.display = (categoria.style.display === 'none' || categoria.style.display === '') ? 'block' : 'none';
}