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

//Prueba del carrito de compras

document.addEventListener("DOMContentLoaded", function() {
    // Función para agregar un producto al carrito
    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        const existingProduct = cart.find(item => item.id === product.id);

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            product.quantity = 0;
            cart.push(product);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI();
    }
    // Variable para chequear si el carrito está abierto o cerrado
    let isCartOpen = false;
    // Evento de click para abrir/cerrar el carrito
    document.getElementById('open-cart').addEventListener('click', function() {
        const cartContainer = document.getElementById('cart-container');
        
        if (isCartOpen) {
            // Si el carrito está abierto, lo cerramos
            cartContainer.style.display = 'none';
        } else {
            // Si el carrito está cerrado, lo abrimos
            cartContainer.style.display = 'block';
        }

        // Actualizamos el estado del carrito
        isCartOpen = !isCartOpen;
    });
        // Evento de click para cerrar el carrito
        document.getElementById('close-cart').addEventListener('click', function() {
            const cartContainer = document.getElementById('cart-container');
            cartContainer.style.display = 'none';
            isCartOpen = false; // Actualizamos el estado del carrito
        });

    // Función para actualizar la interfaz del carrito
    function updateCartUI() {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const productListElement = document.getElementById('product-list');

        // Limpiar la lista de productos en la interfaz
        productListElement.innerHTML = '';

        // Volver a crear la lista de productos en la interfaz
        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.nombre} - Cantidad: ${item.quantity} - Subtotal: $${(item.precio * item.quantity).toFixed(3)}`;

            productListElement.appendChild(listItem);
        });

        // Calcular y mostrar el subtotal y total en la interfaz
        // Ver si el subtotal se usa?
        const subtotal = cartItems.reduce((total, item) => total + (item.precio * item.quantity), 0);
        const totalElement = document.getElementById('total');
        totalElement.textContent = `Total: $${subtotal.toFixed(2)}`;
    }

    // Evento click para agregar productos al carrito
    document.querySelectorAll('.add-to-cart-button').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.dataset.id;
            const productName = this.dataset.nombre;
            const productPrice = parseFloat(this.dataset.precio);

            addToCart({ id: productId, nombre: productName, precio: productPrice });
        });
    });

    // Función para remover un producto del carrito
    function removeFromCart(productId) {
        console.log("removeFromCart llamada");
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI();
    }

    // Función para vaciar completamente el carrito
    function clearCart() {
        localStorage.removeItem('cart');
        updateCartUI();
    }

    // Evento de click para remover productos del carrito
    document.querySelectorAll('.remove-from-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.dataset.id;
            removeFromCart(productId);
        });
    });
    
    // Evento de click para remover productos del carrito
    document.getElementById('product-list').addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-from-cart')) {
            const productId = event.target.dataset.id;
            removeFromCart(productId);
        }
    });

    // Evento de click para vaciar completamente el carrito
    document.getElementById('clear-cart').addEventListener('click', function() {
        clearCart();
    });

    // Cargar y mostrar el carrito al cargar la página
    updateCartUI();
});
