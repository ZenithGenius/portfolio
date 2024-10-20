import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'AstronautIcon',
  templateUrl: './astronaut-icon.svg',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AstronautIconComponent {}
