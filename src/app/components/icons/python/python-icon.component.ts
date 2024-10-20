import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'PythonIcon',
  templateUrl: './python-icon.svg',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PythonIconComponent {}
