import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { LoaderService } from '../_services/loader.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public launchList: Array<object>;
  public yearsFrom:number=2006;
  constructor(private dashboardService: DashboardService, private loader:LoaderService) { 
    this.listHandler({
      limit:100
    });
  }
  ngOnInit() {
  }

  // on filter click load
  receiveYear(filterObject:object):void{
    this.listHandler(filterObject);

  }

  // intial load
  listHandler(filterObject:object):void{
    this.dashboardService.getLaunchList({...filterObject, ...{limit:100}}).subscribe(launchList=>{
      console.log(`SHIVA: DashboardComponent -> ngOnInit -> launchList`, launchList);
      this.launchList=launchList;
    }, err=>{
      console.log(err);
    });
  }
 
}
