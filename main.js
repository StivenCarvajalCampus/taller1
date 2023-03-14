var menu="Menu";
menu+="1.Tradicional";
menu+="2. Puntos/n";
menu+="3. SBG/n";
menu+="4. Salir/n";
menu+="Ingrese una opcion/n"; 

document.write("<br> La cantidad de numeros es");
document.write("</h2>");
// Mostrar la tabla 
console.log("Tabla de notas:");
console.log("Nota \t Tradicional \t 14-pointRange \t Letter \t SBG");
console.log("--------------------------------------------------------------");
console.log("90-100 \t  \t 12-14 \t\t A \t 4");
console.log("80-89 \t  \t 9-11 \t\t B \t 3");
console.log("70-79 \t  \t 6-8 \t\t C \t 2");
console.log("60-69 \t  \t 3-5 \t\t D \t 1");
console.log("<60 \t  \t 1-2 \t\t E \t 0");
console.log("0 \t  \t 0 \t\t Z \t ");


// Preguntar al usuario su nota
const nota = prompt("Ingrese su nota:");

// Transformar la nota al SBG
let sgs;
if (nota >= 90) {
  sgs = 4;
} else if (nota >= 80) {
  sgs = 3;
} else if (nota >= 70) {
  sgs = 2;
} else if (nota >= 60) {
  sgs = 1;
} else {
  sgs = 0;
}

// Recomendacion caso1
let recomendacion;
if (sgs == 4) {
  recomendacion = "¡Excelente trabajo! Sigue así.";
} else if (sgs == 3) {
  recomendacion = "Buen trabajo, pero todavía hay margen de mejora.";
} else if (sgs == 2) {
  recomendacion = "Necesitas mejorar tu rendimiento académico.";
} else if (sgs == 1) {
  recomendacion = "Necesitas mejorar urgentemente tu rendimiento académico.";
} else {
  recomendacion = "Has fallado en este examen, necesitas estudiar más y esforzarte más.";
}
// Mostrar el resultado y la recomendación 
console.log("Tu nota en el Standard Grading System es: " + sgs);
console.log(recomendacion);

//Verificamos con los valores de puntos 
let sgs2;
if (nota >= 12) {
  sgs2 = 4;
} else if (nota >= 9) {
  sgs2 = 3;
} else if (nota >= 6) {
  sgs2 = 2;
} else if (nota >= 3) {
  sgs2 = 1;
} else {
  sgs2 = 0;
}

// Dar una recomendación 
let recomendacion2;
if (sgs2 == 4) {
  recomendacion = "¡Excelente trabajo! Sigue así.";
} else if (sgs2 == 3) {
  recomendacion = "Buen trabajo, pero todavía hay margen de mejora.";
} else if (sgs2 == 2) {
  recomendacion = "Necesitas mejorar tu rendimiento académico.";
} else if (sgs2 == 1) {
  recomendacion = "Necesitas mejorar urgentemente tu rendimiento académico.";
} else {
  recomendacion = "Has fallado en este examen, necesitas estudiar más y esforzarte más.";
}
// Mostrar el resultado y la recomendación 
console.log("Tu nota en el Standard Grading System es: " + sgs2);
console.log(recomendacion);

let sgs3;
switch (nota) {
  case "A":
    sgs3 = 4;
    break;
  case "B":
    sgs3 = 3;
    break;
  case "C":
    sgs3 = 2;
    break;
  case "D":
    sgs3 = 1;
    break;
  case "E":
    sgs3 = 0;
    break;
  default:
    sgs3 = null;
}

// Dar una recomendación 
let recomendacion3;
if (sgs3 == 4) {
  recomendacion = "¡Excelente trabajo! Sigue así.";
} else if (sgs3 == 3) {
  recomendacion = "Buen trabajo, pero todavía hay margen de mejora.";
} else if (sgs3 == 2) {
  recomendacion = "Necesitas mejorar tu rendimiento académico.";
} else if (sgs3 == 1) {
  recomendacion = "Necesitas mejorar urgentemente tu rendimiento académico.";
} else {
  recomendacion = "Has ingresado una nota incorrecta. Inténtalo de nuevo.";
}
// Mostrar el resultado y la recomendación
console.log("Tu nota en el Standard Grading System es: " + sgs3);
console.log(recomendacion);
