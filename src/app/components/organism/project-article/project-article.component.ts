import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProjectArticleImgComponent } from '@app/components/molecules/project-article-img/project-article-img.component';
import type { Project } from '@app/models/projects';

@Component({
  standalone: true,
  selector: 'project-article',
  templateUrl: './project-article.component.html',
  styleUrls: ['./project-article.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProjectArticleImgComponent],
})
export class ProjectArticleComponent {
  public PROJECT = input.required<Project>();
}
