import {Component,OnInit} from '@angular/core';

@Component({
  selector:'log-in',
  templateUrl:'./login.component.html'
})

export class LoginComponent implements OnInit{
  constructor(){

  }
  elHeight:string;//logIn容器的高度
  ngOnInit(){
    this.elHeight = window.innerHeight+'px'
  }

}
