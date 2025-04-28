import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.css'
})
export class ImageGalleryComponent implements OnInit {
  imageUrls: string[] =[
    'https://ispace.kz/blog/wp-content/uploads/2023/11/mac-m3-scaled.jpeg'
  ];
  constructor() {
  }
  ngOnInit(): void {
  }
}
