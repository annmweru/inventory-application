import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Product from "../../models/product";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FlowService {
  BASE_URL = "https://60742d38066e7e0017e793ca.mockapi.io/api/v1"

  constructor(private http: HttpClient) {

  }

  public postProduct(product: Product):Observable<any>  {

      let options = {
        headers : {
          "Content-Type": "application/json"
        }
      }
      let payload = {}
      payload['item-name'] = product.itemName
      payload['item-description'] = product.itemDescription
      payload['item-state'] = product.itemState
      payload['item-category'] = product.itemCategory
      payload['item-date'] = product.itemDate
      payload["item-tag"] = product.itemTag
      payload['item-img'] = product.itemImg

      return  this.http.post(this.BASE_URL + '/add-item', payload,options)
  }

  getProducts() : Observable<any>{
    let options = {
      headers : {
        "Content-Type": "application/json"
      }
    }
    return  this.http.get(this.BASE_URL + '/add-item', options)
  }

  getProduct(id): Observable<any> {
    let options = {
      headers : {
        "Content-Type": "application/json"
      }
    }
    return  this.http.get(this.BASE_URL + '/add-item/' + id, options)
  }

}
