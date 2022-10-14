import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Todo } from './todo';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private baseURL = "/api";


  constructor(private httpClient: HttpClient) { }



  getTodosList(): Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(`${this.baseURL}`);
  }

/*
  createTodo(todo:Todo): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, todo);
  }

 */




  public save(todo: Todo) {
    return this.httpClient.post(`${this.baseURL}`, todo);
  }




  deleteTodo(id: string): Observable<Object>{
    console.log(id);
    console.log(`${this.baseURL}/${id}`);
    return this.httpClient.delete(`${this.baseURL}/${id}`);  }

  }




