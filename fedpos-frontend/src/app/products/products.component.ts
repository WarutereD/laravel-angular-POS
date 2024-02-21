import { Component } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { SharedServiceService } from '../Services/shared-service.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgFor,
    NgIf
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  constructor ( 
    private productService: ProductService,
    private sharedService: SharedServiceService
    ) {}

  products: any = []

  ngOnInit() {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
      this.sharedService.productDetails(this.products);
    });
  }

}
