
var app=angular.module("myFirstApp",[]);
app.controller("firstController", function ($scope){
  
    $scope.size=1;
    $scope.numeros=new Array( $scope.size);
    $scope.insert=new Array();
     $scope.numInt=[];

    $scope.putVaule= function(){
     $scope.size=(document.getElementById("size").value)*1;
    console.log($scope.size);
    $scope.generateArray();
  }

   /*$scope.generateArray= function(){
    $scope.max=parseInt( $scope.size* $scope.size);
    console.log($scope.max);
    for (var i = 0; i <$scope.max; i++) {
       $scope.numeros[i]="test";
    }
    console.log($scope.numeros);
    for (var i = 0; i <$scope.max; i++) {
      console.log($scope.numeros[i]);
    }
   
   }*/


     $scope.generate= function(){
   // $scope.max=parseInt( $scope.size* $scope.size);
    console.log($scope.size);
    for (var i = 0; i <$scope.size; i++) {
       $scope.numInt={};
       for (var j = 0; j <$scope.size; j++) {
        $scope.insert.push($scope.numInt);
     }
     $scope.numeros.push($scope.insert);
    }
    console.log($scope.numeros);
  //  for (var i = 0; i <$scope.max; i++) {
    //  console.log($scope.numeros[i]);
    //}
   
   }
 $scope.generateArray= function(){
    for(var i=0;i<$scope.size;i++){
        $scope.numeros[i]=new Array( $scope.size);
      for(var j=0;j<$scope.size;j++){
        $scope.numeros[i][j]="t";  
    } 
  }
  console.log($scope.numeros);
  }

   /*$scope.agregarElemento= function(){

  for (var i = 0; i <$scope.size; i++) {
   $scope.comentarios.push($scope.nuevoComentario={"0"});
    $scope.nuevoComentario={};
  }
  }*/

  $scope.nombre="fernando Hernandez";
  $scope.nuevoComentario={};
  $scope.comentarios=[
                     {
                       coment:"bueno",
                       username:"monica"
                     },
                     {
                       coment:"malo",
                       username:"otro"
                     }
                     ];
  $scope.agregarComentario= function(){
    $scope.comentarios.push($scope.nuevoComentario);
    $scope.nuevoComentario={};
  }
  
});
