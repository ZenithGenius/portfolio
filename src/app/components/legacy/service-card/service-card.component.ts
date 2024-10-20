import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  type ElementRef,
  Input,
  type OnInit,
  ViewChild,
  afterNextRender,
} from '@angular/core';
import VanillaTilt from 'vanilla-tilt';

@Component({
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  selector: 'service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceCardComponent implements OnInit {
  @ViewChild('serviceCard', { static: true }) serviceCardRef!: ElementRef;
  @Input({ required: true }) public icon = '';
  @Input({ required: true }) public title = '';
  @Input({ required: true }) public index = 0;

  ngOnInit(): void {
    afterNextRender(() => {
      const tiltContainer = this.serviceCardRef.nativeElement;

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
    });
  }

  protected get isMobile(): boolean {
    return window.innerWidth < 768;
  }
}
