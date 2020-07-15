import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [TodoComponent],
  imports: [
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule
  ],
  exports: [
    TodoComponent
  ]
})
export class TodoModule { }
