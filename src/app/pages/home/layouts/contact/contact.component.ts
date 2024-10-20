import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
} from '@angular/core';
import { type Observable, catchError } from 'rxjs';
import type { ContactState } from '@app/models/contactState.model';
import { ToastService } from '@app/lib/toast/Toast.service';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@app/components/atoms/title/title.component';
import { LiquidBannerComponent } from '@app/components/atoms/liquid-banner/liquid-banner.component';
import { ContactFormComponent } from '@app/components/organism/contact-form/contact-form.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  standalone: true,
  selector: 'contact-layout',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    TitleComponent,
    LiquidBannerComponent,
    ContactFormComponent,
  ],
})
export class ContactLayout {
  private readonly toast = inject(ToastService);
  private http = inject(HttpClient);
  private destroy = inject(DestroyRef);
  protected readonly titleID: string = 'e913163167c3';

  protected handleFormSubmit(event: ContactState) {
    this.toast.info('Sending...', 'We are processing your request');

    const contactForm = new FormData();
    contactForm.append('name', event.name);
    contactForm.append('email', event.email);
    contactForm.append('message', event.message);

    this.sendForm(contactForm)
      .pipe(
        takeUntilDestroyed(this.destroy),
        catchError((error) => {
          this.toast.error(
            'Error',
            'An unexpected error has occurred with the server'
          );
          console.log('error:', error);
          return error;
        })
      )
      .subscribe((_) => {
        this.toast.success(
          'Success',
          'Your message has been sent successfully'
        );
      });
  }

  private sendForm(data: FormData): Observable<unknown> {
    return this.http.post('https://formspree.io/f/xdorrewr', data, {
      headers: {
        Accept: 'application/json',
      },
    });
  }
}
