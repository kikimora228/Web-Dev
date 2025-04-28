import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {ProductCategoryComponent} from "./product-category/product-category.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductsComponent, ProductCategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lab4';
}
