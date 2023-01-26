const validator = {
  // ...

  isValid: function (cardNumber) {
    const reverseNumber = cardNumber.split('').reverse();
    //dobla segundo digito par
    const doblarDigito = [];
    for (let i = 0; i < reverseNumber.length; i++) {
      //utilizando operador ternario
      (i % 2 === 1) ? doblarDigito.push(reverseNumber[i] * 2) : doblarDigito.push(reverseNumber[i]);
    }
    console.log('doblarDigito: ' + doblarDigito);
    //suma de digito
    const sumarDigitos = [];
    for (let i = 0; i < doblarDigito.length; i++) {
      if (doblarDigito[i] > 9) {
        const arrayDigito = doblarDigito[i].toString().split('');
        let suma = 0;
        for (let j = 0; j < arrayDigito.length; j++) {
          suma += parseInt(arrayDigito[j]);
        }
        sumarDigitos.push(suma);
      } else {
        sumarDigitos.push(doblarDigito[i]);
      }
    }
    console.log('sumarDigitos: ' + sumarDigitos);
    //suma final
    const sumaFinal = sumarDigitos.reduce((a, b) => parseInt(a) + parseInt(b));
    console.log('sumaFinal: ' + sumaFinal);
    console.log("final:  "+(sumaFinal % 10 === 0) ? true : false); 

    if (sumaFinal % 10 === 0  ) {
      return true;
    } else {
      return false;
    } 
  },
  maskify: function (cardNumber) {
    //reemplazar 
    /*El método fill() trabaja con array
    cambia todos los elementos en un arreglo por un valor estático,
     desde el índice start (por defecto 0) hasta el índice end (por defecto array.length). 
     Devuelve el arreglo modificado*/
    const arrRemplace=cardNumber.split('').fill('#',0,-4);
    let remplas = ('');
    for (let i = 0; i < arrRemplace.length; i++) {
      remplas+=(arrRemplace[i]);
    }
    console.log('remplas: ' + remplas);
    return remplas;
  }
}


export default validator;
