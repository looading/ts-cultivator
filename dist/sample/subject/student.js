"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = (function () {
    function Student(name, age, sex, level) {
        if (name === void 0) { name = 'looading'; }
        if (age === void 0) { age = 13; }
        if (sex === void 0) { sex = '男'; }
        if (level === void 0) { level = 5; }
        var _this = this;
        this.getMsg = function (msg) {
            _this.msg = msg;
            _this.report();
        };
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.level = level;
    }
    Student.prototype.report = function () {
        console.log("\n      Student " + this.name + ", " + this.age + " years old, sex: " + this.sex + ", grades " + this.level + ".\n      Receive message: " + this.msg + "\n    ");
    };
    return Student;
}());
exports.Student = Student;
//# sourceMappingURL=student.js.map