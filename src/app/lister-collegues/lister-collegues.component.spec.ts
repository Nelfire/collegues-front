import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerColleguesComponent } from './lister-collegues.component';

describe('ListerColleguesComponent', () => {
  let component: ListerColleguesComponent;
  let fixture: ComponentFixture<ListerColleguesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerColleguesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerColleguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
