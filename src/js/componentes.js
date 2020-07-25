import { Todo } from "../classes";
import {todoList} from '../index'

//referencias en el HTML
const divTodoList = document.querySelector('.todo-list');

const txtInput = document.querySelector('.new-todo');

export const crearTodoHtml = (todo) => {


    const htmlTodo = `
    <li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}"> 
		<div class="view">
				<input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
				<label>${todo.tarea}</label>
				<button class="destroy"></button>
		</div>
        <input class="edit" value="Create a TodoMVC template">
         </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);//colocamos divfirstElementChild porque asi vemos directamente el li agregado al div de la clase
    //.todo-list ya que si solo ponemos append(div) nos quedara un div creado y posteriormente el li y no es buena practica.

    return div.firstElementChild;
}


//Eventos
txtInput.addEventListener('keyup', (event) => { //keyup para cuando suelto la tecla, es para tomar lo que escribo

    if (event.keyCode === 13 && txtInput.value.length > 0) { //el keycode 13 corresponde al enter
        console.log(txtInput.value);
        const nuevoTodo = new Todo(txtInput.value);//creamos un todo nuevo con el valor que corresponde a lo que tipamos
        todoList.nuevoTodo(nuevoTodo);
  
        crearTodoHtml(nuevoTodo);
        txtInput.value = '';
    }
});


divTodoList.addEventListener('click', (event) => {

    const nombreElemento = event.target.localName;//target es en el evento lo que clickeo, el localName me da el nombre local de
    //lo que estoy clickeando, sea un label, un input, un button o lo que corresponda segun el caso.
    const todoElemento = event.target.parentElement.parentElement;//con uno solo llegaria solo al div, necesito llegar al li
    const todoId = todoElemento.getAttribute('data-id');

    if(nombreElemento.includes('input')) { //o sea, si estamos clickeando en el toggle de marcado/desmarcado, sino recordemos el nombre seria label o bien button.
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    } else if (nombreElemento.includes('button')) { //similar a mas arrriba, controlamos que sea el button, y no el label o el input en este caso
        todoList.eliminarTodo(todoId);//lo estaria borrando del arreglo, no de la referencia HTML, o sea no desapareceria mas que en consola, necesitamos que desaparezca de la pag tambien
        divTodoList.removeChild(todoElemento);
    }
 
});