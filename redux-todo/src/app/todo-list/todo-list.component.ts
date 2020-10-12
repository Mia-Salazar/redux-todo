import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.models';
import { AppState } from '../app.reducers';
import { validFilter } from '../redux/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos = [];
  currentFilter: validFilter;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(state =>{
        this.currentFilter = state.filter;
        this.todos = state.todos;
      });
  }
}
