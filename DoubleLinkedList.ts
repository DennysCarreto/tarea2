import { Nodo } from "./nodo";
export class DoubleLinkedList{
    public inicio: Nodo | null;
    public final: Nodo | null;
    public tamanio: number;

    constructor(){
        this.inicio = null;
        this.final = null;
        this.tamanio = 0;
    }
    public estaVacia(): boolean{
        return this.inicio === null;
    }
    // public insertarInicio(numero:number): void{
    //     let newNodo: Nodo = new Nodo(numero);
    //     if(this.estaVacia()){
    //         this.inicio = newNodo;
    //         this.final = newNodo;
    //     }
    //     else{
    //         newNodo.siguiente = this.inicio;
    //         if (this.inicio !== null) {
    //             this.inicio.anterior = newNodo;
    //         }
    //         this.inicio = newNodo;
    //     }
    // this.tamanio += 1
    // }

    public insertFinal(): void{
        let newNodo: Nodo = new Nodo();
        if(this.estaVacia()){
            this.inicio = newNodo;
            this.final = newNodo;
        }
        else{
            newNodo.anterior = this.final;
            if (this.final !== null) {
                this.final.siguiente = newNodo;
            }
            this.final = newNodo
        }
    this.tamanio += 1
    }

    public imprimir(): void {
        let actual = this.inicio;
        while (actual!= null) {
            if (actual.numero % 2 == 0) {
                console.log(actual.numero);
            }
            actual = actual.siguiente;
        }
        console.log();
    }
}
