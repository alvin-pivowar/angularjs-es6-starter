// Copyright (c) Alvin Pivowar 2016

class LeftNavController {
    constructor($location, routingService) {
        this._$location = $location;

        routingService.getRoutingInfo().then(response => {
            this.routing = response.data;

            this.routing.forEach(item => {
                if ($location.path().indexOf(item.route) !== -1)
                    this.activeTabIndex = item.ordinal;
            });
        });
    }

    onTabClick(item) {
        this._$location.path(item.route);
        this.activeTabIndex = item.ordinal;
    }

    static factory($location, routingService) { return new LeftNavController($location, routingService); }
}

LeftNavController.$inject = ["$location", "routingService", LeftNavController.factory];



class LeftNav {
    static get name() { return "leftNav"; }

    constructor() {
        this.controller = LeftNavController.$inject;
        this.controllerAs = "vm";
        this.replace = true;
        this.restrict = 'E';
        this.templateUrl = require("./leftNav.html");
    }

    static factory() { return new LeftNav(); }
}

LeftNav.$inject = [LeftNav.factory];

export default LeftNav;