angular.module("appName").service("personHttp",["$http",function($http){
    this.personList =[];
    var that = this;
    this.getPersonaList = function(){
        return $http({
            method: "GET",
            url:"/service/contactinfo"
        }).then(function(result){
                that.persoanList = result.data;
                return result.data
                });
    };
    
     this.getPersonaList = function(dataParam){
        return $http({
            method: "POST",
            url:"/service/contactinfo",
            data:dataParam
        }).then(function(result){
                return result.status;
                });
     }
     
        this.getPersonaList = function(condtactid){
        return $http({
            method: "DELETE",
            url:"/service/contactinfo/"+condtactid
        }).then(function(result){
                return result.status;
                });
     }
           this.getPersonaList = function(dataParam,contactid){
        return $http({
            method: "PUT",
            url:"/service/contactinfo/"+contactid,
            data:dataParam
        }).then(function(result){
                return result.status;
                });
     }
    
    
}]);