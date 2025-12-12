import { Withdrawal } from "./Withdrawal";

// Un FEE es una comisión => monto negativo, estilo de retiro
export class Fee extends Withdrawal {
  getTypeName() {
    return "Comisión";
  }
}
