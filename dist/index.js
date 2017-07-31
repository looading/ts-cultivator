"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var path = require("path");
var samplePath = path.join(__dirname, 'sample');
var files = util_1.iteratorDir(samplePath);
files.map(util_1.exec);
//# sourceMappingURL=index.js.map