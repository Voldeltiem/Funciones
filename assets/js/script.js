// Modifica la función para que reciba el elemento clickeado de forma de no
// tener que seleccionarlo nuevamente dentro de la función (1 Punto). Para
// obtener el puntaje debes entregar el 3 pintar.html válido funcionando en
// conjunto con el código modificado.

// function pintar() {
//   ele = document.getElementById("ele1");
//   ele.style.backgroundColor = "yellow";
// }
// ele = document.getElementById("ele1");
// ele.addEventListener("click", pintar);
ele = document.getElementById("ele1");
ele.addEventListener("click",function (backgroundColor = green){
    ele.style.backgroundColor = "yellow";
});
