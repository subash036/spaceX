import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'toggle-button',
  template: `
    <input type="checkbox" id="{{id}}"
      (change)="changed.emit($event.target.checked)">
    <label class="toggle-button-switch"  
      for="{{id}}"></label>
    <div class="toggle-button-text">
      <div class="toggle-button-text-on">{{labelTrue}}</div>
      <div class="toggle-button-text-off">{{labelFalse}}</div>
    </div>
  `,
  styleUrls: ['buttons.scss']
})
export class ToggleButtonComponent implements OnInit {
  @Input() labelTrue:string="Yes";
  @Input() labelFalse:string="No";
  @Input() id:string;
  @Output() changed = new EventEmitter<boolean>();
  ngOnInit():void{
    console.log(`SHIVA: ToggleButtonComponent -> id`, this.id);
  }
}
