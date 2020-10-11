import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.models';
import { AppState } from '../app.reducers';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos:Todo[] = [];

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(todos =>{
        this.todos = todos['todo'];
        console.log(this.todos);
      });
  }

}
