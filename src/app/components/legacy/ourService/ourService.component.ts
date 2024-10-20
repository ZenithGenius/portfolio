import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ServiceCardComponent } from '@app/components/legacy/service-card/service-card.component';
import { TitleComponent } from '@app/components/atoms/title/title.component';
import { SERVICES } from 'src/constants/appConst';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent, ServiceCardComponent],
  selector: 'service-layout',
  templateUrl: './ourService.component.html',
  styleUrls: ['./ourService.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceLayoutComponent {
  protected readonly SERVICES = SERVICES;
  protected readonly titleID: string = 'df4f9aa1';


  protected trackByFn(_: number, data: { ID: string }): number | string {
    return data.ID;
  }
}
