import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class InternalService {

  constructor(private _snackBar: MatSnackBar) {
   }

   openSnackBar(message:string,durationInSeconds:number,color:string) {
    this._snackBar.open(message,'' ,{
      duration: durationInSeconds * 1000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: [color]
    });
  }
}
