import {
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';
import { TagComponent } from '@app/components/legacy/tag/tag.component';

@Component({
  standalone: true,
  imports: [TagComponent],
  selector: 'project-card-footer',
  template: `
    <footer class="types m-1" role="complementary">
      @for(TAG of TAGS(); track TAG.ID){ @if (TAG.ID !== 0) {
      <tag
        [tag]="TAG.NAME"
        [background]="TAG.COLOR[0]"
        [color]="TAG.COLOR[1]"
      ></tag>
      } }
    </footer>
  `,
  styles: [
    `
      .types {
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        overflow: hidden;
        row-gap: 1.2rem;
        column-gap: 0.7rem;
        justify-content: flex-start;
        margin-block-start: 1rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardFooterComponent {
  public TAGS = input([{ ID: 0, NAME: '', COLOR: [] }]);
}
