
function saludo() {
    alert("Que pasa contigo");
}

function ejecuta() {
    
    //document.querySelector(".texto").oncllick=saludo;
    const elementos = document.querySelectorAll("p");
    
    elementos.forEach((elem) => {
        elem.onclick=saludo;
    });

}

function ejecuta2() {
    const elementos = document.querySelectorAll("texto");
    elem[0].onclick=saludo();
}

window.onload=ejecuta;//para ejecutar la funcion en el archivo html