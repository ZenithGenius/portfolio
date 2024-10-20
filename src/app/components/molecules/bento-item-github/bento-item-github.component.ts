import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BentoItemComponent } from '@atoms/bento-item/bento-item.component';
import { USER } from '@constants/userConst';

@Component({
  standalone: true,
  selector: 'bento-item-github',
  templateUrl: './bento-item-github.component.html',
  styleUrls: ['./bento-item-github.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BentoItemComponent],
})
export class BentoItemGithubComponent {
  protected readonly GITHUB = USER.gitHub;
}
