import { NotifierFactory } from "./clases/NotifierFactory";
import { Channel } from "./interfaces/channel";

export async function runFactory() {
  console.log("--- Factory ---");
  const channels: Channel[] = ["email","sms","whatsapp"];
  channels.forEach(ch => {
    const notifier = NotifierFactory.create(ch);
    notifier.send("123456789", `Mensaje de prueba vía ${ch}`);
  });
}
