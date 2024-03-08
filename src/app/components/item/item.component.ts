import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() task:any
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToogleTask: EventEmitter<Task> = new EventEmitter()
  faTimes = faTimes;
  deleteTask(task:Task){
      console.log(task);
      this.onDeleteTask.emit(task);
      
  } 
  toogleTask(task:Task){
    console.log(task);
    this.onToogleTask.emit(task)
    
  }
}
