import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Input() yearsFrom: number;
  @Output() sendYearEvent = new EventEmitter<object>();
  public activeClass:any=null;
  public yearsList: Array<number>;
  public launchStatus: boolean=null;
  public landingStatus: boolean=null;
  public filterYear: number=null;
  public searchObject:any ={};
  constructor() { }

  ngOnInit() {
    this.yearsList = this.filterYears(this.yearsFrom);
  }

  // getting years array from start date
  filterYears(startYear: number): Array<number> {
    let currentYear = new Date().getFullYear(), years = [];
    startYear = startYear || 1980;
    while (startYear <= currentYear) {
      years.push(startYear++);
    }
    return years;
  };

  sendFilterData(value:any, key:string):void{
    this.searchObject[key]=value;
    this.sendYearEvent.emit(this.searchObject);
  }
}
