import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SpaceSvgComponent } from '@app/components/legacy/spaceSvg/spaceSvg.component';
import { TitleComponent } from '@app/components/atoms/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent, SpaceSvgComponent],
  selector: 'about-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutIntroLayoutComponent {
  protected INTRODUCTION = {PARAGRAPH:""};
  protected titleID = 'gc39cb09';
}
