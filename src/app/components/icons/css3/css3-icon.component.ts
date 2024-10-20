import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'Css3Icon',
  templateUrl: './css3-icon.svg',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Css3IconComponent {}
