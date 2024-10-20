import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'LinkedinIcon',
  templateUrl: './linkedin-icon.svg',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkedinIconComponent {}
