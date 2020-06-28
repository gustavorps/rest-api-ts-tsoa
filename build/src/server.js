"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const app_1 = require("./app");
Object.defineProperty(exports, "app", { enumerable: true, get: function () { return app_1.app; } });
const vars_1 = require("./config/vars");
const { port } = vars_1.variables;
if (process.env.NODE_ENV !== 'test')
    app_1.app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
