//alert ('saludos')

// Ejercicios para esta sesion

/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */

function mayoriaEdad (age){
    if (age >= 18){
        console.log (  `Sí puede votar`)
    } else {
        console.log (  `No puede votar`)
    }

}

/** Ejercicio 2
 * 
 * Desarrolla un programa que permita obtener el promedio de un/a alumno/a
 * recibiendo como parametro 4 calificaciones
 * 
 * Si el promedio es aprobatorio (mayor o igual a 7) imprimir aprobado
 * en el caso de que no sea un promedio aprobatorio imprimir reporobado
 * 
 * Consideraciones: utilizar la estructura if-else
 * 
 */
function evaluacion (calificacion1, calificacion2, calificacion3, calificacion4){
    let promedio = (calificacion1+ calificacion2 + calificacion3 + calificacion4)/4
    if (promedio >= 7){
        console.log (  `Aprobado (${promedio})`)
    } else {
        console.log (  `No Aprobado (${promedio})`)
    }

}

/** Ejercicio 4
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

function evaluar87 (numero){
    if (numero % 8 == 0 && numero % 7 == 0){
        console.log (  `Verdadero`)
    } else {
        console.log (  `Falso`)
    }

}
/** Ejercicio 5
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */
function evaluar49 (numero){
    if (numero % 4 == 0 || numero % 9 == 0){
        console.log (  `Verdadero`)
    } else {
        console.log (  `Falso`)
    }

}
/** Ejercicio 6
 * 
 * Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 * 
 *  -suma
 *  -resta
 *  -multiplicacion
 *  -division
 * 
 * Debe recibir como parametros la operacion a realizar y dos numeros
 * Dependiendo de la opcion que se indique, realizar la operacion correspondiente
 * 
 * 1. suma
 * 2. resta
 * 3. multiplicacion
 * 4. division
 * 
 * Consideraciones: utilizar la estructura switch
 */

function calculadora (operacion, numero1, numero2){
    let resultado = 0;
    switch (operacion){
        case 1 : 
            resultado = numero1 + numero2;
            console.log (`El resultado de la suma es ${resultado}`)
        break
        case 2 :
            resultado = numero1 - numero2;
            console.log (`El resultado de la resta es ${resultado}`)
        break
        case 3 :
            resultado = numero1 * numero2;
            console.log (`El resultado de la multiplicación es ${resultado}`)
        break
        case 4 :
            
            resultado = numero1 / numero2;
            let condicion = numero2 === 0 ? console.log (`Tu division creo un agujero negro!!!!,
             el resultado de la división es ${resultado}`): console.log (`El resultado de la división es ${resultado}`);
            
        break 
        default:
            console.log (`No entendí :c`)
        break

    }
}

/** Ejercicio 7
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */
function recomendador (categoria){
    categoria = categoria.toLowerCase();
    switch (categoria){
        case 'accion': 
            console.log (`Con todas las de "Fast & Furious" tienes para mucho rato`)
        break
        case 'drama':
            console.log (`Puedes ver "La razón de estar contigo"`)
        break
        case 'comedia':
            console.log (`Tienes que ver "El placer de su compañia", esta en prime`)
        break
        case 'suspenso':
            console.log (`No soy muy fan, pero, "historias de miedo para contar en la oscuridad" te podría gustar`)
        break  
        case 'terror':
            console.log (`Sí o sí, tienes que ver "dark gathering"!`)
        break 
        default:
            console.log (`No me sé de esas carnal u.u`)
        break
    }
}

/** Ejercicio 8
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */

function atm (operacion){

    operacion = operacion.toLowerCase();
    operacion = operacion.replace(/\s+/g, '')

    if (operacion == 'retirardinero'){
        console.log (  `¿Cuánto desea retirar?`)
    } else if (operacion == 'transferencia'){
        console.log (  `¿A qué cuanta desea tranferir?`)
    } else if (operacion == 'deposito'){
        console.log (`¿Cuánto desea depositar?`)
    } else if (operacion == 'pagodeservicios'){
    console.log (`¿Qué servicio desea pagar?`)
    }
}

/** Ejercicio 9
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */
function cambioDivisas (cantidad, divisa){

    divisa = divisa.toLowerCase();
    divisa = divisa.replace(/\s+/g, '');

    switch (divisa){
        case 'dolaresestadounidenses': 
            conversion = cantidad * 0.059;
            console.log (`al día de hoy, ${cantidad} MXN equivalen a ${conversion} USD`)
        break
        case 'euros':
            conversion = cantidad * 0.055;
            console.log (`Al día de hoy, ${cantidad} MXN equivalen a ${conversion} Euros`)
        break
        case 'yenesjaponeses':
            conversion = cantidad * 8.65;
            console.log (`Al día de hoy, ${cantidad} MXN equivalen a ${conversion} yenes japoneses`)        
        break
        case 'libraesterlina':
            conversion = cantidad * 0.047;
            console.log (`Al día de hoy, ${cantidad} MXN equivalen a ${conversion} libras esterlinas`)
        break  
        case 'francosuizo':
            conversion = cantidad * 0.053;
            console.log (`Al día de hoy, ${cantidad} MXN equivalen a ${conversion} francos suizos`)         
        break
        default:
            console.log (`Cambio de divisa no disponible`)
        break
    }
}

