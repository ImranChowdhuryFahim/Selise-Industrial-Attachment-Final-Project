import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  BASE_URL = 'http://127.0.0.1:5000/'

  constructor(private http:HttpClient) { }

  createProduct(product:Product): Observable<Response>
  {
    return this.http.post<Response>(this.BASE_URL+'api/create-product',product)
  }
}
