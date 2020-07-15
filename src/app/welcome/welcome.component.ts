import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo/todo.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  numberOfTodos = 0;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.numberOfTodos = this.todoService.getAll().length;
  }

}
