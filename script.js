function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
}

function toggleCategoria(id) {
    var categoria = document.getElementById(id);
    categoria.style.display = (categoria.style.display === 'none' || categoria.style.display === '') ? 'block' : 'none';
}

document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex-1].style.display = "block";  
        setTimeout(showSlides, 2000); // Cambia la imagen cada 2 segundos
    }
});