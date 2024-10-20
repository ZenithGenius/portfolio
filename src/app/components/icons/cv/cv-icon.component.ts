import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'CvIcon',
  template: `
    <span
      class="absolute top-[48%] left-[50%] -translate-x-2/4 -translate-y-2/4 text-xl text-nowrap"
      >CV</span
    >
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvIconComponent {}
