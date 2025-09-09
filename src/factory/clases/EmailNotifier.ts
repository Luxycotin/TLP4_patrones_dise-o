import { INotifier } from "../interfaces/INotifier";

export class EmailNotifier implements INotifier {
  send(to: string, message: string) {
    console.log(`Enviando EMAIL a ${to}: ${message}`);
  }
}
