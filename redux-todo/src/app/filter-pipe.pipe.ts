import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.models';
import { validFilter } from './redux/filter.actions';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(todos: Todo[], filter: validFilter): Todo[] {
    switch (filter){
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'pending':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }

}
