import { Component, OnInit } from '@angular/core';
import { ToDo } from './models';
import { TodoService } from './todo.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  newToDo = new FormControl('');
  todos: ToDo[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getAll();
  }

  addNewToDo() {
    if (this.newToDo.value.length > 0) {
      this.todoService.create({
        createdAt: new Date(),
        completed: false,
        description: this.newToDo.value
      });
    }
  }

}
