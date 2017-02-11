angular.module("appName").controller("contactListCtrl",["$scope", "personfactory","personHttp", function($scope, personfactory, personHttp){
    
    
    $scope.contactList = [];
    var promise =personHttp.getpersonList();
    promise.then(function(respons){
        $scope.contactList = response;
    });
    $scope.formModels = {
         firstName: "",
        lastName: "",
        address:"",
        phoneNumber: "",
        email:""
    };
    
    functionrefersh
    
    $scope.delete=function(contactId){
        personHttp.deletePersonList(contactId);
        
        alert("delete " +contacctId);
    };
    $scope.update=function(contactId){
        alert("update " +contactId);
    };
        $scope.add = function(){
        var tempObj = {
        firstName:$scope.formModels.firstName,
        lastName:$scope.formModels.lastName,
        address:$scope.formModels.address,
        phone:$scope.formModels.phone
    };
            
            personHttp.postPersonList(tempObj).then(function(response){
                alert("Successfully added");
                refreshEntries();
            });
        };
    function refreshEntries(){
        var promise=personHttp.getpersonList();
        promise.then(function(response){
            $scope.contactList = response;
        });
    }
    
   //// $scope.contacList.push($scope.formModels);
  //  }/*
       /* var person1 ={
        firstName: "Jonny",
        lastName: "Doey",
        address:"Test",
        phoneNumber: "451445555"
    };
    
     var person2 ={
        firstName: "Jonny",
        lastName: "asfd",
        address:"rrrt",
        phoneNumber: "451445555"
    };
     var person3 ={
        firstName: "Jojhffnny",
        lastName: "Doey",
        address:"Test",
        phoneNumber: "451445555"
    };
    
        
    $scope.contactList.push(person1);    
    $scope.contactList.push(person2);
    $scope.contactList.push(person3);
    
    
    */
    
    
}]);