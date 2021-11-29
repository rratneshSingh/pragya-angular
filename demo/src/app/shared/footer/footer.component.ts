import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  count = null;

  constructor( private productService: ProductService ) {
   this.count = productService.count;
  }

  getCount(){
     this.count = this.productService.count;
  }

  setCount( event ) {
    this.productService.count = event.target.value;
  }
}
