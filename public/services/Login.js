var app=angular.module("loginApp")
app.service("LoginSvc",function($q,$http,config){
    //for login
    this.login=function(data){
        var dfd=$q.defer()
        $http({
            method:"POST",
            url:config.url+"login",
            data:data
        })
            .then(function(response){
                dfd.resolve(response)
            })
            .catch(function(response){
                dfd.reject(response)
            })
            return dfd.promise
    }

    //for register
    this.register=function(data){
        var dfd=$q.defer()
        $http({
            method:"POST",
            url:config.url+"login/register",
            data:data
        })
            .then(function(response){
                dfd.resolve(response)
            })
            .catch(function(response){
                dfd.reject(response)
            })
            return dfd.promise
    }
})