import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'ErrorIcon',
  template: `
    <div class="mr-2">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM9 15V13H11V15H9ZM9 5V11H11V5H9Z"
          fill="#D93025"
        />
      </svg>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorIconComponent {}
