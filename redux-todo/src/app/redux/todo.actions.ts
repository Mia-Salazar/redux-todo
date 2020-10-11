import { createAction, props } from '@ngrx/store';

export const create = createAction (
    'create',
    props<{ text:string }>()

);

export const complete = createAction (
    'complete',
    props<{ id:number}>()

);