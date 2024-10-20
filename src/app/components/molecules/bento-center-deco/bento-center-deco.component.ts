import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BentoItemComponent } from '@atoms/bento-item/bento-item.component';
import { ReverseLittlePlantIconComponent } from '@app/components/icons/rightlittleplant/reverse-little-plant-icon.component';
import { DevProductivityIconComponent } from '@app/components/icons/devproductivity/dev-productivity.component';
import { DevPullRequestIconComponent } from '@app/components/icons/devpull/dev-pull-req.component';
import { LogoIconComponent } from '@icons/logo-icon.component';
import { LittlePlantIconComponent } from '@app/components/icons/littleplant/little-plant-icon.component';

@Component({
  standalone: true,
  selector: 'bento-center-deco',
  templateUrl: './bento-center-deco.component.html',
  styleUrls: ['./bento-center-deco.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    BentoItemComponent,
    LittlePlantIconComponent,
    ReverseLittlePlantIconComponent,
    LogoIconComponent,
    DevProductivityIconComponent,
    DevPullRequestIconComponent,
  ],
})
export class BentoItemDecoComponent {}
