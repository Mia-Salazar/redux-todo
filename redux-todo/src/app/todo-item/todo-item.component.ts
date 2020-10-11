import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { complete } from '../redux/todo.actions';
import { Todo } from '../models/todo.models';
import { AppState } from '../app.reducers';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  editingItem = false;
  checkbox: FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.checkbox = new FormControl(this.todo.completed);

    this.checkbox.valueChanges.subscribe(value => {
      this.store.dispatch(complete({id: this.todo.id}));
    });

  }

  finishEdition(){
    this.editingItem = false;
  }

}
