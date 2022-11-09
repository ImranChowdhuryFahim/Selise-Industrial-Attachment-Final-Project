import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  
    maxDate = Date()
    categoryOptions:string [] = ['Electronics','Grocery', 'Clothing', 'Footwear', 'Bags']
    originOptions: string [] = ['Canada', 'Bangladesh', 'India', 'China']


    productForm:FormGroup = this.fb.group({
    productName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    productShortCode: ['',[Validators.required]],
    category: [, Validators.required],
    price: [, [Validators.required, Validators.min(0)]],
    quantity: [, [Validators.required, Validators.min(1)]],
    description: ['',[Validators.minLength(3),Validators.maxLength(250)]],
    imageUrl: [''],
    isBestAchieved: [false],
    createdDate: [,[Validators.required]],
    origin: [,[Validators.required]]
  })

  constructor(private route: ActivatedRoute, private fb:FormBuilder) { }
  isEdit: boolean = false

  ngOnInit(): void {

    this.route.paramMap.subscribe((params)=>{
      if(params.get('productId'))
      {
        this.isEdit = true
      }
    })

   }
  }

