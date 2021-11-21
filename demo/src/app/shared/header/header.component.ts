import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
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

  constructor() {
    this.nav = this.notLoginLinks;
  }

  login( ) {
    this.nav = this.loginLinks;
  }
}


class NavLink {
  title: string;
  actionFunc: Function
}