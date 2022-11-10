import { Component, OnInit } from '@angular/core';
import { CartFull } from '../models/cart';
import { Cart } from '../models/cart-less';
import { Product } from '../models/product';
import { Response } from '../models/response';
import { BackendService } from '../service/backend.service';
import { InternalService } from '../service/internal.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {

  cartItems:CartFull[] = []
  isLoading:boolean = false

  constructor(private backendService:BackendService,private internalService:InternalService) { 
    this.isLoading = true;
    this.backendService.getCartItems().subscribe((res:Response)=>{
      if(res.isSuccessful)
      {
        this.isLoading = false;
        this.cartItems = res.cartItems as CartFull[];
      }
    })
  }

  ngOnInit(): void {
  }

  async editCart(res:(Cart|Product)[])
  {
    this.isLoading = true;

    
    const response:Response = await this.backendService.editCart(res)
    if(response.isSuccessful)
    {
      this.isLoading = false;
      this.internalService.openSnackBar(response.message,2,'blue-snackbar') 
    }
    else{
      this.isLoading = false;
      this.internalService.openSnackBar(response.message,2,'red-snackbar') 
    }
  }

  async deleteCart(res:(Cart|Product)[])
  {
    this.isLoading = true;

    
    const response:Response = await this.backendService.deleteCart(res)
    if(response.isSuccessful)
    {
      this.cartItems = response.cartItems as CartFull[]
      this.isLoading = false;
      this.internalService.openSnackBar(response.message,2,'blue-snackbar') 
    }
    else{
      this.isLoading = false;
      this.internalService.openSnackBar(response.message,2,'red-snackbar') 
    }
  }

}
