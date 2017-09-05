export class VoteList{
  voteNow(){//正在投票
    const datas = [
      {
        result:0,//0投绿 1投红
        type:'聚丙烯',
        session:'11:26:00-11:26:59',//场次
        jewelNum:"50",//砖石数量
        score:'50',//战绩
        nowIndex:'---',//实时指数
        countDown:'59',//游戏倒数
      },
      {
        result:1,//0投绿 1投红
        type:'白银',
        session:'11:26:00-11:26:59',//场次
        jewelNum:"500",//砖石数量
        score:'500',//战绩
        nowIndex:'---',//实时指数
        countDown:'59',//游戏倒数
      },
      {
        result:1,//0投绿 1投红
        type:'石油',
        session:'11:26:00-11:26:59',//场次
        jewelNum:"500",//砖石数量
        score:'500',//战绩
        nowIndex:'---',//实时指数
        countDown:'59',//游戏倒数
      }
    ];
    return datas;
  }
  voteHistory(){
    let datas = [
      {
        result:0,//0失败 1胜利
        type:'恒生指数',
        session:'11:26:00-11:26:59',//场次
        jewelNum:"50",//砖石数量
        score:'-50',//战绩
        time:'2017-08-21 11:52:20',//投票时间
        change:'20127.11->20110.5',//指数变化
      },
      {
        result:1,//0失败 1胜利
        type:'芳烃',
        session:'11:26:00-11:26:59',//场次
        jewelNum:"500",//砖石数量
        score:'500',//战绩
        time:'2017-08-21 11:52:20',//投票时间
        change:'20127.11->20110.5',//指数变化
      },
      {
        result:1,//0失败 1胜利
        type:'聚丙烯',
        session:'11:26:00-11:26:59',//场次
        jewelNum:"500",//砖石数量
        score:'500',//战绩
        time:'2017-08-21 11:52:20',//投票时间
        change:'20127.11->20110.5',//指数变化
      }
    ];
    return datas;
  }
}
