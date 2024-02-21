import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddDataFormComponent } from './add-data-form/add-data-form.component';
import { NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { SalesComponent } from './sales/sales.component';
//import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AddDataFormComponent,
    ProductsComponent,
    SalesComponent,
    RouterOutlet,
    NgIf,
    NgFor,
    HttpClientModule
    //AppModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  showForm = false;
  showSalesForm = false;

  @ViewChild(AddDataFormComponent) addDataForm!: AddDataFormComponent; // Add the '!' operator to indicate that the property will be initialized later

  constructor() {
    // Initialize the addDataForm property here if needed
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }
  recordSale() {
    this.showSalesForm = !this.showSalesForm;
  }
}
