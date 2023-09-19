import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgParent = 'https://www.w3schools.com/howto/img_avatar.png';
  
  showImg = true;
  toggleImg(){
    this.showImg = !this.showImg;
  }
  onLoaded(img: string){
    console.log('log padre', img)
  }
}
