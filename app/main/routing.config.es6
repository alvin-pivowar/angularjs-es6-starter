// Copyright (c) Alvin Pivowar 2016

class RoutingConfig {
    constructor($routeProvider) {
        $routeProvider
            .when("/home", { templateUrl: require("../content/home.html")})
            .when("/controller", { templateUrl: require("../content/controller.html")})
            .when("/service", { templateUrl: require("../content/service.html")})
            .otherwise({ redirectTo: "/home" });
    }

    static factory($routeProvider) { return new RoutingConfig($routeProvider); }
}

RoutingConfig.$inject = ["$routeProvider", RoutingConfig.factory];

export default RoutingConfig;