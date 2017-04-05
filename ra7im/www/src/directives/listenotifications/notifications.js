var app = angular.module("MyApp", []);

app.controller('MyController', function ($scope) {


    $scope.notifications = [
      { reference: "12l", children: 0 },
      { reference: "12l", children: 1 },
      { reference: "gfjgjd", children: 2 },
      { reference: "12l", children: 0 },
      { reference: "12l", children: 1 },
      { reference: "gfjgjd", children: 2 },
      { reference: "sfef", children: -1 }
    ];

});
