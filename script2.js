const list = document.getElementById("lista");
const entrada = document.getElementById("entradaText");
let listItems = ["Pedro Peres","Juan Jose","Benito Sanchez","Pepito Solito"];

const mostrarlista = () => {
    let contenido = "";
    for(let i = 0; i < listItems.length; i++){
        contenido += listItems[i] + " ";
    }
    list.innerHTML = contenido;
}
mostrarlista();

const filterElements = () => {
    const text = entrada.value;
    console.log(text);
    const filteredList = text ? listItems.filter((item) => {
        return !item.toLocaleLowerCase().includes(text.toLocaleLowerCase());
    }):listItems;
    list.innerHTML = filteredList;
}

entrada.addEventListener("input", filterElements);
