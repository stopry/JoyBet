import {Component,OnInit} from '@angular/core';

//投票列表服务
import {VoteListService} from "../globalServices/vote-list.service";

@Component({
  selector:'vote-list',
  templateUrl:'./vote-list.component.html'
})

export class VoteListComponent implements OnInit{
  constructor(
    private voteList:VoteListService
  ){}
  public listType:number = 1;//列表类型-当前投票单
  changeType(type:number){
    this.listType = type;
  }
  ngOnInit(){
    this.voteList.getVoteHistoryDatas().subscribe(()=>{
      console.log(this.voteList.historyDatas);
    })
  }
}
