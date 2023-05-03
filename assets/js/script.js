
// codigo que permite ejercutarlo recien cuando cargue todo el dom
// document.addEventListener("DOMContentLoaded", function() {
//     // Tu código aquí
//   });

const imag=["armonie_chisiamo1.jpg",
    "armonie_centro_estetico.jpg",
    "centro-estetico1.jpg",
    "punto_vendita_armonie.jpg"];
var index=0;
var carrusel= document.getElementById("carrusel");
var imagen = document.createElement("img");

function slider(){
    imagen.src="assets/img/"+imag[index];
    
    carrusel.appendChild(imagen);
    
    (index<3)?index++:index=0;
}

setInterval(slider, 2000);