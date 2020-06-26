"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var vars_1 = require("./config/vars");
var port = vars_1.variables.port;
app_1.app.listen(port, function () {
    return console.log("Example app listening at http://localhost:" + port);
});
