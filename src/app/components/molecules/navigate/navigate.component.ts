import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLinkComponent } from '@atoms/router-link/router-link.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLinkComponent],
  selector: 'navigate',
  templateUrl: './navigate.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigateComponent {
  public path = input<string>('');
  public fragment = input<string>('');
  public classNames = input<string>('');
}
