import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router'

import {TipsService} from "../globalServices/tips.service";
import {UtilService} from "../globalServices/util.service";
import {LoginService} from "../globalServices/login.service";


@Component({
  selector:'log-in',
  templateUrl:'./login.component.html'
})

export class LoginComponent implements OnInit{
  constructor(
    private tips:TipsService,
    private router:Router,
    private util:UtilService,
    private toLogIn:LoginService
  ){

  }

  public loginData = {
    mobile:'',
    passworld:''
  };

  elHeight:string;//logIn容器的高度

  showTips(msg:string){
    this.tips._alert(msg);
  }
  private hero;
  logIn(){
    if(!this.util.regExp().mobileNum.test(this.loginData.mobile)){
      this.toLogIn.logIn();
      console.log(this.toLogIn.logIn.then(hero => this.hero = hero))
      this.showTips('请输入正确手机号');
      return;
    }else if(!this.loginData.passworld){
      this.showTips('请输入密码');
      return;
    }else if(this.loginData.passworld.length<6||this.loginData.passworld.length>18){
      this.showTips('密码长度为6-18位');
      return;
    }else{
      this.showTips('登录成功');
      this.toLogIn.logIn();
      //this.router.navigate(['/main'])
    }

  }
  ngOnInit(){

    this.elHeight = window.innerHeight+'px'
  }

}
