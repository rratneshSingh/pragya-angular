import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Hello World!!';

  red = 51;
  blue = 96;
  green = 156;
  color = null;

  active = false;
  italic = false;
  urls = [ 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ZgKry_t5w4ijJS3RM0FZ46fqKFf66SlNWg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-_wX2kxYjnUEr5P-qk6c1oJN_nxYHKY1Skw&usqp=CAU'
  ];

 url = this.urls[0];

  changeColor() {
    var h1 = document.getElementById('myHeading');
    h1.style.color = 'red';
  }

  // ngAfterViewInit() {
  //   this.changeColor();
  // }

  constructor() {
    setInterval( () => {
      this.red = this.red + 5;
      this.blue = this.blue + 5;
      this.green += 5;
      this.color = 'rgb(' + ( this.red + 5 )  + ',' + ( this.blue + 5 ) + ',' + ( this.green + 5 ) + ')';
    }, 1000); 
  }
}
