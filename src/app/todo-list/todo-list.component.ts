import { Component, OnInit } from '@angular/core';
import {NgRedux, select} from "@angular-redux/store";
import {IAppState} from "../store";
import {ITodo} from "../todo";
import {ADD_TODO, REMOVE_ALL_TODOS, REMOVE_TODO, TOOGLE_TODO} from "../actions";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
    @select() todos;

    model: ITodo = {
        id: 0,
        description: '',
        responsible: '',
        priorety: 'low',
        isCompleted: false
    };

  constructor(private ngRedux: NgRedux<IAppState>) {

  }

  ngOnInit() {

  }

  onSubmit() {
      this.ngRedux.dispatch({type: ADD_TODO, todo: this.model});
  }
  toogleTodo(id) {
      this.ngRedux.dispatch({type: TOOGLE_TODO, id: id});
  }

  removeTodo(id) {
      this.ngRedux.dispatch({type: REMOVE_TODO, id: id});
  }

}
