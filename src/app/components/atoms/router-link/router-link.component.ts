import { NgClass, ViewportScroller } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'router-link',
  template: ` <a
    [ngClass]="classNames()"
    [attr.aria-hidden]="true"
    (click)="navigate()"
    role="link"
    class="relative group cursor-pointer outline-none focus:outline-none focus-within:outline-none"
  >
    <ng-content></ng-content>
  </a>`,
  styleUrl: './router-link.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, RouterModule],
})
export class RouterLinkComponent {
  public path = input<string>();
  public fragment = input<string>('');
  public classNames = input<string>('');

  private readonly router: Router = inject(Router);
  private readonly viewportScroller = inject(ViewportScroller);

  protected navigate() {
    //const usePath = this.path() === '/' || this.path() === '' ? [] : [this.path()];

    this.viewportScroller.scrollToAnchor(this.fragment());
  }
}
