import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyExecutiveComponent } from './notify-executive.component';

describe('NotifyExecutiveComponent', () => {
  let component: NotifyExecutiveComponent;
  let fixture: ComponentFixture<NotifyExecutiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifyExecutiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifyExecutiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
