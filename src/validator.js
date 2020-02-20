const validator = {
  isvalid : (numCard)=> {

  let reverseNumber = numCard.split("").reverse();
  console.log(reverseNumber); // mostrar en consola, los numeros ingresados en orden inverso
// Separando los numeros de las posiciones Pares e Inpares.
  const parNumber = [];
  const inparNumber = [];
  for (let i = 0; i < reverseNumber.length; i=i+1){
    if (i%2==1) {
      parNumber.push(parseInt(reverseNumber[i]*2)); // multiplicando por 2 a los numeros de las posiciones Inpares -> Originalmente son Pares
    }else {
      inparNumber.push(parseInt(reverseNumber[i])); // extrayendo los numeros pares -> Originalmente son Inpares
    }
  }

  const parNumberTwoDigit = [];
  for (let i = 0; i < parNumber.length; i++) {
    if(parNumber[i]>=10){
      parNumberTwoDigit.push(parNumber[i]);
    }
  }

  const parNumberOneDigit = [];
  for (let i = 0; i < parNumber.length; i++) {
    if(parNumber[i]<=9){
      parNumberOneDigit.push(parNumber[i]);
    }
  }

  const sumatoriaParNumber=[];
  let contador1 = 0;
  for (let i = 0; i < parNumberOneDigit.length; i++) {
    contador1 += parNumberOneDigit[i];
  }

  sumatoriaParNumber.push(contador1);

  const sumatoriaInparNumber=[];
  let contador2 = 0;
  for (let i = 0; i < inparNumber.length; i++) {
    contador2 += inparNumber[i];
  }
  sumatoriaInparNumber.push(contador2);

  let changeOneDigit = parNumberTwoDigit.join("").split("");
  const changeArrayNumber = [];
  for (let i = 0; i < changeOneDigit.length; i=i+1){
    if (i<=16) {
      changeArrayNumber.push(parseInt(changeOneDigit[i]));
    }
  }

  const sumatoriaParTwoDigit=[];
  let contador3 = 0;
  for (let i = 0; i < changeArrayNumber.length; i++) {
    contador3 += changeArrayNumber[i];
  }

  sumatoriaParTwoDigit.push(contador3);

 const array1 = sumatoriaParNumber;
 const array2 = sumatoriaInparNumber;
 const array3 = sumatoriaParTwoDigit;
 const array4 = array1.concat(array2,array3);

 const sumatoriaTotal=[];

 let contador4 = 0;
 for (let i = 0; i < array4.length; i++) {
   contador4 += array4[i];
 }

 sumatoriaTotal.push(contador4);

 for (let i = 0; i < sumatoriaTotal.length; i++){
     if(sumatoriaTotal[i]%10 == 0){
       return true;
     } else {
       return false;
     }
 }
},

maskify:(numCard) => {
  let d = numCard.split("");
  for (let i = 0; i < d.length -4; i++) {
    d[i] = '#';
  }
    return d.join("");
  }

};

export default validator;
