import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCartComponent } from './my-cart.component';
import { CardModule } from '../card/card.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBar } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    MyCartComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    MatProgressBarModule
  ],
  providers:[
    MatSnackBar,
  ]
})
export class MyCartModule { }
