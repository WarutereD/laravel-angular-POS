import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SalesService } from '../Services/sales.service';
import { SharedServiceService } from '../Services/shared-service.service';
import { catchError, finalize, of } from 'rxjs';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    FormsModule,
  ],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {

  constructor(
    private salesService: SalesService,
    private sharedService: SharedServiceService

  ) { }

  products: any = []

  sales = {
    total_amount: 0,
    items: []
  }

  ngOnInit() {
    this.sharedService.currentProduct.subscribe((data: any) => {
      this.products = data.map((product: any) => ({ 
        id: product.id, 
        product_name: product.product_name,
        selling_price: product.selling_price, 
        selected: false, 
        quantity: 0 
      }));
      //console.log('products', this.products);
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const selectedProducts = this.products.filter((product: any) => product.selected);
      if (selectedProducts.length === 0 || selectedProducts.some((product:any)=> product.quantity === 0)) {
        alert('Please select at least one product and enter a quantity.');
        return;
      }
      this.sales.total_amount = selectedProducts.reduce((total: number, product: any) => total + product.selling_price * product.quantity, 0);
      this.sales.items = selectedProducts.map((product: any) => ({ // Explicitly define the type of 'product' as any
        product_id: product.id,
        quantity: product.quantity,
      }));

      //console.log('sales', this.sales);

      this.salesService.saveData(this.sales).pipe(
        catchError(error => {
          console.error('Error:', error);
          alert('An error occurred while saving the sales.');
          return of(error);
        }),
        finalize(() => {
          this.sales = {
            total_amount: 0,
            items: []
          };
        })
      ).subscribe({
        next: (res: any) => {
          console.log(res, 'response');
          alert('Sales saved successfully!');
        }
      });
      
      // this.salesService.createSales(this.sales).subscribe(response => {
      //   console.log(response);
      // });
    }
  }
}
