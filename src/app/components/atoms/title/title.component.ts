import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'app-title',
  template: `
    <h2
      [id]="titleID()"
      [ngClass]="className()"
      class="title-section bg-ml-text-white bg-clip-text text-transparent"
      [title]="name()"
    >
      <ng-content></ng-content>
    </h2>
    <h3 class="sub-title">{{ sub() }}</h3>
  `,
  styleUrls: ['./title.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {
  public name = input.required<string>();
  public titleID = input.required<string>();
  public sub = input<string>('');
  public className = input<string>('');
}
