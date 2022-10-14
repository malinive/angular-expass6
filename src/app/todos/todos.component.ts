import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo'
import { TodoService } from '../todo.service'
import { Router } from '@angular/router';
import {Observable} from "rxjs";

//https://www.javaguides.net/2021/08/angular-crud-example.html
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todo_list: Todo[] = [];
  todo:Todo = new Todo();
  description: any;
  summary: any;
  id!: String;

  constructor(private todoService: TodoService,
              private router: Router) { }

  ngOnInit() {
    this.todoService.getTodosList().subscribe(data => {
      this.todo_list = data;
    });
  }



  removeTodo(id: string){
    console.log(id);
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todo_list = this.todo_list.filter(
        (t: Todo) => t.id !== id
      );
    });

  }
  reloadPage() {
    window.location.reload();
  }
/*
  saveTodo(){
    this.todoService.createTodo(this.todo).subscribe( data =>{
        console.log(data);
        this.reloadPage();
      },
      error => console.log(error));
  }

 */

  onSubmit() {
    this.todoService.save(this.todo).subscribe(result => this.todo_list);
  }

}
