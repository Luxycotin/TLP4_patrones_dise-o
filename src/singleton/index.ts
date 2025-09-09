import { ConexionDB } from "./clases/ConexionDB";

export async function runSingleton() {
  console.log("--- Singleton ---");
  const db1 = ConexionDB.getInstance();
  const db2 = ConexionDB.getInstance();

  db1.connect();
  console.log("DB Info:", db2.getInfo());
  db2.disconnect();
  console.log("Son la misma instancia:", db1 === db2);
}
