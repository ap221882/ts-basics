"use strict";
exports.__esModule = true;
var houses_json_1 = require("./houses.json");
console.log(findHouses(JSON.stringify(houses_json_1["default"]), function (_a) {
    var name = _a.name;
    return name === "Atreides";
}));
console.log(findHouses(houses_json_1["default"], function (_a) {
    var name = _a.name;
    return name === "Harkonnen";
}));
