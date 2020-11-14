import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() eachItem: any;
  
  // Array<[{
  //   links:any,
  //   mission_name:string,
  //   mission_id:string,
  //   launch_year:string,
  //   launch_success:string,
  //   land_success:string,
  // }]>;
  
  constructor() { 
    console.log(`SHIVA: GridComponent -> eachItem`, this.eachItem)
  }

  ngOnInit() {
  }

}
