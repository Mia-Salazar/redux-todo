import { createReducer, on } from '@ngrx/store';
import { Todo } from '../models/todo.models';
import { create, complete, edit } from './todo.actions';
 
export const initialState:Todo[] = [
  new Todo('Add tasks'),
  new Todo('Add tasks 2'),
  new Todo('Add tasks 3'),
];
 
const _todoReducer = createReducer(
  initialState,
  on(create, (state, {text}) => [...state, new Todo(text)]),
  on(complete, (state, {id}) => {
    return state.map (todo => {
      if (todo.id === id){
        return {...todo, completed: !todo.completed}
      } else {
        return todo;
      }
    })
  }),
  on(edit, (state, {id, text}) => {
    return state.map (todo => {
      if (todo.id === id){
        return {...todo, text: text}
      } else {
        return todo;
      }
    })
  }),
)
 
export function todoReducer(state, action) {
  return _todoReducer(state, action);
}