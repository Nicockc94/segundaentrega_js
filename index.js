//Segunda entrega 
// Nicolas Gabriel Gomez


//Etapa 1 : Creacion de los productos que seran comercialiazdos
//Utilizando un array de objetos¿


const carrito=[]
const Remeras = [
    { id: 0, precio: 3000,  talle: 'S', nombre:"Nike SB STREET" },
    { id: 1, precio: 3500, talle: 'M', nombre:"Nike SB URBANSE " },
    { id: 2, precio: 3500, talle: 'L', nombre:"Nike JUST DO IT " },
    { id: 3, precio: 4500, talle: 'XL', nombre:"Nike JORDAN 1" },
    { id: 4, precio: 3500, talle: 'XXL', nombre:"Nike AIR" }
];


let datosDeProductos ="" //Inicialmente vacia :)

for (var i = 0; i < Remeras.length; i++) {
    datosDeProductos +="\n Nombre: "+Remeras[i].nombre +"\n ID: " + Remeras[i].id + " \n Precio: $" + Remeras[i].precio + "\n";
}

let seleccion=+prompt("Bienvenidos!\n Lista de Remeras "+ datosDeProductos + "\n Seleccione el numero de ID para sumar remera al carrito")
if (seleccion ===""){
    alert("Por favor ingrese el valor correspondiente")
        
   
}else{
    mostrarProductoSeleccionado(seleccion)
    function mostrarProductoSeleccionado(id) {
        let mensajeEnPantalla = "Seleccionaste la Remera: "+" ID: "+Remeras[id].nombre+"  Talle: "+Remeras[id].talle+" Precio: $"+Remeras[id].precio;
       alert (mensajeEnPantalla)
    
    
    }
    let  cantidadSeleccionada = +prompt(" Seleccione la cantidad de remeras que desea sumar al carrito")
    
function Calcularpreciototal(cantidad,precio) {
    let precioTotal = cantidad * Remeras[seleccion].precio
    console.log("el precio total por " + cantidad +" es de $"+ precioTotal)
}

Calcularpreciototal(cantidadSeleccionada , Remeras[seleccion].precio)



//logre hacer que el carrito , indique la cantidad fisica ademas de solo el precio
for (let i = 0; i < cantidadSeleccionada; i++) {
    let productoParaElCarrito = {
        id: seleccion,
        nombre: Remeras[seleccion].nombre,
        talle: Remeras[seleccion].talle,
        precio: Remeras[seleccion].precio
    };
    carrito.push(productoParaElCarrito);
}


// mostrara el carrito con la misma cantidad de productos que el usuario selecciono para llevar

console.log(carrito)

}










