// Copyright (c) Alvin Pivowar 2016

class RoutingItem {
    get ordinal() { return this._ordinal; }
    get label() { return this._label; }
    get route() { return this._route; }

    constructor(ordinal, label, route) {
        this._ordinal = ordinal;
        this._label = label;
        this._route = route;
    }
}

export default RoutingItem;