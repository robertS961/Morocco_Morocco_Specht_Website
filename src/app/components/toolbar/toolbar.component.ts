import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  constructor(private _snackBar: MatSnackBar) {}
  officeNumber = "Office Phone: 412-373-0639"
  openSnackBar() {
    this._snackBar.open(this.officeNumber, 'close', {
      panelClass:['awesome-snackbar'],
      verticalPosition: 'top'
    });
  }
}
