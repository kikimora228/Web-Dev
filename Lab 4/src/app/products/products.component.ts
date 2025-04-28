import { Component } from '@angular/core';
import { Item } from "../models";
import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ImageGalleryComponent} from "../image-gallery/image-gallery.component";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppModule { }

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    ImageGalleryComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})



export class ProductsComponent {
  products: Item[] = [];

  constructor() {
    this.products.push(
      new Item(1, 'iPhone 15', 'This is Apple iPhone 15', 1200, 'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2Fsmartfon_apple_iphone_15_128gb_blue_mtp43_274375_1.jpg&w=3840&q=85', 10, 'https://e-katalog.kz/APPLE-IPHONE-15-128GB.htm'),
      new Item(2, 'iPhone 14', 'This is Apple iPhone 14', 1000, 'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F265269_1.jpg&w=3840&q=85', 9.6, 'https://e-katalog.kz/APPLE-IPHONE-14-128GB.htm'),
      new Item(3, 'iPhone 13', 'This is Apple iPhone 13', 900, 'https://cdn.shoplightspeed.com/shops/662820/files/47556235/800x800x3/apple-iphone-13-128-gb.jpg', 8.4, 'https://e-katalog.kz/APPLE-IPHONE-13-128GB.htm'),
      new Item(4, 'iPhone 12', 'This is Apple iPhone 12', 800, 'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/q:100/plain/s3://catalog-products/201014082213416796/201106080048951631.png@jpeg', 7.5, 'https://e-katalog.kz/APPLE-IPHONE-12-128GB.htm'),
      new Item(5, 'iPhone 11', 'This is Apple iPhone 11', 600, 'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F228936_1.jpg&w=3840&q=85', 8.7, 'https://e-katalog.kz/APPLE-IPHONE-11-64GB.htm'),
      new Item(6, 'Macbook Air m1', 'This is Apple Macbook m1', 800, 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661', 9.5, 'https://e-katalog.kz/APPLE-MACBOOK-AIR-13--2020--M1.htm'),
      new Item(7, 'Macbook Air m2 15"', 'This is Apple Macbook m2 15"', 1000, 'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220804063125162879/220831140039686241.png@webp', 10.0, 'https://e-katalog.kz/APPLE-MACBOOK-AIR-15--2023-.htm'),
      new Item(8, 'Macbook Air m2 14"', 'This is Apple Macbook m2 14"', 1200, 'https://itmag.kz/upload/iblock/8/70/product_image_87170_1236667.webp', 9.9, 'https://e-katalog.kz/APPLE-MACBOOK-AIR--2022-.htm'),
      new Item(9, 'Macbook Pro m3', 'This is Apple Macbook m3 Pro', 1600, 'https://cdn.shoplightspeed.com/shops/662820/files/59779298/800x800x3/apple-macbook-pro-16-apple-m3-pro-12-cpu-18-gpu-18.jpg', 8.8, 'https://e-katalog.kz/APPLE-MACBOOK-PRO-14--2023--M3.htm'),
      new Item(10, 'Macbook Pro m2', 'This is Apple Macbook m2 Pro', 1600, 'https://gadgetstore.kz/wa-data/public/shop/products/56/05/556/images/1939/1939.970.jpeg', 7.7, 'https://e-katalog.kz/APPLE-MACBOOK-PRO-14--2023-.htm'),
    );
  }

  sharing(id: number): void {
    const productLink = this.products[id-1].productLink;
    const encodedLink = encodeURIComponent(productLink);
    const telegramShareUrl = `https://t.me/share/url?url=${encodedLink}`;
    window.open(telegramShareUrl, '_blank');
  }

  }
