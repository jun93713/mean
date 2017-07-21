import { Subscription } from 'rxjs/Subscription';
import { ProductService} from "../product.service"
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  subscription: Subscription;
  id = null;
  products = null;
  product = null;
  constructor(private _productService: ProductService,
              private _route: ActivatedRoute,
              private _router: Router) {
      this._route.params.subscribe((param)=>{
        this.id = param.id;
      });
      this.subscription = this._productService.subject.subscribe(
          (products) => {this.product = products[this.id]; this.products = products},
          (err) => {},
          () => {}
      );

  }

  ngOnInit() {
  }

  edit(){
      this.products[this.id] = this.product;
      this._productService.updateProducts(this.products);
      this._router.navigate(['/product']);
  }
}
