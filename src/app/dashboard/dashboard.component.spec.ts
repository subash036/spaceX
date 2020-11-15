import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FiltersModule } from '../common/filters/filters.module';
import { GridModule } from '../common/grid/grid.module';
import { DashboardService } from './dashboard.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        DashboardRoutingModule,
        FiltersModule,
        GridModule,
        HttpClientModule
      ],
      providers: [HttpClient, DashboardService],
      declarations: [ DashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create dashboard component', () => {
    expect(component).toBeTruthy();
  });
});
