import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'DownloadIcon',
  templateUrl: './download-icon.svg',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DownloadIconComponent {}
