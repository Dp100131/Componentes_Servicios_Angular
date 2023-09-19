import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{
  stringImg: string = '';
  @Input('stringImg') set changeImg(newImg: string){
    this.stringImg = newImg;
    console.log('Cambio la imagen')
  };
  @Output() loaded = new EventEmitter<string>();
  imgDefault: string = '../../../assets/images/default.png';
  /* counter = 0;
  counterFn: number | undefined; */
  constructor(){
    //before render
    // NO async -- once time
    console.log('Constructor', 'imgValue =>', this.stringImg);
  }
  ngOnInit(): void {
    // before render
    // asyn - fetch -- once time
    console.log('ngOnInit', 'imgValue =>', this.stringImg);
    /* this.counterFn = window.setInterval(() => {
      this.counter++;
      console.log('run counter')
    }, 1000) */

  }
  ngOnChanges(changes: SimpleChanges): void {
      //before - during render
      // changes inputs -> times
      console.log('ngOnChanges', 'imgValue =>', this.stringImg);
      console.log(changes)
  }
  ngAfterViewInit(): void {
    // After render
    // Handler children
    console.log('ngAfterViewInit', 'imgValue =>', this.stringImg);
  }
  ngOnDestroy(): void {
    //delete
    console.log('ngOnDestroy', 'imgValue =>', this.stringImg);
    /* window.clearInterval(this.counterFn); */
  }
  imgError(){
    this.stringImg = this.imgDefault;
  }
  loadImg(){
    console.log('log hijo');
    this.loaded.emit(this.stringImg);
  }
}
