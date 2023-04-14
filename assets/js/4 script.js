/*Crea 4 divs que tengan alto y ancho de 200px y de distintos colores de fondo
usando el atributo style. Cada uno de los divs debe tener un identificador
único.
● Crea un script que guarde dentro de una variable global un color
dependiendo de la letra del teclado presionada. (2 Puntos).
○ Al presionar la letra a un color a tu elección.
○ Al presionar la letra s un segundo color a tu elección.
○ Al presionar la letra d un tercer color al presionar la letra d.
Dentro del script agrega el evento que al hacerle click a uno de los divs, este
cambie de color al color seleccionado. Utiliza addEventListener para agregar
el evento. */

let selectedColor; // Variable global para almacenar el color seleccionado
document.addEventListener('keydown', function (event) {
    let teclaGuardada = document.getElementById("teclaGuardada").value;
    if (event.key === 'a') {
        selectedColor =  "gray";
    } else if (event.key === 's') {
        selectedColor =  "orange";
    } else if (event.key === 'd') {
        selectedColor =  "violet";
    }
});

document.getElementById("div1").addEventListener("click", function() {
    div1.style.backgroundColor = selectedColor; 
});
  
document.getElementById("div2").addEventListener("click", function() {
    div2.style.backgroundColor = selectedColor; 
});
  
document.getElementById("div3").addEventListener("click", function() {
    div3.style.backgroundColor = selectedColor; 
});
  
document.getElementById("div4").addEventListener("click", function() {
    div4.style.backgroundColor = selectedColor; 
});
