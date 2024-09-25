let nombre = prompt("Ingresa tu nombre");
console.log(nombre);
alert("Bienvenido " + nombre + "  a esta experencia fotografica");

let producto = "";
let cantidad = 0;
let precio = 0;
let deseaAlgoMas = false;
let cantidadFinal = 0;
let precioFinal = 0;

do{
    producto = prompt("¿Que desea sesion fotografica, evento o cuadro");
    cantidad = Number(prompt("¿Cuantos deseas?"));

    switch (producto){
        case "sesion fotografica":
            precio = 50000;
            break;
        case "evento":
            precio = 100000;
            break;
        case "cuadro":
            precio = 30000;
            break;
        default:
            alert("La opcion seleccionada no es la correcta");
            break;
    }

precioFinal += precio * cantidad;
cantidadFinal += cantidad;

    deseaAlgoMas = confirm("¿Desea algo mas?");
}


alert( "El total a abonar es $"+precioFinal)
alert("Gracias por confiar en nosotros.");