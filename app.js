let botonoElem = document.getElementById("boton-cambiar-frase");
let frasesElem = document.getElementById("frases");
let autorElem = document.getElementById("autor");

function generarEnteroAleatorio (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function cambiarFrase(){
    let indiceAleatorio = generarEnteroAleatorio(0, frases.length);
    frasesElem.innerText = `"${frases[indiceAleatorio].texto}"`;
    autorElem.innerText =  frases[indiceAleatorio].autor;
}

cambiarFrase();

botonoElem.addEventListener("click", cambiarFrase)

