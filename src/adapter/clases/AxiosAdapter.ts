import axios from "axios";
import { IHttpClient } from "../interfaces/IHttpClient";

export class AxiosAdapter implements IHttpClient {
  async get<T>(url: string): Promise<T> {
    const res = await axios.get<T>(url);
    return res.data;
  }
}
