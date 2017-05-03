
$("#most_propietarios").click(function() {  
        if($("#most_propietarios").is(':checked')) {  
           $("#subpanel_propietarios").removeClass("hidden"); 
        } else {  
            $("#subpanel_propietarios").addClass("hidden");
        }  
});





 var app=angular.module('añadirOpciones',[])
      .controller("controlarOpciones", function ($scope){
    //array que guarda las tareas
    $scope.opcionesLista= [];
    $scope.descripcion= [];
    
    $scope.opcionesDataList=["PLANEAMIENTO VIGENTE",
                            "CLASIFICACIÓN URBANÍSTICA",
                            "USO CARACTERÍSTICO ZONAL",
                            "AFECCIONES URBANÍSTICAS",
                            "ORSERVACIONES",
                            "PROTECCIÓN PATRIMONIO ARQUITECTONICO"];
    
    $scope.agregarOpcion = function () {
    //Verificamos que el campo input no este vacio
      if ($scope.nuevaOpcion !=null & $scope.nuevaOpcion !=""){ 

        var opcion = {
          concepto: $scope.nuevaOpcion,
          descripcion: $scope.nuevaDescripcion
        }

         $scope.opcionesLista.push(opcion);
          

      $scope.pos=$scope.opcionesDataList.indexOf( $scope.nuevaOpcion);
       if($scope.pos==-1){
          $scope.opcionesDataList.push($scope.nuevaOpcion);
        }

      
      $scope.nuevaOpcion = null;
      $scope.nuevaDescripcion = null;       
    }
    $scope.editar = function () {
      //$scope.editar=$scope.nuevaDescripcion ;
    }
    var aux=false
     $scope.esconder = function () {
        aux=true
     }
    console.log($scope.opcionesLista);
    //console.log($scope.descripcion);
    }
    $scope.eliminarOpcion = function(row) {
      $scope.opcionesLista.splice(row, 1);
  };
  
});

      /* TENDENCIA, OCUPACION LIMITACIONES*/

app.controller("controlarDatosTendencia", function ($scope){
  $scope.tipoPropiedad=[" ",
                        "Propiedad 1",
                        "Propiedad 2",
                        "Propiedad 3",
                        "Propiedad 4",
                        "Propiedad 5",
                        "Propiedad 6"];
  $scope.ocupado=[" ",
                  "Si",
                  "No"];
  $scope.destinoPrevisto=[" ",
                          "Destino 1",
                          "Destino2",
                          "Destino3"];
  $scope.contratoArrendamiento=[" ",
                                "Contrato 1",
                                "Contrato 2",
                                "Contrato 3"];
  $scope.tituloOcupacion=[" ",
                          "Título 1",
                          "Título 2",
                          "Título 3"];

   $scope.propietarios=[];
   $scope.agregarPropietario = function () {
     if ($scope.cif_nif !=null & $scope.porcentaje !=null & $scope.nombre !=null){
      var propietario = {
          cif_nif: $scope.cif_nif,
          porcentaje: $scope.porcentaje,
          nombre:$scope.nombre,
        }
      $scope.propietarios.push(propietario);
      $scope.cif_nif = null;
      $scope.porcentaje = null;
      $scope.nombre = null;
    }
   }
    $scope.eliminarPropietario = function(row) {
      $scope.propietarios.splice(row, 1);
  };
});





            /* TABLA DATOS DE CARGA SAREB*/

app.controller('TablaCtrl', ['$scope', function($scope) {
  $scope.listaSareb = [],

  $scope.nuevaFila = {
      tipoCarga: "",
      descripcion: "",
      nif: "",
      importe: "",
      entidad: "",
      fechaIni: "",
      fechaFin: "",
      rango: "",
    },
  
  $scope.agregarRow = function(item) {
     $scope.listaSareb.push(item);
     $scope.nuevaFila={};

     console.log($scope.listaSareb)
  };
    $scope.eliminar = function(row) {
      $scope.listaSareb.splice(row, 1);
    };
}]);





/*
app.directive('editableTd', [function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {

      element.bind('blur keyup change', function() {
        scope.lista[attrs.value] = element.text(9;
        scope.$digest();
      });


      //seleccionar texto al hacer click
      element.bind('click', function() {
        document.execCommand('selectAll', false, null)
      });
    }
  };
}]);

*/


