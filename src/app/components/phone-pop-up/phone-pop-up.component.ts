import { Component, Injectable} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';

//oh my
@Component({
  selector: 'app-phone-pop-up',
  templateUrl: './phone-pop-up.component.html',
  styleUrls: ['./phone-pop-up.component.css'],
})
export class PhonePopUpComponent {
  constructor(public matDialog:MatDialog){} 

  openDialog(){
    this.matDialog.open(ContactFormComponent,{
      width: '450px',

    });
  }
}
