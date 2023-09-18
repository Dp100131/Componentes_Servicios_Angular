import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent {
  @Input() stringImg: string = "init value";
  @Output() loaded = new EventEmitter<string>();
  imgDefault: string = '../../../assets/images/default.png';
  imgError(){
    this.stringImg = this.imgDefault;
  }
  loadImg(){
    console.log('log hijo');
    this.loaded.emit(this.stringImg);
  }
}
