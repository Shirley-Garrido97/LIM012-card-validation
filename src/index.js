import validator from './validator.js';

// Declarando variable para llamar al boton de Siguiente y que este vaya a la 2da vista

const nextPage = document.getElementById("btnSiguiente");
nextPage.addEventListener("click", () => {

document.getElementById('vista1').classList.add("ocultar");
document.getElementById('vista2').classList.remove("ocultar");

});

// Declarando variable para llamar al boton de Validar y si es true la validacion que vaya a la vista 3 de lo contrario siga en vista 2

const check = document.getElementById("btnValidarCard");
check.addEventListener( "click" , () => {
  let numCard = document.getElementById('numCard');
  let x = validator.isvalid(numCard.value);
  if (x == true) {
    alert(" Tarjeta Verificada  ✅ ");
    document.getElementById('vista2').classList.add("ocultar");
    document.getElementById('vista3').classList.remove("ocultar");
  } else {
    alert(" ❌ Tarjeta NO Verificada ⚠️ ");
  }

});

// Declarando variable para llamar al boton de Regresar de la vista 2 , para que me lleve a la vista 1

const returnPage = document.getElementById("btnRegresar");
returnPage.addEventListener("click", () => {

document.getElementById('vista2').classList.add("ocultar");
document.getElementById('vista1').classList.remove("ocultar");

});

// Declarando variable para llamar al boton de Pagar de la vista 3 , para que me lleve a la vista 4

const pagar = document.getElementById("btnPagar");
pagar.addEventListener("click", () => {

document.getElementById('vista3').classList.add("ocultar");
document.getElementById('vista4').classList.remove("ocultar");

});

// Declarando variable para llamar al boton de Regresar2  de la vista 3 , para que me lleve a la vista 2

const returnValidatorPage = document.getElementById("btnRegresar2");
returnValidatorPage.addEventListener("click", () => {

document.getElementById('vista3').classList.add("ocultar");
document.getElementById('vista2').classList.remove("ocultar");

});

// Declarando variable para llamar al boton de Finalizar de la vista 4 , para que me lleve a la vista 1

const finalizarSesion = document.getElementById("btnFinalizar");
finalizarSesion.addEventListener("click",() => {

document.getElementById('vista4').classList.add("ocultar");
document.getElementById('vista1').classList.remove("ocultar");

});




/* Declarando variable para llamar al boton de validar tarjeta.

const y = document.getElementById("btnValidarCard");

y.addEventListener( "click" , () =>{
  let numCard = document.getElementById('numCard');
  let x = validator.isvalid(numCard.value);
  console.log(x);
  if (x == true) {

    alert(" Tarjeta Verificada  ✅ ");
    document.getElementById('vista1').classList.add("ocultar");
    document.getElementById('vista2').classList.remove("ocultar");
  } else {
    alert(" ❌ Tarjeta NO Verificada ⚠️ ");
  }

}); () => {

*/
