import { Component } from '@angular/core';
import { Item } from "../models";
import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ImageGalleryComponent} from "../image-gallery/image-gallery.component";
import {ProductCategoryComponent} from "../product-category/product-category.component";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from '../app.component';

@NgModule({
  // bootstrap: [AppComponent],
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppComponent,
    // Add FormsModule to imports array
  ],
  providers: []
})


export class AppModule { }

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    ImageGalleryComponent,
    ProductCategoryComponent,
    FormsModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})



export class ProductsComponent {
  products_phones: Item[] = [];
  products_laptops: Item[] = [];
  products_earphones: Item[] = [];
  products_desktops: Item[] = [];
  products: Item[] = [];
  categories: string[] = ["Phones", "Laptops", "Earphones", "Desktops"];

  // isChecked: Boolean = false;
  categoryVisibility: { [key: string]: boolean } = {}; // Explicitly declare type

  constructor() {
    this.products.push(
        new Item(0,"phones",1, 'iPhone 15', 'This is Apple iPhone 15', 1200, 'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2Fsmartfon_apple_iphone_15_128gb_blue_mtp43_274375_1.jpg&w=3840&q=85', 10, 'https://e-katalog.kz/APPLE-IPHONE-15-128GB.htm'),
        new Item(0,"phones",2, 'iPhone 14', 'This is Apple iPhone 14', 1000, 'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F265269_1.jpg&w=3840&q=85', 9.6, 'https://e-katalog.kz/APPLE-IPHONE-14-128GB.htm'),
        new Item(0,"phones",3, 'iPhone 13', 'This is Apple iPhone 13', 900, 'https://object.pscloud.io/cms/cms/Photo/img_0_77_3132_4_1.jpg', 8.4, 'https://e-katalog.kz/APPLE-IPHONE-13-128GB.htm'),
        new Item(0,"phones",4, 'iPhone 12', 'This is Apple iPhone 12', 800, 'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/q:100/plain/s3://catalog-products/201014082213416796/201106080048951631.png@jpeg', 7.5, 'https://e-katalog.kz/APPLE-IPHONE-12-128GB.htm'),
        new Item(0,"phones",5, 'iPhone 11', 'This is Apple iPhone 11', 600, 'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F228936_1.jpg&w=3840&q=85', 8.7, 'https://e-katalog.kz/APPLE-IPHONE-11-64GB.htm'),
        new Item(0,"laptops",6, 'Macbook Air m1', 'This is Apple Macbook m1', 800, 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661', 9.5, 'https://e-katalog.kz/APPLE-MACBOOK-AIR-13--2020--M1.htm'),
        new Item(0,"laptops",7, 'Macbook Air m2 15"', 'This is Apple Macbook m2 15"', 1000, 'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220804063125162879/220831140039686241.png@webp', 10.0, 'https://e-katalog.kz/APPLE-MACBOOK-AIR-15--2023-.htm'),
        new Item(0,"laptops",8, 'Macbook Air m2 14"', 'This is Apple Macbook m2 14"', 1200, 'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/q:100/plain/s3://catalog-products/220607122413698684/220831140047927440.png@jpeg', 9.9, 'https://e-katalog.kz/APPLE-MACBOOK-AIR--2022-.htm'),
        new Item(0,"laptops",9, 'Macbook Pro m3', 'This is Apple Macbook m3 Pro', 1600, 'https://al-th-452x339.object.pscloud.io/files/alfa/messages/1/9/4/6/8/19468441-44bbc72e47f5eb65025c92536b54aacb.webp', 8.8, 'https://e-katalog.kz/APPLE-MACBOOK-PRO-14--2023--M3.htm'),
        new Item(0,"laptops",10, 'Macbook Pro m2', 'This is Apple Macbook m2 Pro', 1600, 'https://gadgetstore.kz/wa-data/public/shop/products/56/05/556/images/1939/1939.970.jpeg', 7.7, 'https://e-katalog.kz/APPLE-MACBOOK-PRO-14--2023-.htm'),
        new Item(0,"earphones",11, "AirPods Pro", "This is AirPods Pro", 249.00, "airpods_pro.jpg", 4.8, "airpods_pro_link"),
        new Item(0,"earphones",12, "AirPods Max", "This is AirPods Max", 549.00, "airpods_max.jpg", 4.7, "airpods_max_link"),
        new Item(0,"earphones",13, "AirPods 3", "This is AirPods 3 ", 179.00, "airpods_3rd_gen.jpg", 4.6, "airpods_3rd_gen_link"),
        new Item(0,"earphones",14, "Beats Studio Buds", "This is Beats Studio Buds", 149.99, "beats_studio_buds.jpg", 4.5, "beats_studio_buds_link"),
        new Item(0,"earphones",15, "Beats Solo Pro", "This is Beats Solo Pro", 299.95, "beats_solo_pro.jpg", 4.4, "beats_solo_pro_link"),
        new Item(0,"desktops",16, "iMac 24-inch", "This is iMac 24-inch", 1299.00, "imac_24inch.jpg", 4.9, "imac_24inch_link"),
        new Item(0,"desktops",17, "iMac 27-inch", "This is iMac 27-inch", 1799.00, "imac_27inch.jpg", 4.8, "imac_27inch_link"),
        new Item(0,"desktops",18, "iMac Pro", "This is iMac Pro", 4999.00, "imac_pro.jpg", 4.7, "imac_pro_link"),
        new Item(0,"desktops",19, "Mac mini", "This is Mac mini", 699.00, "mac_mini.jpg", 4.6, "mac_mini_link"),
        new Item(0,"desktops",20, "Mac Pro", "This is Mac Pro", 5999.00, "mac_pro.jpg", 4.5, "mac_pro_link")
      )

    this.products_phones.push(
      new Item(0,"phones", 1, 'iPhone 15', 'This is Apple iPhone 15', 1200, 'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2Fsmartfon_apple_iphone_15_128gb_blue_mtp43_274375_1.jpg&w=3840&q=85', 10, 'https://e-katalog.kz/APPLE-IPHONE-15-128GB.htm'),
      new Item(0,"phones", 2, 'iPhone 14', 'This is Apple iPhone 14', 1000, 'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F265269_1.jpg&w=3840&q=85', 9.6, 'https://e-katalog.kz/APPLE-IPHONE-14-128GB.htm'),
      new Item(0,"phones", 3, 'iPhone 13', 'This is Apple iPhone 13', 900, 'https://object.pscloud.io/cms/cms/Photo/img_0_77_3132_4_1.jpg', 8.4, 'https://e-katalog.kz/APPLE-IPHONE-13-128GB.htm'),
      new Item(0,"phones",4, 'iPhone 12', 'This is Apple iPhone 12', 800, 'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/q:100/plain/s3://catalog-products/201014082213416796/201106080048951631.png@jpeg', 7.5, 'https://e-katalog.kz/APPLE-IPHONE-12-128GB.htm'),
      new Item(0,"phones",5, 'iPhone 11', 'This is Apple iPhone 11', 600, 'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F228936_1.jpg&w=3840&q=85', 8.7, 'https://e-katalog.kz/APPLE-IPHONE-11-64GB.htm')
    )
    this.products_laptops.push(
      new Item(0,"laptops",6, 'Macbook Air m1', 'This is Apple Macbook m1', 800, 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661', 9.5, 'https://e-katalog.kz/APPLE-MACBOOK-AIR-13--2020--M1.htm'),
      new Item(0,"laptops",7, 'Macbook Air m2 15"', 'This is Apple Macbook m2 15"', 1000, 'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220804063125162879/220831140039686241.png@webp', 10.0, 'https://e-katalog.kz/APPLE-MACBOOK-AIR-15--2023-.htm'),
      new Item(0,"laptops",8, 'Macbook Air m2 14"', 'This is Apple Macbook m2 14"', 1200, 'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/q:100/plain/s3://catalog-products/220607122413698684/220831140047927440.png@jpeg', 9.9, 'https://e-katalog.kz/APPLE-MACBOOK-AIR--2022-.htm'),
      new Item(0,"laptops",9, 'Macbook Pro m3', 'This is Apple Macbook m3 Pro', 1600, 'https://al-th-452x339.object.pscloud.io/files/alfa/messages/1/9/4/6/8/19468441-44bbc72e47f5eb65025c92536b54aacb.webp', 8.8, 'https://e-katalog.kz/APPLE-MACBOOK-PRO-14--2023--M3.htm'),
      new Item(0,"laptops",10, 'Macbook Pro m2', 'This is Apple Macbook m2 Pro', 1600, 'https://gadgetstore.kz/wa-data/public/shop/products/56/05/556/images/1939/1939.970.jpeg', 7.7, 'https://e-katalog.kz/APPLE-MACBOOK-PRO-14--2023-.htm')
    )
    this.products_earphones.push(
      new Item(0,"earphones",11, "AirPods Pro", "This is AirPods Pro", 249.00, "https://object.pscloud.io/cms/cms/Photo/img_0_83_1263_3.png", 4.8, "airpods_pro_link"),
      new Item(0,"earphones",12, "AirPods Max", "This is AirPods Max", 549.00, "https://object.pscloud.io/cms/cms/Photo/img_0_83_1603_1_1.jpg", 4.7, "airpods_max_link"),
      new Item(0,"earphones",13, "AirPods (3rd generation)", "This is AirPods (3rd generation)", 179.00, "https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/211019073853864127/230322150013219591.png@webp", 4.6, "airpods_3rd_gen_link"),
      new Item(0,"earphones",14, "Beats Studio Buds", "This is Beats Studio Buds", 149.99, "https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/210610113752971523/210830160016865130.jpg@webp", 4.5, "beats_studio_buds_link"),
      new Item(0,"earphones",15, "Beats Solo Pro", "This is Beats Solo Pro", 299.95, "data:image/jpeg;base64,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", 4.4, "beats_solo_pro_link")
    )
    this.products_desktops.push(
      new Item(0,"desktops",16, "iMac 24-inch", "This is iMac 24-inch", 1299.00, "https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/231031063755878592/231031150036339840.png@webp", 4.9, "imac_24inch_link"),
      new Item(0,"desktops",17, "iMac 27-inch", "This is iMac 27-inch", 1799.00, "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP821/sp821-imac-27.png", 4.8, "imac_27inch_link"),
      new Item(0,"desktops",18, "iMac Pro", "This is iMac Pro", 4999.00, "https://object.pscloud.io/cms/cms/Photo/img_0_437_88_3.jpg", 4.7, "imac_pro_link"),
      new Item(0,"desktops",19, "Mac mini", "This is Mac mini", 699.00, "https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/230118054203597587/230119170020998693.png@webp", 4.6, "mac_mini_link"),
      new Item(0,"desktops",20, "Mac Pro", "This is Mac Pro", 5999.00, "https://cdsassets.apple.com/live/7WUAS350/images/mac-pro/id-mac-pro-2019.jpg", 4.5, "mac_pro_link")
    );
    this.categories.forEach(category => {
      this.categoryVisibility[category] = false;
    });
  }

  getProductsForCategory(category: string): Item[] {
    switch (category) {
      case "Phones":
        return this.products_phones;
      case "Laptops":
        return this.products_laptops;
      case "Earphones":
        return this.products_earphones;
      case "Desktops":
        return this.products_desktops;
      default:
        return [];
    }
  }

  incrementLike(products: Item): void {
    products.likes++;
    console.log("pressed");
  }

  removeProduct(category: String, productId: number): void {
    if (category === "phones") {
      this.products_phones = this.products_phones.filter(product => product.id !== productId);
    } else if (category === "laptops") {
      this.products_laptops = this.products_laptops.filter(product => product.id !== productId);
    } else if (category === "earphones") {
      this.products_earphones = this.products_earphones.filter(product => product.id !== productId);
    } else if (category === "desktops") {
      this.products_desktops = this.products_desktops.filter(product => product.id !== productId);
    }
  }

  sharing(id: number): void {
    const productLink = this.products[id-1].productLink;
    const encodedLink = encodeURIComponent(productLink);
    const telegramShareUrl = `https://t.me/share/url?url=${encodedLink}`;
    window.open(telegramShareUrl, '_blank');
  }

  }
