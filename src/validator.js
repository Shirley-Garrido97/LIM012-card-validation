// Declarando variable para llamar al boton de validar tarjeta.

const validator = document.getElementById("btnValidarCard");

// Se le indica que cuando se haga click que es lo que debe realizar:

validator.addEventListener( "click" , function () {
  let numCard = document.getElementById('numCard').value;
  if (numCard.length>12 && numCard.length<=16){
      alert("Acceso Correcto");
    } else if (numCard.length<13){
      alert("Falta Digitos");
    } else {
      alert("Exceso de Digitos")
    }
    console.log(parseInt(numCard)); // mostrar en consola el numero de tarjeta ingresada

// Declarando una varible, que contendrá los numeros ingresados de la tarjeta estean en orden inverso

  let reverseNumber = numCard.split("").reverse();
  console.log(reverseNumber); // mostrar en consola, los numeros ingresados en orden inverso

// Separando los numeros de las posiciones Pares e Inpares.

  const parNumber = [];
  const inparNumber = [];

  for (var i = 0; i < reverseNumber.length; i=i+1)
    if (i%2==1) {
      parNumber.push(parseInt(reverseNumber[i]*2)); // multiplicando por 2 a los numeros de las posiciones Inpares -> Originalmente son Pares
    } else {
      inparNumber.push(parseInt(reverseNumber[i])); // extrayendo los numeros pares -> Originalmente son Inpares
    }

// Extrayendo los numeros del arreglo ParNumber, que sean >= 10.

  const parNumberTwoDigit = [];

  for (var i = 0; i < parNumber.length; i++) {
    if(parNumber[i]>=10){
      parNumberTwoDigit.push(parNumber[i]);
    }
  }

// Extrayendo los numeros del arreglo ParNumber, que sean <= 9.

  const parNumberOneDigit = [];

  for (var i = 0; i < parNumber.length; i++) {
    if(parNumber[i]<=9){
      parNumberOneDigit.push(parNumber[i]);
    }
  }


// Sumando los numeros del arreglo ParOneDigit

  const sumatoriaParNumber=[];

  let contador1 = 0;
  for (let i = 0; i < parNumberOneDigit.length; i++) {
    contador1 += parNumberOneDigit[i]
  }

  sumatoriaParNumber.push(contador1);


// Sumando los numeros del arreglo InparNumber

  const sumatoriaInparNumber=[];

  let contador2 = 0;
  for (let i = 0; i < inparNumber.length; i++) {
    contador2 += inparNumber[i]
  }

  sumatoriaInparNumber.push(contador2);

// Separando el arreglo que contenia los numeros Pares >=10 y convirtiendolo en numeros de de 1 digito

  var changeOneDigit = parNumberTwoDigit.join("").split("");

// Conviertiendo el nuevo arreglo de parNumberTwoDigit de strings a  en Numbers

  const changeArrayNumber = [];

  for (var i = 0; i < changeOneDigit.length; i=i+1)
    if (i<=16) {
      changeArrayNumber.push(parseInt(changeOneDigit[i]));
    }
// Sumando los numeros del arreglo separado de parNumberTwoDigit

  const sumatoriaParTwoDigit=[];

  let contador3 = 0;
  for (let i = 0; i < changeArrayNumber.length; i++) {
    contador3 += changeArrayNumber[i]
  }

  sumatoriaParTwoDigit.push(contador3);


// Concatenando los arreglos en 1 sólo

 const array1 = sumatoriaParNumber;
 const array2 = sumatoriaInparNumber;
 const array3 = sumatoriaParTwoDigit;
 const array4 = array1.concat(array2,array3);



// Sumando los elementos del arreglo concatenado

 const sumatoriaTotal=[];

 let contador4 = 0;
 for (let i = 0; i < array4.length; i++) {
   contador4 += array4[i]
 }

 sumatoriaTotal.push(contador4);

// Condicionando aquellos multiplos de 10 , que tipo de mensaje deberia mostrarse

   for (var i = 0; i < sumatoriaTotal.length; i++)
     if(sumatoriaTotal[i]%10 == 0){
       alert(" Tarjeta Verificada  ✅ ");

       document.getElementById('vista1').classList.add("ocultar");
       document.getElementById('vista2').classList.remove("ocultar");

     } else {
       alert(" ❌ Tarjeta NO Verificada ⚠️ ");
     }




// Mostrando en consola todos los arreglos

  console.log(parNumber);
  console.log(parNumberTwoDigit);
  console.log(parNumberOneDigit);
  console.log(inparNumber);
  console.log(sumatoriaInparNumber);
  console.log(changeArrayNumber);
  console.log(sumatoriaParNumber);
  console.log(sumatoriaParTwoDigit);
  console.log(sumatoriaTotal);





} );


export default validator;
