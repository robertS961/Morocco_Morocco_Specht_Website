import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PhonePopUpComponent } from './components/phone-pop-up/phone-pop-up.component';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogModule
} from '@angular/material/dialog';

import { RouterModule, provideRouter } from '@angular/router';


import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HomeComponent } from './components/home/home.component';
import { TheFirmComponent } from './components/the-firm/the-firm.component';
import { PracticeAreasComponent } from './components/practice-areas/practice-areas.component';
import { LocationsComponent } from './components/locations/locations.component';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PhonePopUpComponent,
    ContactFormComponent,
    HomeComponent,
    TheFirmComponent,
    PracticeAreasComponent,
    LocationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    RouterModule,

  ],
  providers: [
    MatSnackBar,
    MatDialog,
    ContactFormComponent,
    PhonePopUpComponent,
    provideRouter([]),
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
