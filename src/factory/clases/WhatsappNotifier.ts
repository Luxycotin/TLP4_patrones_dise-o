import { INotifier } from "../interfaces/INotifier";

export class WhatsappNotifier implements INotifier {
  send(to: string, message: string) {
    console.log(`Enviando WHATSAPP a ${to}: ${message}`);
  }
}
