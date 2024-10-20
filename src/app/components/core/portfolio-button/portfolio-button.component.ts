import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { MoveBackgroundDirective } from '@app/lib/directives/MoveBackground.directive';

type SizeButtonType = 'DEFAULT' | 'full' | 'lg' | 'md' | 'sm';

@Component({
  standalone: true,
  selector: 'portfolio-button',
  imports: [MoveBackgroundDirective],
  template: `
    <button
      useMoveBackground
      [class]="getClasses()"
      (click)="clicked.emit($event)"
    >
      <div
        class="z-20 relative flex justify-center items-center gap-x-3 w-full h-full"
      >
        <ng-content></ng-content>
      </div>
      <div class="pfl-btn-pattern">
        <div class="pfl-btn-target pfl-btn-bg"></div>
      </div>
    </button>
  `,
  styleUrl: './portfolio-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioButtonComponent {
  public size = input<SizeButtonType>('DEFAULT');
  public clicked = output<MouseEvent>();

  public getClasses() {
    const btnStyle =
      'flex justify-center items-center w-fit no-outline truncate opacity-90 disabled:opacity-60 disabled:cursor-default rounded-2xl select-none text-base [&:not(:disabled)]:hover:opacity-100 transition-all ease-in portfolio-button';

    let sizeStyle = 'px-9 py-2';
    const size = this.size();
    if (size === 'full') {
      sizeStyle = 'px-5 py-2 w-full max-w-none';
    } else if (size === 'lg') {
      sizeStyle = 'px-[4.25rem] py-2';
    } else if (size === 'md') {
      sizeStyle = 'px-[3.25rem] py-2';
    } else if (size === 'sm') {
      sizeStyle = 'px-5 py-2';
    }

    return `${btnStyle} ${sizeStyle}`;
  }
}
