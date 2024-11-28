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
    this.todo = new Todo(5, "new Todo", "This is new todo", false);
  }

  OnDelClick(todo: Todo) {
    this.DeleteTodo.emit(todo);
    console.log("Delete Button Clicked.");
  }

  OnSubClick(){
    console.log("BTn submited.");
    
  }
}
