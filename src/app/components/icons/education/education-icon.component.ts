import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'EducationIcon',
  templateUrl: './education-icon.svg',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationIconComponent {}
