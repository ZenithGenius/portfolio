import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'SassIcon',
  templateUrl: './scss-icon.svg',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SassIconComponent {}
