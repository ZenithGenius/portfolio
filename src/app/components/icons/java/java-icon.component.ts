import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'JavaIcon',
  templateUrl: './java-icon.svg',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JavaIconComponent {}
