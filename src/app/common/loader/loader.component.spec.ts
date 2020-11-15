import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Loader Component', () => {
    expect(component).toBeTruthy();
  });

  it('should create Loader Component and status should be false', () => {
    const fixture = TestBed.createComponent(LoaderComponent);
    const loaderComponent = fixture.debugElement.componentInstance;
    expect(loaderComponent.show).toBeFalsy();
  });
});
