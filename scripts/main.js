let gorra;
let preciogorra = 0;
let arete;
let precioarete = 0;
let reloj;
let precioreloj = 0;
const igv =0.18 ;

function ingresarGorra(marca) {
    let gorraNueva = marca.toLowerCase()
    while ((gorraNueva != "nike") && (gorraNueva != "adidas")) {
        gorraNueva = prompt("elige una marca de gorra valida. nike(S/.250) o adidas(S/.180)?").toLowerCase();
    }
    if (gorra == gorraNueva) {
        alert("Es la misma gorra que ya tenias.")
    } else {
        if(gorraNueva == "nike"){
            preciogorra = 250
        } else{
            preciogorra = 180
        }
        gorra == gorraNueva;
        alert("Se agrego un Accesorio " + gorraNueva);
    }
}

function ingresarArete(marca) {
    let areteNuevo = marca.toLowerCase()
    while ((areteNuevo != "mfb") && (areteNuevo != "farfetech")) {
        areteNuevo = prompt("eliga una marca de arete valida. mfb(S/.100) o farfetech(S/.80)?").toLowerCase();
    }
    if (arete === areteNuevo) {
        alert("Es el mismo arete que ya tenias.")
    } else {
        if(areteNuevo === "mfb"){
            precioarete = 100
        } else{
            precioarete = 80
        }
        arete = areteNuevo;
        alert("Se agrego un Accesorio " + areteNuevo);
    }
}

function ingresarReloj(marca) {
    let relojNuevo = marca.toLowerCase();
    while ((relojNuevo != "chronos") && (relojNuevo != "casio")) {
        relojNuevo = prompt("eliga una marca de Reloj valida. chronos(S/.279) o casio(S/.299)?").toLowerCase();
    }
    if (reloj === relojNuevo) {
        alert("Es la mismo reloj que ya tenias.")
    } else {
        if(relojNuevo === "Chronos"){
            precioreloj = 279
        } else{
            precioreloj = 299
        }
        reloj = relojNuevo;
        alert("Se agrego un Accesorio " + relojNuevo);
    }
}

function mostrarConjunto() {
  console.log("Gorra: " + gorra + " Arete: " + arete + " Reloj: " + reloj);
}

function armar(){
    let gorraAc = prompt("eliga su marca de Gorro que mas le guste nike(S/.250) o adidas(S/.180)?").toLowerCase();
    ingresarGorra(gorraAc)
    let areteAc = prompt("eliga su marca de Gorro que mas le guste mfb(S/.100) o farfetech(S/.80)?").toLowerCase();
    ingresarArete(areteAc)
    let relojAc = prompt("eliga su marca de Gorro que mas le guste chronos(S/.279) o casio(S/.299)?").toLowerCase();
    ingresarReloj(relojAc)
}

function precio(){
    let precioSinIgv = 0
    if (preciogorra!= 0 && precioarete !=0 && precioreloj != 0){
        precioSinIgv = preciogorra + precioarete + precioreloj
        return(precioSinIgv)
    } else{
        alert("No se puede saber el precio si no se arma el conjunto!")
        return(precioSinIgv)
    }
}

function precioFinal(){
    let precioFinalConIgv = 0;
    return(precioFinalConIgv = (precio()+(precio()*igv)));
}
/*Fin Funciones para sacar precio co y sin iva*/
/*funcion para comprar pc*/
function comprarConjunto(){
    let inputComprar = prompt("Desea armar un conjunto? si/no").toLowerCase();
    while(inputComprar != "si" && inputComprar != "no"){
        alert("Valor ingresado no valido. Ingrese si o no.")
        inputComprar = prompt("Desea armar un conjunto? si/no").toLowerCase();
    }
    if(inputComprar ==="si"){
        armar();
        mostrarConjunto()
        alert("El precio final de su conjunto con igv incluido es: " + precioFinal());
    } else {
        alert("Espero encuentre algo de su agrado.")
    }
}
setTimeout(comprarConjunto,100)