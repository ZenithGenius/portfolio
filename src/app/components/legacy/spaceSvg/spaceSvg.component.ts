import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'spaceSvg',
  templateUrl: './spaceSvg.component.html',
  styleUrls: ['./spaceSvg.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpaceSvgComponent {

}
