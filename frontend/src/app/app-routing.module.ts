import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path:'dashboard', component:DashboardComponent },
  { path:'product', component:ProductComponent , children: [
    { path: '', component: ProductListComponent },
    { path:'create', component: CreateProductComponent },
    { path:'edit/:productId', component: CreateProductComponent }
  ]},
  { path:'my-cart', component:MyCartComponent },
  { path: '**', redirectTo: 'dashboard'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
