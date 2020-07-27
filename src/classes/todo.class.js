
export class Todo {

    static fromJson({id,tarea,completado,creado}) {//para recuperar la instancia desde localstorage, las llaves para desestructurar.NO OLVIDAR

        const tempTodo = new Todo(tarea);
   
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;
    }


    constructor(tarea) {

        this.tarea         = tarea;
        this.id            = new Date().getTime();//definimos el id como el momento en el que creamos la tarea con el gettime, asi sera unico.
        this.completado    = false;
        this.creado        = new Date();    
    }


}


    