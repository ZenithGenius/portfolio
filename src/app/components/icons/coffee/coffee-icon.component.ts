import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'CoffeeIcon',
  templateUrl: './coffee-icon.svg',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoffeeIconComponent {}
