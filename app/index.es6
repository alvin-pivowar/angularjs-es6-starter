import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

require("!style!css!less!./styles/main.less");

import "angular";

import theApp from "./main/main.es6";
import "./main/routeConfig.es6";

angular.bootstrap(document.body, [theApp.name]);