const input = document.getElementById("texto");

const cambiarBordeInput = () => {
    input.style.borderColor = "black";
}

const restaurarBordeInput = () => {
    input.style.borderColor = "";
}
input.addEventListener("focus", cambiarBordeInput);
input.addEventListener("blur", restaurarBordeInput);