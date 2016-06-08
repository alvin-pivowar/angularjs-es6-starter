// Copyright (c) Alvin Pivowar 2016

import theApp from "./main.es6";

console.log("Configuring routing");

theApp.config(
    ["$routeProvider",
    function($routeProvider) {
        $routeProvider
            .when("/page1", { templateUrl: ""});
            //.otherwise({ redirectTo: "/page1" });
    }]);