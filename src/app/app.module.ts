import { BrowserModule } from '@angular/platform-browser';//浏览器模块
import { NgModule } from '@angular/core';

import { Router } from '@angular/router';
import { FormsModule }    from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {LoginComponent} from './loginRegist/login.component'
import {RegistComponent} from './loginRegist/regist.component'

@NgModule({
  declarations: [//声明要用到的模块
    AppComponent,
    LoginComponent,
    RegistComponent
  ],
  imports: [//引入的模块
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],//服务
  bootstrap: [AppComponent]//引导模块
})
export class AppModule { }
