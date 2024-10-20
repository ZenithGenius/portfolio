import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  type OnDestroy,
  inject,
} from '@angular/core';
import { type Observable, Subject, catchError, takeUntil } from 'rxjs';
import type { ContactState } from '@app/models/contactState.model';
import { ToastService } from '@app/lib/toast/Toast.service';

@Component({
  selector: 'contact-page',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPageComponent implements OnDestroy {
  private readonly toast = inject(ToastService);
  private http = inject(HttpClient);
  private destroy$: Subject<void>;
  protected readonly titleID: string = 'e913163167c3';

  constructor() {
    this.destroy$ = new Subject<void>();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  protected handleFormSubmit(event: ContactState) {
    this.toast.info('Sending...', 'We are processing your request');

    const contactForm = new FormData();
    contactForm.append('name', event.name);
    contactForm.append('email', event.email);
    contactForm.append('message', event.message);

    this.sendForm(contactForm)
      .pipe(takeUntil(this.destroy$))
      .pipe(
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
