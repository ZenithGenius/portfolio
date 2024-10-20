import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'AngularIcon',
  templateUrl: './angular-icon.svg',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularIconComponent {}
