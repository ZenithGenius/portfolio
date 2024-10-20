import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'JsIcon',
  templateUrl: './js-icon.svg',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JsIconComponent {}
