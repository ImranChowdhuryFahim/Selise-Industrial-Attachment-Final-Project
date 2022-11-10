import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart } from '../models/cart-less';
import { Product } from '../models/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {


  clicked:boolean = false;
  editModeClicked:boolean = false;
  @Input() cardPayload!:Product
  @Input() editCart!:boolean
  @Output() onCartClick:EventEmitter<(Cart|Product)[]> = new EventEmitter<(Cart|Product)[]>()

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
    this.clicked = true;
    let quantity = this.count
    let productId = this.cardPayload._id as string
    this.onCartClick.emit([{quantity,productId},this.cardPayload]);
  }

}
