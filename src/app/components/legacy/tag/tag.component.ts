import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  type ElementRef,
  Input,
  type OnInit,
  type Renderer2,
  RendererFactory2,
  ViewChild,
  inject,
} from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'tag',
  template: `<span
    #tagRef
    class="tag select-none"
    title="{{ tag }}"
    role="tab
  "
  >
  </span>`,
  styles: [
    `
      .tag {
        margin-block-start: 5px;
        margin-inline-end: 10px;
        margin-block-end: 10px;
        border-radius: 15px;
        padding-block: 6.5px;
        padding-inline: 13px;
        font-size: 0.75rem;
        font-weight: 500;
        user-select: none;
        text-align: center;
      }

      @media screen and (min-width: 1240px) {
        .tag {
          font-size: 0.9rem;
        }
      }

      @media screen and (min-width: 1780px) {
        .tag {
          font-size: 1.2rem;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagComponent implements OnInit {
  @Input({ required: true }) public tag = '';
  @Input({ required: true }) public background = '';
  @Input({ required: true }) public color = '';
  @ViewChild('tagRef', { static: true }) tagRef!: ElementRef;
  private readonly renderer: Renderer2 = inject(
    RendererFactory2,
  ).createRenderer(null, null);

  ngOnInit(): void {
    const tagSpan: HTMLElement = this.renderer.selectRootElement(
      this.tagRef.nativeElement,
    );
    this.renderer.setStyle(tagSpan, 'background', this.background);
    this.renderer.setStyle(tagSpan, 'color', this.color);
    tagSpan.innerText = this.tag;
  }
}
