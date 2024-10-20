import { CommonModule, ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HEADER } from '@constants/appConst';
import { NavigateComponent } from '../../molecules/navigate/navigate.component';
import { LogoIconComponent } from '@app/components/icons/logo-icon.component';
import { ResumeButtonComponent } from '@app/components/molecules/resume-button/resume-button.component';

@Component({
  standalone: true,
  selector: 'app-header',
  template: `
    <header id="header" class="header">
      <div class="header-container">
        <LogoIcon class="cursor-pointer" (click)="scrollToTop()" />
        <nav class="navigation">
          @for(NAVIGATION of NAVIGATIONS; track NAVIGATION.ID) {
          <navigate
            [path]="NAVIGATION.PATH"
            [fragment]="NAVIGATION.FRAGMENT"
            class="text-[1.1rem] min-[1500px]:text-2xl min-[1700px]:text-3xl"
            [classNames]="$index === 0 ? 'mr-4' : 'mr-4 ml-4'"
            >{{ NAVIGATION.LABEL }}</navigate
          >
          }
        </nav>
        <header-resume-button></header-resume-button>
      </div>
    </header>
  `,
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    NavigateComponent,
    LogoIconComponent,
    ResumeButtonComponent,
  ],
})
export class HeaderComponent {
  protected readonly NAVIGATIONS = HEADER;
  private readonly scroller = inject(ViewportScroller);

  protected scrollToTop() {
    this.scroller.scrollToAnchor('hero');
  }
}
