import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectCardBodyComponent } from '../project-card-body/project-card-body.component';
import { ProjectCardHeaderComponent } from '@app/components/legacy/project-card-header/project-card-header.component';
import { ProjectCardFooterComponent } from '@app/components/legacy/project-card-footer/project-card-footer.component';

@Component({
  standalone: true,
  imports: [
    ProjectCardBodyComponent,
    RouterLink,
    ProjectCardHeaderComponent,
    ProjectCardFooterComponent,
  ],
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  @Input() public PROJECT = {};
  @Input() public num = 0;
  @Input() public textAnchor = '';

}
