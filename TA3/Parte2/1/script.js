const listaOutput = document.getElementById("lista");
const texto = document.getElementById("texto");

const lista = ["Pepe", "Agustin", "Jose", "Juan" , "Alberto"];
const mostrarLista = () => {
    let contenido = " ";
    lista.forEach((elem) => {
        //Mostramos el array utilizando template strings
        contenido += `${elem}` + " ";
    });
    listaOutput.innerHTML = contenido;
}
mostrarLista();


const mostrarCoincidencias = () => {
    const entrada = texto.value;
    const listaFiltrada =  entrada ? lista.filter((item) => {
        return item.toLocaleLowerCase().includes(entrada.toLocaleLowerCase())
    }) : lista;
    listaOutput.innerHTML = listaFiltrada;
}

texto.addEventListener("input", mostrarCoincidencias)
