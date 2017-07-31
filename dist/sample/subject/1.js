"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = require("rxjs/Subject");
var student_1 = require("./student");
var looading = new student_1.Student();
var bob = new student_1.Student('bob');
var subject = new Subject_1.Subject();
subject.subscribe(looading.getMsg);
subject.next('明早8点上课.');
subject.subscribe(bob.getMsg);
subject.next('下午全班大扫除, 一个都不能溜!');
//# sourceMappingURL=1.js.map