import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ProductService} from "../product.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  product = {
    title: '',
    price: '',
    url: ''
  };

  subscription: Subscription;
  products = [];

  constructor(private _productService: ProductService,
              private _router: Router) {
      this.subscription = this._productService.subject.subscribe(
          (products) => {this.products = products},
          (err) => {},
          () => {}
      )
  }


  ngOnInit() {
  }

  onSubmit(){
    this.products.push(this.product);
    this._productService.updateProducts(this.products);
    this._router.navigate(['/product'])
  }
}
