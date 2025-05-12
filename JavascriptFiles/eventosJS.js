


function eventoImagen() {
    alert("Paisaje de montañas");
}

function setImageSize(imagen_param) {
    imagen_param.width=1000;
    imagen_param.height=1000;
}

function handler() {
    
    let imagen = document.getElementsByTagName("img")[0];
    imagen.addEventListener("click", eventoImagen, false);
    imagen.addEventListener("mouseout", setImageSize(imagen), false);
}

window.onload = handler;
