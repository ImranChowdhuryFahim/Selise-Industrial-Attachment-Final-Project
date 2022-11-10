import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart-less';
import { Product } from '../models/product';
import { Response } from '../models/response';
import { BackendService } from '../service/backend.service';
import { InternalService } from '../service/internal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isLoading:boolean = false
  products:Product[] = []

  constructor(private backendService: BackendService,private internalService:InternalService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.backendService.getProducts().subscribe((res:Response)=>{
      // console.log(res.products)
      this.products = res.products as Product[]
      this.isLoading = false;
    })
  }

  async addToCart(res:(Cart|Product)[])
  {

    
    this.isLoading = true;
    const response:Response = await this.backendService.addToCard(res)
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

}
