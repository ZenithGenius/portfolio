import {
  waitForAsync,
  type ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { TimelineElementComponent } from './timeline-element.component';

describe('TimelineElementComponent', () => {
  let component: TimelineElementComponent;
  let fixture: ComponentFixture<TimelineElementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TimelineElementComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
