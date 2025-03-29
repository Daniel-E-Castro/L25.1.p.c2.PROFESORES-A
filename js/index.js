/*En la Universidad se le paga a cada profesores un bono, sin embargo si es personal fijo tiene 
un sueldo y si es contratado tiene cantidad de horas, donde cada una se paga a $10. Considere 
que a todos los profesores se les pide su nombre, y las clases Cl_fijo y Cl_contratado heredan 
de la clase Cl_profesor. 
*/

import Cl_Fijo from "./Cl_Fijo.js";
import Cl_Contratado from "./Cl_contratado.js";

export default class Cl_index {

    constructor() {
        let fijo1 = new Cl_Fijo("Carlos", 25, 100);
        let fijo2 = new Cl_Fijo("Carolina", 40, 90);

        let salida = document.getElementById("salida");

        salida.innerHTML = `

<br>Nombre: ${fijo1.nombre}
<br>Monto del bono: ${fijo1.bono}$
<br>Monto sueldo: ${fijo1.sueldo}$
<br>Ingreso total del profesor Carlos: ${fijo1.sueldoTotalFijo()}$
<br>

<br>Nombre: ${fijo2.nombre}
<br>Monto del bono: ${fijo2.bono}$
<br>Monto sueldo: ${fijo2.sueldo}$
<br>Ingreso total del profesor Carolina: ${fijo2.sueldoTotalFijo()}$
`
    }
}