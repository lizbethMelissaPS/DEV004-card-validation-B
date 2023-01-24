const validator = {
  // ...
  isValid: function (cardNumber) {
    const reverseNumber = cardNumber.split('').reverse();
    console.log('reverseNumber: ' + reverseNumber);
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
    const sumaFinal=sumarDigitos.reduce((a, b) => a + b);
    console.log('sumaFinal: ' + sumaFinal);
    return (sumaFinal % 10 === 0) ? true : false;
    
  },
  maskify: function (cardNumber) {
    console.log('cardNumber: '+ typeof cardNumber + cardNumber);
    //reemplazar
    const str = cardNumber.slice(0, -4);
    console.log('str: '+ str);
    const strRemplazado=cardNumber.replace(str,'*');
    console.log('strRemplazado: '+ strRemplazado);
    
  }
}
/*
validator.isValid(creditCardNumber)
validator.maskify(creditCardNumber)*/

export default validator;
