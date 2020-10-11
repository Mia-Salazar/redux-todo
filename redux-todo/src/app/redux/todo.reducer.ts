import { createReducer, on } from '@ngrx/store';
import { Todo } from '../models/todo.models';
import { create } from './todo.actions';
 
export const initialState:Todo[] = [
  new Todo('Add tasks'),
  new Todo('Add tasks 2'),
  new Todo('Add tasks 3'),
];
 
const _todoReducer = createReducer(
  initialState,
  on(create, (state, {text}) => [...state, new Todo(text)]),
)
 
export function todoReducer(state, action) {
  return _todoReducer(state, action);
}