import {
  waitForAsync,
  type ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { ServiceLayoutComponent } from './ourService.component';

describe('OurServiceComponent', () => {
  let component: ServiceLayoutComponent;
  let fixture: ComponentFixture<ServiceLayoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceLayoutComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
