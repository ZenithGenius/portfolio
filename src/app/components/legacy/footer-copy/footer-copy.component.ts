import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'footer-copy',
  template: `
    <div class="footer-copy">
      <small class="text-xs">
        <p>&copy; 2024 <b>Developed by Benny Joumessi Jason</b>.</p>
      </small>
    </div>
  `,
  styles: [
    `
      .footer-copy {
        text-align: center;
        font-weight: 500;
        display: grid;
        grid-column: span 3 / span 3;
        user-select: none;
        margin-block-end: 0px;
      }

      @media screen and (min-width: 1580px) {
        .footer-copy small {
          font-size: 1.3rem;
          line-height: 1rem;
          padding-block-end: 0.6rem;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterCopyComponent {

}
