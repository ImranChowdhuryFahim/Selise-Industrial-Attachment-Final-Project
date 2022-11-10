import { Component } from '@angular/core';
import { BackendService } from './service/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'frontend';
  cartItemsCount:number = 0

  constructor(private backendService: BackendService)
  {
    backendService.getCartItemsCount().subscribe((value:number)=>{
      this.cartItemsCount = value
    })
  }
}
