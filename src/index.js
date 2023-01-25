import validator from './validator.js';

console.log(validator);

/*onkeyup HTML event: evento que se dispara cuando se "suelta" una tecla,
 momento donde te interesa obtener el valor del input.
DOM addEventListener: posibilidad de bindear eventos a elementos del DOM
*/


document.addEventListener("submit", function btnEnviar () {///obj.metodo(prope)
    
  const numero = document.getElementById('idtarjeta').value;
  /*  */
  /* function validate() {
    document.getElementById("result").innerHTML = /[^0-9-\s]+/.test(numero) ? true : 'solo numeros';
  }
  validate();
  document.addEventListener('keyup', validate);
 */
  /*  */
  if (numero) {
    console.log("numero: " + numero);
    const soloNumeros =document.getElementById("result").alert = /[0-9]+/.test(numero) ? true : alert('Ingrese solo numeros') ;
    if(soloNumeros){
      validator.isValid(numero);
      validator.maskify(numero);
    }
  } else {
    console.log('false: ');
    
    alert("Ingresar numero de tarjeta");
  }
  
})



