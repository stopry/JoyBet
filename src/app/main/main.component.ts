import {Component,OnInit,ViewChild,AfterViewInit} from '@angular/core';

import {VoteIndexComponent} from '../globalComponent/vote-index.component';//投票指数组件
import {VoteListComponent} from '../globalComponent/vote-list.component';//投票列表组件

@Component({
  selector:'main-root',
  templateUrl:'./main.component.html'
})

export class MainComponent implements OnInit,AfterViewInit{
  //访问子组件
  @ViewChild(VoteIndexComponent)
  private voteIndex:VoteIndexComponent;

  constructor(

  ){};
  public elHeight:string;//主界面高度

  //大按钮index
  public tableIndex = [
    {
      index:1,
      isActive:true,
    },
    {
      index:2,
      isActive:true,
    },
    {
      index:3,
      isActive:false,
    }
  ];
  public currentIndex = 1;

  changeChartData(type:number){
    if(this.tableIndex[type-1].isActive==false) return;
    this.currentIndex=type;
    this.voteIndex.currentIndex = type;
    this.voteIndex.changeChartData(type);
  }

  ngOnInit(){
    this.elHeight = window.innerHeight+'px';
  }

  ngAfterViewInit(){

  }
}
