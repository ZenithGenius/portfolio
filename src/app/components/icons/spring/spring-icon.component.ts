import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'SpringIcon',
  templateUrl: './spring-icon.svg',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpringIconComponent {}
