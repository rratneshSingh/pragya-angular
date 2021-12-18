import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = [];

  constructor( private productService: ProductService ) {
    productService.getProducts().subscribe( ( result: any[] ) => {
      this.products = result.slice( 0, 4 );
    } );
  }

  ngOnInit(): void {
  }

}
