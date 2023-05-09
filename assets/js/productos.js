
// fetch('../../bd/bdproducto.json')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
import productos from '../../bd/bdproducto.json' assert { type: "json"};
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

    getDivCarProducto(idToInsert){
       let parent = document.getElementById(idToInsert);
       let div = document.createElement("div");
       div.className="productos";
       div.innerHTML = `<h4>${this.name}</h4></br>
       <div class="item-pro">
            <img src="${this.image}" alt="${this.name} width="50"/>
            </br>
            <label> ${this.precio} </label>
        </div>`;
        parent.appendChild(div); 
    }


}

let prodObjeto = productos.map((pro)=> new Producto(pro.name,pro.price,pro.image),);

// let filtered = prodObjeto.filter((pro)=> pro.getValueInFloat() > 4900,);

prodObjeto.forEach((pro)=> pro.getDivCarProducto("storage-producto"));

