import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent  {
  @Input() text:string = ''
  @Input() color:string = ''
  @Input() backcolor:string = ''
  @Output() btnClick = new EventEmitter()
  onClick(){
    this.btnClick.emit(console.log('Add'))
  }

}
