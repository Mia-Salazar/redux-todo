import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { completeAll } from '../redux/todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {
  allCompleted = false;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
  }

  completeAll(){
    this.allCompleted = !this.allCompleted;
    this.store.dispatch(completeAll({completed: this.allCompleted}))
  }

}
