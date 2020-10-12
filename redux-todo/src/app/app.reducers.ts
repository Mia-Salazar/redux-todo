import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './models/todo.models';
import { validFilter } from './redux/filter.actions';
import { filterReducer } from './redux/filter.reducer';
import { todoReducer } from './redux/todo.reducer';

export interface AppState {
    todos: Todo[],
    filter: validFilter;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReducer

}