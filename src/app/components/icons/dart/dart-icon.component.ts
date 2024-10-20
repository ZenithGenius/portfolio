import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'DartIcon',
  templateUrl: './dart-icon.svg',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DartIconComponent {}
