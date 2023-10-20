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
                product.quantity = 1;
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

    // Función para remover un producto del carrito  // POR ALGUNA RAZON REMUEVE DE A 2, HAY QUE REVISAR
    function removeFromCart(productId) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
        const index = cart.findIndex(item => item.id === productId);
    
        if (index !== -1) {
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    
        updateCartUI();
    }

    // Evento de click para remover productos del carrito
    document.querySelectorAll('.remove-from-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.dataset.id;
            removeFromCart(productId);
        });
    });
    
    // Función para vaciar completamente el carrito
    function clearCart() {
        localStorage.removeItem('cart');
        updateCartUI();
    }

    // Evento de click para vaciar completamente el carrito
    document.getElementById('clear-cart').addEventListener('click', function() {
        clearCart();
    });

    document.getElementById('open-cart').addEventListener('click', function() {
        const cartContainer = document.getElementById('cart-container');
        
        if (isCartOpen) {
            // Si el carrito está abierto, lo cerramos
            cartContainer.style.display = 'none';
        } else {
            // Si el carrito está cerrado, lo abrimos
            cartContainer.style.display = 'block';
        }
    });
    
    document.getElementById('redirect-button').addEventListener('click', function() {
        window.location.href = '/templates/formulariopago.html';
    });
    

    function updateCartUI() {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const productListElement = document.getElementById('product-list');
    
        // Limpiar la lista de productos en la interfaz
        productListElement.innerHTML = '';
    
        // Volver a crear la lista de productos en la interfaz
        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.nombre} - Cantidad: ${item.quantity} - Subtotal: $${(item.precio * item.quantity).toFixed(2)}`;
    
            productListElement.appendChild(listItem);
        });
    
        // Calcular y mostrar el subtotal y total en la interfaz
        const subtotal = cartItems.reduce((total, item) => total + (item.precio * item.quantity), 0);
        const totalElement = document.getElementById('total');
        totalElement.textContent = `Total: $${total.toFixed(2)}`;
    
        // Guardar el total en el localStorage
        localStorage.setItem('total', subtotal.toFixed(2));
    }

    // Cargar y mostrar el carrito al cargar la página
    updateCartUI();
});
    // let listenersSet = false;

    // //Funcion para agregar eventos listeners
    // function setEventListeners() {
    //     if (!listenersSet) {
    //         addProductToCartListener();
    //         removeProductFromCartListener();
    //         listenersSet = true;
    //     }
    // }
    
    // setEventListeners();

    //TARJETA
    flip = ()=> {
        document.getElementById('card').classList.toggle('flipped')
        document.querySelector('#front .reflection').classList.toggle('move')
        document.querySelector('#back .reflection').classList.toggle('move')
    }
    document.getElementById('show-btn').addEventListener('click', flip)
    document.getElementById('hide-btn').addEventListener('click', flip)

    // NOMBRE TARJETA TEST
    document.addEventListener("DOMContentLoaded", function() {
        // Obtener referencias a los elementos
        const inputNombre = document.getElementById('nmbtj');
        const inputNrotj = document.getElementById('hidden-number');
        const mostrarNombre = document.getElementById('mostrar-nombre');
        const mostrarNro = document.getElementById('mostrar-numero');
        const btnGuardar = document.getElementById('show-btn');
    
        // Manejar el evento de clic en el botón
        btnGuardar.addEventListener('click', function() {
            const nombre = inputNombre.value; // Obtener el valor del input
            const nro = inputNrotj.value
            mostrarNombre.textContent = `${nombre}`; // Mostrar el valor en el elemento
            mostrarNro.textContent = `${nro}`;
        });
    });
    
    // POP UP PAGAR
    document.getElementById('open-success-popup').addEventListener('click', function() {
        document.querySelector('.success-popup').style.display = 'block';
    });
    
    document.querySelector('.success-popup').addEventListener('click', function() {
        this.style.display = 'none';
    });
    
    document.querySelector('.content').addEventListener('click', function(event) {
        event.stopPropagation();
    });

    document.getElementById('miFormulario').addEventListener('submit', function(event) {
        event.preventDefault();
    });