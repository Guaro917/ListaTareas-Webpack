export class TodoList {


    constructor () {

        this.todos = [];

}

    nuevoTodo(todo) {
        this.todos.push(todo);
    }

    eliminarTodo(id) {

        this.todos = this.todos.filter(todo => todo.id != id ); //idem al comentario mas abajo, 2 igualdades porque uno es string y el otro es number
        //recordemos que el filter en esta funcion lo que va a hacer es a los elementos que NO cumplan la condicion los excluye del arreglo
        //y nos devuelve el arreglo resultante sin los eliminados.
    }

    marcarCompletado(id) {

        for(const todo of this.todos) {

            if(todo.id == id) {//lo hacemos con 2 iguales por las dudas de que uno sea un string y otro un numero, de hecho COMPROBADO, compara eso, si o si debe haber un doble igual

                todo.completado = !todo.completado;
                break;

            }
        }
    }

    eliminarCompletados() {

    }


}
