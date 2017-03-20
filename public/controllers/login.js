var app=angular.module("loginApp")
app.controller("loginCtrl",function($scope,LoginSvc,$location){

    //for login
    $scope.login=function(){
        var obj={
            username:$scope.username,
            password:$scope.password
        }
        LoginSvc.login(obj)
            .then(function(response){
                var login=response.data.sucess
                    if(login==true){
                        $location.path('/home')
                    }
                    else{
                        $scope.Error="wrong credentails"
                    }
            })
            .catch(function(){
                $scope.Error="Error"
            })
            $scope.username=""
            $scope.password=""
    }

    //for regstration
    $scope.register=function(){
        var register={
            username:$scope.username,
            password:$scope.password,
            firstname:$scope.firstname,
            lastname:$scope.lastname
        }
        LoginSvc.register(register)
            .then(function(response){
                $scope.message=response.data.message
            })
            .catch(function(){
                $scope.Error="Error"
            })
            $scope.username=""
            $scope.password=""
            $scope.firstname=""
            $scope.lastname=""

    }


})