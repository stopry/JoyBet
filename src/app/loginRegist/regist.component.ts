import {Component,OnInit} from '@angular/core';

@Component({
  selector:'regist-root',
  templateUrl:'./regist.component.html'
})

export class RegistComponent implements OnInit{

  private elHeight:string;//窗口高度

  constructor(

  ){}

  ngOnInit(){
    this.elHeight = window.innerHeight+'px';
  }
}
