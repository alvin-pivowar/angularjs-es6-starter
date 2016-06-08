// Copyright (c) Alvin Pivowar 2016

import "angular";

// Bootstrap UI
//import accordion from "angular-ui-bootstrap/src/accordion";

import ngRoute from "angular-route";
import leftNav from "../leftNav/leftNav.feature.es6";

const theApp = angular.module("app", [
    ngRoute,
    leftNav.name
]);

export default theApp;
