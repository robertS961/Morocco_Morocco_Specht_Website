import { Dialog } from '@angular/cdk/dialog';
import { OnInit } from '@angular/core';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent implements OnInit {
  title = 'ReactiveForms';
  reactiveForm!: FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstName:  new FormControl(null, Validators.required),
      lastName:  new FormControl(null, Validators.required),
      phone:  new FormControl(null, Validators.required),
      email:  new FormControl(null, [Validators.required, Validators.email]),
      description:  new FormControl(null),

    });
  }
  onSubmit(){

  }

}
