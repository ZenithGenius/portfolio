import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CustomLinkComponent } from '@app/components/atoms/link/custom-link.component';

@Component({
  standalone: true,
  imports: [NgClass, CustomLinkComponent],
  selector: 'social-button',
  template: `
    <custom-link
      [path]="socialUri()"
      [title]="title()"
      classNames="social-link"
    >
      <div
        class="text-center w-[30px] h-[30px] rounded-full icon"
        aria-hidden="true"
        role="img"
        [ngClass]="className()"
      >
        <ng-content></ng-content>
      </div>
    </custom-link>
  `,
  styleUrl: './social-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialButtonComponent {
  public socialUri = input.required<string>();
  public title = input.required<string>();
  public className = input<string>('');
}
