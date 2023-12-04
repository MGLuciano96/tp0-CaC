function validarFormulario() {
    // Obtener valores ingresados por el usuario
    var nombre = document.getElementById("nombre").value.trim();
    var apellido = document.getElementById("apellido").value.trim();
    var fn = document.getElementById("fn").value.trim();
    var edad = document.getElementById("edad").value.trim();
    var telefono = document.getElementById("telefono").value.trim();
    var email = document.getElementById("email").value.trim();


    // Verificación de caracteres alfabéticos en nombre y apellido
    var nombreTest = /^[a-zA-Z]+$/.test(nombre);
    var apellidoTest = /^[a-zA-Z]+$/.test(apellido);

    if (!nombreTest || !apellidoTest) {
        alert("Ingrese un nombre y apellido válidos con letras del abecedario.");
        return false;
    }

    if (isNaN(telefono)) {
        console.log("Teléfono no válido"); 
        alert("El número de teléfono ingresado no es válido. Debe contener solo números.");
        return false;
    }

    function validateEmail(email) {
        // checkear emal
        var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email);
    }
    if (!validateEmail(email)) {
        console.log("Correo no válido"); 
        alert("El correo electrónico ingresado no es válido. Debe contener '@' y terminar con '.com'.");
        return false;
    }

    // Verificar que la edad sea un número
    if (isNaN(edad)) {
        alert("La edad ingresada no es un número.");
        return false;
    }

    if (isNaN(edad) || parseInt(edad) < 18) {
        console.log("Edad no válida");
        alert("La edad ingresada no es válida. Debe ser mayor o igual a 18 años.");
        return false;
    }

     // Verificar si algún campo está en blanco
     if (nombre === "" || apellido === "" || fn === "" || edad === "" || telefono === "" || email === "") {
        alert("Complete todos los campos del formulario.");
        return false;
    }

    alert("Datos enviados correctamente.");
    return true;

}
