import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'arrow-down',
  templateUrl: './arrow-down.svg',
  styleUrl: './arrow-down.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArrowDownComponent {}
