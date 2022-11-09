import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { InternalService } from 'src/app/service/internal.service';
import { Product } from 'src/app/models/product';
import { BackendService } from 'src/app/service/backend.service';
import { Response } from 'src/app/models/response';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  
    isLoading:boolean = false
    maxDate = new Date()
    categoryOptions:string [] = ['Electronics','Grocery', 'Clothing', 'Footwear', 'Bags']
    originOptions: string [] = ['Canada', 'Bangladesh', 'India', 'China']
    editId!: string

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

  constructor(private route: ActivatedRoute, private fb:FormBuilder,
     private internalService: InternalService,
     private backendService: BackendService,
     private router: Router) { }
  isEdit: boolean = false

  ngOnInit(): void {

    this.route.paramMap.subscribe((params)=>{
      if(params.get('productId'))
      {
        this.isEdit = true
        this.isLoading = true
        this.backendService.getSingleProduct(params.get('productId') as string).subscribe((res:Response)=>{
          if(res.isSuccessful)
          {
            
            this.editId = res.product?._id as string
            console.log(this.editId)
            delete res.product?._id
            this.isLoading = false
            this.productForm.setValue({...res.product})
          }
          else{
            this.isLoading = false
          }
        })
      }
    },(err)=>{
      this.isLoading = false
    })

   }

   onSubmit(data:Product,formDirective:FormGroupDirective){

    this.isLoading = true;

    if(this.isEdit)
    {
      const _id = this.editId
      const newPayload = {_id,...data}

      console.log(newPayload)

      this.backendService.updateProduct(newPayload).subscribe((res:Response)=>{
        if(res.isSuccessful)
        {
          this.internalService.openSnackBar(res.message,2,'blue-snackbar')
          this.productForm.reset()
          formDirective.reset()
          this.router.navigate(['/product'])
        }
        else{
          this.internalService.openSnackBar(res.message,2,'red-snackbar')
        }
        this.isLoading = false;
        
      },(err)=>{
        this.isLoading = false;
        this.internalService.openSnackBar("Could not update the product",2,'red-snackbar')
      })
    }

    else{
      this.backendService.createProduct(data).subscribe((res:Response)=>{

        
        if(res.isSuccessful)
        {
          this.internalService.openSnackBar(res.message,2,'blue-snackbar')
          this.productForm.reset()
          formDirective.reset()
        }
        else{
          this.internalService.openSnackBar(res.message,2,'red-snackbar')
        }
        this.isLoading = false;
        
      },(err)=>{
        this.isLoading = false;
        this.internalService.openSnackBar("Could not create a new product",2,'red-snackbar')
      })    
     }
    }

    
  }

