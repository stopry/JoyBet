//投票指数组件
import {Component,ViewChild,OnInit,AfterViewInit} from "@angular/core";
import {EChartOption,ECharts} from 'echarts-ng2';
import {KDatas} from '../datas/k-datas.component';//k线图数据
import {FDatas} from '../datas/f-datas.component';//分时图数据
import {ChangeChartTypeService} from '../globalServices/change-chart-type.service';//切换图表

@Component({
  selector:'vote-index',
  templateUrl:'vote-index.component.html'
})

export class VoteIndexComponent implements OnInit,AfterViewInit{

  @ViewChild('myEcharts')  echarts: ECharts;

  constructor(

  ){};

  //默认选中的钻石数量
  private jewelNum = 50;
  private selType = 1;


  public Ctype:ChangeChartTypeService = new ChangeChartTypeService();

  private chartType:number = 1;//k线图

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
    this.jewelNum = num;
    this.selType = type;
  }
  ngAfterViewInit(){
    this.changeToKLine();
    console.log(this.echarts);
  }

}
