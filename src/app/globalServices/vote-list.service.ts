import {Injectable} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import {VoteList} from '../datas/vote-list';//正在投票列表和历史投票模拟数据

@Injectable()

export class VoteListService{
  constructor(

  ){}

  historyDatas:any;//历史投票数据
  nowDatas:any;//现在投票数据

  //得到历史投票数据
  getVoteHistoryDatas():Observable<any>{
    return Observable.of(new VoteList().voteHistory()).delay(500).do(
      val=>this.historyDatas = new VoteList().voteHistory()
    );
  };
  //得到现在投票数据
  /**
   @Observable<any> 任意类型的可观察对象
   */
  getVoteNowDatas():Observable<any>{
    return Observable.of(new VoteList().voteNow()).delay(500).do(
      val=>this.nowDatas = new VoteList().voteNow()
    );
  };
}
