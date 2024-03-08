import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
    tasks:Task[]= [];
    constructor(private taskService:TaskService){}
    ngOnInit():void{
      this.taskService.getTasks().subscribe(tasks=>{
        this.tasks = tasks
      })
    }
    deleteTask(task:Task){
      console.log(task);
      
      this.taskService.deleteTask(task).subscribe(tasks=>{
        this.tasks =this.tasks.filter(t => t.id !== task.id)
    })
  }
  toogleTask(task:Task){
    console.log(task);
    task.reminder = !task.reminder
    this.taskService.toogleTask(task).subscribe(res=>{
      console.log('task updated');
      
    })
  }
  }
