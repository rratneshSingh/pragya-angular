import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ ProductService ]
})
export class HeaderComponent {

  loginLinks: NavLink[] = [
    {
      title: 'Home',
      actionFunc: () => {}
    },
    {
      title: 'Profile',
      actionFunc: () => {}
    },
    {
      title: 'Dashboard',
      actionFunc: () => {}
    },
    {
      title: 'Logout',
      actionFunc: () => {}
    }
  ];
  notLoginLinks: NavLink[] = [
    {
      title: 'Home',
      actionFunc: () => {}
    },
    {
      title: 'Login',
      actionFunc: this.login.bind( this )
    },
    {
      title: 'Contact Us',
      actionFunc: () => {}
    },
    {
      title: 'About Us',
      actionFunc: () => {}
    }
  ];

  nav = [];

  count = null;

  constructor( private productService: ProductService ) {
    this.nav = this.notLoginLinks;
    this.count = productService.count;
  }

  getCount(){
    this.count = this.productService.count;
 }

 setCount( event ) {
   this.productService.count = event.target.value;
 }

  login( ) {
    this.nav = this.loginLinks;
  }

  
}


class NavLink {
  title: string;
  actionFunc: Function
}