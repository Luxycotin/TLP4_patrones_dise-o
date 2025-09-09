import { ISubscriber } from "../interfaces/ISuscriber";

export class Student implements ISubscriber {
  constructor(private name: string) {}
  update(task: string) {
    console.log(`${this.name} recibió tarea: ${task}`);
  }
}
