import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ProductService } from "./product.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  products = [{
    title:'meow',
    price: 500,
    url:'https://i.redd.it/qh713wbo4r8y.jpg'
  },
  {
    title: 'woof',
    price: 500,
    url: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/pembroke-welsh-corgi-dog-breed-pictures/prance-8.jpg'
  }];

  constructor(private _productService: ProductService) {
      this._productService.subject.next(this.products);
  }




}
