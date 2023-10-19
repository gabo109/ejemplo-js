//se obtiene los elementos html
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo = document.getElementsByClassName('parrafo');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

//imprime todas las propiedades de los selectores
console.log({
    h1,
    p,
    parrafo,
    pid,
    input,
}
);

//modificar el html dentro de la etiqueta seleccionada
h1.innerHTML = 'Patito <br> feo';
//modifica el texto
h1.innerText = 'Patito <br> feo';
//obtener el valor del atributo pantalla declarado en la etiqueta
console.log(h1.getAttribute('class'));
//asignar el valor del atributo de una etiqueta
h1.setAttribute('class','rojo');
//agregar
h1.classList.add('azul');
//borrar
h1.classList.add('rojo');
//h1.classList.toggle('rojo');
//h1.classList.contains('rojo');

input.value = '456'
//crear elemento html o etiqueta
const img = document.createElement('img');
img.setAttribute('src','https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif');
console.log(img);
pid.innerHTML='';
//insertando la imagen dentro de un contenedor q ya existia
pid.append(img);