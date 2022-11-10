import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart-less';
import { Product } from '../models/product';
import { Response } from '../models/response';
import { BackendService } from '../service/backend.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isLoading:boolean = false
  products:Product[] = []

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.backendService.getProducts().subscribe((res:Response)=>{
      console.log(res.products)
      this.products = res.products as Product[]
      this.isLoading = false;
    })
  }

  addToCart(product:Cart)
  {
    console.log(product)
    this.backendService.addToCard()
  }

}
