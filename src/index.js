import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// todoList.todos.forEach(todo => crearTodoHtml(todo));
todoList.todos.forEach( crearTodoHtml ); //Esta funcion sirve por que solo se tiene un solo arg que se envia a la funcion, si fueran 2, se definirian cada uno

// const tarea = new Todo('Aprender JS');
// todoList.nuevoTodo(tarea);

// console.log(todoList);

// crearTodoHtml( tarea );

// localStorage.setItem('my-key','ABCD'); ES NECESARIO TENER STRING,STRING
// sessionStorage.setItem('my-key','ABCD');