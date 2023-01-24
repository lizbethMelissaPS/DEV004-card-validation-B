import validator from './validator.js';

console.log(validator);

/* const soloNumero = document.getElementById('idtarjeta');
const valortecla = this.value.keyCode;
console.log("valortecla: " + valortecla);
soloNumero.addEventListener("onkeypress", function (event) {
    console.log("soloNumero: " + soloNumero);
    return (event.keyCode >= 48) && (event.keyCode <= 57)
    
})
 */
const numero = document.getElementById('idtarjeta');
console.log("numero: " + numero);
/*onkeyup HTML event: evento que se dispara cuando se "suelta" una tecla,
 momento donde te interesa obtener el valor del input.
DOM addEventListener: posibilidad de bindear eventos a elementos del DOM
*/
numero.addEventListener("keyup", function () {
    const valor = this.value;
    console.log("numero: " + valor);
    validator.isValid(valor);
    validator.maskify(valor);
})
//invocar

