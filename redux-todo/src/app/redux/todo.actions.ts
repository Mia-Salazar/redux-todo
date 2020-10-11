import { createAction, props } from '@ngrx/store';

export const create = createAction (
    'create',
    props<{ text:string }>()
);

export const complete = createAction (
    'complete',
    props<{ id:number}>()
);

export const edit = createAction (
    'edit',
    props<{ id:number, text:string}>()
);

export const erase = createAction (
    'erase',
    props<{ id:number}>()
);