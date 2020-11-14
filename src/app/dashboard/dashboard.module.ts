import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FiltersModule } from '../common/filters/filters.module';
import { DashboardService } from './dashboard.service';
import { GridModule } from '../common/grid/grid.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FiltersModule,
    GridModule
  ],
  providers: [DashboardService],
  exports: [DashboardComponent]
})
export class DashboardModule { }
