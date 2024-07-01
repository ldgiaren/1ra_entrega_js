//Desarrollar un algoritmo de calcular notas, con condicionales, prompst, alerts.
//[x] se debe ingrese nombre de alumno, correo, nombre de curso, 
//[] el alumno debe tener minimo 10 asistencias o se cancela su cursada,
//[x] debe tener  5 entregas, 
//[x] debe sumar todas las entregas  y promediarlas,
//[] el promedio para reprobar es de 79 y para aprobar debe ser de 80 o mayor
//[] retornar el resultado con nombre, curso, promedio de las entregas y si aprobo o no. 


function datosAlumno(nombreEstudiante, correoEstudiante, nombreCurso) {
    return { nombreEstudiante, correoEstudiante, nombreCurso };
  }
  
  function entregas(et1, et2, et3, et4, et5) {
    return { et1, et2, et3, et4, et5 };
  }
  
  function resultadoFinal() {
    let nombreEstudiante = prompt('Ingrese el nombre del alumno: ');
    let correoEstudiante = prompt('Ingrese el correo del alumno: ');
    let nombreCurso = prompt('Ingrese el curso del alumno, \n Desarrolo Web o JavaScrip: ');
  
    nombreCurso = nombreCurso.toLowerCase();
  
  if (nombreCurso ==='desarrollo web' || nombreCurso ==='javascrip'){
  
    let asistencias = parseInt(prompt('Ingrese la cantidad de asistencias del alumno, \n 0 o 30 '));
  
    if (asistencias >= 10) {
  
      let et1 = parseFloat(prompt('Ingrese la nota1 por favor, \n Deber se de 0 a 100: '));
      let et2 = parseFloat(prompt('Ingrese la nota2 por favor: \n Deber se de 0 a 100:'));
      let et3 = parseFloat(prompt('Ingrese la nota3 por favor: \n Deber se de 0 a 100:'));
      let et4 = parseFloat(prompt('Ingrese la nota4 por favor: \n Deber se de 0 a 100:'));
      let et5 = parseFloat(prompt('Ingrese la nota5 por favor: \n Deber se de 0 a 100:'));
  
      if (et1 > 100 || et2 > 100 || et3 > 100 || et4 > 100 || et5 > 100) {
        alert('Ingreso una nota mayor a 20, ojitoooo, Estas como sospechoso ha!')
      }
  
      else{
  
      let promedio = (et1 + et2 + et3 + et4 + et5) / 5;
  
      if (promedio > 80 && promedio <= 100) {
        alert(`El estudiante: ${nombreEstudiante} del curso: ${nombreCurso} obtuvo un promedio de: ${promedio} y aprobo, buena esa parcero.`);
      } else {
        alert(`El estudiante: ${nombreEstudiante} del curso: ${nombreCurso} obtuvo un promedio de: ${promedio} y reprobo, ojitoooo ponete pilas.`);
      }
    }
  
    } 
    
    //  `El estudiante: ${nombreEstudiante} del curso: ${nombreCurso} obtuvo un promedio de: ${promedio} y reprobó. ¡Ponte las pilas! 
    else {
        alert(`El estudiante: ${nombreEstudiante} del curso: ${nombreCurso} no cumplió con las asistencias mínimas, ojitoooo.`);
    }
  
  } //cerraria el if
   else{
    alert ('ve selecciona un curso correcto, no seas así.. Desarrollo o Java, listo?');
  }
  }
  resultadoFinal();