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
    if(type==1) this.getVoteNowDatas();
    if(type==2) this.getVoteHistoryDatas();
  }

  //列表数据
  public historyDatas:any;//历史投票数据
  public nowDatas:any;//现在投票数据

  //得到历史投票数据
  public getVoteHistoryDatas(){
    this.voteList.getVoteHistoryDatas().subscribe((res)=>{
      this.historyDatas = res;
    });
  }
  //得到现在投票数据
  public getVoteNowDatas(){
    this.voteList.getVoteNowDatas().subscribe((res)=>{
      this.nowDatas = res;
    })
  }

  ngOnInit(){
    this.getVoteNowDatas();
  }
}
