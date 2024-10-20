import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'plus-number',
  template: `
    <div
      class="highlight-text text-[5rem] text-center bg-clip-text text-transparent"
    >
      <span class="pus-icon">+</span>{{ number() }}
    </div>
  `,
  styles: [
    `
      .pus-icon {
        font-size: 3rem;
        line-height: 8rem;
        vertical-align: bottom;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlusNumberComponent {
  public number = input.required<string>();
}
