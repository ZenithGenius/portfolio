import { isPlatformBrowser } from '@angular/common';
import {
  type AfterViewInit,
  Directive,
  ElementRef,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import Atropos from 'atropos';

@Directive({
  selector: '[useAtropos]',
  standalone: true,
})
export class AtroposDirective implements AfterViewInit {
  private readonly platform = inject(PLATFORM_ID);
  private readonly el = inject(ElementRef);
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platform)) {
      Atropos({
        el: this.el.nativeElement,
        alwaysActive: true,
        activeOffset: 40,
        rotateXMax: 15,
        rotateYMax: 15,
        shadowOffset: 40,
        duration: 300,
      });
    }
  }
}
