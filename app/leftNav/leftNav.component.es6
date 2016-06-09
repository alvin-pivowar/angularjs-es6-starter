// Copyright (c) Alvin Pivowar 2016

class LeftNavController {
    constructor($location, $scope, routingService) {
        this._$location = $location;
        this.activeTabIndex = null;

        routingService.getRoutingInfo().then(response => {
            this.routing = response.data;

            this.routing.forEach(item => {
                if ($location.path().indexOf(item.route) !== -1)
                    this.activeTabIndex = item.ordinal;
            });
        });

        $scope.$watch(() => $location.path(), () => {
            this.routing.forEach(item => {
                if ($location.path().indexOf(item.route) !== -1)
                    this.activeTabIndex = item.ordinal;
            });
        });
    }

    onTabClick(item) {
        this._$location.path(item.route);
    }

    static factory($location, $scope, routingService) { return new LeftNavController($location, $scope, routingService); }
}

LeftNavController.$inject = ["$location", "$scope", "routingService", LeftNavController.factory];



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