
function saludo() {
    alert("Que pasa contigo");
}

function ejecuta() {
    /*con este metodo podemos decirle que ejecute una funcion cuando 
    se detecte un evento en las etiquetas html especificada( en este caso p)*/ 
    for (let i = 0; i < 3; i++) {
        document.getElementsByTagName("p")[i].onclick=saludo;
    }


    //document.getElementById("importante").onclick=saludo;

}

window.onload=ejecuta;//para ejecutar la funcion en el archivo html