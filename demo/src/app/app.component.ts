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
