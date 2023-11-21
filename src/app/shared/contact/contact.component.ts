import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private emailService: EmailService
    ) { }

  contactForm!: UntypedFormGroup;
  @ViewChild('formStatus') formStatus: any; 
  
  ngOnInit() {
    this.contactForm = new UntypedFormGroup({
      nameValue: new UntypedFormControl("", Validators.required),
      emailValue: new UntypedFormControl("", [Validators.required, Validators.email]),
      messageValue: new UntypedFormControl("", Validators.required)
    }, { updateOn: 'change' });
  }

  submitForm() {
    debugger;
    this.emailService.sendEmail(this.contactForm)
    .subscribe({
      next: (response) => {
        console.log(response)
        debugger;
        this.formStatus.innerHTML = 'Thanks for your submission!';
      },
      error: (error) => {
        // Handle error
        console.log(error)
        this.formStatus.innerHTML = 'There was an error submitting the form.';
      }
    });
  }
}