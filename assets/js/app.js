var funcionPrimera = function () {
    cargarAlumnas();
}

var cargarAlumnas = function(){
  $.getJSON("http://laboratoria.cuadra.co:9339/api/v1/students/", function (alumnas) {
    alumnas.forEach(function(alumna){
      mostrarAlumnas(alumna)
    });
  });
}

var mostrarAlumnas = function(alumna){
  var $nombre = alumna.name;
  console.log($nombre);
  var $apellidoPaterno = alumna.pLastName;
  console.log($apellidoPaterno);
  var $apellidoMaterno = alumna.mLastName;
  console.log($apellidoMaterno);

  var $tr = $("<tr />");
  var $nombreTd = $("<td />");
  $nombreTd.html($nombre);
  console.log($nombreTd);
  var $apellidoPaternoTd = $("<td />");
  $apellidoPaternoTd.text($apellidoPaterno);
  var $apellidoMaternoTd = $("<td />");
  $apellidoMaternoTd.text($apellidoMaterno);

  $tr.append($nombreTd);
  $tr.append($apellidoPaternoTd);
  $tr.append($apellidoMaternoTd);

  listaAlumnas.append($tr);
}

$(document).ready(funcionPrimera);
