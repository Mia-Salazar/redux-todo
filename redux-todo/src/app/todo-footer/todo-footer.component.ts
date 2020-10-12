import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { validFilter } from '../redux/filter.actions';
import { setFilter } from '../redux/filter.actions';
import { completeAll } from '../redux/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {
  currentFilter: validFilter = 'all';
  filters: validFilter[] = ['all', 'completed', 'pending'];
  pending = 0;
  allCompleted = false;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.currentFilter = state.filter;
      console.log(state.todos, 'todos')
      this.pending = state.todos.filter(todo => !todo.completed).length;
    })

  }

  changeFilter(filter: validFilter){
    this.store.dispatch(setFilter({filter:filter}))
  }

  clearAll() {
    this.allCompleted = !this.allCompleted;
    this.store.dispatch(completeAll({completed: this.allCompleted}))
  }

}
