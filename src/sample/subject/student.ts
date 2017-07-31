export class Student {

  private name: string;
  private age: number;
  private sex: string;
  private level: number;
  private msg: string;

  constructor(name: string = 'looading', age: number = 13, sex: string = '男', level: number = 5) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.level = level;
  }

  getMsg = (msg: string) => {
    this.msg = msg;
    this.report();
  }

  report() {
    console.log(`
      Student ${ this.name }, ${ this.age } years old, sex: ${ this.sex }, grades ${ this.level }.
      Receive message: ${ this.msg }
    `);
  }
}
