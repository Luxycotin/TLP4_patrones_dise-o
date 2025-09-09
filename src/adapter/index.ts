import { SimpleHttpClient } from "./clases/SimpleHttpClient";
import { FetchAdapter } from "./clases/FetchAdapter";
import { AxiosAdapter } from "./clases/AxiosAdapter";

export async function runAdapter() {
  console.log("--- Adapter ---");
  const client = new SimpleHttpClient(new FetchAdapter());

  const data1 = await client.get<any>("https://jsonplaceholder.typicode.com/todos/1");
  console.log("FetchAdapter:", data1);

  client.setAdapter(new AxiosAdapter());
  const data2 = await client.get<any>("https://jsonplaceholder.typicode.com/todos/2");
  console.log("AxiosAdapter:", data2);
}
