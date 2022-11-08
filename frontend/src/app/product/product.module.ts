import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    CreateProductComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class ProductModule { }
