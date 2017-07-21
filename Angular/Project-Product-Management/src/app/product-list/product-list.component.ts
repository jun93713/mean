import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ProductService} from "../product.service"


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  subscription: Subscription;
  products = [];

  constructor(private _productService: ProductService) {
    this.subscription = this._productService.subject.subscribe(
        (products) => {this.products = products},
        (err) => {},
        () => {}
    )
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  remove(i){
    this.products.splice(i, 1);
    this._productService.updateProducts(this.products)
  }
}
