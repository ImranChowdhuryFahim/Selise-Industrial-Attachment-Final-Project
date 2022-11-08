import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCartDefaultComponent } from './my-cart-default/my-cart-default.component';



@NgModule({
  declarations: [
    MyCartDefaultComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyCartDefaultComponent
  ]
})
export class MyCartModule { }
