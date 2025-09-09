import { IPublisher } from "../interfaces/IPublisher";
import { ISubscriber } from "../interfaces/ISuscriber";

export class Professor implements IPublisher {
  private students: ISubscriber[] = [];

  subscribe(student: ISubscriber) {
    this.students.push(student);
  }

  unsubscribe(student: ISubscriber) {
    this.students = this.students.filter(s => s !== student);
  }

  publish(task: string) {
    console.log(`Profesor publicó: ${task}`);
    this.students.forEach(s => s.update(task));
  }
}
