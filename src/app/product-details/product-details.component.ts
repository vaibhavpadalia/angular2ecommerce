import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  public head;
  public name;
  public price;
  public des;
  public img;
  ngOnInit() {
    this.head = this.route.snapshot.params['p_head'];
    this.name = this.route.snapshot.params['p_name'];
    this.price = this.route.snapshot.params['p_price'];
    this.des = this.route.snapshot.params['p_des'];
    this.img = this.route.snapshot.params['p_img'];
  }

}
