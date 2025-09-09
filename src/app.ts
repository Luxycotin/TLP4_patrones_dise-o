import { runObserver } from "./observer";
import { runAdapter } from "./adapter";
import { runSingleton } from "./singleton";
import { runFactory } from "./factory";

(
  async () => {
    console.log("=== Patrones de Diseño en TypeScript ===\n");

    await runObserver();
    console.log("\n-----------------------------\n");

    await runAdapter();
    console.log("\n-----------------------------\n");

    await runSingleton();
    console.log("\n-----------------------------\n");

    await runFactory();
    console.log("\n=== Fin de la ejecución ===");
  }
)();
