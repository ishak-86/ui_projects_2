"use strict";
angular.module("appName").controller("personCtrl", 
  ["$scope","personService",function($scope,personservice){
      
      //init();
    
      function init(){
          personservice.setFirstName("Barrack");
          personservice.setLastName("Obama");
          personservice.setAddress("School House");
          personservice.setPhone("4568");
          
      }
      
      $scope.displayPerson=function(){
          init();
          console.log("From person Ctrl");
            personservice.testValues();
      }
}]);
