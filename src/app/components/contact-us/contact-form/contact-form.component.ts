import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { phoneNumberValidator } from '../../../validators/phone.validator';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  contactForm = this.fb.group({
    fullName: [null],
    email: [null, [ Validators.email]],
    phone: [null, [phoneNumberValidator ]]
  });

  constructor(private fb: FormBuilder) {}
  
  onSubmit() {
    if(this.contactForm.valid)
    alert('Thanks!');
    this.contactForm.reset();  
  }
}
