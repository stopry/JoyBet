import {Component,OnInit} from '@angular/core';

import {VoteIndexComponent} from '../globalComponent/vote-index.component';//投票指数组件
import {VoteListComponent} from '../globalComponent/vote-list.component';//投票列表组件

@Component({
  selector:'main-root',
  templateUrl:'./main.component.html'
})

export class MainComponent implements OnInit{
  constructor(

  ){};
  elHeight:string;//主界面高度
  ngOnInit(){
    this.elHeight = window.innerHeight+'px';
  }
}
