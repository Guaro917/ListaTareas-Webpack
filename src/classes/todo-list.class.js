import {Todo} from './todo.class'

export class TodoList {


    constructor () {

        this.todos = [];
        this.cargarLocalStorage();
}

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id) {

        this.todos = this.todos.filter(todo => todo.id != id );
        this.guardarLocalStorage();
    }

    marcarCompletado(id) {

        for(const todo of this.todos) {

            if(todo.id == id) {//lo hacemos con 2 iguales por las dudas de que uno sea un string y otro un numero, de hecho COMPROBADO, compara eso, si o si debe haber un doble igual

                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;

            }
        }
    }
    //eliminamos todos los que esten completados.
    eliminarCompletados() {
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage() {

        localStorage.setItem('todo', JSON.stringify(this.todos));

    }

    cargarLocalStorage() {

        this.todos = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [];

        this.todos = this.todos.map(obj => Todo.fromJson(obj));//hacemos esto para poder convertir los objetos que recibimos del local storage
        //a instancias de la clase correspondiente, sino por ejemplo si la clase tuviera algun metodo en particular estos se perderian en el
        //localstorage, de esta manera recuperamos el objeto completo con la instancia correpsondiente(para eso es la static fromJson)
    }

}
