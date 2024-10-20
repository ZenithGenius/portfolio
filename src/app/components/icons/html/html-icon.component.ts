import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'HtmlIcon',
  templateUrl: './html-icon.svg',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtmlIconComponent {}
