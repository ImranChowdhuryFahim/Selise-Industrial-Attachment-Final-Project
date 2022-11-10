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
  @Input() editCart!:boolean
  @Input() quantity:number = 0
  @Output() onCartClick:EventEmitter<(Cart|Product)[]> = new EventEmitter<(Cart|Product)[]>()
  @Output() deleteEvent:EventEmitter<(Cart|Product)[]> = new EventEmitter<(Cart|Product)[]>()
  @Output() editEvent:EventEmitter<(Cart|Product)[]> = new EventEmitter<(Cart|Product)[]>()

  count:number = 0
  constructor() {

   }

  ngOnInit(): void {
    if(this.quantity!==0)
    {
      this.count = this.quantity
    }
  }

  increment()
  {
    if(this.cardPayload.quantity>0)
    {
      this.cardPayload.quantity -=1
      this.count +=1
      let quantity = this.count
      let productId = this.cardPayload._id as string
      this.editEvent.emit([{quantity,productId},this.cardPayload])
    }

  }
  decrement()
  {
    if(this.editCart)
    {
      if(this.count>1)
      {
        this.count -=1
        this.cardPayload.quantity +=1
        let quantity = this.count
        let productId = this.cardPayload._id as string
        this.editEvent.emit([{quantity,productId},this.cardPayload])
      }
    }
    else{
      if(this.count>0)
      {
        this.count -=1
        this.cardPayload.quantity +=1
        let quantity = this.count
        let productId = this.cardPayload._id as string
        this.editEvent.emit([{quantity,productId},this.cardPayload])
      }
    }


  }

  addToCart()
  {
    let quantity = this.count
    let productId = this.cardPayload._id as string
    this.onCartClick.emit([{quantity,productId},this.cardPayload]);
  }

  deleteCart()
  {
     let quantity = this.count
     let productId = this.cardPayload._id as string
     this.cardPayload.quantity += quantity
     this.deleteEvent.emit([{quantity,productId},this.cardPayload])
  }


}
