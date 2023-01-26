import validator from './validator.js';

//console.log(validator);
//keydown  submit input  keyup  4083952015263
const element = document.getElementById("btnEnviar") ;
element.addEventListener("click", validate);

function validate() {
  //validator.isValid(numero); 
  const numero = document.getElementById('idtarjeta').value;
  console.log("numeroA: " + numero); 
  const valid = validator.isValid(numero);
  console.log("valid: " + valid);
  if (valid) {
    document.getElementById("result").innerHTML = "El numero de tarjeta " + validator.maskify(numero)+"  es validad!"
  }
  else {
    document.getElementById("result").innerHTML = "Numero de tarjeta  invalidad";
  }
}


