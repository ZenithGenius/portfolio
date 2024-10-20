import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BentoItemComponent } from '@app/components/atoms/bento-item/bento-item.component';
import { PulseElementComponent } from '@app/components/atoms/pulse-element/pulse-element.component';
import { RectangleProfileComponent } from '@app/components/atoms/rectangle-profile/rectangle-profile.component';
import { AstronautIconComponent } from '@app/components/icons/astronaut/astronaut-icon.component';
import { DownloadIconComponent } from '@app/components/icons/download/download-icon.component';
import { ABOUT_USER } from '@constants/userConst';

@Component({
  standalone: true,
  selector: 'bento-v2',
  templateUrl: './bento-v2.component.html',
  styleUrl: './bento-v2.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    BentoItemComponent,
    RectangleProfileComponent,
    PulseElementComponent,
    DownloadIconComponent,
    AstronautIconComponent,
  ],
})
export class BentoV2Component {
  protected readonly PROFILE = ABOUT_USER.profile;
}
