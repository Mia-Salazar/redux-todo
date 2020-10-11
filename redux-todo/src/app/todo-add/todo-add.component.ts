import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { create } from '../redux/todo.actions';
import { AppState } from '../app.reducers';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  input: FormControl;
  error = false;

  constructor(private store: Store<AppState>) {
    this.input = new FormControl('Add task', Validators.required);
  }

  ngOnInit(): void {
  }

  add(){
    if(this.input.invalid){
      this.error = true;
    } else {
      this.store.dispatch(create({text:this.input.value}))
      this.input.reset();
    }

  }

}
