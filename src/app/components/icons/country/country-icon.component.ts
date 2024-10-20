import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'CountryIcon',
  templateUrl: './country-icon.svg',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryIconComponent {}
