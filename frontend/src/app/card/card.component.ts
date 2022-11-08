import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  count:number = 1
  constructor() { }

  ngOnInit(): void {
  }

  increment()
  {
    this.count +=1
  }
  decrement()
  {
    this.count -=1
  }

}
