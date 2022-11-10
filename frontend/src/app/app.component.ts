import { Component } from '@angular/core';
import { BackendService } from './service/backend.service';
import { InternalService } from './service/internal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'frontend';
  cartItemsCount:number = 0

  constructor(private backendService: BackendService,private internalService:InternalService)
  {
    backendService.getCartItemsCount().subscribe((value:number)=>{
      this.cartItemsCount = value
    })
  }

  cartIconClick()
  {

    this.internalService.openDialog();

  }
}
