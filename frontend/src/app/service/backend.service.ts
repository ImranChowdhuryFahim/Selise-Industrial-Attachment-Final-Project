import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../models/cart-less';
import { Product } from '../models/product';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private cartItemsCount:BehaviorSubject<number> = new BehaviorSubject<number>(0)

  BASE_URL = 'http://127.0.0.1:5000/'

  constructor(private http:HttpClient) { this.getCartItems().subscribe((res:Response)=>{
    this.cartItemsCount.next(res.cartItems?.length as number)
  }) }

  createProduct(product:Product): Observable<Response>
  {
    return this.http.post<Response>(this.BASE_URL+'api/create-product/',product)
  }

  findProduct(id:string): Observable<Response> {
    return this.http.get<Response>(this.BASE_URL+'api/find-product/'+id)
  }

  updateProduct(product:Product): Observable<Response>  {
    return this.http.put<Response>(this.BASE_URL+'api/update-product/',product)
  }

  getProducts() : Observable<Response>
  {
    return this.http.get<Response>(this.BASE_URL+'api/get-products/')
  }


  async editCart(res:(Cart|Product)[]): Promise<Response>{
    const cartPayload = res[0] as Cart
    const productPayload = res[1] as Product

    return new Promise((resolve,reject)=>{

      this.updateCartItem(cartPayload).subscribe((updatedCart)=>{
        if(updatedCart.isSuccessful)
        {
          this.updateProduct(productPayload).subscribe((updatedProduct)=>{
            if(updatedProduct.isSuccessful)
            {
              const successResponse:Response = {isSuccessful:true,message:updatedCart.message}
              resolve(successResponse)
            }
            else{
              const erroResponse:Response = {isSuccessful:false,message:updatedProduct.message}
              resolve(erroResponse)
            } 
          })

        }
        else{
          const erroResponse:Response = {isSuccessful:false,message:updatedCart.message}
          resolve(erroResponse)
        }
        
      })

    })


  }


  async deleteCart(res:(Cart|Product)[]): Promise<Response>{
    const cartPayload = res[0] as Cart
    const productPayload = res[1] as Product

    return new Promise((resolve,reject)=>{

      this.deleteCartItem(cartPayload).subscribe((deletedCart)=>{
        if(deletedCart.isSuccessful)
        {
          this.updateProduct(productPayload).subscribe((updatedProduct)=>{
            if(updatedProduct.isSuccessful)
            {
              this.getCartItems().subscribe((cartItems)=>{
                if(cartItems.isSuccessful)
                {
                  const successResponse:Response = {isSuccessful:true,message:deletedCart.message,cartItems:cartItems.cartItems}
                  resolve(successResponse)
                  this.cartItemsCount.next(this.cartItemsCount.value-1)
                }
              })
            }
            else{
              const erroResponse:Response = {isSuccessful:false,message:updatedProduct.message}
              resolve(erroResponse)
            } 
          })

        }
        else{
          const erroResponse:Response = {isSuccessful:false,message:deletedCart.message}
          resolve(erroResponse)
        }
        
      })

    })


  }

  async addToCard(res:(Cart|Product)[]): Promise<Response>{

    const cartPayload = res[0] as Cart
    const productPayload = res[1] as Product

    return new Promise((resolve, reject) => {

          this.addItemToCart(cartPayload).subscribe((updatedCart)=>{
            if(updatedCart.isSuccessful)
            {
              this.updateProduct(productPayload).subscribe((updatedProduct)=>{
                if(updatedProduct.isSuccessful)
                {
                  const successResponse:Response = {isSuccessful:true,message:updatedCart.message}
                  this.cartItemsCount.next(this.cartItemsCount.value+1)
                  resolve(successResponse)
                }
                else{
                  const erroResponse:Response = {isSuccessful:false,message:updatedProduct.message}
                  resolve(erroResponse)
                } 
              })

            }
            else if(!updatedCart.isSuccessful && updatedCart.alreadyExist)
            {
              this.updateCartItem(cartPayload).subscribe((updatedCart)=>{
                if(updatedCart.isSuccessful)
                {
                  this.updateProduct(productPayload).subscribe((updatedProduct)=>{
                    if(updatedProduct.isSuccessful)
                    {
                      const successResponse:Response = {isSuccessful:true,message:updatedCart.message}
                      resolve(successResponse)
                    }
                    else{
                      const erroResponse:Response = {isSuccessful:false,message:updatedProduct.message}
                      resolve(erroResponse)
                    } 
                  })
                }
                else{
                  const erroResponse:Response = {isSuccessful:false,message:updatedCart.message}
                  resolve(erroResponse)
                }
              })
              
            }
            else{
              const erroResponse:Response = {isSuccessful:false,message:updatedCart.message}
              resolve(erroResponse)
            }
            
          })
        
      
    })

    
  }

  deleteCartItem(cart:Cart):Observable<Response>
  {
    return this.http.delete<Response>(this.BASE_URL+'api/delete-cart-item',{body:cart})
  }

  updateCartItem(cart:Cart): Observable<Response>
  {
    return this.http.put<Response>(this.BASE_URL+'api/update-cart-item',cart)
  }

  getCartItems(): Observable<Response>
  {
    return this.http.get<Response>(this.BASE_URL + 'api/get-cart-items')
  }

  addItemToCart(cart:Cart): Observable<Response>
  {
    return this.http.post<Response>(this.BASE_URL+'api/add-cart-item/',cart)
  }


  getCartItemsCount(): Observable<number>
  {
    return this.cartItemsCount
  }
}
