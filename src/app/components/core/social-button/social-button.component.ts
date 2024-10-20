import { NgOptimizedImage, NgStyle } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

type IconType = string | 'github' | 'linkedin' | 'gmail' | 'cv';

@Component({
  standalone: true,
  selector: 'social-button',
  imports: [NgOptimizedImage, NgStyle],
  template: `
    <a
      [href]="to()"
      target="_blank"
      [rel]="isActiveRel()"
      [ngStyle]="{
        '--btn-icon': getImgIconUrl(),
      }"
      [title]="title()"
      class="flex relative w-[40px] aspect-square rounded-full border-none outline-none outline-0 social-button bg-no-repeat bg-cover "
    >
      <p class="visually-hidden" aria-hidden="true" role="contentinfo">
        Social media URL
      </p>
    </a>
  `,
  styleUrl: './social-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialButtonComponent {
  public to = input.required<string>();
  public rel = input<boolean>(true);
  public icon = input.required<IconType>();
  public title = input.required<string>();
  private imgIcon = computed(() => {
    const defaultIcon = {
      github: '/assets/icons/github-icon.png',
      linkedin: '/assets/icons/linkedin-icon.png',
      gmail: '/assets/icons/gmail-icon.png',
      cv: '/assets/icons/cv-icon.png',
    }[this.icon()];
    return defaultIcon ? defaultIcon : this.icon();
  });

  protected isActiveRel() {
    return this.rel() ? 'noopener noreferrer' : '';
  }

  protected getImgIcon(): string {
    return this.imgIcon();
  }
  protected getImgIconUrl(): string {
    const imgUrl = this.getImgIcon();
    if (imgUrl.includes('/') || imgUrl.includes('http')) {
      return `url(${imgUrl})`;
    }
    return imgUrl;
  }
}
