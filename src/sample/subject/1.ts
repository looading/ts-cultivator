import { Subject } from 'rxjs/Subject';
import { Student } from './student';


export const open = true;
export const runner = () => {
  const looading = new Student();
  const bob = new Student('bob');

  const subject = new Subject();

  subject.subscribe(looading.getMsg);

  subject.next('明早8点上课.');

  subject.subscribe(bob.getMsg);

  subject.next('下午全班大扫除, 一个都不能溜!');
};

