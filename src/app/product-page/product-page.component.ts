import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  productDetails: any[];
  constructor(private router: Router) {
    this.productDetails = [
      {p_img: 'http://images.samsung.com/is/image/samsung/p5/uk/smartphones/galaxy-s8/configurator/galaxys8plus_grey_all.png?$ORIGIN_PNG$',
      p_head: 'Samsung', p_name: 'Galaxy S8', p_price: '$649', p_des: '64GB, 6GB Ram, 1080HD, 5.5 inches, Android'},
      {p_img: 'https://9to5mac.files.wordpress.com/2014/09/iphone6-select-2014.png?w=782',
      p_head: 'Apple', p_name: 'iPhone 6', p_price: '$749.99', p_des: '32GB, 64Bit, 1080HD, 4.7 inches, iOS 8' },
      {
        p_img: 'https://api.sonymobile.com/files/xperia-xa1-white-D1-hero-image-1dec9e60f5c6c575fb86bb34bd838ade.png',
      p_head: 'Sony', p_name: 'Xperia XA1', p_price: '$749.00', p_des: '32GB, 4GB Ram, 1080HD, 6.0 inches, WP 8' },
    ];
   }
  ngOnInit() {
  }

}
