// Copyright (c) Alvin Pivowar 2016

require("!style!css!less!./main.less");

import ngRoute from "angular-route";
import tabs from "angular-ui-bootstrap/src/tabs";

import RoutingConfig from "./routing.config.es6";
import RoutingService from "./routing.service.es6";
import LeftNavComponent from "../leftNav/leftNav.feature.es6";

const theApp = angular.module("app", [
    ngRoute,
    tabs,
    LeftNavComponent.name
]);

theApp.config(RoutingConfig.$inject);
theApp.factory(RoutingService.name, RoutingService.$inject);

export default theApp;
