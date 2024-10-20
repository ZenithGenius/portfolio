import {
  waitForAsync,
  type ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { SocialNavComponent } from './social-nav.component';

describe('SocialNavComponent', () => {
  let component: SocialNavComponent;
  let fixture: ComponentFixture<SocialNavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SocialNavComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
