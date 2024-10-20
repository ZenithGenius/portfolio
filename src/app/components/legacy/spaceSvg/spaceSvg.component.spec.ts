import {
  waitForAsync,
  type ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { SpaceSvgComponent } from './spaceSvg.component';

describe('SpaceSvgComponent', () => {
  let component: SpaceSvgComponent;
  let fixture: ComponentFixture<SpaceSvgComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SpaceSvgComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
