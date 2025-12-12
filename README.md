###  Examen II Parcial 
Refactorizacion con factory pattern y extensibilidad 
El arhivo realizado describe la refactorizacion realizara par cumplir con los requrimientos que se han dicho en el examen que pues movimiento al dominio reduciendo el acoplamiento y demostrando la extensibilidad mediante OCP 

## QUE PASO 

antes de la refactorizacion la UI tocaba objetos directamentes usando:
new Deposit(...)
new Withdrawal(...)
switch (data.type) {...}

## Que Suitacion teniamos 
-Alto acomplamiento porque la UI Dependia de clases concretas 
-Baja cohesion la logica de creacion estaba mezclada con lo que se presentaba 
-Dificultad para extender ya que un nuevo archico requeria editar la UI

## Para mejora 
 se creo el archivo dentro de models como Factory.js dentro de dominio 

## que usa la UI 
 ahora solamente usa createMovement(data);

## Extensibilidad 
Ahora si cumple con el principo de open y closed, para probarlo se agrego un nuevo tipo de movimiento FEE 

## Como lo creamos 
Crear un archivo en models llamado Fee.js  y implementamos el movimiento heredado por la withdrawal 
export class Fee extends Withdrawal {
  getTypeName() {
    return "Comisión";
  }
}
y registramos un nuevo caso mas abajo que donde estaban abierto los casos
    case "fee":
  return new Fee(data);


## instrucciones para ejecutar el proyecto seria  
npm install
npm run dev 
