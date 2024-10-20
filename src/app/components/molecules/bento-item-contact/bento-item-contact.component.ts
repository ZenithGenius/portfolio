import {
  ChangeDetectionStrategy,
  Component,
  type Renderer2,
  RendererFactory2,
  inject,
} from '@angular/core';
import { BentoItemComponent } from '@atoms/bento-item/bento-item.component';
import { StartIconComponent } from '@app/components/icons/star-icon.component';
import { EmailIconComponent } from '@app/components/icons/email/email-icon.component';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  standalone: true,
  selector: 'bento-item-contact',
  templateUrl: './bento-item-contact.component.html',
  styleUrls: ['./bento-item-contact.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BentoItemComponent, StartIconComponent, EmailIconComponent],
})
export class BentoItemContactComponent {
  private router: Router = inject(Router);
  private readonly renderer: Renderer2 = inject(
    RendererFactory2,
  ).createRenderer(null, null);

  private _document: Document = inject(DOCUMENT);

  scrollToForm() {
    this.router.navigate([], { replaceUrl: true }).then(() => {
      const element = this._document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        element.addEventListener(
          'animationend',
          () => {
            const inputElement = this._document.getElementById('contact-name');
            if (inputElement) {
              this.renderer.selectRootElement(inputElement).focus();
            }
          },
          { once: true },
        );
      }
    });
  }
}
