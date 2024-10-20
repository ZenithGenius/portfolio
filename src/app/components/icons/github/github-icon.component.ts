import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'GithubIcon',
  templateUrl: './github-icon.svg',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GithubIconComponent {}
