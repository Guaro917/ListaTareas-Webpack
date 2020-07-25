
export class Todo {


    constructor(tarea) {

        this.tarea         = tarea;
        this.id            = new Date().getTime();//definimos el id como el momento en el que creamos la tarea con el gettime, asi sera unico.
        this.completado    = false;
        this.creado        = new Date();    
    }


}


    