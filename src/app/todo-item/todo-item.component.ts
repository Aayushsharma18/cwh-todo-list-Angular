import { Component, Input, output, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../Model/Todo';


@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})

export class TodoItemComponent {

  @Input() todo: Todo;
  @Output() DeleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() {
    this.todo = new Todo(1, "", "", true);
  }

  //del todo btn
  OnDelClick(todo: Todo) {
    this.DeleteTodo.emit(todo);
    console.log("Delete Button Clicked.");
  }

  //form submit btn
  OnSubClick() {
    console.log("BTn submited.");

  }
}
