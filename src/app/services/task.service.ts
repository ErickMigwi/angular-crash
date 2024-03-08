import { Injectable } from '@angular/core';
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';
import { Observable, catchError, of } from 'rxjs'; 
import {HttpClient, HttpHeaders} from '@angular/common/http'
const httpOptions= {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  readonly httpOptions= {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  private apiUrl = 'http://localhost:5000/task'
  constructor(private http:HttpClient) { }

  getTasks():Observable <Task[]>{
    return this.http.get<Task[]>(this.apiUrl).pipe(
      catchError(error=>{
        console.log('server not running, run it with : npm run server');
        
        return []
      })
    )   }
  deleteTask(task:any): Observable<Task>{
    console.log(task.id);
    
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url);
  }
  addTask(task:Task):Observable<Task>{
       const url = `${this.apiUrl}`
    return this.http.post<Task>(url, task);
  }
  toogleTask(task:Task):Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url, task,httpOptions );
  }
}
