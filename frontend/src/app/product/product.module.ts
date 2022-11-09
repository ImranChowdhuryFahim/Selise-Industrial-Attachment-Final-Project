import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { RouterModule,Routes } from '@angular/router';
import { DataTableModule } from '../data-table/data-table.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';




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
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatIconModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    HttpClientModule,
  ],
  providers:[
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBar,
  ]
})
export class ProductModule { }
