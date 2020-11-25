import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  contactForm = this.fb.group({
    fullName: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    phone: [null, [Validators.required,
      Validators.pattern('/^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$/')] ],
  });

  constructor(private fb: FormBuilder) {}
  
  onSubmit() {
    if(this.contactForm.valid)
    alert('Thanks!');
  }
}
