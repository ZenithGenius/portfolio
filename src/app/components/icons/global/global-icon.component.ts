import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'GlobalIcon',
  templateUrl: './global-icon.svg',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalIconComponent {}
