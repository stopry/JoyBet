import {Component,OnInit} from '@angular/core';
import {UtilService} from "../globalServices/util.service";
import {TipsService} from "../globalServices/tips.service";

@Component({
  selector:'regist-root',
  templateUrl:'./regist.component.html'
})

export class RegistComponent implements OnInit{

  public elHeight:string;//窗口高度

  constructor(
    private tips:TipsService,//全局小提示
    private util:UtilService//工具服务
  ){}

  //注册第一步数据绑定
  public registData = {
    mobile:null,//手机号码
    inviteCode:null,//邀请码
  };
  //去下一步
  toNext(){
    if(!this.util.regExp().mobileNum.test(this.registData.mobile)){
      this.tips._alert('请输入正确手机号码');
      return false;
    }else if(!this.registData.inviteCode){
      this.tips._alert('请输入邀请码')
    }else{
      this.tips._alert('提交成功');
    }
  }

  ngOnInit(){
    this.elHeight = window.innerHeight+'px';
  }
}
