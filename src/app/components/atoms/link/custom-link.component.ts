import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'custom-link',
  templateUrl: './custom-link.component.html',
  styleUrl: './custom-link.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomLinkComponent {
  public path = input.required<string>();
  public rel = input<string>('');
  public target = input<string>('_blank');
  public classNames = input<string>('');
}
