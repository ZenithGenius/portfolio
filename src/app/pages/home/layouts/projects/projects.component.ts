import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type Type } from '@angular/core';
import { AngularIconComponent } from '@app/components/icons/angular/angular-icon.component';
import { Css3IconComponent } from '@app/components/icons/css3/css3-icon.component';
import { ReactIconComponent } from '@app/components/icons/react/react-icon.component';
import { SassIconComponent } from '@app/components/icons/scss/sass-icon.component';
import { SpringIconComponent } from '@app/components/icons/spring/spring-icon.component';
import { PythonIconComponent } from '@app/components/icons/python/python-icon.component';
import { TailwindIconComponent } from '@app/components/icons/tailwind-icon.component';
import type { MapIconComponents } from '@app/models/mapIconComponent';
import { TitleComponent } from '@atoms/title/title.component';
import { PROJECTS_V2 } from '@constants/appConst';
import { ProjectArticleComponent } from '@organism/project-article/project-article.component';
import { JavaIconComponent } from '@app/components/icons/java/java-icon.component';
import { HtmlIconComponent } from '@app/components/icons/html/html-icon.component';
import { CIconComponent } from '@app/components/icons/c/c-icon.component';
import { JsIconComponent } from '@app/components/icons/js/js-icon.component';
import { DartIconComponent } from '@app/components/icons/dart/dart-icon.component';
import { FlutterIconComponent } from '@app/components/icons/flutter/flutter-icon.component';

@Component({
  standalone: true,
  selector: 'projects-layout',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    TitleComponent,
    ProjectArticleComponent,
    ReactIconComponent,
    SassIconComponent,
    SpringIconComponent,
    Css3IconComponent,
    AngularIconComponent,
    TailwindIconComponent,
    PythonIconComponent,
    JavaIconComponent,
    CIconComponent,
    JsIconComponent,
    HtmlIconComponent,
    DartIconComponent,
    FlutterIconComponent,
  ],
})
export class ProjectsLayout {
  protected readonly PROJECTS = PROJECTS_V2;
  protected readonly titleID: string = 'home-projects-tt';
  /*If you need to add more icons, you must create the component and add it to this object*/
  private readonly iconComponents: MapIconComponents = {
    react: ReactIconComponent,
    sass: SassIconComponent,
    angular: AngularIconComponent,
    css3: Css3IconComponent,
    tailwind: TailwindIconComponent,
    spring: SpringIconComponent,
    python: PythonIconComponent,
    java: JavaIconComponent,
    C: CIconComponent,
    html: HtmlIconComponent,
    js: JsIconComponent,
    dart: DartIconComponent,
    flutter: FlutterIconComponent,
  };

  protected getIconComponent(icon: string): Type<unknown> {
    return this.iconComponents[icon] || null;
  }
}
