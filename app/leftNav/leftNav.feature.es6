// Copyright (c) Alvin Pivowar 2016

require("./leftNav.less");

import module from "./leftNav.module.es6";
import component from "./leftNav.component.es6";

module.directive(component.name, component.factory);

export default module;