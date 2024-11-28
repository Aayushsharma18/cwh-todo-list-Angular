import { Component, NgModule, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule, NgFor, NgForOf, NgIf } from '@angular/common';
import { NavbarComponent } from "./navbar/navbar.component";
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { Todo } from '../Model/Todo';
import { InsertTodoComponent } from "./insert-todo/insert-todo.component";

{ }

@Component({
  selector: 'app-root',
  imports: [CommonModule, NavbarComponent, TodoItemComponent, InsertTodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})


export class AppComponent {
  title = "Todo-List";
  todos: Todo[];

  constructor() {

    this.todos = [
      new Todo(1, 'Learn Angular', 'Study Angular basics and components', true),
      new Todo(2, 'Create Todo App', 'Create a simple todo application', false),
      new Todo(3, 'Build Todo App', 'Build a simple todo application', false),
      new Todo(4, 'Create Shopping Cart', 'Build a simple Shopping Cart application', false),
      new Todo(5, 'Learn Angular', 'Study Angular basics and components', true),
      new Todo(6, 'Create Todo App', 'Create a simple todo application', false),
      new Todo(7, 'Build Todo App', 'Build a simple todo application', false),
      new Todo(8, 'Create Shopping Cart', 'Build a simple Shopping Cart application', false),
      new Todo(9, 'Learn Angular', 'Study Angular basics and components', true),
      new Todo(10, 'Create Todo App', 'Create a simple todo application', false),
      new Todo(11, 'Build Todo App', 'Build a simple todo application', false),
      new Todo(12, 'Create Shopping Cart', 'Build a simple Shopping Cart application', false),
    ];
  };

  deleteTodo(todo: Todo) {

    var delTodo = this.todos.indexOf(todo);

    this.todos.splice(delTodo, 1);
    
    console.log(todo);

  }
}
