import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'FlutterIcon',
  templateUrl: './flutter-icon.svg',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlutterIconComponent {}
