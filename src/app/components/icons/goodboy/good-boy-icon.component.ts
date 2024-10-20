import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'GoodBoyIcon',
  templateUrl: './goodboy-icon.svg',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoodBoyIconComponent {}
