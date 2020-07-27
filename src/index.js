import "./styles.css";  
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from "./js/componentes";



export const todoList = new TodoList(); //lo exportamos devuelta aqui para usarlo en componentes, porque este es el arreglo que usamos

todoList.todos.forEach(todo => crearTodoHtml(todo));

console.log(todoList);