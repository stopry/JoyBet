import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router'

import { AuthService } from '../globalServices/auth.service';

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
    public router:Router,
    private util:UtilService,
    private toLogIn:LoginService,
    public authService:AuthService
  ){

  }

  public loginData = {
    mobile:'13855418476',
    passworld:'123456'
  };

  elHeight:string;//logIn容器的高度

  showTips(msg:string){
    this.tips._alert(msg);
  }
  private hero;
  logIn(){
    if(!this.util.regExp().mobileNum.test(this.loginData.mobile)){
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

      //发布时打开
      //this.toLogIn.logIn().then((data) => {
      //    console.log(data)
      //});

      //以下为模拟登陆
      this.authService.login().subscribe(() => {
        if (this.authService.isLoggedIn) {
          let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/main';
          this.router.navigate([redirect]);
        }
      });
    }
  }
  logout() {//退出登录
    this.authService.logout();
  }
  ngOnInit(){
    this.elHeight = window.innerHeight+'px'
  }

}