/** Ejercicio 10
 * 
 * Realizar un programa que calcule un descuento del 10% a un producto si se ingresa el codigo
 * de descuento correcto
 * 
 * Debe recibir como parametros el precio del producto
 * y el codigo de descuento
 * 
 * Sugerencia de codigo de descuento DESCUENTO10
 * 
 * Consideracion: utilizar la estructura if-else
 * 
 */
function descuentos (precio, codigo){
    //Aqui no modificamos nada del codigo porque el cliente debe tener su codigo bien e.e
    if (codigo == 'DESCUENTO10'){
        let nuevoPrecio = precio * 0.9;
        console.log (  `EL producto queda en ${nuevoPrecio} MXN`)
    } else {
        console.log (  `No se encontró el código o ya ha caducado`)
    }

}


//Notas de la clase 19 de Septiembre control de flujo


function test (prueba){
    if (2>prueba) {
        //resutado = "Es menor";
        console.log (`Es menor`)
    } else {
        //resultado = "Es mayor";
        console.log (`Es mayor`)
    }
    
} 



/* Bloques de código son importantes porque de manera general nos permiten ejecutar bloques
de código estableciendo condiciones

if-else

declaración: 
palabra reservada 'if'
colocar condiciones en los ()
Agregar acciones dentro del bloque {}

*/


let prueba = 0;

// if-else con una expresion logica o condicion sencilla

if(prueba === 3){

    // Bloque de codigo que se ejecuta si la condicion se cumple

    console.log("Se cumple");

} else {

    // Bloque de codigo que se ejecuta si la condicion no se cumple

    console.log("No se cumple");

}

// if-else con operadores lógicos
/*
AND &&
OR ||
NOT !
*/

if (prueba > 3 && prueba < 10) {
    console.log("Se cumple");
} else {
    console.log("No se cumple");    

}

if (prueba > 3 || prueba < 10) {
    console.log("Se cumple");
} else {
    console.log("No se cumple");    

}

// if-else con operadores lógicos Anidada

if (prueba === 1) {
    console.log("Se verificó 1");
} else if( prueba === 3) {
    console.log("Se verificó 3");    
} else if(prueba === 4) {
    console.log("Se verificó 4");
} else if(prueba === 5) {
    console.log("Se verificó 5");
} else {
    console.log("Ninguna opción detectada");
}


/** Operador ternario

 Es una expresion simplificada de una sentencia if-else

 Preferentemente vamos a utilizar el operador ternario

 para bloques if-else de una sola y unica sentencia

 Declaracion de operador ternario

 palabra reservada let, var, const

 asignamos un nombre

 Operador de asignacion =

 Nuestra condicion va despues del operador de asignacion

 Colcoar el caracter ? que indica donde comienza la bifuracion o

 que camino tomar dependiedo de si la sentecia SI se cumple o NO se cumple

 */

// if-else con operadores ternarios

let condicion = prueba === 5 ? "Se cumple": "No se cumple";

/*
//Delcaración de sentencia SWITCH

PAlabra reservada "switch"

*/
let dia="Domingo"


switch (dia) {
    case "Lunes": 
        console.log (`caso 1`) 
    break
    case "Martes": 
        console.log (`caso 2`)  
    break
    case "Miercoles": 
        console.log (`caso 3`) 
    break
    case "Jueves": 
        console.log (`caso 4`) 
    break
    case "Viernes": 
        console.log (`caso 5`) 
    break
    case "Sabado": 
        console.log (`caso 6`) 
    break
    case "Domingo": 
        console.log (`caso 7`) 
    break
    default: console.log (`No option selected`) 
    break

}

/* Control de flujo dinámico



*/

function diaDinamico (dia){
    dia = dia.toLowerCase();

    switch (dia) {
        case "lunes": 
            console.log (`caso 1`) 
        break
        case "martes": 
            console.log (`caso 2`)  
        break
        case "miercoles": 
            console.log (`caso 3`) 
        break
        case "jueves": 
            console.log (`caso 4`) 
        break
        case "viernes": 
            console.log (`caso 5`) 
        break
        case "sabado": 
            console.log (`caso 6`) 
        break
        case "domingo": 
            console.log (`caso 7`) 
        break
        default: console.log (`No option selected`) 
        break
    
    }

}

