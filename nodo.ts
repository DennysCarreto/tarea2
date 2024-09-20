export class Nodo{
    public numero: number;
    public anterior: Nodo | null;
    public siguiente: Nodo | null;

    constructor(){
        this.numero = Math.floor(Math.random() * 9) + 1;
        //this.numero = numero;
        this.anterior = null;
        this.siguiente = null;
    }
}