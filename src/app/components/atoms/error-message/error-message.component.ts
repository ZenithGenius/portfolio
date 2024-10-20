import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ErrorIconComponent } from '@app/components/icons/error/error-icon.component';

@Component({
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ErrorIconComponent],
  selector: 'error-message',
  template: `
    <span class=" flex mt-1 text-xs select-none" [ngClass]="errorClass()">
      <ErrorIcon />
      {{ errorMessage() }}
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorMessageComponent {
  public errorMessage = input.required<string>();
  public errorClass = input<string>('');
}
