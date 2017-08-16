import {Component,OnInit} from '@angular/core';

@Component({
  selector:'vote-list',
  templateUrl:'./vote-list.component.html'
})

export class VoteListComponent implements OnInit{
  constructor(){}
  public listType:number = 1;//列表类型-当前投票单
  changeType(type:number){
    this.listType = type;
  }
  ngOnInit(){

  }
}
