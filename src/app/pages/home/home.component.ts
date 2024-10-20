import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroLayout } from './layouts/hero/hero.component';
import { ProjectsLayout } from './layouts/projects/projects.component';
import { BentoAboutLayout } from '@app/pages/home/layouts/bento-about/bento-about.component';
import { ContactLayout } from '@app/pages/home/layouts/contact/contact.component';
import { StudiesLayout } from '@app/pages/home/layouts/studies/studies.component';

@Component({
  selector: 'home-page',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeroLayout,
    ProjectsLayout,
    BentoAboutLayout,
    ContactLayout,
    StudiesLayout,
  ],
})
export class HomePage {}

export default HomePage;
