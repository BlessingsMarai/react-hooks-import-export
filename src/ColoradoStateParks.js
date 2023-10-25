// src/ColoradoStateParks.js
import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import * as RMFunctions from "./parks/RockyMountain";

export default function ColoradoStateParks() {
  return (
    <div>
      <MesaVerde />
      <howManyParks/>
      
    </div>
  );
}
