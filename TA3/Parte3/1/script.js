let img = document.getElementById("gatitoTierno1");

const cambiarImagenGatito = () => {
    img.src =  'GatitoTierno2.jpeg';
}

const volverAImagenAnterior = () => {
    img.src = 'GatitoTierno1.jpeg';
}

img.addEventListener("mouseover", cambiarImagenGatito);
img.addEventListener("mouseout", volverAImagenAnterior)