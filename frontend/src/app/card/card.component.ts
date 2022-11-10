import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart } from '../models/cart-less';
import { Product } from '../models/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardPayload!:Product
  @Output() onCartClick:EventEmitter<Cart> = new EventEmitter<Cart>()

  count:number = 0
  constructor() { }

  ngOnInit(): void {
  }

  increment()
  {
    if(this.cardPayload.quantity>0)
    {
      this.cardPayload.quantity -=1
      this.count +=1
    }

  }
  decrement()
  {
    if(this.count>0)
    {
      this.count -=1
      this.cardPayload.quantity +=1
    }

  }

  addToCart()
  {
    let quantity = this.count
    let productId = this.cardPayload._id as string
    this.onCartClick.emit({quantity,productId});
  }

}
