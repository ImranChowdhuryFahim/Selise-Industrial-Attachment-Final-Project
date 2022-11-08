import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCartComponent } from './my-cart.component';
import { CardModule } from '../card/card.module';



@NgModule({
  declarations: [
    MyCartComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ],
})
export class MyCartModule { }
