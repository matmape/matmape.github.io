 app.directive("template",function (){
    return{
        restrict:"E",
        scope:{
            url:'@'
        },
        template:'<div ng-include="templates/gallery.html"></div>',
        link:function(scope,element,attrs){
            scope.url 
        }

    }
 });