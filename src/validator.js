//declarando variable para llamar al boton de validar tarjeta.
const validator = document.getElementById("btnValidarCard");
// se le indica que cuando se haga click que es lo que debe realizar:
validator.addEventListener( "click" , function () {
  let numCard = document.getElementById('numCard').value;
  if (numCard.length>12 && numCard.length<=16){
      alert("Acceso Correcto");
    } else if (numCard.length<13){
      alert("Falta Digitos");
    } else {
      alert("Exceso de Digitos")
    }
    console.log(numCard);

// declarando un array que contendrá los numeros ingresados de la tarjeta estean en orden inverso
  let reverseNumber = numCard.split("").reverse();
  console.log(reverseNumber);

//extrayendo los numeros de las posiciones impares, que en realidad son posiciones pares
  for (var i = 0; i < reverseNumber.length; i=i+1) {
    if (i%2==1){
      console.log(reverseNumber[i]*2); // multiplicando por 2
    }
  }


} );

export default validator;
