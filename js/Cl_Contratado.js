import Cl_Profesor from "./Cl_Profesor.js";

export default class Cl_Contratado extends Cl_Profesor{
    constructor(nombre, bono, horas){
        super(nombre, bono);
        this.horas = horas;
    }

    sueldoTotalContratado(){
        return this.bono + (this.horas * 10);
    }
}