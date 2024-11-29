import { Component, Input, output, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../Model/Todo';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [NgClass],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})

export class TodoItemComponent {

  @Input() todo!: Todo;
  @Output() DeleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() CheckTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() {

  }

  //del todo btn
  OnDelClick(todo: Todo) {
    this.DeleteTodo.emit(todo);
    console.log("Delete Button Clicked.");
  }

  OnCheck(todo: Todo) {
    console.log(todo);
    this.CheckTodo.emit(todo);

  }

}
