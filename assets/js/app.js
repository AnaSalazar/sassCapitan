var funcionPrimera = function () {
    cargarAlumnas();
}

var cargarAlumnas = function(){
  $.getJSON("https://laboratoria.cuadra.co/api/v1/students/", function (alumnas) {
    alumnas.forEach(function(alumna){
      mostrarAlumnas(alumna)
    });
  });
}

var mostrarAlumnas = function(alumna){
  var listaAlumnas = $("#listaAlumnas");
  var nombre = alumna.name;
  var apellidoPaterno = alumna.pLastName;
  var apellidoMaterno = alumna.mLastName;

  var $tr = $("<tr />");
  var $nombreTd = $("<td />");
  $nombreTd.text(nombre);
  var $apellidoPaternoTd = $("<td />");
  $apellidoPaternoTd.text(apellidoPaterno);
  var $apellidoMaternoTd = $("<td />");
  $apellidoMaternoTd.text(apellidoMaterno);
  var checkbox = $("<input type='checkbox' />");

  $tr.append($nombreTd);
  $tr.append($apellidoPaternoTd);
  $tr.append($apellidoMaternoTd);
  $tr.append(checkbox);

  listaAlumnas.append($tr);
}

$(document).ready(funcionPrimera);
