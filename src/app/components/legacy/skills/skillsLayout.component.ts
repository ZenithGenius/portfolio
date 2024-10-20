import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkillsGroupComponent } from '../skills-group/skills-group.component';
import { TitleComponent } from '@app/components/atoms/title/title.component';

@Component({
  standalone: true,
  imports: [SkillsGroupComponent, TitleComponent],
  selector: 'skills-layout',
  templateUrl: './skillsLayout.component.html',
  styleUrls: ['./skillsLayout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsLayoutComponent  {
  protected readonly SKILLS = {TITLE: ["", "", ""], CLARIFICATION: ""};
  protected readonly titleID = 'b11d-4fa6';
}
