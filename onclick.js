function cambiarTexto(elemento) {
    if(elemento.innerHTML == "Iniciar sesión") {
        elemento.innerHTML = "Cerrar sesión";
    } else {
        elemento.innerHTML = "Iniciar sesión";
    }
}

function hide(element) {
    element.remove();
}

let count = 13; // Inicia el contador con like1

function sumarLike(elemento) {
    count++;
    elemento.innerHTML = count + " Likes";
    alert("Ninja recibió un me gusta")
}


let counter = 37; // Inicia el contador con like2

function sumarLike2(elemento) {
    counter++;
    elemento.innerHTML = counter + " Likes";
    alert("Ninja recibió un me gusta")
}
