import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  loginLinks: NavLink[] = [
    {
      title: 'Home',
      actionFunc: () => {},
      url: ''
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
      actionFunc: () => {},
      url: '/home'
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
      actionFunc: () => {},
      url: '/about'
    }
  ];

  nav = [];

  count = null;

  constructor( private productService: ProductService ) {
    this.nav = this.notLoginLinks;
  }


  login( ) {
    this.nav = this.loginLinks;
  }
}


class NavLink {
  title: string;
  actionFunc: Function;
  url?: string
}