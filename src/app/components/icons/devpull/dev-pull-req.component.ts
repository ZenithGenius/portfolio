import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'DevPullRequestIcon',
  templateUrl: './dev-pull-icon.svg',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevPullRequestIconComponent {}
