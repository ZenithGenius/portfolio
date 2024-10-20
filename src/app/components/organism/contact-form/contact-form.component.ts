import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  type OnDestroy,
  Output,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  type FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import type { ContactState } from '@app/models/contactState.model';
import { ErrorMessageComponent } from '@atoms/error-message/error-message.component';
import { InputFieldComponent } from '@atoms/input-field/input-field.component';
import { TextAreaFieldComponent } from '@atoms/text-area-field/text-area-field.component';

@Component({
  standalone: true,
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ErrorMessageComponent,
    ReactiveFormsModule,
    InputFieldComponent,
    TextAreaFieldComponent,
  ],
})
export class ContactFormComponent implements OnDestroy {
  @Output() public contactState = new EventEmitter<ContactState>();
  private formBuilder = inject(FormBuilder);
  protected contactForm = this.createContactForm();

  ngOnDestroy(): void {
    this.contactForm.reset();
  }

  private createContactForm(): FormGroup {
    return this.formBuilder.group({
      name: '',
      email: '',
      message: '',
    });
  }

  private get controls() {
    return this.contactForm.controls;
  }

  protected onSubmit() {
    const fullname = this.controls['name'].value;
    const email = this.controls['email'].value;
    const message = this.controls['message'].value;
    this.contactState.emit({
      name: fullname,
      email: email,
      message: message,
    } as ContactState);

    this.contactForm.reset();
  }
}
