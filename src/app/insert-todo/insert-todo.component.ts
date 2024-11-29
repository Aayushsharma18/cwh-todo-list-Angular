import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Model/Todo';

@Component({
  selector: 'app-insert-todo',
  imports: [FormsModule],
  templateUrl: './insert-todo.component.html',
  styleUrl: './insert-todo.component.css'
})

export class InsertTodoComponent {

  @Input() todo: Todo;
  @Output() AddTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() {
    this.todo = new Todo(1, "", "", true);
  }

  srno!: number;
  title!: string;
  desc!: string;
  isactive!: boolean;

  OnSubmit() {

    var todo: Todo = {
      srno: this.srno,
      title: this.title,
      desc: this.desc,
      isactive: true
    };

    this.AddTodo.emit(todo);

  }

}
