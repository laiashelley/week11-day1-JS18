// Tienes un grupo de al menos 5 imágenes (tema libre) y deseas realizar un carousel manualmente mediante javascript. Puede ejecutarse automáticamente, o bien mediante flechitas que pasen a la siguiente imagen o a la anterior. Puedes poner las imágenes en un array para irlas leyendo, y usar addEventListener desde javascript para controlar los eventos.

// Cuando ya te funcione, aprovecha para mejorar la presentación en lo posible. Hazlo más o menos complejo según el tiempo de que dispongas.

const imagenesBandas = ["img/architects.jpg", "img/bad-omens.jpg", "img/bring_me_the_horizon.jpg", "img/nothing-but-thieves.jpg", "img/spiritboxjpg.jpg"];

let contador = 0;
let intervalo;

document.addEventListener("DOMContentLoaded", automaticCarrousel);

function automaticCarrousel(){
    intervalo = setInterval(haciaAdelante, 2000);
}

function haciaAdelante(){
    contador = (contador + 1) % imagenesBandas.length;
    document.getElementById("imagenBanda").src = imagenesBandas[contador];
}

function muestraPlaylist(){
    let playlist = document.getElementById("playlist");
    playlist.style.display="block";
}

let playlistBoton = document.getElementById("botonEnsenyarPlaylist");
playlistBoton.addEventListener('click', muestraPlaylist);



