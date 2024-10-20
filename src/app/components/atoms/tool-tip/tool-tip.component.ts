import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-tool-tip',
  template: `
    <div
      class="custom-tooltip chip-style absolute w-fit px-2 py-1 hidden invisible z-[60] pointer-events-none"
      [style.left.px]="x()"
      [style.top.px]="y()"
    >
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolTipComponent {
  x = input<number>(0);
  y = input<number>(0);
}
