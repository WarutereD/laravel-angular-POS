import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  private productSource = new BehaviorSubject<any>([]);
  currentProduct = this.productSource.asObservable();

  constructor() { }

  productDetails(product: any) {
    this.productSource.next(product)
  }
}
