import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDefaultComponent } from './product-default/product-default.component';



@NgModule({
  declarations: [
    ProductDefaultComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductDefaultComponent
  ]
})
export class ProductModule { }
