import { Component } from '@angular/core';
import { UiService } from './services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showAddTask:boolean=false;
  subscription:Subscription = new Subscription()
  constructor (private uiService:UiService){
   this.subscription = this.uiService.onToggle().subscribe(value=>{
    this.showAddTask = value
   })
  }
  toogleAddTask(){
    this.uiService.toggleAddTask();
    
  }
}
