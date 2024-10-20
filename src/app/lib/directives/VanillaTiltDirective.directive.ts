import {
  type AfterViewInit,
  Directive,
  ElementRef,
  inject,
} from '@angular/core';
import VanillaTilt from 'vanilla-tilt';

@Directive({
  selector: '[useVanillaTilt]',
  standalone: true,
})
export class VanillaTiltDirective implements AfterViewInit {
  private el = inject(ElementRef);

  ngAfterViewInit() {
    const tiltContainer = this.el.nativeElement;
    if (!this.isMobile) {
      VanillaTilt.init(tiltContainer, {
        max: 20,
        scale: 1.1,
        speed: 250,
        perspective: 1000,
        transition: true,
        reset: true,
        gyroscope: true,
      });
    }
  }

  private get isMobile(): boolean {
    return window.innerWidth < 768;
  }
}
