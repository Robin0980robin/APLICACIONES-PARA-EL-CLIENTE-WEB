function validarFormulario() {
    var cedula = document.getElementById("cedula").value;
    var apellidos = document.getElementById("apellidos").value;
    var nombres = document.getElementById("nombres").value;
    var direccion = document.getElementById("direccion").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var ciudad = document.getElementById("ciudad").value;

    if (!cedula || !apellidos || !nombres || !direccion || !telefono || !email || !ciudad) {
        alert("Completar todos los campos para enviar.");
        return false;
    }

    if (cedula.length !== 10 || isNaN(cedula)) {
        alert("La cédula debe tener de 10 dígitos.");
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    alert("Formulario enviado con éxito.");
    return true;
}
