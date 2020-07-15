import { Injectable } from '@angular/core';
import { ToDo } from './models';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: ToDo[] = [
    {
      completed: true,
      description: 'This item is completed by default.',
      createdAt: new Date()
    },
    {
      completed: false,
      description: 'You can manually complete this item.',
      createdAt: new Date()
    }
  ];

  getAll(): ToDo[] {
    return this.todos;
  }

  create(model: ToDo) {
    this.todos.push(model);
  }
}
