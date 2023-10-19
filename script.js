//se obtiene los elementos html
const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

//escuchador de eventos
//form.addEventListener('submit',sumarInputValues);

//funcion que se ejecuta al hacer click desde html o con addeventlistener
// function sumarInputValues(event){
//    // console.log({event});
//     //cancelar lo q por defecto hacia el evento
//     event.preventDefault();
//     const sumaInputs= input1.value + input2.value;
//     pResult.innerText = 'Resultado '+sumaInputs;
// }

btn.addEventListener('click',sumarInputValues);

function sumarInputValues(event){
    // console.log({event});
     //cancelar lo q por defecto hacia el evento
    // event.preventDefault();
     const sumaInputs= input1.value + input2.value;
     pResult.innerText = 'Resultado '+sumaInputs;
 }