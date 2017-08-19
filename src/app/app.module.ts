import { BrowserModule } from '@angular/platform-browser';//浏览器模块
import { NgModule } from '@angular/core';
import {HashLocationStrategy,LocationStrategy} from '@angular/common';

import { Router } from '@angular/router';//路由模块
import { FormsModule }    from '@angular/forms';//表单模块
import {HttpClientModule} from '@angular/common/http';//http模块
import { HttpModule }    from '@angular/http';

import {TipsService} from './globalServices/tips.service';//小提数服务
import {UtilService} from './globalServices/util.service';//工具
import {LoginService} from './globalServices/login.service';//登录

import { AppRoutingModule } from './app-routing.module';
import {LoginRoutingModule} from './loginRegist/login-routing.module';//登录路由

import { AppComponent } from './app.component';
import {LoginComponent} from './loginRegist/login.component'
import {RegistComponent} from './loginRegist/regist.component'

import {FeedButtonDirective} from './directive/feed-button.directive';//交互按钮指令

@NgModule({
  declarations: [//声明要用到的模块
    AppComponent,
    LoginComponent,
    RegistComponent,
    FeedButtonDirective,
  ],
  imports: [//引入的模块
    BrowserModule,
    AppRoutingModule,
    LoginRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [
    {
      provide:LocationStrategy,
      useClass:HashLocationStrategy
    },
    TipsService,//小提示
    UtilService,//工具
    LoginService
  ],//服务
  bootstrap: [AppComponent]//引导模块
})
export class AppModule { }
