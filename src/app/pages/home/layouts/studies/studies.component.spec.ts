import {
  type ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';

import { StudiesLayout } from './studies.component';

describe('StudiesLayoutComponent', () => {
  let component: StudiesLayout;
  let fixture: ComponentFixture<StudiesLayout>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [StudiesLayout],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiesLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
