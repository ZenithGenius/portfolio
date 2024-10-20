import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkillComponent } from '@app/components/legacy/skill/skill.component';
import { TECHNOLOGIES } from 'src/constants/technologiesConst';

@Component({
  standalone: true,
  imports: [CommonModule, SkillComponent],
  selector: 'skills-group',
  templateUrl: './skills-group.component.html',
  styleUrls: ['./skills-group.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsGroupComponent {
  protected TECHNOLOGIES = TECHNOLOGIES;
  protected aosNum = 1000;

  protected trackByFn(index: number, data: { ID: string }): number | string {
    return data.ID;
  }
}
