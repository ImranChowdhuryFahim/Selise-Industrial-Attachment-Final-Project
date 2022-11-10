import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class InternalService {

  constructor(private _snackBar: MatSnackBar,private dialog: MatDialog) {
   }

   openSnackBar(message:string,durationInSeconds:number,color:string) {
    this._snackBar.open(message,'' ,{
      duration: durationInSeconds * 1000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: [color]
    });
  }

  openDialog()
  {
    this.dialog.open(DialogComponent,{
      height: '80%',
      width: '60%'
  })
  }
}
