import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'ReactIcon',
  templateUrl: './react-icon.svg',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactIconComponent {}
