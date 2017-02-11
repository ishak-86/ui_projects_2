"use strict";

angular.module("appName").directive("contactListForm",[function($scope){
   return{
     restrict:"EAMC", 
       controller :"contactListCtrl",
        templateUrl:"/views/contactListForm.html",
//    template:"<h1>Yeah Directive</h1>"
//     template:"<table class=\"table\"><tr><td>First Name<\td>" +"<td><input type="\text
     
   } 
    
    
}]);




