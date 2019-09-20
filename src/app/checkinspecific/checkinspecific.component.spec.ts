import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinspecificComponent } from './checkinspecific.component';

describe('CheckinspecificComponent', () => {
  let component: CheckinspecificComponent;
  let fixture: ComponentFixture<CheckinspecificComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinspecificComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinspecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
