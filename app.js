(function () {
'use strict';
angular.module('Assignment', [])
.controller('Assignment1', Assignment1);

Assignment1.$inject = ['$scope'];

function Assignment1($scope){
  console.log("heu");

$scope.message ="";
$scope.totalValue = "";
$scope.lunchItems = "";

  $scope.Check = function() {
var items=$scope.lunchItems.split(',');
console.log(items);
var lunch = items;
var itemCount =0;
for(var i=0;i<lunch.length;i++){
  if(lunch != '') {
    itemCount = itemCount+1;
  }
}
if(itemCount == 0){
  $scope.message ="pls enter data first";
}else{
  $scope.message ="insufficient";
}

if(itemCount == 3){
  $scope.message ="Good";
}


if(itemCount > 3){
  $scope.message ="Too much";
}

};


};
})();
