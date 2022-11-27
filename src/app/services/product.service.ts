import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList:Array<any>=[];
  constructor(private http :HttpClient) { }

  getproduct():Observable<[]>
  {
   return this.http.get<[]>('https://fakestoreapi.com/products')  ;
  }

  getproductList()
  {
    return this.productList;
  }
  addToCart(product:any) {
    this.productList.push(product);
    return this.productList;
  
}



}
