import productos from '../../bd/bdproducto.json' assert { type: "json"};

// fetch('../../bd/bdproducto.json')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
// console.log(productos);

// productos.forEach((producto)=> console.log(`%c ${producto.name}`,"color:green")); 

class Producto{
    constructor ( name, precio,image){
        (this.name=name),(this.precio=precio),(this.image=image);
    }

    getValueInFloat(){
        let precio = this.precio.slice(1);
        if(!parseFloat(precio)){
            return 0;
        }
       
        return parseFloat(precio);
    }

    // getDivCarProducto(idToInsert){
    //    let parent = document.getElementById(idToInsert);
    //    let div = document.createElement("div");
    //    div.className="productos";
    //    div.innerHTML = `<h4>${this.name}</h4></br>
    //    <div class="item-pro">
    //         <img src="${this.image}" alt="${this.name} width="50"/>
    //         </br>
    //         <label> ${this.precio} </label>
    //     </div>`;
    //     parent.appendChild(div); 
    // }


}

let prodObjeto = productos.map((pro)=> new Producto(pro.name,pro.price,pro.image),);

// let filtered = prodObjeto.filter((pro)=> pro.getValueInFloat() > 4900,);

// prodObjeto.forEach((pro)=> pro.getDivCarProducto("storage-producto"));


function injectProducto (idToInsert,dato){
    let parent = document.getElementById(idToInsert);
    let div = document.createElement("div");
    div.className="productos";
    div.innerHTML = `<h4>${dato.name}</h4></br>
    <div class="item-pro">
         <img src="${dato.image}" alt="${dato.name} width="50"/>
         </br>
         <label> ${dato.precio} </label>
     </div>`;
     parent.appendChild(div); 
 }



const transformToProducto = (datos) => {
    return datos.map(
        (dato) =>
            new Producto(
                dato.name,
                dato.price,
                dato.image,
                
            ),
    );
};

let URI = "https://sheetdb.io/api/v1/ot6fm99qrr7ig";
const recibirDatos = () => {
    fetch(URI, {
        method: "GET",
    })
        .then((datos) => datos.json())
        .then((datos) =>
        // console.log(datos)    
         transformToProducto(datos).forEach((dato) => injectProducto("storage-producto",dato)),
        )
        .catch((e) => console.log(e));
};

window.onload = () => recibirDatos();