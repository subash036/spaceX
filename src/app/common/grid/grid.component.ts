import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() eachItem: any;
  
  constructor() { 
    console.log(`SHIVA: GridComponent -> eachItem`, this.eachItem);
  }

  ngOnInit() {
  }

}
