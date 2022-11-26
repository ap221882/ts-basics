"use strict";
function addCoord(a, b) {
    return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}
// with functions
function getterSetter(str) {
    return [
        () => str,
        (v) => {
            str = v;
        },
    ];
}
const [strGetter, strSetter] = getterSetter("Ajay");
