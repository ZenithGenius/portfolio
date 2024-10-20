import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutIntroLayoutComponent } from '@app/components/legacy/introduction/introduction.component';
import { StudiesLayout } from '@app/pages/home/layouts/studies/studies.component';

@Component({
  standalone: true,
  selector: 'page-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, AboutIntroLayoutComponent, StudiesLayout],
})
export class AboutPageComponent {}
