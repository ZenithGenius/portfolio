import {
  type ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';

import { AboutIntroLayoutComponent } from './introduction.component';

describe('AboutIntroLayoutComponent', () => {
  let component: AboutIntroLayoutComponent;
  let fixture: ComponentFixture<AboutIntroLayoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AboutIntroLayoutComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutIntroLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
