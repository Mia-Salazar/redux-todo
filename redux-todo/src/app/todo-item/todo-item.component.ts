import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { complete, edit } from '../redux/todo.actions';
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
  inputText: FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.inputText = new FormControl(this.todo.text)
    this.checkbox = new FormControl(this.todo.completed);

    this.checkbox.valueChanges.subscribe(value => {
      this.store.dispatch(complete({id: this.todo.id}));
    });

  }

  finishEdition(){
    this.editingItem = false;
    if(!this.inputText.invalid || this.inputText.value !== this.todo.text) {
      this.store.dispatch(edit({id: this.todo.id, text: this.inputText.value}))
    } 
  }
}
