import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLinkWithHref],
  selector: 'project-card-header',
  template: `
    <div class="rounded-lg container-project">
      <a href="{{ DEPLOY }}" class="w-full h-auto" target="_blank">
        <img
          [ngSrc]="IMG"
          fill
          alt="Project image."
          role="img"
          itemprop="image"
          aria-label="Project sample image."
          loading="lazy"
        />
      </a>
    </div>
  `,
  styles: [
    `
      .container-project {
        position: relative;
        overflow: hidden;
        width: 95%;
        margin: 12px;
        border-radius: 1.2rem;
        aspect-ratio: 14/8.5;
      }
      .container-project img {
        transition-property: transform;
        transition-duration: 0.3s;
        transition-timing-function: ease;
        cursor: pointer;
      }
      .container-project:hover img {
        transform: scale(1.1);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardHeaderComponent {
  @Input({ required: true }) public IMG = '';
  @Input({ required: true }) public DEPLOY = false;
}
