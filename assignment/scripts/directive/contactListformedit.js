    "use strict";

    angular.module("appName").directive("contactListUpdate",["personHttp",function(personHttp){
       return{
         restrict:"EAMC", 
         scope:{
             updateid:"="
         },                                                    
           controller :function($scope){
              $scope.forModels={
               firstName:"",
               lastName:"",
               address:"",
               email:"",
               phoneNumber:"" 
          };                                              
           },
            templateUrl:"/views/contactListForm.html",
          link:function(scope,element,attr){
           scope.$watch("updateid",function(newVal,oldVal){

                alert(att.newVal);

           })



          }
       } 


    }]);
