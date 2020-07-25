import "./styles.css";  
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from "./js/componentes";



export const todoList = new TodoList(); //lo exportamos devuelta aqui para usarlo en componentes, porque este es el arreglo que usamos

const tarea = new Todo('Aprender Javascript');//eventualmente la idea es hacer esto dinamicamente por supuesto.

todoList.nuevoTodo(tarea);

console.log(todoList);

crearTodoHtml(tarea);