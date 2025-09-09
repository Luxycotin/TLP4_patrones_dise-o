import { INotifier } from "../interfaces/INotifier";

export class SmsNotifier implements INotifier {
  send(to: string, message: string) {
    console.log(`Enviando SMS a ${to}: ${message}`);
  }
}
