
// codigo que permite ejercutarlo recien cuando cargue todo el dom
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registrarDatos").addEventListener("submit", async (e) => {
        e.preventDefault();
        const form = document.querySelector("form");
        let dataForm = new FormData(form);
    
        dataForm.append("ticket_time", new Date().toString());
    
        // console.log(dataForm);
    
        const URL = "https://sheetdb.io/api/v1/miekuv8bhpjsi";
    
        await fetch(URL, {
            method: "POST",
            body: dataForm,
        });
    
        form.classList.add("animation");
    
        alert("Gracias por tu mensaje");
        window.location.href =
            "../../index.html";
    });
  });
const imgSlider=[
    // {
    //     titulo:"Bienvenido, frío!",
    //     texto:"Este es el momento ideal para realizarte una limpieza profunda",
    //     imagen:"woman-having-facial-treatment1.jpg",
    //     boton:"Conocé los beneficios del peeling",
    //     link:"#"
    // },
    // {
    //     titulo:"El perfil que querés!",
    //     texto:"Nuevo Tratamiento, Plasma rico en Plaquetas con gel bioestimulante, Tu piel iluminada y rejuvenecida",
    //     imagen:"woman-having-facial-treatment2.jpg",
    //     boton:"Agendá tu sesión de PRP",
    //     link:"#"
    // },
    // {
    //     titulo:"Nuevo tratamiento!",
    //     texto:"Modelá tu nariz sin cirugía con ácido hialurónico",
    //     imagen:"woman-having-facial-treatment3.jpg",
    //     boton:"Conocé más sobre rinomodelación",
    //     link:"#"
    // },
    // {
    //     titulo:"Tu piel merece lo mejor!",
    //     texto:"Conocé nuestra línea de productos LACA para cuidar tu piel",
    //     imagen:"woman-having-facial-treatment4.jpg",
    //     boton:"Encontrá todos los productos acá!",
    //     link:"#"
    // },
];

let index=0;
let carrusel= document.getElementById("carrusel");
let divContenedor = document.getElementById("contenedor_slider_omar");
let divContenido = document.getElementById("contenido_slider_omar");
let divTexto = document.getElementById("texto_slider");
let divContenedorImg = document.getElementById("img_slider");

let imagen = document.createElement("img");
let texto = document.createElement("p");
let boton = document.createElement("button");
let link = document.createElement("a");
let titulo = document.createElement("h2");

function slider(){
    titulo.textContent = imgSlider[index].titulo;
    imagen.src="assets/img/"+imgSlider[index].imagen;
    texto.textContent = imgSlider[index].texto;
    link.href = imgSlider[index].link;
    link.textContent=imgSlider[index].boton;
    boton.appendChild(link);

    // carrusel.appendChild(titulo);
    // carrusel.appendChild(texto);
    //carrusel.appendChild(imagen);
    // carrusel.appendChild(boton);
    divContenedorImg.appendChild(imagen);
    divTexto.appendChild(titulo);
    divTexto.appendChild(texto);
    divTexto.appendChild(boton);
    
    (index<3)?index++:index=0;
}

// setInterval(slider, 5000);


/*validacion  */
window.addEventListener('load', (e) => {
    
    let validatdorFormulario = new FormValidator('registrarDatos', [{
        name: 'ayn',
        display: 'Nombre',
        rules: 'required|min_length[5]'
    },
    {
        name: 'mail',
        display: 'Email',
        rules: 'required|valid_email'
    },
    {
        name: 'phone',
        display: 'Phone',
        rules: 'numeric|min_length[10]'
    },
    {
        name: 'consulta',
        display: 'Consulta',
        rules: 'min_length[20]|max_lenght[255]'
    }], function (errores, evento) {

        if (errores.length) {
            let mensaje = '';
            errores.forEach(function (campo, indice, arreglo) {
                mensaje += `${campo.message} <br/>`;
            });
            let caja = document.querySelector('#resultadoValidacion');
            caja.innerHTML = mensaje;
           
        }
    }
    )
});

// Parte para enviar el  formulario


