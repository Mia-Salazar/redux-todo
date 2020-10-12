import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { validFilter } from '../redux/filter.actions';
import { setFilter } from '../redux/filter.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {
  currentFilter: validFilter = 'all';
  filters: validFilter[] = ['all', 'completed', 'pending']

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('filter').subscribe(
      filter =>{
        this.currentFilter = filter;
      } 
    )
  }

  changeFilter(filter: validFilter){
    this.store.dispatch(setFilter({filter:filter}))
  }

}
