import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../Services/product.service';
import { CategoriesService } from '../Services/categories.service';


@Component({
  selector: 'app-add-data-form',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    FormsModule,
  ],
  templateUrl: './add-data-form.component.html',
  styleUrl: './add-data-form.component.css'
})
export class AddDataFormComponent {

  constructor(
    private productService: ProductService,
    private categoriesService: CategoriesService
  ) {}

  product_name!: string
  category_name!: string
  selling_price!: String
  unit!: string
  description!: string

  errors: any = []
  categories: any = []

  ngOnInit() {
    this.categoriesService.getCategories().subscribe((data: any) => {
      this.categories = data.map((category: any) => category.category_name);
      //console.log('categories', this.categories);
    });
  }

  saveData() {
    if (!this.product_name || !this.category_name || !this.selling_price || !this.unit || !this.description) {
      alert('All fields are required.');
      return;
    }

    var inputData = {
      product_name: this.product_name,
      category_name: this.category_name,
      selling_price: this.selling_price,
      unit: this.unit,
      description: this.description
    }

    this.productService.saveData(inputData).subscribe({
      next: (res: any) => {
        console.log(res, 'response')
        alert('Product saved successfully!')
        this.product_name = '';
        this.category_name = '';
        this.selling_price = '';
        this.unit = '';
        this.description = '';
        window.location.reload();
      },
      error: (err: any) => {
        this.errors = err.error.errors
        console.log(err.error.errors, 'error')
        alert('An error occurred while saving the product!.')
      }
    })
  }

}
