import {Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges} from '@angular/core';

import {ProductsComponent} from "../products/products.component";
import {CommonModule} from "@angular/common";
import {Item} from "../models";

@Component({
  selector: 'app-product-category',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.css'
})
export class ProductCategoryComponent {

}
