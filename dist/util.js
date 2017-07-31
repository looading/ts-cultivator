"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
exports.run = function (open, callback) {
    if (open) {
        callback();
    }
};
exports.filter = function (file) {
    var stat = fs.statSync(file);
    var isDirectory = stat.isDirectory();
    var isFile = stat.isFile();
    if (isDirectory) {
        return true;
    }
    if (isFile) {
        return path.extname(file) === '.js';
    }
    return false;
};
exports.iteratorDir = function (dir) {
    var stat = fs.statSync(dir);
    var isDirectory = stat.isDirectory();
    var isFile = stat.isFile();
    if (isDirectory) {
        var childs = fs.readdirSync(dir);
        return childs
            .filter(function (child) { return exports.filter(path.join(dir, child)); })
            .map(function (child) {
            var childPath = path.join(dir, child);
            return exports.iteratorDir(childPath);
        }).reduce(function (pre, now) {
            return pre.concat(now);
        }, []);
    }
    return [dir];
};
exports.exec = function (file) {
    var instance = require(file);
    if (instance.open) {
        var label = "running " + path.relative(__dirname, file) + " ";
        console.time(label);
        console.log('---------------------------------------------\n');
        exports.run(instance.open, instance.runner);
        console.timeEnd(label);
        return true;
    }
    else {
        return false;
    }
};
//# sourceMappingURL=util.js.map