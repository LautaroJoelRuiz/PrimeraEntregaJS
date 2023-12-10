// Bienvenidos a "Al Horno" Prestamos 

let mensajebienvenida = alert ("Bienvenido/a a Al horno Préstamos")
let usuario = prompt ("Ingrese su nombre y apellido").toLowerCase();
while (usuario != "ESC") {
    if (usuario) {
        alert ("Bienvenido/a " + usuario)
        break;
    } else {
        alert ("Ingrese un nombre y apellido válidos");
        
    }
    usuario = prompt ("Ingrese su nombre y apellido").toLowerCase();
    }
    
    

let monto = Number(prompt ("Ingrese por favor el monto del que desea pedir su préstamo"))
while (monto) {
    if (monto >= 10000) {
        let cuotas3 = monto / 3;
        let cuotas6 = monto / 6;
        let cuotas12 = monto / 12;
        alert ("El valor en 3 cuotas es de " + cuotas3 + " "+ "El valor en 6 cuotas es de " + cuotas6 + " " + "El valor en 12 cuotas es de " + cuotas12);
        break;

    } 
    else {
        
        alert ("Los préstamos se hacen a partir de $10.000");
        
    }
    monto = Number(prompt ("Ingrese por favor el monto del que desea pedir su préstamo"))

}


