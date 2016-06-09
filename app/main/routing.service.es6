// Copyright (c) Alvin Pivowar 2016

import RoutingItem from "./routingItem.model.es6";

const routingInfo = [
    new RoutingItem(0, "Home", "/home"),
    new RoutingItem(1, "Controller", "/controller"),
    new RoutingItem(2, "Service", "/service"),
];

class RoutingService {
    static get name() { return "routingService"; }

    constructor($q) {
        this._$q = $q;
    }

    getRoutingInfo() {
        return this._$q((accept, reject) => {
            accept({ data: routingInfo });
        });
    }

    static factory($q) { return new RoutingService($q); }
}

RoutingService.$inject = ["$q", RoutingService.factory];

export default RoutingService;