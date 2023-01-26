import validator from './validator.js';

//console.log(validator);
//keydown  submit input  keyup  4083952015263
const element = document.getElementById("btnEnviar");
element.addEventListener("click", validate);



function validate() {
  const numero = document.getElementById('idtarjeta').value;
  const soloNumeros = document.getElementById("result").alert = /[0-9]+/.test(numero) ? true : alert('Ingrese solo numeros');
  if (soloNumeros) {
    const valid = validator.isValid(numero);
    if (valid) {
      document.getElementById("result").innerHTML = "El numero de tarjeta " + validator.maskify(numero) + "  es validad!"
    }
    else {
      document.getElementById("result").innerHTML = "Numero de tarjeta  invalidad";
    }
  } else {
    alert("Ingresar numero de tarjeta");
  }
}


