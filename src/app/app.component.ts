import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images: any[];
  title = 'app';
  
constructor(){
  this.images = [];
  this.images.push({source:'https://primefaces.org/primeng/assets/showcase/images/logo.png', alt:'Description for Image 1', title:'Title 1'});
  this.images.push({source:'https://primefaces.org/primeng/assets/showcase/images/logo.png', alt:'Description for Image 2', title:'Title 2'});
  this.images.push({source:'https://primefaces.org/primeng/assets/showcase/images/logo.png', alt:'Description for Image 3', title:'Title 3'});
}
}
