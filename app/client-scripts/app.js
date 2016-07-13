
var app = angular.module("app",[]);


app.controller("homeCtrl",function($scope){
$scope.title = "Home";
});


app.controller("aboutCtrl",function($scope){
$scope.title = "About";
});


app.controller("galleryCtrl",function($scope,exhibitionService){
$scope.title = "Gallery";
    exhibitionService.getData().then(function(data){
        $scope.gallery = data.data.gallery;

    },function (error) {
        console.log(JSON.stringify(error))
    });
});


app.controller("exhibitionCtrl",function($scope,exhibitionService){
$scope.title = "Exhibitions";
    exhibitionService.getData().then(function(data){
        $scope.exhibitions = data.data;
        $scope.pictures = data.data.gallery;
    },function (error) {
        console.log(JSON.stringify(error))
    })
});


app.controller("contactCtrl",function($scope){
$scope.title = "Contact Me";
});

app.directive("enter",function(){
    return{
        template:"<div>I am a directive</div>",
        link:function(scope,element,attrs){
            element.bind("mouseenter",function(){
                element.addClass("panel");
            })
            element.bind("mouseleave",function(){
                element.removeClass("panel");
            })
        }
    }
});
app.factory("exhibitionService",function ($http) {
    var factory = {}
    factory.getData = function () {
      return $http.get("data.json");
    };

    return factory;
})