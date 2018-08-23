export class Comando {
    nombre: string;
    descripcion: string;
    subcomandos: Comando[];

    constructor(nombre: string, descripcion: string, subcomandos: Comando[] = []) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.subcomandos = subcomandos;
    }
}