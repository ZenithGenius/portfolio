import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'project-card-body',
  template: `
    <div class="flex-pr">
      <div class="flex justify-between w-full mb-5 gap-x-1">
        <h3
          class="project-title w-auto"
          aria-roledescription="Project card header"
          aria-describedby="project-title"
          aria-label="Project Name."
        >
          <a [href]="PROJECT_LINK" target="_blank" role="link" class="w-full h-auto">
            {{ PROJECT_NAME }}
          </a>
        </h3>

        <a
          class="w-auto deploy"
          [href]="PROJECT_LINK"
          target="_blank"
          role="link"
          aria-label="Link to the project repository on github."
        >
          {{ TEXT_ANCHOR }}
          <svg
            aria-hidden="true"
            role="img"
            width="2em"
            height="2em"
            color="black"
            stroke-linejoin="round"
            stroke-linecap="round"
            viewBox="0 0 24 24"
            stroke-width="2"
            fill="none"
            stroke="currentColor"
          >
            <line y2="12" x2="19" y1="12" x1="5"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>

      <p
        class="details"
        role="contentinfo"
        aria-roledescription="More information."
        aria-label="Project description."
      >
        {{ PROJECT_DESCRIPTION }}
      </p>
    </div>
  `,
  styleUrls: ['./project-card-body.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardBodyComponent  {
  @Input({ required: true }) public PROJECT_NAME = '';
  @Input({ required: true }) public TEXT_ANCHOR = '';
  @Input({ required: true }) public PROJECT_LINK = '';
  @Input({ required: true }) public PROJECT_DESCRIPTION = '';


}
