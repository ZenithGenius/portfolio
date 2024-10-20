import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'bento-item',
  template: `
    <div class="bento-item" [ngClass]="className()">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .bento-item {
        height: 100%;
        width: 100%;
        position: relative;
        box-sizing: border-box;
        background: #1c0e3b4a;
        border-radius: 10px;
        backdrop-filter: blur(35px);
        outline: 1px solid rgb(168 128 255 / 33%);
        box-shadow: inset -2px -4px 15px 6px rgb(24 1 62 / 16%),
          0 4px 6px rgba(0, 0, 0, 0.1);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BentoItemComponent {
  public className = input<string>('');
}
