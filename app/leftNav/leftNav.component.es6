// Copyright (c) Alvin Pivowar 2016

class LeftNav {
    static get name() { return "leftNav"; }

    constructor() {
        this.replace = true;
        this.restrict = 'E';
        this.templateUrl = require("./leftNav.html");
    }

    static factory() {
        return new LeftNav();
    }
}

LeftNav.factory.$inject = [];

export default LeftNav;