
let myapp= angular.module("Myapp",[]);

let mycontroller = function($scope){
    $scope.message = "Hello World";
}
myapp.controller("MyController", mycontroller);

let JSONController = function($scope){
    let Student ={
        FirstName : "Sachin",
        LastName : "Setty",
        email : "s530486",
    }
    $scope.Student=Student;
}
myapp.controller("Student", JSONController);