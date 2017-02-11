angular.module("appName").controller("appCtrl",["$scope","personService","personfactory", function($scope, personservice, personfactory){
   $scope.title ="Hello World"; 
    $scope.formModal="George";
    $scope.change = function(){
        $scope.title="check your spellings";
        alert($scope.formModal);
    }
    
        
      $scope.init=function(){
          personservice.setFirstName("Jonny");
          personservice.setLastName("Kaka");
          personservice.setAddress("NOthing House");
          personservice.setPhone("4568");
          
      }
      
    
    $scope.displayPerson=function(){
        console.log("From App ctrl");
        personservice.testValues();
    }
    
    personfactory.setFirstName("Hello World");
    personfactory.setLastName("Good Morning");
    personfactory.testValues();                                            
                                                
                                                
}]);