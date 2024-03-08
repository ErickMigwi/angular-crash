import { Component } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent {
  constructor(private taskService:TaskService){}
    inputData:string = ''
    id:number = 0
    date:string = ''
    reminder:boolean = false
    addTask(){
      console.log(this.inputData, this.id, this.date, this.reminder);
     let taskToAdd:Task = {
      id:this.id,
      text: this.inputData,
      day: this.date,
      reminder: this.reminder
  }

  this.taskService.addTask(taskToAdd).subscribe(tasks=>{
    console.log('Task posted');
    
  })
      
    }
}
