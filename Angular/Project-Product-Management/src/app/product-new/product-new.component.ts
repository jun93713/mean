import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ProductService} from "../product.service"

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

  constructor(private _productService: ProductService) {
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
    this.product = {
        title: '',
        price: '',
        url: ''
    };
  }
}
