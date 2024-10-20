import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactPageComponent } from './contact.component';
import { TitleComponent } from '../../atoms/title/title.component';
import { ContactRoutes } from './contact.routing';
import { LiquidBannerComponent } from '../../atoms/liquid-banner/liquid-banner.component';
import { ContactFormComponent } from '../../organism/contact-form/contact-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastComponent } from '../../organism/toast/toast.component';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutes,
    TitleComponent,
    NgOptimizedImage,
    LiquidBannerComponent,
    ContactFormComponent,
    HttpClientModule,
    ToastComponent,
  ],
  declarations: [ContactPageComponent],
  providers: [],
  exports: [ContactPageComponent],
  bootstrap: [ContactPageComponent],
})
export class ContactModule {}
