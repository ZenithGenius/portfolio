import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'LittlePlantIcon',
  templateUrl: './litle-plant-icon.svg',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LittlePlantIconComponent {}
