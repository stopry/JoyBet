//投票指数组件
import {Component,ViewChild,OnInit,AfterViewInit} from "@angular/core";

import {EChartOption,ECharts} from 'echarts-ng2';


import {KDatas} from '../datas/k-datas.component';//k线图数据
import {FDatas} from '../datas/f-datas.component';//分时图数据

import {ChangeChartTypeService} from '../globalServices/change-chart-type.service';
import {TipsService} from "../globalServices/tips.service";
//切换图表

@Component({
  selector:'vote-index',
  templateUrl:'vote-index.component.html'
})

export class VoteIndexComponent implements OnInit,AfterViewInit{

  @ViewChild('myEcharts')  echarts: ECharts;

  constructor(
    private tips:TipsService
  ){
    this.countDown();
  };

  //倒计时
  public countNum = 59;//倒计时初始值
  countDown(){
    let down = setInterval(()=>{
      this.countNum--;
      if(this.countNum<=-1){
        clearInterval(down);
        this.countNum=59;
        if(this.isShowVoteWrap){
          this.closeVoteWrap();
          this.tips._alert('本轮已结束');
        }
        this.countDown()
      }
    },1000)
  }

  //默认选中的钻石数量
  private jewelNum = 50;
  public selType = 1;//钻石类型

  public inputJewelNum:any;//弹出框输入的钻石

  public Ctype:ChangeChartTypeService = new ChangeChartTypeService();

  public chartType:number = 1;//k线图

  isShowIptJewel:boolean = false;//是否显示钻石输入框
  isShowVoteWrap:boolean = false;//是否显示钻石输入框

  voteType:number;//投票类型-》1红 2绿


  voteData={//投票数据
    type:'芳烃',//游戏类型
    index:'252',//最新指数
    selType:'1',//所选正营1红2绿
    jewelNums:50,//投票钻石
    cycel:'17:24:00~17:25:00',//所选周期
    chit:false//是否使用代金券
  };

  //选择代金券
  public selChit():void{
    this.voteData.chit=!this.voteData.chit
  }

  closeVoteWrap(){
    this.isShowVoteWrap = false;
    this.tips.hideLayer();
  }

  openVoteWrap(type:string){
    this.voteData.chit = false;
    this.voteData.selType = type;
    this.tips.showLayer();
    this.isShowVoteWrap = true;
  }

  public currentIndex = 1;
  //k线图数据
   kRawData = new KDatas().createDb();
  //分时图数据
   fRawData = new FDatas().createDb();

  //图标配置
  public option:any;
  public changeToKLine(){//切换到k线图
    this.option = this.Ctype.kOption(this.kRawData.dates,this.kRawData.data);
    this.chartType = 1;
    this.initChart();
  }

  public changeToFLine(){//切换到分时图
    this.option = this.Ctype.fOption(this.fRawData.date,this.fRawData.data,this.echarts);
    this.chartType = 2;
    this.initChart();
  }
  //绘制图表
  public initChart(){
    this.echarts.showLoading();
    this.echarts.setOption(this.option,true);
    this.echarts.hideLoading();
  }
  ngOnInit(){

  }
  selJewel(num:number,type:number){//选择钻石
    this.voteData.jewelNums = num
    this.jewelNum = num;
    this.selType = type;
  }

  //打开输入砖石框
  openSelJewel(){
    this.tips.showLayer();
    this.isShowIptJewel = true;
  }

  //关闭输入砖石框
  closeSelJewel(){
    this.tips.hideLayer();
    this.isShowIptJewel = false;
  }

  //确认输入砖石
  confirmInputJewel(){
    if(typeof parseInt(this.inputJewelNum)!="number"){
      this.tips._alert('请输入正确数量');
      return;
    }else if(parseInt(this.inputJewelNum)>500||parseInt(this.inputJewelNum)<50){
      this.tips._alert('请输入50-500范围内数量');
      return;
    }else{
      this.voteData.jewelNums = parseInt(this.inputJewelNum);
      this.jewelNum = parseInt(this.inputJewelNum);
      this.selType = 4;
      this.closeSelJewel();
    }
  }

  //图标数据切换,点击大按钮
  changeChartData(type:number){
    this.initChart();
    console.log(this.currentIndex)
    if(this.currentIndex==1){
      this.voteData.type='芳烃'
    }else if(this.currentIndex==2){
      this.voteData.type='原油'
    }
  }

  ngAfterViewInit(){
    this.changeToKLine();
  }

}
