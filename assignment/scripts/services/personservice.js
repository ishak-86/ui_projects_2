"use strict";

angular.module("appName").service("personService",function(){
    
    var firstName, lastName, address, phone;
    this.setFirstName=function(fName){
        firstName = fName;
    }
    this.setLastName = function(lName){
        lastName = lName;
        
    }
      this.setAddress = function(add){
        address = add;
        
    }
        this.setPhone = function(ph){
        phone = ph;
        
    }
    
          this.getLastName = function(lName){
        lastName = lName;
        
    }
      this.getAddress = function(add){
        address = add;
        
    }
        this.getPhone = function(pho){
        phone = pho;
        
    }
        
        this.testValues = function (){
            console.log(firstName);
            console.log(lastName);
             console.log(address);
             console.log(phone);
        }
    
});




