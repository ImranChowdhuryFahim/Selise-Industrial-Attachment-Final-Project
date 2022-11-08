import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardDefaultComponent } from './dashboard/dashboard-default/dashboard-default.component';
import { MyCartDefaultComponent } from './my-cart/my-cart-default/my-cart-default.component';
import { ProductDefaultComponent } from './product/product-default/product-default.component';

const routes: Routes = [
  { path:'dashboard', component:DashboardDefaultComponent },
  { path:'product', component:ProductDefaultComponent },
  { path:'my-cart', component:MyCartDefaultComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
