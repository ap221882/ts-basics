function getEmail(user) {
    var _a;
    if ((_a = user.info) === null || _a === void 0 ? void 0 : _a.email) {
        return user.info.email;
    }
    else {
        return "";
    }
}
function getEmail2(user) {
    var _a;
    return ((_a = user.info) === null || _a === void 0 ? void 0 : _a.email) || "";
}
//  Note: In case of function passed we can use func?.()
