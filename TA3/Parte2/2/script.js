const nombre = document.getElementById("nombre");
const contrasena = document.getElementById("contrasena");
const email = document.getElementById("correo");
const errorNombre = document.getElementById("error_nombre");
const errorContrasena = document.getElementById("error_contrasena");
const errorEmail = document.getElementById("error_email");
const formulario = document.getElementById("formulario");

const validacion = () => {
    const valorNombre = nombre.value;
    const valorContrasena = contrasena.value;
    const valorEmail = email.value;
    let formularioValido = true;

    if(!valorNombre) {
        errorNombre.innerHTML = "Nombre invalido";
        formularioValido = false;
    } else {
        errorNombre.innerHTML = "";
    }

    if(!valorContrasena || valorContrasena.length < 8) {
        errorContrasena.innerHTML = "Contrasena invalida";
        formularioValido = false;
    } else {
        errorContrasena.innerHTML = "";
    }
    if(!valorEmail || !valorEmail.includes("@")) {
        errorEmail.innerHTML = "Email invalido";
        formularioValido = false;
    } else {
        errorEmail.innerHTML = "";
    }

    return formularioValido;
}

formulario.addEventListener("submit", (event) => {
    if(!validacion()) {
        event.preventDefault(); //Previene envio del formulario si la funcion validar da false
        alert("Corregi los errores antes de enviar el form")
    }
});

nombre.addEventListener("input", validacion);
contrasena.addEventListener("input", validacion);
email.addEventListener("input", validacion);
