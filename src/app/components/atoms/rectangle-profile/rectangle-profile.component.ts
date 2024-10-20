import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'rectangle-profile',
  template: `<img
    class="photo"
    [src]="src()"
    [loading]="loading()"
    [decoding]="decoding()"
    width=" 135px"
    height="140px"
    [alt]="alt()"
  />`,
  styles: `  .photo {
    object-fit: cover;
    object-position: center;
    border-radius: 14px;
    height: 100%;
  }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RectangleProfileComponent {
  public src = input.required<string>();
  public loading = input<string>('lazy');
  public decoding = input<string>('async');
  public alt = input<string>('');
}
