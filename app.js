var app = angular.module('flapperNews',['ui-router']);

//configuring our routing here
app.config(['$stateProvider','$urlRouterProvider',
    function($stateProvider,$urlRouterProvider){
        $stateProvider
        .state('home',{
            url:'/home',
            templateUrl:'/home.html',
            controller:'MainCtrl'
        });
        $urlRouterProvider.otherwise('home');
    }])

//creating a service using factory on app instance;
app.factory('posts',[function(){
    var o = {
        posts:[  {title: 'post 1', upvotes: 5},
  {title: 'post 2', upvotes: 2},
  {title: 'post 3', upvotes: 15},
  {title: 'post 4', upvotes: 9},
  {title: 'post 5', upvotes: 4}]
    };
    return o;
}]);

app.controller('MainCtrl',
    ['$scope','posts',function($scope,posts){

        $scope.consumers = [
        {   'id':'0',
            'name':'Chotu',
            'address':'Cage',
            'phone':09176246016,
            'email':'nehasharma.s@sybrant.com',
            'credit':120,
            'total_order':[24,'24th Jan 2015'],
            'total_water':['34l','24th Jan 2015']
        },
        {   'id':'1',
            'name':'Asha',
            'address':'Home',
            'phone':09176846070,
            'email':'aashasweetu@gmail.com',
            'credit':10,
            'total_order':[150,'30th Jun 2015'],
            'total_water':['348l','24th Jan 2015']
        }
        ];

        $scope.posts = posts.posts;

        $scope.addPost = function()
        {
            if(!$scope.title || $scope.title === '') {return ;}
            
            $scope.posts.push(
                {title:$scope.title,
                    link:$scope.link,
                    upvotes:0}
                    );

            $scope.title = "";
            $scope.link = "";
        };

        $scope.upvote = function(post)
        {
            post.upvotes += 1;            
        };
        $scope.downvote = function(post)
        {
            post.upvotes -= 1;            
        }

}]);

