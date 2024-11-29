import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./navbar/navbar.component";
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { Todo } from '../Model/Todo';
import { InsertTodoComponent } from "./insert-todo/insert-todo.component";
import { RouterOutlet } from '@angular/router';

{ }

@Component({
  selector: 'app-root',
  imports: [CommonModule, NavbarComponent, TodoItemComponent, InsertTodoComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})


export class AppComponent {
  title = "Todo-List";
  todos: Todo[];
  localItem: any;

  constructor() {

    this.localItem = localStorage.getItem("todos");
    if (this.localItem == null) {
      this.todos = [];
    }
    else {
      this.todos = JSON.parse(this.localItem);
    }

    this.todos = [
      new Todo(1, "new todo1", "new todo1", true),
      new Todo(2, "new todo2", "new todo2", true)
    ];
  };

  deleteTodo(todo: Todo) {

    var todoInx = this.todos.indexOf(todo);
    this.todos.splice(todoInx, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
    console.log(todo);

  }

  addTodo(todo: Todo) {

    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));

  }

  ToggleTodo(todo: Todo) {

    var todoInx = this.todos.indexOf(todo);
    this.todos[todoInx].isactive = !this.todos[todoInx].isactive;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
