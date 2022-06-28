/**
 * Esta función toma dos números como argumentos y devuelve la suma de esos números.
 * @param num1 - El primer número a sumar.
 * @param num2 - El segundo número a sumar.
 * @returns La suma de los dos números.
 */
function suma(num1, num2) {
    return num1 + num2;
}

/**
 * Callback() toma dos números y una función de devolución de llamada, y devuelve el resultado de la
 * función de devolución de llamada cuando se llama con los dos números.
 * @param num1 - El primer número que se utilizará en la función de devolución de llamada.
 * @param num2 - El segundo número que se utilizará en la función de devolución de llamada.
 * @param callback - La función de devolución de llamada que se llamará con los dos números.
 * @returns El resultado de la función de devolución de llamada.
 */
function callback(num1, num2, callback) {
    return callback(num1, num2);
}

/* Llamar a la función de devolución de llamada con los argumentos 1, 2 y suma. */
console.log(callback(1, 2, suma));

//Set Timeout
/* Imprimiendo "Hola" después de 2 segundos. */
setTimeout(function (){
    console.log("Hola");
},2000)

/**
 * La función setTimeout() toma dos argumentos: una función de devolución de llamada y un retraso en
 * milisegundos. La función de devolución de llamada se ejecuta después del retraso.
 * @param name - El nombre de la función a ejecutar.
 */
function gretting(name) {
    console.log(`Hola ${name}`);
}
setTimeout(gretting, 2000, 'Soter');