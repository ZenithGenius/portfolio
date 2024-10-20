import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'CIcon',
  templateUrl: './c-icon.svg',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CIconComponent {}
