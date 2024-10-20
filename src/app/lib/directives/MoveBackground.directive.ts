import { isPlatformBrowser } from '@angular/common';
import {
  type AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  PLATFORM_ID,
  inject,
} from '@angular/core';

@Directive({
  selector: '[useMoveBackground]',
  standalone: true,
})
export class MoveBackgroundDirective implements AfterViewInit {
  private target: HTMLElement | null = null;
  private readonly platform = inject(PLATFORM_ID);
  private readonly el = inject(ElementRef);

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platform)) {
      this.target = this.el.nativeElement.querySelector('.pfl-btn-target');
    }
  }

  @HostListener('pointermove', ['$event'])
  onPointerMove(event: PointerEvent) {
    this.handleMove(event);
  }

  private handleMove(event: PointerEvent) {
    if (!this.target) return;

    const button = this.el.nativeElement;
    const halfWidth = button.offsetWidth / 2;
    const halfHeight = button.offsetHeight / 2;
    const x =
      -50 +
      (event.pageX - button.offsetLeft - halfWidth) / (button.offsetWidth / 15);
    const y =
      -10 +
      (event.pageY - button.offsetTop - halfHeight) /
        (button.offsetHeight / 15);

    this.target.style.setProperty('--x', `${x}px`);
    this.target.style.setProperty('--y', `${y}px`);
  }
}
