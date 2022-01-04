import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
 
  url:string ="http://localhost:3000/data";

  constructor(private httpClient: HttpClient) { }

  addProd(temp: Product) {
    return this.httpClient.post(this.url, temp);

  }

  displayRec() {
    return this.httpClient.get(this.url);
  }

  selectProduct(tempid: number) {
    return this.httpClient.get(this.url + "/" + tempid);

  }

  deleteProduct(tempid: number) {
    return this.httpClient.delete(this.url + "/" + tempid);

  }

  updateProduct(arg0: number, temp: Product) {
    return this.httpClient.put(this.url + "/" + arg0 , temp);
  }

  displayProdNames() :Observable<string[]>{
    return this.httpClient.get<any[]>(this.url).pipe(
      map(response => {
        return response.map(item => item.pname)
      })
    );
  }

  getProductByCat(category:string):Observable<Product[]> {
    return this.httpClient.get<any[]>(this.url).pipe(
      map(response => {
        return response.filter(item => item.category == category)
      })
    );
  }

  getPriceAndCat():Observable<any[]> {
    return this.httpClient.get<any[]>(this.url).pipe(
      map(response => {
        return response.map(item =>{
          return {price:item.price,category:item.category}
        })
      })
    );
  }

  wrongURLService():Observable<any> {
    return this.httpClient.get("http://localhost:3000/data123")
  }

}
