let deseos = [];

class deseo{
    constructor (Marca, tipo,nombre){
        this.Marca = Marca;
        this.tipo = tipo;
        this.nombre = nombre;
    }
}

function saludarUsuario(){
    let nombre = prompt("Hola!, bienvenido a la tienda, ¿Cuál es tu nombre?")
    alert("Bienvenido a la tienda " + nombre)
    menuPrincipal()
}
setTimeout(saludarUsuario,100)


function menuPrincipal(){
    let opcion = prompt(`Bienvenido a la tienda Vandal, seleccione la opción: 
    1) Comprar Reloj.
    2) Comprar conjuntos.
    3) Agregar cosas a la lista de deseos.
    4) Ver por mi cuenta.`)
    if(opcion == 1){
        compReloj();
    }else if(opcion == 2){
        comprarConjunto();
    }else if(opcion == 3){
        nuevoDeseo ();  
        let respuesta = prompt("Desea agregar un nuevo deseo?")
        if(respuesta == "si"){
            nuevoDeseo ();  
        }else{
            alert("Gracias por la preferencia.")
        }
    }else if(opcion == 4){
        
    }
}

// Creación Objetos
const nuevoDeseo = () => {
    let Marca = prompt("Que marca desea?");
    let tipo = prompt("Que tipo desea?");
   
    let nuevoDeseo = new deseo (Marca, tipo)
    deseos.push(nuevoDeseo);

    alert("Se registro el nuevo deseo")
    alert("Ya puede visualizar su nuevo deseo en la consola.")
    console.log(deseos)
}


function compReloj(){
    let Marca = prompt("¿De qué marca deseas?")
    let opcion = prompt("Entonces si su marca es " + Marca + ", desea comprar su Reloj simple(S/. 180.99) O moderno (S/.350.50).");
    if(opcion == "simple"){
        
        alert("El reloj escogido fue agregada")
    }else if(opcion == "Moderno"){
        
        alert("El reloj escogido fue agregada")
    }else{
        alert("Dato incorrecto, prueba de nuevo")
        menuPrincipal();
    }
}

function comprarConjunto(){
    let Marca = prompt("¿De qué marca deseas el conjunto de reloj y cadena?").toLowerCase();
    let opcion = prompt("Si su marca es " + Marca + "¿Desea el conjunto Simple (S/. 250.50)  o Moderno? (S/. 420.00)")
    if(opcion == "simple"){
        alert("Simple")
    }else if(opcion == "moderno"){
        alert("Moderno")
    }else{
        alert("Dato incorrecto, prueba de nuevo")
        menuPrincipal();
    }
}

