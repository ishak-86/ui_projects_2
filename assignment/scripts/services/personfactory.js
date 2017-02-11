"use strict"
angular.module("appName").factory("personfactory", function(){
  
    var firstName, lastName, address, phone;
    var _this = this;
    return{
        setFirstName: function(fName){
            _this.firstName = fName;
        },
            setLastNameasttName: function(lName){
            _this.lastName = lName;
    },
        setAddress:function(add){
        _this.address = add;
    },
        setPhone:function(ph){
            _this.Phone = ph;
        },
         getFirstName: function(){
           return _this.firstName;
    
         },
        getLastName: function(){
          return _this.lastName;
        },
           getAddress:function(){
        return _this.address; 
    },
       getPhone:function(){
           return _this.Phone;
        },
        
        testValues:function(){
        console.log("From Factory");
        console.log(_this.firstName);
        console.log(_this.lastName);
        console.log(_this.address);
        console.log(_this.Phone);
    }
    }
});




