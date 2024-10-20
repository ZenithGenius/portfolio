import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TimelineComponent } from '@app/components/organism/timeline/timeline.component';
import { TitleComponent } from '@app/components/atoms/title/title.component';
import { ABOUT_USER } from '@constants/userConst';

@Component({
  standalone: true,
  selector: 'studies-layout',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TimelineComponent, TitleComponent],
})
export class StudiesLayout {
  protected STUDIES = ABOUT_USER.studies;
  protected titleID = 't01agf453';
}
