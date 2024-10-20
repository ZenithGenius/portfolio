import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'LogoIcon',
  template: `
    <span class="logo">
      <img
        src="../../../assets/utils/logoWhite.png"
        alt="Benny Joumessi Jason logo"
        width="90px"
        decoding="async"
        loading="eager"
      />
    </span>
  `,
  styles: `
  .logo {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex: 1 1;

    img {
      transform: rotate3d(0, 1, 0, 18deg);
      transform-style: preserve-3d;
      padding-block-end: 2px;
      aspect-ratio: 3/2.5;
    }
  }
  @media only screen and (min-width: 700px) {
    .logo {
      position: sticky;
    }
  }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoIconComponent {}
