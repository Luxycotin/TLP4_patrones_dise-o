import { Professor } from "./clases/Professor";
import { Student } from "./clases/Student";

export async function runObserver() {
  console.log("--- Observer ---");
  const prof = new Professor();
  const s1 = new Student("Ana");
  const s2 = new Student("Luis");

  prof.subscribe(s1);
  prof.subscribe(s2);

  prof.publish("Tarea 1");
  prof.unsubscribe(s2);
  prof.publish("Tarea 2");
}
