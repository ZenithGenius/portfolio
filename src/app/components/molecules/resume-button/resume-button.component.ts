import { ChangeDetectionStrategy, Component } from '@angular/core';
import { USER } from '@constants/userConst';

@Component({
  standalone: true,
  selector: 'header-resume-button',
  templateUrl: './resume-button.component.html',
  styleUrls: ['./resume-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeButtonComponent {
  protected readonly USER = USER;
}
