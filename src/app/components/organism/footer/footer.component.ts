import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LogoIconComponent } from '@icons/logo-icon.component';
import { CoffeeIconComponent } from '@app/components/icons/coffee/coffee-icon.component';
import { SocialButtonComponent } from '@molecules/social-button/social-button.component';
import { CvIconComponent } from '@app/components/icons/cv/cv-icon.component';
import { GmailIconComponent } from '@app/components/icons/gmail/gmail-icon.component';
import { LinkedinIconComponent } from '@app/components/icons/linkedin/linkedin-icon.component';
import { GithubIconComponent } from '@app/components/icons/github/github-icon.component';
import { RouterLinkComponent } from '@atoms/router-link/router-link.component';

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    LogoIconComponent,
    RouterLinkComponent,
    CoffeeIconComponent,
    SocialButtonComponent,
    CvIconComponent,
    GmailIconComponent,
    LinkedinIconComponent,
    GithubIconComponent,
  ],
})
export class FooterComponent {}
