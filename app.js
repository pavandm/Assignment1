(function () {
'use strict';
angular.module('Assignment', [])
.controller('Assignment1', Assignment1);

Assignment1.$inject = ['$scope'];

function Assignment1($scope){
  console.log("heu");

$scope.message ="";

  $scope.Check = function() {
var items=$scope.lunchItems.split(',');
var length = items;
var itemCount =0;
for(i=0;i<length;i++){
  if(length != ''){
    itemCount += 1;
  }
}
};
if(itemCount == 0){
  $scope.message ="pls enter data first";
}

};
})();
