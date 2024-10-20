import { ChangeDetectionStrategy, Component } from '@angular/core';
import { USER } from 'src/constants/userConst';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'hero-text',
  templateUrl: './herotext.component.html',
  styleUrls: ['./herotext.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroTextComponent  {
  protected readonly USER = USER;
  protected readonly HERO = { TITLE: ["", ""], PARAGRAPH: "", RESUME: "", CONTACT: "", SUBTITLE: ""};

}
