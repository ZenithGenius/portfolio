import { ChangeDetectionStrategy, Component } from '@angular/core';

//
@Component({
  standalone: true,
  selector: 'DevProductivityIcon',
  templateUrl: './dev-productivity-icon.svg',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevProductivityIconComponent {}
