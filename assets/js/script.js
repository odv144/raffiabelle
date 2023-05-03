
// codigo que permite ejercutarlo recien cuando cargue todo el dom
// document.addEventListener("DOMContentLoaded", function() {
//     // Tu código aquí
//   });
const imgSlider=[
    {
        texto:"Las estaciones frías son ideales para una limpieza profunda",
        imagen:"woman-having-facial-treatment1.png",
        boton:"Conocé los beneficios del peeling",
        link:"#"
    },
    {
        texto:"Nuevo Tratamiento, Plasma rico en Plaquetas con gel bioestimulante, Tu piel iluminada y rejuvenecida",
        imagen:"woman-having-facial-treatment2.png",
        boton:"Agendá tu sesión de PRP",
        link:"#"
    },
    {
        texto:"Modelá tu nariz sin cirugía con ácido hialurónico",
        imagen:"woman-having-facial-treatment3.png",
        boton:"Conocé más sobre rinomodelación",
        link:"#"
    },
    {
        texto:"Conocé nuestra línea de productos LACA para cuidar tu piel",
        imagen:"woman-having-facial-treatment4.png",
        boton:"Encontrá todos los productos acá!",
        link:"#"
    },
];

// const imag=["woman-having-facial-treatment1.png",
//     "woman-having-facial-treatment2.png",
//     "woman-having-facial-treatment3.png",
//     "woman-having-facial-treatment4.png"];
let index=0;
let carrusel= document.getElementById("carrusel");
let imagen = document.createElement("img");
let texto = document.createElement("p");
let boton = document.createElement("button");
let link = document.createElement("a");

function slider(){
    imagen.src="assets/img/"+imgSlider[index].imagen;
    texto.textContent = imgSlider[index].texto;
    link.href = imgSlider[index].link;
    link.textContent=imgSlider[index].boton;
    boton.appendChild(link);
    carrusel.appendChild(texto);
    carrusel.appendChild(imagen);
    carrusel.appendChild(boton);
    (index<3)?index++:index=0;
}

setInterval(slider, 5000);