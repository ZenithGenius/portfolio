import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BentoItemComponent } from '@atoms/bento-item/bento-item.component';
import { ABOUT_USER } from '@constants/userConst';

@Component({
  standalone: true,
  selector: 'bento-item-whoiam',
  templateUrl: './bento-item-whoiam.component.html',
  styleUrls: ['./bento-item-whoiam.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BentoItemComponent],
})
export class BentoItemWhoiamComponent {
  protected readonly DESCRIPTION = ABOUT_USER.whoIam;
}
