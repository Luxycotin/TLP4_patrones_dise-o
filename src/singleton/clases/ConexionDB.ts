import { IConexionDB } from "../interfaces/IConexion";

export class ConexionDB implements IConexionDB {
  private static instance: ConexionDB;
  private constructor(private host="localhost", private port=3306, private user="admin") {}

  static getInstance(): ConexionDB {
    if (!ConexionDB.instance) {
      ConexionDB.instance = new ConexionDB();
    }
    return ConexionDB.instance;
  }

  connect() {
    console.log(`Conectando a ${this.host}:${this.port} como ${this.user}`);
  }

  disconnect() {
    console.log("Desconectando de la DB");
  }

  getInfo() {
    return `${this.user}@${this.host}:${this.port}`;
  }
}
