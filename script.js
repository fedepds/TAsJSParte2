
const textoOriginal = document.getElementsByClassName("texto_original")[0];
const cambiarTexto = document.getElementById("cambio");

const cambiarTextoOriginal = () => {
    textoOriginal.innerHTML = "Este es un texto cambiado";

}
cambiarTexto.addEventListener("click", cambiarTextoOriginal);

const boton = document.getElementById("boton");
const input = document.getElementById("input");
const botonEliminar = document.getElementById("botonEliminar");



const addLista = () => {
    const lista = document.getElementById("lista");
    const li = document.createElement("li");
    li.innerHTML = input.value;
    lista.appendChild(li);
    input.value = "";
}
boton.addEventListener("click", addLista);


const eliminarLista = () => {
    const lista = document.getElementById("lista");
    lista.removeChild(lista.lastChild);
}
botonEliminar.addEventListener("click", eliminarLista);

const botonMostrarOcultar = document.getElementById("mostrarOcultar");
const textoMostrarOcultar = document.getElementById("textoMostrarOcultar");

const mostrarOcultar = () => {
    const aux = textoMostrarOcultar.textContent;
    if (textoMostrarOcultar.innerHTML === "texto a ocultar") {
        textoMostrarOcultar.innerHTML = '';
    }
    else {
        textoMostrarOcultar.innerHTML = "texto a ocultar";
    }
}
botonMostrarOcultar.addEventListener("click", mostrarOcultar);


const botonIcrementar = document.getElementById("incrementar");
const textoIncrementar = document.getElementById("numeroAIcrementar");
function incrementar(){
    let numero = parseInt(textoIncrementar.textContent);
    numero++;
    textoIncrementar.innerHTML = numero;
}
botonIcrementar.addEventListener("click", incrementar);

