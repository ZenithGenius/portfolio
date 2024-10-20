import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'social-nav',
  templateUrl: './social-nav.component.html',
  styleUrls: ['./social-nav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialNavComponent  {
  protected SOCIAL_URLS = {linkedIn: "", gitHub: "", stackOverflow:""};
}
