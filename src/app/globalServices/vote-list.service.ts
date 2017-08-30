import {Injectable} from '@angular/core';
//import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import {VoteList} from '../datas/vote-list';//正在投票列表和历史投票模拟数据

@Injectable()

export class VoteListService{
  constructor(

  ){}

  getVoteNowDatas(){//得到正在投票的数据

  };

  historyDatas:any;

  getVoteHistoryDatas():Observable<any>{//得到历史投票数据

    return Observable.of(new VoteList().voteHistory()).delay(500).do(
      val=>this.historyDatas = new VoteList().voteHistory()
    );
  }
}
