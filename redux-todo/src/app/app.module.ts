import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { environment } from 'src/environments/environment';
import { appReducers } from './app.reducers';
import { FilterPipePipe } from './filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoFooterComponent,
    TodoAddComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoPageComponent,
    FilterPipePipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  exports: [TodoPageComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
