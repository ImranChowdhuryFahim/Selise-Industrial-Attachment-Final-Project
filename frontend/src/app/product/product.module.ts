import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { RouterModule } from '@angular/router';
import { DataTableModule } from '../data-table/data-table.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    CreateProductComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DataTableModule,
    MatButtonModule
  ],
})
export class ProductModule { }
