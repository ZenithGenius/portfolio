import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BentoItemDecoComponent } from '@molecules/bento-center-deco/bento-center-deco.component';
import { BentoItemExpirenceComponent } from '@molecules/bento-item-expirence/bento-item-expirence.component';
import { BentoItemGithubComponent } from '@molecules/bento-item-github/bento-item-github.component';
import { BentoItemProfileComponent } from '@molecules/bento-item-profile/bento-item-profile.component';
import { BentoItemStackComponent } from '@molecules/bento-item-stack/bento-item-stack.component';
import { BentoItemWhoiamComponent } from '@molecules/bento-item-whoiam/bento-item-whoiam.component';
import { BentoItemExperticeComponent } from '@molecules/bento-item-expertice/bento-item-expertice.component';
import { BentoItemContactComponent } from '@molecules/bento-item-contact/bento-item-contact.component';

@Component({
  standalone: true,
  selector: 'bento-about',
  templateUrl: './bento.component.html',
  styleUrl: './bento.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    BentoItemExperticeComponent,
    BentoItemExpirenceComponent,
    BentoItemProfileComponent,
    BentoItemDecoComponent,
    BentoItemWhoiamComponent,
    BentoItemGithubComponent,
    BentoItemStackComponent,
    BentoItemContactComponent,
  ],
})
export class BentoComponent {
  protected readonly titleID: string = 'bento-about-tt';
}
