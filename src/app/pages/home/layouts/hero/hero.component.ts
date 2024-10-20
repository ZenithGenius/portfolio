import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroSocialBarComponent } from '@organism/hero-social-bar/hero-social-bar.component';
import { ArrowDownComponent } from '@atoms/arrow-down/arrow-down.component';
import { USER } from '@constants/userConst';

@Component({
  standalone: true,
  selector: 'hero-layout',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeroSocialBarComponent, ArrowDownComponent],
})
export class HeroLayout {
  protected readonly USER = USER;
}
